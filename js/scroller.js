import scrollama from 'scrollama';
import { createFlourishStory } from './flourish-embed';

let CURRENT_STEP = 0;

const initScroller = (storyId) => {
  const main = document.querySelector('.scrolly-tell-container');
  const scrolly = main.querySelector('#scrolly');
  const figure = scrolly.querySelector('figure');
  const article = scrolly.querySelector('article');
  const steps = article.querySelectorAll('.step');

  // initialize the scrollama
  const scroller = scrollama();

  // generic window resize listener event
  function handleResize() {
    const stepHeight = Math.floor(window.innerHeight * 0.75);
    for (const step of steps) {
      step.setAttribute('style', `height: ${stepHeight}px;`);
    }

    const figureHeight = window.innerHeight;
    // const figureMarginTop = (window.innerHeight - figureHeight) / 2;
    const figureMarginTop = 0;

    figure.setAttribute(
      'style',
      `height: ${figureHeight}px; top: ${figureMarginTop}px;`
    );

    // 3. tell scrollama to update new element dimensions
    scroller.resize();
  }

  // scrollama event handlers
  function handleStepEnter(response) {
    // Update story based on step
    if (response.index !== CURRENT_STEP) {
      createFlourishStory(storyId, response.index);
      CURRENT_STEP = response.index;
    }
  }

  function init() {
    handleResize(); // force a resize on load to ensure proper dimensions set

    scroller
      .setup({
        step: '#scrolly article .step',
        offset: 0.9,
        debug: false,
      })
      .onStepEnter(handleStepEnter);

    createFlourishStory(storyId, 0);

    // setup resize event
    window.addEventListener('resize', handleResize);
  }

  init();
};

export { initScroller };
