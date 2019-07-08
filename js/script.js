import 'intersection-observer';
import { initScroller } from './scroller';

const scrollyTellingScript = document.querySelector('#scrollytelling-script');
const steps = JSON.parse(scrollyTellingScript.dataset.steps.replace(/'/g, '"'));

const html = `<div class="scrolly-tell-container">
<style>
  .scrolly-tell-container #scrolly {
    position: relative;
  }
  .scrolly-tell-container article {
    position: relative;
    padding: 0;
    max-width: 20rem;
    margin: 0 auto;
    pointer-events: none;
  }
  .scrolly-tell-container figure {
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
    z-index: -1;
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

const sdcArticleBody = document.querySelector('.sdc-article-body');
sdcArticleBody.innerHTML = html;

initScroller();
