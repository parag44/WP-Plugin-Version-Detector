chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, "getPlugins", (response) => {
    const list = document.getElementById("plugin-list");
    const wpVersion = response.wordpressVersion;

    if (!response || response.plugins.length === 0) {
      list.innerHTML = "<li>No plugins found.</li>";
    } else {
      const wpVersionElement = document.createElement("h2");
      wpVersionElement.textContent = `WordPress Version: ${wpVersion || "Not Detected"}`;
      list.parentNode.insertBefore(wpVersionElement, list);
    }

    response.plugins.forEach(([plugin, version]) => {
      const li = document.createElement("li");
      li.textContent = `${plugin} - v${version}`;
      list.appendChild(li);
    });
  });
});
