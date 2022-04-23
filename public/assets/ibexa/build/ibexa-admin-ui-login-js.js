(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-login-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var clearText = function clearText(event) {
    var inputWrapper = event.target.closest('.ibexa-input-text-wrapper');
    var textInput = inputWrapper.querySelector('.ibexa-input--text');
    textInput.value = '';
    textInput.dispatchEvent(new Event('input'));

    if (!textInput.readOnly) {
      textInput.select();
    }
  };

  var attachListenersToAllInputs = function attachListenersToAllInputs() {
    var textInputClearBtns = doc.querySelectorAll('.ibexa-input-text-wrapper__action-btn--clear');
    textInputClearBtns.forEach(function (clearBtn) {
      return clearBtn.addEventListener('click', clearText, false);
    });
  };

  doc.body.addEventListener('ibexa-inputs:added', attachListenersToAllInputs, false);
  attachListenersToAllInputs();
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js ***!
  \*******************************************************************************/
/***/ (() => {

(function (global, doc) {
  var AUTOFILL_TIMEOUT = 500;
  var passwordInputNode = doc.querySelector('.ibexa-login__input--password');
  var viewIconNode = doc.querySelector('.ibexa-login__password-visibility-toggler .ibexa-icon--view');
  var viewHideIconNode = doc.querySelector('.ibexa-login__password-visibility-toggler .ibexa-icon--view-hide');
  var loginBtn = doc.querySelector('.ibexa-login__btn--sign-in');
  var nameInput = doc.querySelector('.ibexa-login__input--name');
  var passwordInput = doc.querySelector('.ibexa-login__input--password');

  var toggleLoginBtnState = function toggleLoginBtnState() {
    var shouldBeDisabled = !nameInput.value || !passwordInput.value;
    loginBtn.toggleAttribute('disabled', shouldBeDisabled);
  };

  var handleAutofill = function handleAutofill() {
    var isNameInputAutofilled = nameInput.matches(':-webkit-autofill');
    var isPasswordInputAutofilled = nameInput.matches(':-webkit-autofill');
    var isAutofilled = isNameInputAutofilled && isPasswordInputAutofilled;

    if (isAutofilled) {
      loginBtn.removeAttribute('disabled');
    }
  };

  doc.querySelector('.ibexa-login__password-visibility-toggler').addEventListener('click', function () {
    if (passwordInputNode) {
      var inputTypeToSet = passwordInputNode.type === 'password' ? 'text' : 'password';
      passwordInputNode.type = inputTypeToSet;
      viewIconNode.classList.toggle('d-none');
      viewHideIconNode.classList.toggle('d-none');
    }
  });

  if (loginBtn) {
    nameInput.addEventListener('keyup', toggleLoginBtnState, false);
    nameInput.addEventListener('change', toggleLoginBtnState, false);
    passwordInput.addEventListener('keyup', toggleLoginBtnState, false);
    passwordInput.addEventListener('change', toggleLoginBtnState, false);
    toggleLoginBtnState();
    global.setTimeout(handleAutofill, AUTOFILL_TIMEOUT);
  }
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js"));
/******/ }
]);