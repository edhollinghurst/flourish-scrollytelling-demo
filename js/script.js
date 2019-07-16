import 'intersection-observer';
import { initScroller } from './scroller';

const scrollytellEl = document.querySelector('#scrollytell');
const steps = scrollytellEl.querySelectorAll('span');
const stepsArr = Array.from(steps);

const storyId = scrollytellEl.getAttribute('data-story-id');

const html = `<style>#scrollytell{position:relative}#scrollytell .scrollama-steps{position:relative;padding:0;max-width:20rem;margin:0 auto;pointer-events:none}#scrollytell .flourish-container{position:-webkit-sticky;position:sticky;left:0;width:100%;margin:0;transform:translate3d(0,0,0)}#scrollytell .step{margin:0 auto 2rem auto;color:#111}#scrollytell .step:last-child{margin-bottom:0}#scrollytell .step p{background-color:#f9f9f9;font-size:1rem;padding:.75rem;text-align:center}@media only screen and (min-width:601px){#scrollytell .step p{font-size:1.5rem;padding:1rem}}#scrollytell.touch-device .scrollama-steps{pointer-events:auto}#scrollytell.touch-device .flourish-container iframe{pointer-events:none}</style><div class="flourish-container"></div><div class="scrollama-steps">${stepsArr
  .map((step) => `<div class="step"><p>${step.innerHTML}</p></div>`)
  .join('')}</div>`;

scrollytellEl.innerHTML = html;

initScroller(storyId);

if ('ontouchstart' in document.documentElement) {
  scrollytellEl.classList.add('touch-device');
}
