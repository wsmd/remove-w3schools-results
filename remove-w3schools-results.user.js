// ==UserScript==
// @name         remove-w3schools-results
// @version      0.1.1
// @author       Waseem Dahman
// @description  Removes W3Schools links from Google search results
// @homepageURL  https://github.com/wsmd/remove-w3schools-results
// @namespace    https://github.com/wsmd/remove-w3schools-results
// @supportURL   https://github.com/wsmd/remove-w3schools-results/issues
// @updateURL    https://github.com/wsmd/remove-w3schools-results/raw/master/remove-w3schools-results.user.js
// @downloadURL  https://github.com/wsmd/remove-w3schools-results/raw/master/remove-w3schools-results.user.js
// @icon         https://raw.githubusercontent.com/wsmd/remove-w3schools-results/master/icon.png
// @run-at       document-end
// @grant        none
// @include      *://*.google.*/search?*
// ==/UserScript==

(function () {
  'use strict';

  const LINK_SELECTOR =
    'div.g .r a[href*="www.w3schools.com"]';

  const RESULT_SELECTOR =
    'div.g';

  document.querySelectorAll(LINK_SELECTOR).forEach(link => {
    const parentNode = link.closest(RESULT_SELECTOR);
    if (parentNode) {
      parentNode.remove();
    }
  });
})();
