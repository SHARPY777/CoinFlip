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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectWallet: function() { return /* binding */ connectWallet; },\n/* harmony export */   flipCoin: function() { return /* binding */ flipCoin; }\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solanaConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solanaConfig */ \"(app-pages-browser)/./src/app/components/solanaConfig.js\");\n\n\n// Function to connect wallet\nconst connectWallet = async ()=>{\n    if ( true && window.solana && window.solana.isPhantom) {\n        try {\n            const response = await window.solana.connect();\n            console.log(\"Connected to wallet:\", response.publicKey.toString());\n            return response.publicKey.toString();\n        } catch (err) {\n            console.error(\"Connection failed:\", err);\n        }\n    } else {\n        alert(\"Phantom wallet not found! Please install the Phantom wallet extension.\");\n    }\n};\n// solanaConfig.js\nconst flipCoin = async (publicKey, amount, side)=>{\n    try {\n        console.log(\"Public Key: \".concat(publicKey));\n        console.log(\"Amount: \".concat(amount));\n        console.log(\"Side chosen: \".concat(side));\n        const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(publicKey);\n        // Simulate coin flip\n        const flipResult = Math.random() > 0.5 ? \"heads\" : \"tails\";\n        console.log(\"Coin flip result: \".concat(flipResult));\n        if (flipResult === side) {\n            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.SystemProgram.transfer({\n                fromPubkey,\n                toPubkey: fromPubkey,\n                lamports: amount * 2 * _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL / 100\n            }));\n            console.log(\"Sending transaction...\");\n            const signature = await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.sendTransaction(transaction, [\n                fromPubkey\n            ]);\n            console.log(\"Transaction signature: \".concat(signature));\n            await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.confirmTransaction(signature, \"confirmed\");\n            console.log(\"Transaction confirmed.\");\n            return \"win\";\n        } else {\n            console.log(\"User lost.\");\n            return \"lose\";\n        }\n    } catch (error) {\n        console.error(\"Transaction failed:\", error);\n        return \"error\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zb2xhbmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxSDtBQUN6RTtBQUU1Qyw2QkFBNkI7QUFDdEIsTUFBTU8sZ0JBQWdCO0lBQ3pCLElBQUksS0FBNkIsSUFBSUMsT0FBT0MsTUFBTSxJQUFJRCxPQUFPQyxNQUFNLENBQUNDLFNBQVMsRUFBRTtRQUM3RSxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNSCxPQUFPQyxNQUFNLENBQUNHLE9BQU87WUFDNUNDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JILFNBQVNJLFNBQVMsQ0FBQ0MsUUFBUTtZQUMvRCxPQUFPTCxTQUFTSSxTQUFTLENBQUNDLFFBQVE7UUFDcEMsRUFBRSxPQUFPQyxLQUFLO1lBQ1pKLFFBQVFLLEtBQUssQ0FBQyxzQkFBc0JEO1FBQ3RDO0lBQ0YsT0FBTztRQUNMRSxNQUFNO0lBQ1I7QUFDRixFQUFFO0FBQ0Ysa0JBQWtCO0FBRVgsTUFBTUMsV0FBVyxPQUFPTCxXQUFXTSxRQUFRQztJQUNoRCxJQUFJO1FBQ0ZULFFBQVFDLEdBQUcsQ0FBQyxlQUF5QixPQUFWQztRQUMzQkYsUUFBUUMsR0FBRyxDQUFDLFdBQWtCLE9BQVBPO1FBQ3ZCUixRQUFRQyxHQUFHLENBQUMsZ0JBQXFCLE9BQUxRO1FBRTVCLE1BQU1DLGFBQWEsSUFBSXRCLHNEQUFTQSxDQUFDYztRQUVqQyxxQkFBcUI7UUFDckIsTUFBTVMsYUFBYUMsS0FBS0MsTUFBTSxLQUFLLE1BQU0sVUFBVTtRQUNuRGIsUUFBUUMsR0FBRyxDQUFDLHFCQUFnQyxPQUFYVTtRQUVqQyxJQUFJQSxlQUFlRixNQUFNO1lBQ3ZCLE1BQU1LLGNBQWMsSUFBSXRCLHdEQUFXQSxHQUFHdUIsR0FBRyxDQUN2Q3hCLDBEQUFhQSxDQUFDeUIsUUFBUSxDQUFDO2dCQUNyQk47Z0JBQ0FPLFVBQVVQO2dCQUNWUSxVQUFVVixTQUFTLElBQUlsQiw2REFBZ0JBLEdBQUc7WUFDNUM7WUFHRlUsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTWtCLFlBQVksTUFBTTFCLHFEQUFVQSxDQUFDMkIsZUFBZSxDQUFDTixhQUFhO2dCQUFDSjthQUFXO1lBQzVFVixRQUFRQyxHQUFHLENBQUMsMEJBQW9DLE9BQVZrQjtZQUV0QyxNQUFNMUIscURBQVVBLENBQUM0QixrQkFBa0IsQ0FBQ0YsV0FBVztZQUMvQ25CLFFBQVFDLEdBQUcsQ0FBQztZQUVaLE9BQU87UUFDVCxPQUFPO1lBQ0xELFFBQVFDLEdBQUcsQ0FBQztZQUNaLE9BQU87UUFDVDtJQUNGLEVBQUUsT0FBT0ksT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsdUJBQXVCQTtRQUNyQyxPQUFPO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zb2xhbmEuanM/YTg3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0aW9uLCBQdWJsaWNLZXksIGNsdXN0ZXJBcGlVcmwsIExBTVBPUlRTX1BFUl9TT0wsIFN5c3RlbVByb2dyYW0sIFRyYW5zYWN0aW9uIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcclxuaW1wb3J0IHsgY29ubmVjdGlvbiB9IGZyb20gJy4vc29sYW5hQ29uZmlnJztcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGNvbm5lY3Qgd2FsbGV0XHJcbmV4cG9ydCBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LnNvbGFuYSAmJiB3aW5kb3cuc29sYW5hLmlzUGhhbnRvbSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LnNvbGFuYS5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3YWxsZXQ6JywgcmVzcG9uc2UucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5wdWJsaWNLZXkudG9TdHJpbmcoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvbm5lY3Rpb24gZmFpbGVkOlwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlBoYW50b20gd2FsbGV0IG5vdCBmb3VuZCEgUGxlYXNlIGluc3RhbGwgdGhlIFBoYW50b20gd2FsbGV0IGV4dGVuc2lvbi5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBzb2xhbmFDb25maWcuanNcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGZsaXBDb2luID0gYXN5bmMgKHB1YmxpY0tleSwgYW1vdW50LCBzaWRlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgUHVibGljIEtleTogJHtwdWJsaWNLZXl9YCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBBbW91bnQ6ICR7YW1vdW50fWApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgU2lkZSBjaG9zZW46ICR7c2lkZX1gKTtcclxuICBcclxuICAgICAgY29uc3QgZnJvbVB1YmtleSA9IG5ldyBQdWJsaWNLZXkocHVibGljS2V5KTtcclxuICBcclxuICAgICAgLy8gU2ltdWxhdGUgY29pbiBmbGlwXHJcbiAgICAgIGNvbnN0IGZsaXBSZXN1bHQgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hlYWRzJyA6ICd0YWlscyc7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBDb2luIGZsaXAgcmVzdWx0OiAke2ZsaXBSZXN1bHR9YCk7XHJcbiAgXHJcbiAgICAgIGlmIChmbGlwUmVzdWx0ID09PSBzaWRlKSB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oKS5hZGQoXHJcbiAgICAgICAgICBTeXN0ZW1Qcm9ncmFtLnRyYW5zZmVyKHtcclxuICAgICAgICAgICAgZnJvbVB1YmtleSxcclxuICAgICAgICAgICAgdG9QdWJrZXk6IGZyb21QdWJrZXksIC8vIEZvciBzaW1wbGljaXR5LCBzZW5kIHRvIHRoZSBzYW1lIGFjY291bnRcclxuICAgICAgICAgICAgbGFtcG9ydHM6IGFtb3VudCAqIDIgKiBMQU1QT1JUU19QRVJfU09MIC8gMTAwLCAvLyBEb3VibGUgdGhlIGJldCBhbW91bnRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZyB0cmFuc2FjdGlvbi4uLicpO1xyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb24uc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBbZnJvbVB1YmtleV0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2FjdGlvbiBzaWduYXR1cmU6ICR7c2lnbmF0dXJlfWApO1xyXG4gIFxyXG4gICAgICAgIGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHNpZ25hdHVyZSwgJ2NvbmZpcm1lZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2FjdGlvbiBjb25maXJtZWQuJyk7XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuICd3aW4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGxvc3QuJyk7XHJcbiAgICAgICAgcmV0dXJuICdsb3NlJztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRyYW5zYWN0aW9uIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgIH1cclxuICB9OyJdLCJuYW1lcyI6WyJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiY2x1c3RlckFwaVVybCIsIkxBTVBPUlRTX1BFUl9TT0wiLCJTeXN0ZW1Qcm9ncmFtIiwiVHJhbnNhY3Rpb24iLCJjb25uZWN0aW9uIiwiY29ubmVjdFdhbGxldCIsIndpbmRvdyIsInNvbGFuYSIsImlzUGhhbnRvbSIsInJlc3BvbnNlIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwdWJsaWNLZXkiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwiYWxlcnQiLCJmbGlwQ29pbiIsImFtb3VudCIsInNpZGUiLCJmcm9tUHVia2V5IiwiZmxpcFJlc3VsdCIsIk1hdGgiLCJyYW5kb20iLCJ0cmFuc2FjdGlvbiIsImFkZCIsInRyYW5zZmVyIiwidG9QdWJrZXkiLCJsYW1wb3J0cyIsInNpZ25hdHVyZSIsInNlbmRUcmFuc2FjdGlvbiIsImNvbmZpcm1UcmFuc2FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/solana.js\n"));

/***/ })

});