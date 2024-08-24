/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/solana.js":
/*!**************************************!*\
  !*** ./src/app/components/solana.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectWallet: function() { return /* binding */ connectWallet; },\n/* harmony export */   flipCoin: function() { return /* binding */ flipCoin; }\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solanaConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solanaConfig */ \"(app-pages-browser)/./src/app/components/solanaConfig.js\");\n/* harmony import */ var _solanaConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solanaConfig__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Function to connect wallet\nconst connectWallet = async ()=>{\n    if ( true && window.solana && window.solana.isPhantom) {\n        try {\n            const response = await window.solana.connect();\n            console.log(\"Connected to wallet:\", response.publicKey.toString());\n            return response.publicKey.toString();\n        } catch (err) {\n            console.error(\"Connection failed:\", err);\n        }\n    } else {\n        alert(\"Phantom wallet not found! Please install the Phantom wallet extension.\");\n    }\n};\n// solanaConfig.js\nconst flipCoin = async (publicKey, amount, side)=>{\n    try {\n        const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(publicKey);\n        // Simulate coin flip (for actual use, a smart contract or secure randomness should be used)\n        const flipResult = Math.random() > 0.5 ? \"heads\" : \"tails\";\n        console.log(\"Coin flip result: \".concat(flipResult)); // Debugging\n        if (flipResult === side) {\n            // User won, send double the amount\n            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.SystemProgram.transfer({\n                fromPubkey,\n                toPubkey: fromPubkey,\n                lamports: amount * 2 * _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL / 100\n            }));\n            const signature = await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.sendTransaction(transaction, [\n                fromPubkey\n            ]);\n            await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.confirmTransaction(signature, \"confirmed\");\n            console.log(\"Transaction successful: \".concat(signature)); // Debugging\n            return \"win\";\n        } else {\n            console.log(\"User lost\"); // Debugging\n            return \"lose\";\n        }\n    } catch (error) {\n        console.error(\"Transaction failed:\", error);\n        return \"error\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zb2xhbmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUg7QUFDekU7QUFFNUMsNkJBQTZCO0FBQ3RCLE1BQU1PLGdCQUFnQjtJQUN6QixJQUFJLEtBQTZCLElBQUlDLE9BQU9DLE1BQU0sSUFBSUQsT0FBT0MsTUFBTSxDQUFDQyxTQUFTLEVBQUU7UUFDN0UsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUgsT0FBT0MsTUFBTSxDQUFDRyxPQUFPO1lBQzVDQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCSCxTQUFTSSxTQUFTLENBQUNDLFFBQVE7WUFDL0QsT0FBT0wsU0FBU0ksU0FBUyxDQUFDQyxRQUFRO1FBQ3BDLEVBQUUsT0FBT0MsS0FBSztZQUNaSixRQUFRSyxLQUFLLENBQUMsc0JBQXNCRDtRQUN0QztJQUNGLE9BQU87UUFDTEUsTUFBTTtJQUNSO0FBQ0YsRUFBRTtBQUNGLGtCQUFrQjtBQUdYLE1BQU1DLFdBQVcsT0FBT0wsV0FBV00sUUFBUUM7SUFDaEQsSUFBSTtRQUNGLE1BQU1DLGFBQWEsSUFBSXRCLHNEQUFTQSxDQUFDYztRQUVqQyw0RkFBNEY7UUFDNUYsTUFBTVMsYUFBYUMsS0FBS0MsTUFBTSxLQUFLLE1BQU0sVUFBVTtRQUNuRGIsUUFBUUMsR0FBRyxDQUFDLHFCQUFnQyxPQUFYVSxjQUFlLFlBQVk7UUFFNUQsSUFBSUEsZUFBZUYsTUFBTTtZQUN2QixtQ0FBbUM7WUFDbkMsTUFBTUssY0FBYyxJQUFJdEIsd0RBQVdBLEdBQUd1QixHQUFHLENBQ3ZDeEIsMERBQWFBLENBQUN5QixRQUFRLENBQUM7Z0JBQ3JCTjtnQkFDQU8sVUFBVVA7Z0JBQ1ZRLFVBQVVWLFNBQVMsSUFBSWxCLDZEQUFnQkEsR0FBRztZQUM1QztZQUdGLE1BQU02QixZQUFZLE1BQU0xQixxREFBVUEsQ0FBQzJCLGVBQWUsQ0FBQ04sYUFBYTtnQkFBQ0o7YUFBVztZQUM1RSxNQUFNakIscURBQVVBLENBQUM0QixrQkFBa0IsQ0FBQ0YsV0FBVztZQUMvQ25CLFFBQVFDLEdBQUcsQ0FBQywyQkFBcUMsT0FBVmtCLGFBQWMsWUFBWTtZQUNqRSxPQUFPO1FBQ1QsT0FBTztZQUNMbkIsUUFBUUMsR0FBRyxDQUFDLGNBQWMsWUFBWTtZQUN0QyxPQUFPO1FBQ1Q7SUFDRixFQUFFLE9BQU9JLE9BQU87UUFDZEwsUUFBUUssS0FBSyxDQUFDLHVCQUF1QkE7UUFDckMsT0FBTztJQUNUO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc29sYW5hLmpzP2E4NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvbiwgUHVibGljS2V5LCBjbHVzdGVyQXBpVXJsLCBMQU1QT1JUU19QRVJfU09MLCBTeXN0ZW1Qcm9ncmFtLCBUcmFuc2FjdGlvbiB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb24gfSBmcm9tICcuL3NvbGFuYUNvbmZpZyc7XHJcblxyXG4vLyBGdW5jdGlvbiB0byBjb25uZWN0IHdhbGxldFxyXG5leHBvcnQgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5zb2xhbmEgJiYgd2luZG93LnNvbGFuYS5pc1BoYW50b20pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5zb2xhbmEuY29ubmVjdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gd2FsbGV0OicsIHJlc3BvbnNlLnB1YmxpY0tleS50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UucHVibGljS2V5LnRvU3RyaW5nKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb25uZWN0aW9uIGZhaWxlZDpcIiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJQaGFudG9tIHdhbGxldCBub3QgZm91bmQhIFBsZWFzZSBpbnN0YWxsIHRoZSBQaGFudG9tIHdhbGxldCBleHRlbnNpb24uXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gc29sYW5hQ29uZmlnLmpzXHJcblxyXG5cclxuICBleHBvcnQgY29uc3QgZmxpcENvaW4gPSBhc3luYyAocHVibGljS2V5LCBhbW91bnQsIHNpZGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZyb21QdWJrZXkgPSBuZXcgUHVibGljS2V5KHB1YmxpY0tleSk7XHJcbiAgXHJcbiAgICAgIC8vIFNpbXVsYXRlIGNvaW4gZmxpcCAoZm9yIGFjdHVhbCB1c2UsIGEgc21hcnQgY29udHJhY3Qgb3Igc2VjdXJlIHJhbmRvbW5lc3Mgc2hvdWxkIGJlIHVzZWQpXHJcbiAgICAgIGNvbnN0IGZsaXBSZXN1bHQgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hlYWRzJyA6ICd0YWlscyc7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBDb2luIGZsaXAgcmVzdWx0OiAke2ZsaXBSZXN1bHR9YCk7IC8vIERlYnVnZ2luZ1xyXG4gIFxyXG4gICAgICBpZiAoZmxpcFJlc3VsdCA9PT0gc2lkZSkge1xyXG4gICAgICAgIC8vIFVzZXIgd29uLCBzZW5kIGRvdWJsZSB0aGUgYW1vdW50XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oKS5hZGQoXHJcbiAgICAgICAgICBTeXN0ZW1Qcm9ncmFtLnRyYW5zZmVyKHtcclxuICAgICAgICAgICAgZnJvbVB1YmtleSxcclxuICAgICAgICAgICAgdG9QdWJrZXk6IGZyb21QdWJrZXksIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgbG9naWMgaWYgbmVlZGVkXHJcbiAgICAgICAgICAgIGxhbXBvcnRzOiBhbW91bnQgKiAyICogTEFNUE9SVFNfUEVSX1NPTCAvIDEwMCwgLy8gQ29udmVydCBhbW91bnQgdG8gbGFtcG9ydHNcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBjb25uZWN0aW9uLnNlbmRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbiwgW2Zyb21QdWJrZXldKTtcclxuICAgICAgICBhd2FpdCBjb25uZWN0aW9uLmNvbmZpcm1UcmFuc2FjdGlvbihzaWduYXR1cmUsICdjb25maXJtZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gc3VjY2Vzc2Z1bDogJHtzaWduYXR1cmV9YCk7IC8vIERlYnVnZ2luZ1xyXG4gICAgICAgIHJldHVybiAnd2luJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBsb3N0Jyk7IC8vIERlYnVnZ2luZ1xyXG4gICAgICAgIHJldHVybiAnbG9zZSc7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2FjdGlvbiBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICB9XHJcbiAgfTsiXSwibmFtZXMiOlsiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsImNsdXN0ZXJBcGlVcmwiLCJMQU1QT1JUU19QRVJfU09MIiwiU3lzdGVtUHJvZ3JhbSIsIlRyYW5zYWN0aW9uIiwiY29ubmVjdGlvbiIsImNvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJzb2xhbmEiLCJpc1BoYW50b20iLCJyZXNwb25zZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwicHVibGljS2V5IiwidG9TdHJpbmciLCJlcnIiLCJlcnJvciIsImFsZXJ0IiwiZmxpcENvaW4iLCJhbW91bnQiLCJzaWRlIiwiZnJvbVB1YmtleSIsImZsaXBSZXN1bHQiLCJNYXRoIiwicmFuZG9tIiwidHJhbnNhY3Rpb24iLCJhZGQiLCJ0cmFuc2ZlciIsInRvUHVia2V5IiwibGFtcG9ydHMiLCJzaWduYXR1cmUiLCJzZW5kVHJhbnNhY3Rpb24iLCJjb25maXJtVHJhbnNhY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/solana.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/solanaConfig.js":
/*!********************************************!*\
  !*** ./src/app/components/solanaConfig.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});