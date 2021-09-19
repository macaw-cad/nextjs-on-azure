webpackHotUpdate_N_E("pages/[[...path]]",{

/***/ "./src/components/graphql/GraphQL-IntegratedDemo.tsx":
/*!***********************************************************!*\
  !*** ./src/components/graphql/GraphQL-IntegratedDemo.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sitecore-jss/sitecore-jss-nextjs */ "./node_modules/@sitecore-jss/sitecore-jss-nextjs/dist/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\projects\\jss\\nextjsonazure\\packages\\jss-nextjs-app\\src\\components\\graphql\\GraphQL-IntegratedDemo.tsx",
    _this = undefined;




var GraphQLIntegratedDemo = function GraphQLIntegratedDemo(props) {
  // Query results in integrated GraphQL replace the normal `fields` data
  // i.e. with { data, }
  console.error(JSON.stringify(props));
  var _props$fields$data = props.fields.data,
      datasource = _props$fields$data.datasource,
      contextItem = _props$fields$data.contextItem;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-e2e-id": "graphql-integrated",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "GraphQL Integrated Demo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Integrated GraphQL executes GraphQL queries within the Layout Service endpoint, and merges the query results into the Layout Service result JSON. The query results can be seen by inspecting the Layout Service response."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this), datasource && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Datasource Item (via Integrated GraphQL)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, _this), "id: ", datasource.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, _this), "name: ", datasource.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, _this), "sample1: ", datasource.sample1.value, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, _this), "sample1 (editable): ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        field: datasource.sample1.jsonValue
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 31
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this), "sample2:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["text: ", datasource.sample2.text]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["url: ", datasource.sample2.url]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["target: ", datasource.sample2.target]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["editable: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            field: datasource.sample2.jsonValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["field type: ", datasource.sample2.definition.type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: ["field is shared?: ", datasource.sample2.definition.shared.toString()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this), contextItem && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Route Item (via Integrated GraphQL)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }, _this), "id: ", contextItem.id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, _this), "page title: ", contextItem.pageTitle.value, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, _this), "children:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: contextItem.children.results.map(function (child) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: child.url.path,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: child.pageTitle.value
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, _this), "\xA0 (editable title too! ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_sitecore_jss_sitecore_jss_nextjs__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              field: child.pageTitle.jsonValue
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 45
            }, _this), ")"]
          }, child.id, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, _this);
};

_c = GraphQLIntegratedDemo;
/* harmony default export */ __webpack_exports__["default"] = (GraphQLIntegratedDemo);

var _c;

