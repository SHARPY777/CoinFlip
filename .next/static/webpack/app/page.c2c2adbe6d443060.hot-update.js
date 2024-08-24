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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectWallet: function() { return /* binding */ connectWallet; },\n/* harmony export */   flipCoin: function() { return /* binding */ flipCoin; }\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"(app-pages-browser)/./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solanaConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solanaConfig */ \"(app-pages-browser)/./src/app/components/solanaConfig.js\");\n\n\n// Function to connect wallet\nconst connectWallet = async ()=>{\n    if ( true && window.solana && window.solana.isPhantom) {\n        try {\n            const response = await window.solana.connect();\n            console.log(\"Connected to wallet:\", response.publicKey.toString());\n            return response.publicKey.toString();\n        } catch (err) {\n            console.error(\"Connection failed:\", err);\n        }\n    } else {\n        alert(\"Phantom wallet not found! Please install the Phantom wallet extension.\");\n    }\n};\n// solanaConfig.js\nconst flipCoin = async (publicKey, amount, side)=>{\n    try {\n        // Check if Phantom wallet is available\n        if (!window.solana || !window.solana.isPhantom) {\n            throw new Error(\"Phantom wallet not found\");\n        }\n        const provider = window.solana; // Phantom wallet provider\n        await provider.connect(); // Connect to wallet\n        const walletPublicKey = provider.publicKey;\n        // Fetch the latest blockhash\n        const { blockhash } = await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.getLatestBlockhash();\n        // Create a new transaction\n        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.Transaction({\n            recentBlockhash: blockhash,\n            feePayer: walletPublicKey\n        }).add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.SystemProgram.transfer({\n            fromPubkey: walletPublicKey,\n            toPubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey(publicKey),\n            lamports: amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.LAMPORTS_PER_SOL / 100\n        }));\n        // Sign the transaction\n        let signedTransaction;\n        try {\n            signedTransaction = await provider.signTransaction(transaction);\n        } catch (signError) {\n            console.error(\"Signing failed:\", signError);\n            throw new Error(\"Transaction signing failed\");\n        }\n        if (!signedTransaction || !signedTransaction.signature) {\n            throw new Error(\"Transaction is not signed properly\");\n        }\n        // Send the transaction\n        const signature = await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.sendTransaction(signedTransaction, [], {\n            skipPreflight: false\n        });\n        console.log(\"Transaction signature: \".concat(signature));\n        // Confirm the transaction\n        await _solanaConfig__WEBPACK_IMPORTED_MODULE_1__.connection.confirmTransaction(signature, \"confirmed\");\n        console.log(\"Transaction confirmed.\");\n        // Determine win/lose for testing purposes\n        const result = Math.random() > 0.5 ? \"heads\" : \"tails\";\n        return result === side ? \"win\" : \"lose\";\n    } catch (error) {\n        console.error(\"Transaction failed:\", error);\n        return \"error\";\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zb2xhbmEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2SDtBQUNqRjtBQUU1Qyw2QkFBNkI7QUFDdEIsTUFBTVEsZ0JBQWdCO0lBQ3pCLElBQUksS0FBNkIsSUFBSUMsT0FBT0MsTUFBTSxJQUFJRCxPQUFPQyxNQUFNLENBQUNDLFNBQVMsRUFBRTtRQUM3RSxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNSCxPQUFPQyxNQUFNLENBQUNHLE9BQU87WUFDNUNDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JILFNBQVNJLFNBQVMsQ0FBQ0MsUUFBUTtZQUMvRCxPQUFPTCxTQUFTSSxTQUFTLENBQUNDLFFBQVE7UUFDcEMsRUFBRSxPQUFPQyxLQUFLO1lBQ1pKLFFBQVFLLEtBQUssQ0FBQyxzQkFBc0JEO1FBQ3RDO0lBQ0YsT0FBTztRQUNMRSxNQUFNO0lBQ1I7QUFDRixFQUFFO0FBQ0Ysa0JBQWtCO0FBQ1gsTUFBTUMsV0FBVyxPQUFPTCxXQUFXTSxRQUFRQztJQUNoRCxJQUFJO1FBQ0YsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQ2QsT0FBT0MsTUFBTSxJQUFJLENBQUNELE9BQU9DLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFO1lBQzlDLE1BQU0sSUFBSWEsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLFdBQVdoQixPQUFPQyxNQUFNLEVBQUUsMEJBQTBCO1FBRTFELE1BQU1lLFNBQVNaLE9BQU8sSUFBSSxvQkFBb0I7UUFDOUMsTUFBTWEsa0JBQWtCRCxTQUFTVCxTQUFTO1FBRTFDLDZCQUE2QjtRQUM3QixNQUFNLEVBQUVXLFNBQVMsRUFBRSxHQUFHLE1BQU1wQixxREFBVUEsQ0FBQ3FCLGtCQUFrQjtRQUV6RCwyQkFBMkI7UUFDM0IsTUFBTUMsY0FBYyxJQUFJdkIsd0RBQVdBLENBQUM7WUFDbEN3QixpQkFBaUJIO1lBQ2pCSSxVQUFVTDtRQUNaLEdBQUdNLEdBQUcsQ0FDSjVCLDBEQUFhQSxDQUFDNkIsUUFBUSxDQUFDO1lBQ3JCQyxZQUFZUjtZQUNaUyxVQUFVLElBQUlsQyxzREFBU0EsQ0FBQ2U7WUFDeEJvQixVQUFVZCxTQUFTbkIsNkRBQWdCQSxHQUFHO1FBQ3hDO1FBR0YsdUJBQXVCO1FBQ3ZCLElBQUlrQztRQUNKLElBQUk7WUFDRkEsb0JBQW9CLE1BQU1aLFNBQVNhLGVBQWUsQ0FBQ1Q7UUFDckQsRUFBRSxPQUFPVSxXQUFXO1lBQ2xCekIsUUFBUUssS0FBSyxDQUFDLG1CQUFtQm9CO1lBQ2pDLE1BQU0sSUFBSWYsTUFBTTtRQUNsQjtRQUVBLElBQUksQ0FBQ2EscUJBQXFCLENBQUNBLGtCQUFrQkcsU0FBUyxFQUFFO1lBQ3RELE1BQU0sSUFBSWhCLE1BQU07UUFDbEI7UUFFQSx1QkFBdUI7UUFDdkIsTUFBTWdCLFlBQVksTUFBTWpDLHFEQUFVQSxDQUFDa0MsZUFBZSxDQUFDSixtQkFBbUIsRUFBRSxFQUFFO1lBQUVLLGVBQWU7UUFBTTtRQUNqRzVCLFFBQVFDLEdBQUcsQ0FBQywwQkFBb0MsT0FBVnlCO1FBRXRDLDBCQUEwQjtRQUMxQixNQUFNakMscURBQVVBLENBQUNvQyxrQkFBa0IsQ0FBQ0gsV0FBVztRQUMvQzFCLFFBQVFDLEdBQUcsQ0FBQztRQUVaLDBDQUEwQztRQUMxQyxNQUFNNkIsU0FBU0MsS0FBS0MsTUFBTSxLQUFLLE1BQU0sVUFBVTtRQUMvQyxPQUFPRixXQUFXckIsT0FBTyxRQUFRO0lBQ25DLEVBQUUsT0FBT0osT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsdUJBQXVCQTtRQUNyQyxPQUFPO0lBQ1Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zb2xhbmEuanM/YTg3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0aW9uLCBQdWJsaWNLZXksIGNsdXN0ZXJBcGlVcmwsIExBTVBPUlRTX1BFUl9TT0wsIFN5c3RlbVByb2dyYW0sS2V5cGFpciwgVHJhbnNhY3Rpb24gfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xyXG5pbXBvcnQgeyBjb25uZWN0aW9uIH0gZnJvbSAnLi9zb2xhbmFDb25maWcnO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gY29ubmVjdCB3YWxsZXRcclxuZXhwb3J0IGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuc29sYW5hICYmIHdpbmRvdy5zb2xhbmEuaXNQaGFudG9tKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuc29sYW5hLmNvbm5lY3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIHdhbGxldDonLCByZXNwb25zZS5wdWJsaWNLZXkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnB1YmxpY0tleS50b1N0cmluZygpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ29ubmVjdGlvbiBmYWlsZWQ6XCIsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiUGhhbnRvbSB3YWxsZXQgbm90IGZvdW5kISBQbGVhc2UgaW5zdGFsbCB0aGUgUGhhbnRvbSB3YWxsZXQgZXh0ZW5zaW9uLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIHNvbGFuYUNvbmZpZy5qc1xyXG4gIGV4cG9ydCBjb25zdCBmbGlwQ29pbiA9IGFzeW5jIChwdWJsaWNLZXksIGFtb3VudCwgc2lkZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ2hlY2sgaWYgUGhhbnRvbSB3YWxsZXQgaXMgYXZhaWxhYmxlXHJcbiAgICAgIGlmICghd2luZG93LnNvbGFuYSB8fCAhd2luZG93LnNvbGFuYS5pc1BoYW50b20pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BoYW50b20gd2FsbGV0IG5vdCBmb3VuZCcpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gd2luZG93LnNvbGFuYTsgLy8gUGhhbnRvbSB3YWxsZXQgcHJvdmlkZXJcclxuICBcclxuICAgICAgYXdhaXQgcHJvdmlkZXIuY29ubmVjdCgpOyAvLyBDb25uZWN0IHRvIHdhbGxldFxyXG4gICAgICBjb25zdCB3YWxsZXRQdWJsaWNLZXkgPSBwcm92aWRlci5wdWJsaWNLZXk7XHJcbiAgXHJcbiAgICAgIC8vIEZldGNoIHRoZSBsYXRlc3QgYmxvY2toYXNoXHJcbiAgICAgIGNvbnN0IHsgYmxvY2toYXNoIH0gPSBhd2FpdCBjb25uZWN0aW9uLmdldExhdGVzdEJsb2NraGFzaCgpO1xyXG4gICAgICBcclxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IHRyYW5zYWN0aW9uXHJcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKHtcclxuICAgICAgICByZWNlbnRCbG9ja2hhc2g6IGJsb2NraGFzaCxcclxuICAgICAgICBmZWVQYXllcjogd2FsbGV0UHVibGljS2V5XHJcbiAgICAgIH0pLmFkZChcclxuICAgICAgICBTeXN0ZW1Qcm9ncmFtLnRyYW5zZmVyKHtcclxuICAgICAgICAgIGZyb21QdWJrZXk6IHdhbGxldFB1YmxpY0tleSxcclxuICAgICAgICAgIHRvUHVia2V5OiBuZXcgUHVibGljS2V5KHB1YmxpY0tleSksIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgcmVjaXBpZW50IHB1YmxpYyBrZXlcclxuICAgICAgICAgIGxhbXBvcnRzOiBhbW91bnQgKiBMQU1QT1JUU19QRVJfU09MIC8gMTAwLCAvLyBBZGp1c3QgYW1vdW50IGFzIG5lY2Vzc2FyeVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgXHJcbiAgICAgIC8vIFNpZ24gdGhlIHRyYW5zYWN0aW9uXHJcbiAgICAgIGxldCBzaWduZWRUcmFuc2FjdGlvbjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBzaWduZWRUcmFuc2FjdGlvbiA9IGF3YWl0IHByb3ZpZGVyLnNpZ25UcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XHJcbiAgICAgIH0gY2F0Y2ggKHNpZ25FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTaWduaW5nIGZhaWxlZDpcIiwgc2lnbkVycm9yKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zYWN0aW9uIHNpZ25pbmcgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKCFzaWduZWRUcmFuc2FjdGlvbiB8fCAhc2lnbmVkVHJhbnNhY3Rpb24uc2lnbmF0dXJlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc2FjdGlvbiBpcyBub3Qgc2lnbmVkIHByb3Blcmx5Jyk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLy8gU2VuZCB0aGUgdHJhbnNhY3Rpb25cclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgY29ubmVjdGlvbi5zZW5kVHJhbnNhY3Rpb24oc2lnbmVkVHJhbnNhY3Rpb24sIFtdLCB7IHNraXBQcmVmbGlnaHQ6IGZhbHNlIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhgVHJhbnNhY3Rpb24gc2lnbmF0dXJlOiAke3NpZ25hdHVyZX1gKTtcclxuICBcclxuICAgICAgLy8gQ29uZmlybSB0aGUgdHJhbnNhY3Rpb25cclxuICAgICAgYXdhaXQgY29ubmVjdGlvbi5jb25maXJtVHJhbnNhY3Rpb24oc2lnbmF0dXJlLCAnY29uZmlybWVkJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUcmFuc2FjdGlvbiBjb25maXJtZWQuJyk7XHJcbiAgXHJcbiAgICAgIC8vIERldGVybWluZSB3aW4vbG9zZSBmb3IgdGVzdGluZyBwdXJwb3Nlc1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hlYWRzJyA6ICd0YWlscyc7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPT09IHNpZGUgPyAnd2luJyA6ICdsb3NlJztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2FjdGlvbiBmYWlsZWQ6XCIsIGVycm9yKTtcclxuICAgICAgcmV0dXJuICdlcnJvcic7XHJcbiAgICB9XHJcbiAgfTsiXSwibmFtZXMiOlsiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsImNsdXN0ZXJBcGlVcmwiLCJMQU1QT1JUU19QRVJfU09MIiwiU3lzdGVtUHJvZ3JhbSIsIktleXBhaXIiLCJUcmFuc2FjdGlvbiIsImNvbm5lY3Rpb24iLCJjb25uZWN0V2FsbGV0Iiwid2luZG93Iiwic29sYW5hIiwiaXNQaGFudG9tIiwicmVzcG9uc2UiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsInB1YmxpY0tleSIsInRvU3RyaW5nIiwiZXJyIiwiZXJyb3IiLCJhbGVydCIsImZsaXBDb2luIiwiYW1vdW50Iiwic2lkZSIsIkVycm9yIiwicHJvdmlkZXIiLCJ3YWxsZXRQdWJsaWNLZXkiLCJibG9ja2hhc2giLCJnZXRMYXRlc3RCbG9ja2hhc2giLCJ0cmFuc2FjdGlvbiIsInJlY2VudEJsb2NraGFzaCIsImZlZVBheWVyIiwiYWRkIiwidHJhbnNmZXIiLCJmcm9tUHVia2V5IiwidG9QdWJrZXkiLCJsYW1wb3J0cyIsInNpZ25lZFRyYW5zYWN0aW9uIiwic2lnblRyYW5zYWN0aW9uIiwic2lnbkVycm9yIiwic2lnbmF0dXJlIiwic2VuZFRyYW5zYWN0aW9uIiwic2tpcFByZWZsaWdodCIsImNvbmZpcm1UcmFuc2FjdGlvbiIsInJlc3VsdCIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/solana.js\n"));

/***/ })

});