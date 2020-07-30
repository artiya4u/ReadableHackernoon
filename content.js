const hackernoonBaseUrl = ["https://hackernoon.com/", "https://www.hackernoon.com/"];

let makeReadable = function () {
  setTimeout(function () {
    let currentURL = window.location.href;
    if (hackernoonBaseUrl.indexOf(currentURL) < 0) { // Is article url.
      let header = document.querySelector('header');
      if (header) {
        header.parentNode.removeChild(header);
      }
    }
    makeReadable();
  }, 1000);
};

makeReadable();
