(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-edit-base-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/edit.header.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/edit.header.js ***!
  \*************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var SCROLL_POSITION_TO_FIT = 50;
  var MIN_HEIGHT_DIFF_FOR_FITTING_HEADER = 150;
  var headerNode = doc.querySelector('.ibexa-edit-header');
  var contentNode = doc.querySelector('.ibexa-edit-content');

  if (!headerNode || !contentNode) {
    return;
  }

  var _headerNode$getBoundi = headerNode.getBoundingClientRect(),
      expandedHeaderHeight = _headerNode$getBoundi.height;

  var scrolledContent = doc.querySelector('.ibexa-edit-content > :first-child');

  var fitHeader = function fitHeader(event) {
    var _scrolledContent$getB = scrolledContent.getBoundingClientRect(),
        formHeight = _scrolledContent$getB.height;

    var contentHeightWithExpandedHeader = formHeight + expandedHeaderHeight;
    var heightDiffBetweenWindowAndContent = contentHeightWithExpandedHeader - global.innerHeight;

    if (heightDiffBetweenWindowAndContent < MIN_HEIGHT_DIFF_FOR_FITTING_HEADER) {
      return;
    }

    var scrollTop = event.currentTarget.scrollTop;
    var shouldHeaderBeSlim = scrollTop > SCROLL_POSITION_TO_FIT;
    headerNode.classList.toggle('ibexa-edit-header--slim', shouldHeaderBeSlim);
  };

  contentNode.addEventListener('scroll', fitHeader, false);
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/edit.header.js"));
/******/ }
]);