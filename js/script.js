import 'intersection-observer';
import { initScroller } from './scroller';

const scrollyTellingScript = document.querySelector('#scrollytelling-script');
const steps = JSON.parse(scrollyTellingScript.dataset.steps.replace(/'/g, '"'));
const scrollytellEl = document.querySelector('#scrollytell');
const storyId = scrollytellEl.getAttribute('data-story-id');

const html = `<div class="scrolly-tell-container">
<style>
  #scrollytell {
    margin-bottom: 1.5rem;
  }
  .scrolly-tell-container #scrolly {
    position: relative;
  }
  .scrolly-tell-container article {
    margin: 0 auto;
    max-width: 20rem;
    padding: 0;
    pointer-events: none;
    position: relative;
  }
  .scrolly-tell-container figure {
    left: 0;
    margin: 0;
    position: sticky;
    transform: translate3d(0, 0, 0);
    width: 100%;
    z-index: -1;
  }
  .scrolly-tell-container .step {
    color: #111111;
    margin: 0 auto 2rem auto;
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
</style>
<section id="scrolly">
  <figure>
    <div class="flourish-embed" />
  </figure>
  <article>
    ${steps
      .map((step, index) =>
        step
          ? `<div class="step" data-step=${index + 1}><p>${step}</p></div>`
          : `<div class="step" data-step=${index + 1}></div>`
      )
      .join('')}
  </article>
</section>
</div>`;

scrollytellEl.innerHTML = html;

initScroller(storyId);
