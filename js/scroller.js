import * as d3 from 'd3';
import scrollama from 'scrollama';
import Stickyfill from 'stickyfilljs';
import { createFlourishStory } from './flourish-embed';

let CURRENT_STEP = 0;

const initScroller = () => {
  // using d3 for convenience
  var main = d3.select('.scrolly-tell-container');
  var scrolly = main.select('#scrolly');
  var figure = scrolly.select('figure');
  var article = scrolly.select('article');
  var step = article.selectAll('.step');

  // initialize the scrollama
  var scroller = scrollama();

  // generic window resize listener event
  function handleResize() {
    // 1. update height of step elements
    var stepH = Math.floor(window.innerHeight * 0.75);
    step.style('height', stepH + 'px');

    var figureHeight = window.innerHeight;
    // var figureMarginTop = (window.innerHeight - figureHeight) / 2;
    var figureMarginTop = 0;

    figure
      .style('height', figureHeight + 'px')
      .style('top', figureMarginTop + 'px');

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
  }

  // scrollama event handlers
  function handleStepEnter(response) {
    // response = { element, direction, index }

    // add color to current step only
    step.classed('is-active', function(d, i) {
      return i === response.index;
    });

    // update graphic based on step
    // figure.select('p').text(response.index + 1);

    // console.log('response.index', response.index);
    // Update story based on step
    if (response.index !== CURRENT_STEP) {
      createFlourishStory(response.index);
      CURRENT_STEP = response.index;
    }
  }

  function setupStickyfill() {
    d3.selectAll('.sticky').each(function() {
      Stickyfill.add(this);
    });
  }

  function init() {
    setupStickyfill();

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
      .setup({
        step: '#scrolly article .step',
        offset: 1,
        debug: true,
      })
      .onStepEnter(handleStepEnter);

    createFlourishStory(0);

    // setup resize event
    window.addEventListener('resize', handleResize);
  }

  // kick things off
  init();
};

export { initScroller };