$RefreshReg$(_c, "GraphQLIntegratedDemo");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ3JhcGhxbC9HcmFwaFFMLUludGVncmF0ZWREZW1vLnRzeCJdLCJuYW1lcyI6WyJHcmFwaFFMSW50ZWdyYXRlZERlbW8iLCJwcm9wcyIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJmaWVsZHMiLCJkYXRhIiwiZGF0YXNvdXJjZSIsImNvbnRleHRJdGVtIiwiaWQiLCJuYW1lIiwic2FtcGxlMSIsInZhbHVlIiwianNvblZhbHVlIiwic2FtcGxlMiIsInRleHQiLCJ1cmwiLCJ0YXJnZXQiLCJkZWZpbml0aW9uIiwidHlwZSIsInNoYXJlZCIsInRvU3RyaW5nIiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJyZXN1bHRzIiwibWFwIiwiY2hpbGQiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQStEQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBb0Q7QUFDaEY7QUFDQTtBQUVBQyxTQUFPLENBQUNDLEtBQVIsQ0FBY0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLEtBQWYsQ0FBZDtBQUpnRiwyQkFNNUNBLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQU4rQjtBQUFBLE1BTXhFQyxVQU53RSxzQkFNeEVBLFVBTndFO0FBQUEsTUFNNURDLFdBTjRELHNCQU01REEsV0FONEQ7QUFRaEYsc0JBQ0U7QUFBSyxtQkFBWSxvQkFBakI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQVNHRCxVQUFVLGlCQUNUO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixVQUVPQSxVQUFVLENBQUNFLEVBRmxCLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLFlBSVNGLFVBQVUsQ0FBQ0csSUFKcEIsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNWUgsVUFBVSxDQUFDSSxPQUFYLENBQW1CQyxLQU4vQixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRix1Q0FRc0IscUVBQUMsc0VBQUQ7QUFBTSxhQUFLLEVBQUVMLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQkU7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJ0QixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURiwyQkFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFZRTtBQUFBLGdDQUNFO0FBQUEsK0JBQVdOLFVBQVUsQ0FBQ08sT0FBWCxDQUFtQkMsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSw4QkFBVVIsVUFBVSxDQUFDTyxPQUFYLENBQW1CRSxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLGlDQUFhVCxVQUFVLENBQUNPLE9BQVgsQ0FBbUJHLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUEsZ0RBQ1kscUVBQUMsc0VBQUQ7QUFBTSxpQkFBSyxFQUFFVixVQUFVLENBQUNPLE9BQVgsQ0FBbUJEO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBT0U7QUFBQSxxQ0FBaUJOLFVBQVUsQ0FBQ08sT0FBWCxDQUFtQkksVUFBbkIsQ0FBOEJDLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVFFO0FBQUEsMkNBQXVCWixVQUFVLENBQUNPLE9BQVgsQ0FBbUJJLFVBQW5CLENBQThCRSxNQUE5QixDQUFxQ0MsUUFBckMsRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKLEVBa0NHYixXQUFXLGlCQUNWO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixVQUVPQSxXQUFXLENBQUNDLEVBRm5CLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGtCQUllRCxXQUFXLENBQUNjLFNBQVosQ0FBc0JWLEtBSnJDLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLDRCQU9FO0FBQUEsa0JBQ0dKLFdBQVcsQ0FBQ2UsUUFBWixDQUFxQkMsT0FBckIsQ0FBNkJDLEdBQTdCLENBQWlDLFVBQUNDLEtBQUQ7QUFBQSw4QkFDaEM7QUFBQSxvQ0FDRSxxRUFBQyxnREFBRDtBQUFVLGtCQUFJLEVBQUVBLEtBQUssQ0FBQ1YsR0FBTixDQUFVVyxJQUExQjtBQUFBLHFDQUNFO0FBQUEsMEJBQUlELEtBQUssQ0FBQ0osU0FBTixDQUFnQlY7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsNkNBSThCLHFFQUFDLHNFQUFEO0FBQU0sbUJBQUssRUFBRWMsS0FBSyxDQUFDSixTQUFOLENBQWdCVDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUo5QjtBQUFBLGFBQVNhLEtBQUssQ0FBQ2pCLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZ0M7QUFBQSxTQUFqQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5REQsQ0FqRUQ7O0tBQU1WLHFCO0FBbUVTQSxvRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnBhdGhdXS5lNzM2M2RjY2Y5M2ZjY2UyNzE1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgTGluayB9IGZyb20gJ0BzaXRlY29yZS1qc3Mvc2l0ZWNvcmUtanNzLW5leHRqcyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIERhdGFTb3VyY2Uge1xyXG4gIHNhbXBsZTE6IHtcclxuICAgIGpzb25WYWx1ZToge1xyXG4gICAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgfTtcclxuICBzYW1wbGUyOiB7XHJcbiAgICBkZWZpbml0aW9uOiB7XHJcbiAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgc2hhcmVkOiBib29sZWFuO1xyXG4gICAgfTtcclxuICAgIGpzb25WYWx1ZToge1xyXG4gICAgICB2YWx1ZToge1xyXG4gICAgICAgIGhyZWY6IHN0cmluZztcclxuICAgICAgICBsaW5rdHlwZTogc3RyaW5nO1xyXG4gICAgICAgIHRhcmdldDogc3RyaW5nO1xyXG4gICAgICAgIHRleHQ6IHN0cmluZztcclxuICAgICAgICB1cmw6IHN0cmluZztcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICB0YXJnZXQ6IHN0cmluZztcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gIH07XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJdGVtIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHVybDoge1xyXG4gICAgcGF0aDogc3RyaW5nO1xyXG4gIH07XHJcbiAgcGFnZVRpdGxlOiB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAganNvblZhbHVlOiB7XHJcbiAgICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJdGVtU2VhcmNoUmVzdWx0cyB7XHJcbiAgcmVzdWx0czogSXRlbVtdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR3JhcGhRbEludGVncmF0ZWREZW1vUHJvcHMge1xyXG4gIGZpZWxkczoge1xyXG4gICAgZGF0YToge1xyXG4gICAgICBkYXRhc291cmNlOiBEYXRhU291cmNlO1xyXG4gICAgICBjb250ZXh0SXRlbToge1xyXG4gICAgICAgIGlkOiBzdHJpbmc7XHJcbiAgICAgICAgY2hpbGRyZW46IEl0ZW1TZWFyY2hSZXN1bHRzO1xyXG4gICAgICAgIHBhZ2VUaXRsZToge1xyXG4gICAgICAgICAgdmFsdWU6IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBHcmFwaFFMSW50ZWdyYXRlZERlbW8gPSAocHJvcHM6IEdyYXBoUWxJbnRlZ3JhdGVkRGVtb1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIC8vIFF1ZXJ5IHJlc3VsdHMgaW4gaW50ZWdyYXRlZCBHcmFwaFFMIHJlcGxhY2UgdGhlIG5vcm1hbCBgZmllbGRzYCBkYXRhXHJcbiAgLy8gaS5lLiB3aXRoIHsgZGF0YSwgfVxyXG5cclxuICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KHByb3BzKSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YXNvdXJjZSwgY29udGV4dEl0ZW0gfSA9IHByb3BzLmZpZWxkcy5kYXRhO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBkYXRhLWUyZS1pZD1cImdyYXBocWwtaW50ZWdyYXRlZFwiPlxyXG4gICAgICA8aDI+R3JhcGhRTCBJbnRlZ3JhdGVkIERlbW88L2gyPlxyXG5cclxuICAgICAgPHA+XHJcbiAgICAgICAgSW50ZWdyYXRlZCBHcmFwaFFMIGV4ZWN1dGVzIEdyYXBoUUwgcXVlcmllcyB3aXRoaW4gdGhlIExheW91dCBTZXJ2aWNlIGVuZHBvaW50LCBhbmQgbWVyZ2VzXHJcbiAgICAgICAgdGhlIHF1ZXJ5IHJlc3VsdHMgaW50byB0aGUgTGF5b3V0IFNlcnZpY2UgcmVzdWx0IEpTT04uIFRoZSBxdWVyeSByZXN1bHRzIGNhbiBiZSBzZWVuIGJ5XHJcbiAgICAgICAgaW5zcGVjdGluZyB0aGUgTGF5b3V0IFNlcnZpY2UgcmVzcG9uc2UuXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtkYXRhc291cmNlICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGg0PkRhdGFzb3VyY2UgSXRlbSAodmlhIEludGVncmF0ZWQgR3JhcGhRTCk8L2g0PlxyXG4gICAgICAgICAgaWQ6IHtkYXRhc291cmNlLmlkfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBuYW1lOiB7ZGF0YXNvdXJjZS5uYW1lfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBzYW1wbGUxOiB7ZGF0YXNvdXJjZS5zYW1wbGUxLnZhbHVlfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBzYW1wbGUxIChlZGl0YWJsZSk6IDxUZXh0IGZpZWxkPXtkYXRhc291cmNlLnNhbXBsZTEuanNvblZhbHVlfSAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBzYW1wbGUyOlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT50ZXh0OiB7ZGF0YXNvdXJjZS5zYW1wbGUyLnRleHR9PC9saT5cclxuICAgICAgICAgICAgPGxpPnVybDoge2RhdGFzb3VyY2Uuc2FtcGxlMi51cmx9PC9saT5cclxuICAgICAgICAgICAgPGxpPnRhcmdldDoge2RhdGFzb3VyY2Uuc2FtcGxlMi50YXJnZXR9PC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIGVkaXRhYmxlOiA8TGluayBmaWVsZD17ZGF0YXNvdXJjZS5zYW1wbGUyLmpzb25WYWx1ZX0gLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPmZpZWxkIHR5cGU6IHtkYXRhc291cmNlLnNhbXBsZTIuZGVmaW5pdGlvbi50eXBlfTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5maWVsZCBpcyBzaGFyZWQ/OiB7ZGF0YXNvdXJjZS5zYW1wbGUyLmRlZmluaXRpb24uc2hhcmVkLnRvU3RyaW5nKCl9PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb250ZXh0SXRlbSAmJiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoND5Sb3V0ZSBJdGVtICh2aWEgSW50ZWdyYXRlZCBHcmFwaFFMKTwvaDQ+XHJcbiAgICAgICAgICBpZDoge2NvbnRleHRJdGVtLmlkfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBwYWdlIHRpdGxlOiB7Y29udGV4dEl0ZW0ucGFnZVRpdGxlLnZhbHVlfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICBjaGlsZHJlbjpcclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2NvbnRleHRJdGVtLmNoaWxkcmVuLnJlc3VsdHMubWFwKChjaGlsZDogSXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2NoaWxkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtjaGlsZC51cmwucGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntjaGlsZC5wYWdlVGl0bGUudmFsdWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICZuYnNwOyAoZWRpdGFibGUgdGl0bGUgdG9vISA8VGV4dCBmaWVsZD17Y2hpbGQucGFnZVRpdGxlLmpzb25WYWx1ZX0gLz4pXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyYXBoUUxJbnRlZ3JhdGVkRGVtbztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==