let makeReadable = function () {
  document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" type="text/css" href="' + chrome.runtime.getURL("inject.css") + '">');
};

makeReadable();
