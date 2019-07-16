import scrollama from 'scrollama';
import { createFlourishStory } from './flourish-embed';

let CURRENT_STEP = 0;

const initScroller = (storyId) => {
  const main = document.querySelector('.scrolly-tell-container');
  const scrolly = main.querySelector('#scrolly');
  const flourishContainer = scrolly.querySelector('.flourish-container');
  const scrollamaSteps = scrolly.querySelector('.scrollama-steps');
  const steps = scrollamaSteps.querySelectorAll('.step');

  // initialize the scrollama
  const scroller = scrollama();

  function handleResize() {
    const stepHeight = Math.floor(window.innerHeight * 0.75);
    for (const step of steps) {
      step.setAttribute('style', `height: ${stepHeight}px;`);
    }

    const height = window.innerHeight;
    // const marginTop = (window.innerHeight - height) / 2;
    const marginTop = 0;

    flourishContainer.setAttribute(
      'style',
      `height: ${height}px; top: ${marginTop}px;`
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
        step: '#scrolly .scrollama-steps .step',
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
