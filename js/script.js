import 'intersection-observer';
import { initScroller } from './scroller';

const scrollytellEl = document.querySelector('#scrollytell');
const steps = scrollytellEl.querySelectorAll('span');
const stepsArr = Array.from(steps);

const storyId = scrollytellEl.getAttribute('data-story-id');

const html = `<div class="scrolly-tell-container">
<style>
  .scrolly-tell-container #scrolly {
    position: relative;
  }
  .scrolly-tell-container .scrollama-steps {
    position: relative;
    padding: 0;
    max-width: 20rem;
    margin: 0 auto;
    pointer-events: none;
  }
  .scrolly-tell-container .flourish-container {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    width: 100%;
    margin: 0;
    transform: translate3d(0, 0, 0);
  }
  .scrolly-tell-container .step {
    margin: 0 auto 2rem auto;
    color: #111111;
  }
  .scrolly-tell-container .step:last-child {
    margin-bottom: 0;
  }
  .scrolly-tell-container .step p {
    background-color: #f9f9f9;
    font-size: 1rem;
    padding: 0.75rem;
    text-align: center;
  }
  @media only screen and (min-width: 601px) {
    .scrolly-tell-container .step p {
      font-size: 1.5rem;
      padding: 1rem;
    }
  }
  .touch-device .scrolly-tell-container .scrollama-steps {
    pointer-events: auto;
  }
  .touch-device .scrolly-tell-container .flourish-embed iframe {
    pointer-events: none;
  }
</style>
<section id="scrolly">
  <div class="flourish-container">
    <div class="flourish-embed"></div>
  </div>
  <div class="scrollama-steps">
    ${stepsArr
      .map((step) => `<div class="step"><p>${step.innerHTML}</p></div>`)
      .join('')}
  </div>
</section>
</div>`;

scrollytellEl.innerHTML = html;

initScroller(storyId);

if ('ontouchstart' in document.documentElement) {
  scrollytellEl.classList.add('touch-device');
}
