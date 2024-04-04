document.addEventListener("DOMContentLoaded", function () {
  //   // creating functionality for copying the tweet
  document.getElementById("copyButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var pageTitle = tabs[0].title;
      copyToClipboard(pageTitle);
      alert("Page title copied to clipboard: " + pageTitle);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var parentElement = document.querySelector(
      '[data-testid="tweetButtonInline"]'
    ).parentNode;
    alert("staring");

    var newButton = document.createElement("button");
    alert("intermediate");
    newButton.textContent = "New Button";

    parentElement.insertBefore(newButton, parentElement.firstChild);
    alert("done");
  });

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log("Copied to clipboard:", text))
      .catch((err) => console.error("Failed to copy to clipboard:", err));
  }
});
