(function () {
  const plugins = new Map();
  let wordpressVersion = null;

  const elements = [...document.querySelectorAll('link[href], script[src]')];

  elements.forEach(el => {
    const url = el.href || el.src;

    // Detect WordPress version from 'ver' query parameter
    if (!wordpressVersion) {
      const wpMatch = url.match(/\/wp-includes\/.*[?&]ver=([\d.]+)/);
      if (wpMatch) {
        wordpressVersion = wpMatch[1];
      }
    }

    // Detect plugins and their versions
    const pluginMatch = url.match(/\/wp-content\/plugins\/([^\/]+)\/.*[?&]ver=([\d.]+)/);
    if (pluginMatch) {
      const [_, plugin, version] = pluginMatch;
      plugins.set(plugin, version);
    }
  });

  // Send to popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === "getPlugins") {
      sendResponse({ plugins: Array.from(plugins.entries()), wordpressVersion });
    }
  });
})();
