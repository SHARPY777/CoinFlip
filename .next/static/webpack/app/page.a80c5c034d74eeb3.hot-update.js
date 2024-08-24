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

/***/ "(app-pages-browser)/./src/app/components/coinflip.js":
/*!****************************************!*\
  !*** ./src/app/components/coinflip.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CoinFlip; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solana */ \"(app-pages-browser)/./src/app/components/solana.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"(app-pages-browser)/./node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  // min-height: 100vh;\\n  background: linear-gradient(135deg, #6d5dfc, #b455fa);\\n  color: #fff;\\n  font-family: \"Arial\", sans-serif;\\n  padding: 20px;\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background: #ff4d4d;\\n  border: none;\\n  border-radius: 50px;\\n  color: white;\\n  font-size: 18px;\\n  padding: 10px 30px;\\n  margin: 10px;\\n  cursor: pointer;\\n  transition: background 0.3s ease;\\n\\n  &:hover {\\n    background: #ff3333;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n  margin-right: 10px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = Container;\nconst Button = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button)(_templateObject1());\n_c1 = Button;\nconst Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input(_templateObject2());\n_c2 = Input;\nconst Select = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__[\"default\"].select(_templateObject3());\n_c3 = Select;\nfunction CoinFlip() {\n    _s();\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"heads\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleConnectWallet = async ()=>{\n        const address = await (0,_solana__WEBPACK_IMPORTED_MODULE_3__.connectWallet)();\n        setWalletAddress(address);\n    };\n    const handleFlip = async ()=>{\n        const result = await (0,_solana__WEBPACK_IMPORTED_MODULE_3__.flipCoin)(walletAddress, amount, side);\n        setResult(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h1, {\n                initial: {\n                    y: -250\n                },\n                animate: {\n                    y: 0\n                },\n                transition: {\n                    type: \"spring\",\n                    stiffness: 50\n                },\n                children: \"Coin Flip Game\"\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            !walletAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                onClick: handleConnectWallet,\n                whileHover: {\n                    scale: 1.1\n                },\n                whileTap: {\n                    scale: 0.9\n                },\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 0.3\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                                type: \"number\",\n                                value: amount,\n                                onChange: (e)=>setAmount(e.target.value),\n                                placeholder: \"Amount to risk\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Select, {\n                                value: side,\n                                onChange: (e)=>setSide(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"heads\",\n                                        children: \"Heads\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                        value: \"tails\",\n                                        children: \"Tails\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        onClick: handleFlip,\n                        whileHover: {\n                            scale: 1.1\n                        },\n                        whileTap: {\n                            scale: 0.9\n                        },\n                        children: \"Flip Coin\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this),\n                    result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 0.5\n                        },\n                        children: result === \"win\" ? \"You won!\" : \"You lost.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\coinflip.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(CoinFlip, \"TDSHMGMwGM3Rp7inNQ+eYHAOOhg=\");\n_c4 = CoinFlip;\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"Button\");\n$RefreshReg$(_c2, \"Input\");\n$RefreshReg$(_c3, \"Select\");\n$RefreshReg$(_c4, \"CoinFlip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9jb2luZmxpcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVpQztBQUNrQjtBQUNaO0FBQ0Y7QUFFckMsTUFBTUssWUFBWUQsdURBQU1BLENBQUNFLEdBQUc7S0FBdEJEO0FBWU4sTUFBTUUsU0FBU0gsMkRBQU1BLENBQUNELGlEQUFNQSxDQUFDSyxNQUFNO01BQTdCRDtBQWdCTixNQUFNRSxRQUFRTCx1REFBTUEsQ0FBQ00sS0FBSztNQUFwQkQ7QUFRTixNQUFNRSxTQUFTUCx1REFBTUEsQ0FBQ1EsTUFBTTtNQUF0QkQ7QUFPUyxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDb0IsUUFBUUMsVUFBVSxHQUFHckIsK0NBQVFBLENBQUM7SUFFckMsTUFBTXNCLHNCQUFzQjtRQUMxQixNQUFNQyxVQUFVLE1BQU10QixzREFBYUE7UUFDbkNjLGlCQUFpQlE7SUFDbkI7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCLE1BQU1KLFNBQVMsTUFBTWxCLGlEQUFRQSxDQUFDWSxlQUFlRSxRQUFRRTtRQUNyREcsVUFBVUQ7SUFDWjtJQUVBLHFCQUNFLDhEQUFDZjs7MEJBQ0MsOERBQUNGLGlEQUFNQSxDQUFDc0IsRUFBRTtnQkFDUkMsU0FBUztvQkFBRUMsR0FBRyxDQUFDO2dCQUFJO2dCQUNuQkMsU0FBUztvQkFBRUQsR0FBRztnQkFBRTtnQkFDaEJFLFlBQVk7b0JBQUVDLE1BQU07b0JBQVVDLFdBQVc7Z0JBQUc7MEJBQzdDOzs7Ozs7WUFHQSxDQUFDakIsOEJBQ0EsOERBQUNQO2dCQUNDeUIsU0FBU1Y7Z0JBQ1RXLFlBQVk7b0JBQUVDLE9BQU87Z0JBQUk7Z0JBQ3pCQyxVQUFVO29CQUFFRCxPQUFPO2dCQUFJOzBCQUN4Qjs7Ozs7cUNBSUQ7O2tDQUNFLDhEQUFDL0IsaURBQU1BLENBQUNHLEdBQUc7d0JBQ1RvQixTQUFTOzRCQUFFVSxTQUFTO3dCQUFFO3dCQUN0QlIsU0FBUzs0QkFBRVEsU0FBUzt3QkFBRTt3QkFDdEJQLFlBQVk7NEJBQUVRLE9BQU87d0JBQUk7OzBDQUV6Qiw4REFBQzVCO2dDQUNDcUIsTUFBSztnQ0FDTFEsT0FBT3RCO2dDQUNQdUIsVUFBVSxDQUFDQyxJQUFNdkIsVUFBVXVCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDekNJLGFBQVk7Ozs7OzswQ0FFZCw4REFBQy9CO2dDQUNDMkIsT0FBT3BCO2dDQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsUUFBUXFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7a0RBRXZDLDhEQUFDSzt3Q0FBT0wsT0FBTTtrREFBUTs7Ozs7O2tEQUN0Qiw4REFBQ0s7d0NBQU9MLE9BQU07a0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHMUIsOERBQUMvQjt3QkFDQ3lCLFNBQVNSO3dCQUNUUyxZQUFZOzRCQUFFQyxPQUFPO3dCQUFJO3dCQUN6QkMsVUFBVTs0QkFBRUQsT0FBTzt3QkFBSTtrQ0FDeEI7Ozs7OztvQkFHQWQsd0JBQ0MsOERBQUNqQixpREFBTUEsQ0FBQ3lDLENBQUM7d0JBQ1BsQixTQUFTOzRCQUFFVSxTQUFTO3dCQUFFO3dCQUN0QlIsU0FBUzs0QkFBRVEsU0FBUzt3QkFBRTt3QkFDdEJQLFlBQVk7NEJBQUVRLE9BQU87d0JBQUk7a0NBRXhCakIsV0FBVyxRQUFRLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FBTy9DO0dBMUV3QlA7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2NvaW5mbGlwLmpzPzExYWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0V2FsbGV0LCBmbGlwQ29pbiB9IGZyb20gXCIuL3NvbGFuYVwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZkNWRmYywgI2I0NTVmYSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkKG1vdGlvbi5idXR0b24pYFxyXG4gIGJhY2tncm91bmQ6ICNmZjRkNGQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYzMzMzO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29pbkZsaXAoKSB7XHJcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaWRlLCBzZXRTaWRlXSA9IHVzZVN0YXRlKFwiaGVhZHNcIik7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGNvbm5lY3RXYWxsZXQoKTtcclxuICAgIHNldFdhbGxldEFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmxpcCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZsaXBDb2luKHdhbGxldEFkZHJlc3MsIGFtb3VudCwgc2lkZSk7XHJcbiAgICBzZXRSZXN1bHQocmVzdWx0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPG1vdGlvbi5oMVxyXG4gICAgICAgIGluaXRpYWw9e3sgeTogLTI1MCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgeTogMCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA1MCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgQ29pbiBGbGlwIEdhbWVcclxuICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICAgIHshd2FsbGV0QWRkcmVzcyA/IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0fVxyXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XHJcbiAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ29ubmVjdCBXYWxsZXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgdG8gcmlza1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICB2YWx1ZT17c2lkZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNpZGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhlYWRzXCI+SGVhZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGFpbHNcIj5UYWlsczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmxpcH1cclxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XHJcbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRmxpcCBDb2luXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIHtyZXN1bHQgJiYgKFxyXG4gICAgICAgICAgICA8bW90aW9uLnBcclxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtyZXN1bHQgPT09IFwid2luXCIgPyBcIllvdSB3b24hXCIgOiBcIllvdSBsb3N0LlwifVxyXG4gICAgICAgICAgICA8L21vdGlvbi5wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29ubmVjdFdhbGxldCIsImZsaXBDb2luIiwibW90aW9uIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwiSW5wdXQiLCJpbnB1dCIsIlNlbGVjdCIsInNlbGVjdCIsIkNvaW5GbGlwIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJzaWRlIiwic2V0U2lkZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUNvbm5lY3RXYWxsZXQiLCJhZGRyZXNzIiwiaGFuZGxlRmxpcCIsImgxIiwiaW5pdGlhbCIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJvbkNsaWNrIiwid2hpbGVIb3ZlciIsInNjYWxlIiwid2hpbGVUYXAiLCJvcGFjaXR5IiwiZGVsYXkiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib3B0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/coinflip.js\n"));

/***/ })

});