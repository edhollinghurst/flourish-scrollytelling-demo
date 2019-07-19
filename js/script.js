import 'intersection-observer';
import { initScroller } from './scroller';

const scrollytellEl = document.querySelector('#scrollytell');
const steps = scrollytellEl.querySelectorAll('span');
const stepsArr = Array.from(steps);

const storyId = scrollytellEl.getAttribute('data-story-id');

const html = `<style>#scrollytell .scrollama-steps{position:relative;padding:0;margin:0 auto;pointer-events:none}#scrollytell .flourish-container{position:-webkit-sticky;position:sticky;left:0;width:100%;margin:0;transform:translate3d(0,0,0)}#scrollytell .step{color:#111;margin:0 auto 2rem auto;width:300px}#scrollytell .step:last-child{margin-bottom:0}#scrollytell .step .step-content{background:url(/img/step-bg.png);border-radius:50%;box-shadow:0 0 15px 8px #666;height:300px;position:relative;text-align:center;width:300px}#scrollytell .step .step-content span{box-sizing:border-box;display:block;left:50%;line-height:36px;font-size:18px;padding:27px;position:absolute;top:50%;transform:translate(-50%,-50%);width:300px}@media only screen and (min-width:601px){#scrollytell .step{width:360px}#scrollytell .step .step-content{height:360px;width:360px}#scrollytell .step .step-content span{font-size:24px;padding:36px;width:360px}}#scrollytell.touch-device .scrollama-steps{pointer-events:auto}#scrollytell.touch-device .flourish-container iframe{pointer-events:none}</style><div class="flourish-container"></div><div class="scrollama-steps">${stepsArr
  .map(
    (step) =>
      `<div class="step"><div class="step-content"><span>${
        step.innerHTML
      }</span></div></div>`
  )
  .join('')}</div>`;

scrollytellEl.innerHTML = html;

initScroller(storyId);

if ('ontouchstart' in document.documentElement) {
  scrollytellEl.classList.add('touch-device');
}
