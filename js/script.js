import { initScroller } from './scroller';
import { createFlourishStory } from './flourish-embed';

const STORY_ID = '52937';

createFlourishStory(`story/${STORY_ID}`);

initScroller();
