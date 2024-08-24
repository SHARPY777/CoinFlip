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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectWallet: function() { return /* binding */ connectWallet; },\n/* harmony export */   flipCoin: function() { return /* binding */ flipCoin; }\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solanaConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solanaConfig */ \"(app-pages-browser)/./src/app/components/solanaConfig.js\");\n\n\n// Function to connect wallet\nconst connectWallet = async ()=>{\n    if ( true && window.solana && window.solana.isPhantom) {\n        try {\n            const response = await window.solana.connect();\n            console.log(\"Connected to wallet:\", response.publicKey.toString());\n            return response.publicKey.toString();\n        } catch (err) {\n            console.error(\"Connection failed:\", err);\n        }\n    } else {\n        alert(\"Phantom wallet not found! Please install the Phantom wallet extension.\");\n    }\n};\n// solanaConfig.js\nconst flipCoin = async (publicKey, amount, side)=>{\n    try {\n        const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(publicKey);\n        const provider = window.solana; // Phantom wallet\n        await provider.connect(); // Connect to wallet\n        const walletPublicKey = provider.publicKey;\n        const { blockhash } = await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.getLatestBlockhash();\n        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction({\n            recentBlockhash: blockhash,\n            feePayer: walletPublicKey\n        }).add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.SystemProgram.transfer({\n            fromPubkey: walletPublicKey,\n            toPubkey: fromPubkey,\n            lamports: amount * 2 * _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL / 100\n        }));\n        // Sign the transaction\n        await provider.signTransaction(transaction);\n        // Send the transaction\n        const signature = await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.sendTransaction(transaction, [\n            walletPublicKey\n        ]);\n        console.log(\"Transaction signature: \".concat(signature));\n        // Confirm the transaction\n        await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.confirmTransaction(signature, \"confirmed\");\n        console.log(\"Transaction confirmed.\");\n        return \"win\"; // Adjust based on actual coin flip logic\n    } catch (error) {\n        console.error(\"Transaction failed:\", error);\n        return \"error\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zb2xhbmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2SDtBQUNqRjtBQUU1Qyw2QkFBNkI7QUFDdEIsTUFBTVEsZ0JBQWdCO0lBQ3pCLElBQUksS0FBNkIsSUFBSUMsT0FBT0MsTUFBTSxJQUFJRCxPQUFPQyxNQUFNLENBQUNDLFNBQVMsRUFBRTtRQUM3RSxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNSCxPQUFPQyxNQUFNLENBQUNHLE9BQU87WUFDNUNDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JILFNBQVNJLFNBQVMsQ0FBQ0MsUUFBUTtZQUMvRCxPQUFPTCxTQUFTSSxTQUFTLENBQUNDLFFBQVE7UUFDcEMsRUFBRSxPQUFPQyxLQUFLO1lBQ1pKLFFBQVFLLEtBQUssQ0FBQyxzQkFBc0JEO1FBQ3RDO0lBQ0YsT0FBTztRQUNMRSxNQUFNO0lBQ1I7QUFDRixFQUFFO0FBQ0Ysa0JBQWtCO0FBQ1gsTUFBTUMsV0FBVyxPQUFPTCxXQUFXTSxRQUFRQztJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsYUFBYSxJQUFJdkIsc0RBQVNBLENBQUNlO1FBQ2pDLE1BQU1TLFdBQVdoQixPQUFPQyxNQUFNLEVBQUUsaUJBQWlCO1FBRWpELE1BQU1lLFNBQVNaLE9BQU8sSUFBSSxvQkFBb0I7UUFDOUMsTUFBTWEsa0JBQWtCRCxTQUFTVCxTQUFTO1FBRTFDLE1BQU0sRUFBRVcsU0FBUyxFQUFFLEdBQUcsTUFBTXBCLHFEQUFVQSxDQUFDcUIsa0JBQWtCO1FBRXpELE1BQU1DLGNBQWMsSUFBSXZCLHdEQUFXQSxDQUFDO1lBQ2xDd0IsaUJBQWlCSDtZQUNqQkksVUFBVUw7UUFDWixHQUFHTSxHQUFHLENBQ0o1QiwwREFBYUEsQ0FBQzZCLFFBQVEsQ0FBQztZQUNyQlQsWUFBWUU7WUFDWlEsVUFBVVY7WUFDVlcsVUFBVWIsU0FBUyxJQUFJbkIsNkRBQWdCQSxHQUFHO1FBQzVDO1FBR0YsdUJBQXVCO1FBQ3ZCLE1BQU1zQixTQUFTVyxlQUFlLENBQUNQO1FBRS9CLHVCQUF1QjtRQUN2QixNQUFNUSxZQUFZLE1BQU05QixxREFBVUEsQ0FBQytCLGVBQWUsQ0FBQ1QsYUFBYTtZQUFDSDtTQUFnQjtRQUNqRlosUUFBUUMsR0FBRyxDQUFDLDBCQUFvQyxPQUFWc0I7UUFFdEMsMEJBQTBCO1FBQzFCLE1BQU05QixxREFBVUEsQ0FBQ2dDLGtCQUFrQixDQUFDRixXQUFXO1FBQy9DdkIsUUFBUUMsR0FBRyxDQUFDO1FBRVosT0FBTyxPQUFPLHlDQUF5QztJQUN6RCxFQUFFLE9BQU9JLE9BQU87UUFDZEwsUUFBUUssS0FBSyxDQUFDLHVCQUF1QkE7UUFDckMsT0FBTztJQUNUO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc29sYW5hLmpzP2E4NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdGlvbiwgUHVibGljS2V5LCBjbHVzdGVyQXBpVXJsLCBMQU1QT1JUU19QRVJfU09MLCBTeXN0ZW1Qcm9ncmFtLEtleXBhaXIsIFRyYW5zYWN0aW9uIH0gZnJvbSAnQHNvbGFuYS93ZWIzLmpzJztcclxuaW1wb3J0IHsgY29ubmVjdGlvbiB9IGZyb20gJy4vc29sYW5hQ29uZmlnJztcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGNvbm5lY3Qgd2FsbGV0XHJcbmV4cG9ydCBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LnNvbGFuYSAmJiB3aW5kb3cuc29sYW5hLmlzUGhhbnRvbSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LnNvbGFuYS5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byB3YWxsZXQ6JywgcmVzcG9uc2UucHVibGljS2V5LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5wdWJsaWNLZXkudG9TdHJpbmcoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvbm5lY3Rpb24gZmFpbGVkOlwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlBoYW50b20gd2FsbGV0IG5vdCBmb3VuZCEgUGxlYXNlIGluc3RhbGwgdGhlIFBoYW50b20gd2FsbGV0IGV4dGVuc2lvbi5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICAvLyBzb2xhbmFDb25maWcuanNcclxuICBleHBvcnQgY29uc3QgZmxpcENvaW4gPSBhc3luYyAocHVibGljS2V5LCBhbW91bnQsIHNpZGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZyb21QdWJrZXkgPSBuZXcgUHVibGljS2V5KHB1YmxpY0tleSk7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gd2luZG93LnNvbGFuYTsgLy8gUGhhbnRvbSB3YWxsZXRcclxuICBcclxuICAgICAgYXdhaXQgcHJvdmlkZXIuY29ubmVjdCgpOyAvLyBDb25uZWN0IHRvIHdhbGxldFxyXG4gICAgICBjb25zdCB3YWxsZXRQdWJsaWNLZXkgPSBwcm92aWRlci5wdWJsaWNLZXk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHsgYmxvY2toYXNoIH0gPSBhd2FpdCBjb25uZWN0aW9uLmdldExhdGVzdEJsb2NraGFzaCgpO1xyXG4gIFxyXG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbih7XHJcbiAgICAgICAgcmVjZW50QmxvY2toYXNoOiBibG9ja2hhc2gsXHJcbiAgICAgICAgZmVlUGF5ZXI6IHdhbGxldFB1YmxpY0tleVxyXG4gICAgICB9KS5hZGQoXHJcbiAgICAgICAgU3lzdGVtUHJvZ3JhbS50cmFuc2Zlcih7XHJcbiAgICAgICAgICBmcm9tUHVia2V5OiB3YWxsZXRQdWJsaWNLZXksXHJcbiAgICAgICAgICB0b1B1YmtleTogZnJvbVB1YmtleSwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCByZWNpcGllbnRcclxuICAgICAgICAgIGxhbXBvcnRzOiBhbW91bnQgKiAyICogTEFNUE9SVFNfUEVSX1NPTCAvIDEwMCwgLy8gQWRqdXN0IGFzIG5lY2Vzc2FyeVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICAgIC8vIFNpZ24gdGhlIHRyYW5zYWN0aW9uXHJcbiAgICAgIGF3YWl0IHByb3ZpZGVyLnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XHJcbiAgXHJcbiAgICAgIC8vIFNlbmQgdGhlIHRyYW5zYWN0aW9uXHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGNvbm5lY3Rpb24uc2VuZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLCBbd2FsbGV0UHVibGljS2V5XSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBUcmFuc2FjdGlvbiBzaWduYXR1cmU6ICR7c2lnbmF0dXJlfWApO1xyXG4gIFxyXG4gICAgICAvLyBDb25maXJtIHRoZSB0cmFuc2FjdGlvblxyXG4gICAgICBhd2FpdCBjb25uZWN0aW9uLmNvbmZpcm1UcmFuc2FjdGlvbihzaWduYXR1cmUsICdjb25maXJtZWQnKTtcclxuICAgICAgY29uc29sZS5sb2coJ1RyYW5zYWN0aW9uIGNvbmZpcm1lZC4nKTtcclxuICBcclxuICAgICAgcmV0dXJuICd3aW4nOyAvLyBBZGp1c3QgYmFzZWQgb24gYWN0dWFsIGNvaW4gZmxpcCBsb2dpY1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRyYW5zYWN0aW9uIGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gJ2Vycm9yJztcclxuICAgIH1cclxuICB9OyJdLCJuYW1lcyI6WyJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiY2x1c3RlckFwaVVybCIsIkxBTVBPUlRTX1BFUl9TT0wiLCJTeXN0ZW1Qcm9ncmFtIiwiS2V5cGFpciIsIlRyYW5zYWN0aW9uIiwiY29ubmVjdGlvbiIsImNvbm5lY3RXYWxsZXQiLCJ3aW5kb3ciLCJzb2xhbmEiLCJpc1BoYW50b20iLCJyZXNwb25zZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwicHVibGljS2V5IiwidG9TdHJpbmciLCJlcnIiLCJlcnJvciIsImFsZXJ0IiwiZmxpcENvaW4iLCJhbW91bnQiLCJzaWRlIiwiZnJvbVB1YmtleSIsInByb3ZpZGVyIiwid2FsbGV0UHVibGljS2V5IiwiYmxvY2toYXNoIiwiZ2V0TGF0ZXN0QmxvY2toYXNoIiwidHJhbnNhY3Rpb24iLCJyZWNlbnRCbG9ja2hhc2giLCJmZWVQYXllciIsImFkZCIsInRyYW5zZmVyIiwidG9QdWJrZXkiLCJsYW1wb3J0cyIsInNpZ25UcmFuc2FjdGlvbiIsInNpZ25hdHVyZSIsInNlbmRUcmFuc2FjdGlvbiIsImNvbmZpcm1UcmFuc2FjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/solana.js\n"));

/***/ })

});