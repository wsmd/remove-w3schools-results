// ==UserScript==
// @name         remove-w3schools-results
// @namespace    https://github.com/wsmd/remove-w3schools-results
// @version      0.1.0
// @icon         https://raw.githubusercontent.com/wsmd/remove-w3schools-results/master/icon.png
// @description  Removes W3Schools links from Google search results
// @author       Waseem Dahman
// @run-at       document-end
// @match        https://*.google.com/search?*
// @grant        none
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
