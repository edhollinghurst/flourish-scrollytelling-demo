import 'intersection-observer';
import { initScroller } from './scroller';
export const STORY_ID = '53209';

import '../css/style.css';

const html = `<div class="scrolly-tell-container">
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
