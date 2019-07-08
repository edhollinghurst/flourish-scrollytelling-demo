import 'intersection-observer';
import { initScroller } from './scroller';
export const STORY_ID = '53209';

const html = `<div class="scrolly-tell-container">
<style>
  .scrolly-tell-container {
    margin-bottom: 60px;
  }
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
    background-color: #8a8a8a;
  }
  .scrolly-tell-container figure p {
    text-align: center;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 8rem;
    font-weight: 900;
    color: #fff;
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
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
  }
</style>
<section id="scrolly">
  <figure>
    <div class="flourish-embed" />
  </figure>
  <article>
    <div class="step" data-step="1">
      <p>This square represents the at least 7,131 people who died every day from vaccine preventable by vaccines in 2017</p>
    </div>
    <div class="step" data-step="2">
      <p>Almost two in five of them were children under 5 years old</p>
    </div>
    <div class="step" data-step="3">
      <p>But this is only a day. In the whole 2017 there was around 2.6 million of deaths in the world.</p>
    </div>
    <div class="step" data-step="4">
      <p>Despite the big figure, the number of deaths has halved since 1990, from 5 million to 2.6. the reduction have been especially relevant since 2000, going 39% down.</p>
    </div>
    <div class="step" data-step="5">
    </div>
    <div class="step" data-step="6">
      <p>Measles, tetanus, Hib and rotavirus have also registered big improvements in the last three decades</p>
    </div>
    <div class="step" data-step="7">
      <p>Despite the high figure, this is only the best approximation but it underestimates the real number of deaths htat could be prevented by vaccines</p>
    </div>
  </article>
</section>
</div>`;

const sdcArticleBody = document.querySelector('.sdc-article-body');
sdcArticleBody.innerHTML = html;

initScroller();
