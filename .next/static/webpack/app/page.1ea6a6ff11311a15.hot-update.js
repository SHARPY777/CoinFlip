"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectWallet: function() { return /* binding */ connectWallet; },\n/* harmony export */   flipCoin: function() { return /* binding */ flipCoin; }\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n\n// Function to connect wallet\nconst connectWallet = async ()=>{\n    if ( true && window.solana && window.solana.isPhantom) {\n        try {\n            const response = await window.solana.connect();\n            console.log(\"Connected to wallet:\", response.publicKey.toString());\n            return response.publicKey.toString();\n        } catch (err) {\n            console.error(\"Connection failed:\", err);\n        }\n    } else {\n        alert(\"Phantom wallet not found! Please install the Phantom wallet extension.\");\n    }\n};\n// solanaConfig.js\nconst flipCoin = async (publicKey, amount, side)=>{\n    try {\n        const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(publicKey);\n        // Simulate coin flip (for actual use, a smart contract or secure randomness should be used)\n        const flipResult = Math.random() > 0.5 ? \"heads\" : \"tails\";\n        console.log(\"Coin flip result: \".concat(flipResult)); // Debugging\n        if (flipResult === side) {\n            // User won, send double the amount\n            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.SystemProgram.transfer({\n                fromPubkey,\n                toPubkey: fromPubkey,\n                lamports: amount * 2 * _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL / 100\n            }));\n            const signature = await connection.sendTransaction(transaction, [\n                fromPubkey\n            ]);\n            await connection.confirmTransaction(signature, \"confirmed\");\n            console.log(\"Transaction successful: \".concat(signature)); // Debugging\n            return \"win\";\n        } else {\n            console.log(\"User lost\"); // Debugging\n            return \"lose\";\n        }\n    } catch (error) {\n        console.error(\"Transaction failed:\", error);\n        return \"error\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zb2xhbmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFIO0FBR3JILDZCQUE2QjtBQUN0QixNQUFNTSxnQkFBZ0I7SUFDekIsSUFBSSxLQUE2QixJQUFJQyxPQUFPQyxNQUFNLElBQUlELE9BQU9DLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFO1FBQzdFLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1ILE9BQU9DLE1BQU0sQ0FBQ0csT0FBTztZQUM1Q0MsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkgsU0FBU0ksU0FBUyxDQUFDQyxRQUFRO1lBQy9ELE9BQU9MLFNBQVNJLFNBQVMsQ0FBQ0MsUUFBUTtRQUNwQyxFQUFFLE9BQU9DLEtBQUs7WUFDWkosUUFBUUssS0FBSyxDQUFDLHNCQUFzQkQ7UUFDdEM7SUFDRixPQUFPO1FBQ0xFLE1BQU07SUFDUjtBQUNGLEVBQUU7QUFDRixrQkFBa0I7QUFHWCxNQUFNQyxXQUFXLE9BQU9MLFdBQVdNLFFBQVFDO0lBQ2hELElBQUk7UUFDRixNQUFNQyxhQUFhLElBQUlyQixzREFBU0EsQ0FBQ2E7UUFFakMsNEZBQTRGO1FBQzVGLE1BQU1TLGFBQWFDLEtBQUtDLE1BQU0sS0FBSyxNQUFNLFVBQVU7UUFDbkRiLFFBQVFDLEdBQUcsQ0FBQyxxQkFBZ0MsT0FBWFUsY0FBZSxZQUFZO1FBRTVELElBQUlBLGVBQWVGLE1BQU07WUFDdkIsbUNBQW1DO1lBQ25DLE1BQU1LLGNBQWMsSUFBSXJCLHdEQUFXQSxHQUFHc0IsR0FBRyxDQUN2Q3ZCLDBEQUFhQSxDQUFDd0IsUUFBUSxDQUFDO2dCQUNyQk47Z0JBQ0FPLFVBQVVQO2dCQUNWUSxVQUFVVixTQUFTLElBQUlqQiw2REFBZ0JBLEdBQUc7WUFDNUM7WUFHRixNQUFNNEIsWUFBWSxNQUFNQyxXQUFXQyxlQUFlLENBQUNQLGFBQWE7Z0JBQUNKO2FBQVc7WUFDNUUsTUFBTVUsV0FBV0Usa0JBQWtCLENBQUNILFdBQVc7WUFDL0NuQixRQUFRQyxHQUFHLENBQUMsMkJBQXFDLE9BQVZrQixhQUFjLFlBQVk7WUFDakUsT0FBTztRQUNULE9BQU87WUFDTG5CLFFBQVFDLEdBQUcsQ0FBQyxjQUFjLFlBQVk7WUFDdEMsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPSSxPQUFPO1FBQ2RMLFFBQVFLLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU87SUFDVDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NvbGFuYS5qcz9hODcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3Rpb24sIFB1YmxpY0tleSwgY2x1c3RlckFwaVVybCwgTEFNUE9SVFNfUEVSX1NPTCwgU3lzdGVtUHJvZ3JhbSwgVHJhbnNhY3Rpb24gfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xyXG5cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGNvbm5lY3Qgd2FsbGV0XHJcbmV4cG9ydCBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LnNvbGFuYSAmJiB3aW5kb3cuc29sYW5hLmlzUGhhbnRvbSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LnNvbGFuYS5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3YWxsZXQ6JywgcmVzcG9uc2UucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5wdWJsaWNLZXkudG9TdHJpbmcoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvbm5lY3Rpb24gZmFpbGVkOlwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlBoYW50b20gd2FsbGV0IG5vdCBmb3VuZCEgUGxlYXNlIGluc3RhbGwgdGhlIFBoYW50b20gd2FsbGV0IGV4dGVuc2lvbi5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBzb2xhbmFDb25maWcuanNcclxuXHJcblxyXG4gIGV4cG9ydCBjb25zdCBmbGlwQ29pbiA9IGFzeW5jIChwdWJsaWNLZXksIGFtb3VudCwgc2lkZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZnJvbVB1YmtleSA9IG5ldyBQdWJsaWNLZXkocHVibGljS2V5KTtcclxuICBcclxuICAgICAgLy8gU2ltdWxhdGUgY29pbiBmbGlwIChmb3IgYWN0dWFsIHVzZSwgYSBzbWFydCBjb250cmFjdCBvciBzZWN1cmUgcmFuZG9tbmVzcyBzaG91bGQgYmUgdXNlZClcclxuICAgICAgY29uc3QgZmxpcFJlc3VsdCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaGVhZHMnIDogJ3RhaWxzJztcclxuICAgICAgY29uc29sZS5sb2coYENvaW4gZmxpcCByZXN1bHQ6ICR7ZmxpcFJlc3VsdH1gKTsgLy8gRGVidWdnaW5nXHJcbiAgXHJcbiAgICAgIGlmIChmbGlwUmVzdWx0ID09PSBzaWRlKSB7XHJcbiAgICAgICAgLy8gVXNlciB3b24sIHNlbmQgZG91YmxlIHRoZSBhbW91bnRcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbigpLmFkZChcclxuICAgICAgICAgIFN5c3RlbVByb2dyYW0udHJhbnNmZXIoe1xyXG4gICAgICAgICAgICBmcm9tUHVia2V5LFxyXG4gICAgICAgICAgICB0b1B1YmtleTogZnJvbVB1YmtleSwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBsb2dpYyBpZiBuZWVkZWRcclxuICAgICAgICAgICAgbGFtcG9ydHM6IGFtb3VudCAqIDIgKiBMQU1QT1JUU19QRVJfU09MIC8gMTAwLCAvLyBDb252ZXJ0IGFtb3VudCB0byBsYW1wb3J0c1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb24uc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBbZnJvbVB1YmtleV0pO1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHNpZ25hdHVyZSwgJ2NvbmZpcm1lZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2FjdGlvbiBzdWNjZXNzZnVsOiAke3NpZ25hdHVyZX1gKTsgLy8gRGVidWdnaW5nXHJcbiAgICAgICAgcmV0dXJuICd3aW4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGxvc3QnKTsgLy8gRGVidWdnaW5nXHJcbiAgICAgICAgcmV0dXJuICdsb3NlJztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRyYW5zYWN0aW9uIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgIH1cclxuICB9OyJdLCJuYW1lcyI6WyJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiY2x1c3RlckFwaVVybCIsIkxBTVBPUlRTX1BFUl9TT0wiLCJTeXN0ZW1Qcm9ncmFtIiwiVHJhbnNhY3Rpb24iLCJjb25uZWN0V2FsbGV0Iiwid2luZG93Iiwic29sYW5hIiwiaXNQaGFudG9tIiwicmVzcG9uc2UiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsInB1YmxpY0tleSIsInRvU3RyaW5nIiwiZXJyIiwiZXJyb3IiLCJhbGVydCIsImZsaXBDb2luIiwiYW1vdW50Iiwic2lkZSIsImZyb21QdWJrZXkiLCJmbGlwUmVzdWx0IiwiTWF0aCIsInJhbmRvbSIsInRyYW5zYWN0aW9uIiwiYWRkIiwidHJhbnNmZXIiLCJ0b1B1YmtleSIsImxhbXBvcnRzIiwic2lnbmF0dXJlIiwiY29ubmVjdGlvbiIsInNlbmRUcmFuc2FjdGlvbiIsImNvbmZpcm1UcmFuc2FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/solana.js\n"));

/***/ })

});