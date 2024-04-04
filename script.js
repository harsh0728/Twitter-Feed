document.addEventListener("DOMContentLoaded", function () {
  // Functionality for copying the page title
  document.getElementById("copyButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var pageTitle = tabs[0].title;
      copyToClipboard(pageTitle);
      alert("Page title copied to clipboard: " + pageTitle);
    });
  });

  // Adding a new button
  var par = document.querySelector(
    '[data-testid="tweetButtonInline"]'
  ).parentNode;
  par.insertAdjacentHTML("beforeend", "<button>New Button</button>");

  // Inserting custom text into the textarea
  var textarea = document.querySelector('[data-testid="tweetTextarea_0"]');
  if (textarea) {
    var customText = pageTitle || "Your custom text here.";
    var textNode = document.createTextNode(customText);
    textarea.appendChild(textNode);
  }

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Copied to clipboard:", text))
      .catch((err) => console.error("Failed to copy to clipboard:", err));
  }
});
