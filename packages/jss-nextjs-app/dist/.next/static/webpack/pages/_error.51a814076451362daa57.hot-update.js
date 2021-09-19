webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5Cprojects%5Cjss%5Cnextjsonazure%5Cpackages%5Cjss-nextjs-app%5Csrc%5Cpages%5C_error.tsx!./":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5Cprojects%5Cjss%5Cnextjsonazure%5Cpackages%5Cjss-nextjs-app%5Csrc%5Cpages%5C_error.tsx ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./src/pages/_error.tsx":
/*!******************************!*\
  !*** ./src/pages/_error.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "D:\\projects\\jss\\nextjsonazure\\packages\\jss-nextjs-app\\src\\pages\\_error.tsx",
    _this = undefined;



/**
 * Rendered in case if we have 500 error, used only in Production mode
 * @link https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page
 */
var ErrorPage = function ErrorPage(_ref) {
  var statusCode = _ref.statusCode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Error"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        padding: 10
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: statusCode ? "An error ".concat(statusCode, " occurred on server") : 'An error occurred on client'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/",
        children: "Go to the Home page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_c = ErrorPage;

ErrorPage.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

var _c;

$RefreshReg$(_c, "ErrorPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2Vycm9yLnRzeCJdLCJuYW1lcyI6WyJFcnJvclBhZ2UiLCJzdGF0dXNDb2RlIiwicGFkZGluZyIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxzREFBb0Y7QUFDM0c7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxTQUFtQyxHQUFHLFNBQXRDQSxTQUFzQztBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLHNCQUMxQztBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQUEsOEJBQ0U7QUFBQSxrQkFDR0QsVUFBVSxzQkFBZUEsVUFBZiwyQkFBaUQ7QUFEOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBRDBDO0FBQUEsQ0FBNUM7O0tBQU1ELFM7O0FBY05BLFNBQVMsQ0FBQ0csZUFBVixHQUE0QixpQkFBa0I7QUFBQSxNQUFmQyxHQUFlLFNBQWZBLEdBQWU7QUFBQSxNQUFWQyxHQUFVLFNBQVZBLEdBQVU7QUFDNUMsTUFBTUosVUFBVSxHQUFHRyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0gsVUFBUCxHQUFvQkksR0FBRyxHQUFHQSxHQUFHLENBQUNKLFVBQVAsR0FBb0IsR0FBakU7QUFFQSxTQUFPO0FBQUVBLGNBQVUsRUFBVkE7QUFBRixHQUFQO0FBQ0QsQ0FKRDs7QUFNZUQsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLjUxYTgxNDA3NjQ1MTM2MmRhYTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkQ6XFxcXHByb2plY3RzXFxcXGpzc1xcXFxuZXh0anNvbmF6dXJlXFxcXHBhY2thZ2VzXFxcXGpzcy1uZXh0anMtYXBwXFxcXHNyY1xcXFxwYWdlc1xcXFxfZXJyb3IudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW50ZXJmYWNlIEVycm9yUGFnZVByb3BzIHtcclxuICBzdGF0dXNDb2RlPzogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmRlcmVkIGluIGNhc2UgaWYgd2UgaGF2ZSA1MDAgZXJyb3IsIHVzZWQgb25seSBpbiBQcm9kdWN0aW9uIG1vZGVcclxuICogQGxpbmsgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYWR2YW5jZWQtZmVhdHVyZXMvY3VzdG9tLWVycm9yLXBhZ2UjY3VzdG9taXppbmctdGhlLWVycm9yLXBhZ2VcclxuICovXHJcbmNvbnN0IEVycm9yUGFnZTogTmV4dFBhZ2U8RXJyb3JQYWdlUHJvcHM+ID0gKHsgc3RhdHVzQ29kZSB9KSA9PiAoXHJcbiAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+RXJyb3I8L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgPHA+XHJcbiAgICAgICAge3N0YXR1c0NvZGUgPyBgQW4gZXJyb3IgJHtzdGF0dXNDb2RlfSBvY2N1cnJlZCBvbiBzZXJ2ZXJgIDogJ0FuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudCd9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGEgaHJlZj1cIi9cIj5HbyB0byB0aGUgSG9tZSBwYWdlPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5FcnJvclBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCBlcnIgfSkgPT4ge1xyXG4gIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xyXG5cclxuICByZXR1cm4geyBzdGF0dXNDb2RlIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=