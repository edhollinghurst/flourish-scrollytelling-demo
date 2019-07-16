const BASE_URL = 'https://public.flourish.studio/';
const scrollytellEl = document.querySelector('#scrollytell');

function getWindowHeight() {
  return window.innerHeight;
}

function isSafari() {
  return (
    (-1 !== navigator.userAgent.indexOf('Safari') ||
      -1 !== navigator.userAgent.indexOf('iPhone')) &&
    -1 == navigator.userAgent.indexOf('Chrome')
  );
}

const createFlourishStory = (storyId, slide = null) => {
  const flourishEmbed = document.querySelector('.flourish-embed');
  const existingIframe = flourishEmbed.querySelector('iframe');
  if (existingIframe && existingIframe.src.includes(`story/${storyId}`)) {
    const embedUrl = `${BASE_URL}story/${storyId}/embed${
      slide ? `#slide-${slide}` : '#slide-0'
    }`;

    existingIframe.src = embedUrl;
    return;
  }

  const embedUrl = `${BASE_URL}story/${storyId}/embed${
    slide ? `#slide-${slide}` : '#slide-0'
  }`;

  let chartWidth = flourishEmbed.getAttribute('data-width');
  let chartHeight = flourishEmbed.getAttribute('data-height');

  if (!chartHeight) {
    chartHeight = getWindowHeight() + 'px';
  }

  const iframe = document.createElement('iframe');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('src', embedUrl);

  flourishEmbed.appendChild(iframe);

  chartWidth
    ? (iframe.style.width = chartWidth)
    : isSafari()
    ? (iframe.style.width = flourishEmbed.offsetWidth + 'px')
    : (iframe.style.width = '100%');

  chartHeight &&
    ('%' === chartHeight.charAt(chartHeight.length - 1) &&
      (chartHeight =
        (parseFloat(chartHeight) / 100) *
          flourishEmbed.parentNode.offsetHeight +
        'px'),
    (iframe.style.height = chartHeight));
};

export { createFlourishStory };
