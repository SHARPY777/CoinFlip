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

/***/ "(app-pages-browser)/./src/app/components/Skills.js":
/*!**************************************!*\
  !*** ./src/app/components/Skills.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ \"(app-pages-browser)/./node_modules/lottie-web/build/player/lottie.js\");\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solana */ \"(app-pages-browser)/./src/app/components/solana.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ \"(app-pages-browser)/./node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background: darkblue;\\n  border: none;\\n  border-radius: 50px;\\n  color: white;\\n  font-size: 18px;\\n  padding: 10px 30px;\\n  margin: 10px;\\n  cursor: pointer;\\n  transition: background 0.3s ease;\\n\\n  &:hover {\\n    background: blue;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  margin-top: 40px; \\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n  margin-right: 10px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Button = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.button)(_templateObject());\n_c = Button;\nconst ButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = ButtonWrapper;\nconst Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].input(_templateObject2());\n_c2 = Input;\nconst Select = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].select(_templateObject3());\n_c3 = Select;\nfunction Skills() {\n    _s();\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"heads\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleConnectWallet = async ()=>{\n        const address = await (0,_solana__WEBPACK_IMPORTED_MODULE_4__.connectWallet)();\n        setWalletAddress(address);\n    };\n    const handleFlip = async ()=>{\n        const result = await (0,_solana__WEBPACK_IMPORTED_MODULE_4__.flipCoin)(walletAddress, amount, side);\n        setResult(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"pt-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"tracking-[20px] text-center uppercase text-white text-2xl\",\n                children: \"Let's Start\"\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonWrapper, {\n                children: !walletAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                    onClick: handleConnectWallet,\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            transition: {\n                                delay: 0.3\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                                    type: \"number\",\n                                    value: amount,\n                                    onChange: (e)=>setAmount(e.target.value),\n                                    placeholder: \"Amount to risk\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Select, {\n                                    value: side,\n                                    onChange: (e)=>setSide(e.target.value),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"heads\",\n                                            children: \"Heads\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"tails\",\n                                            children: \"Tails\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                            onClick: handleFlip,\n                            whileHover: {\n                                scale: 1.1\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: \"Flip Coin\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this),\n                        result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            transition: {\n                                delay: 0.5\n                            },\n                            children: result === \"win\" ? \"You won!\" : \"You lost.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"TDSHMGMwGM3Rp7inNQ+eYHAOOhg=\");\n_c4 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"ButtonWrapper\");\n$RefreshReg$(_c2, \"Input\");\n$RefreshReg$(_c3, \"Select\");\n$RefreshReg$(_c4, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ta2lsbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRDtBQUMzQjtBQUNtQjtBQUNaO0FBQ0Y7QUFFckMsTUFBTVMsU0FBU0QsMkRBQU1BLENBQUNELGlEQUFNQSxDQUFDRyxNQUFNO0tBQTdCRDtBQWVOLE1BQU1FLGdCQUFnQkgsdURBQU1BLENBQUNJLEdBQUc7TUFBMUJEO0FBU04sTUFBTUUsUUFBUUwsdURBQU1BLENBQUNNLEtBQUs7TUFBcEJEO0FBUU4sTUFBTUUsU0FBU1AsdURBQU1BLENBQUNRLE1BQU07TUFBdEJEO0FBT04sU0FBU0U7O0lBR1AsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2lCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ21CLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ3FCLFFBQVFDLFVBQVUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU11QixzQkFBc0I7UUFDMUIsTUFBTUMsVUFBVSxNQUFNdEIsc0RBQWFBO1FBQ25DYyxpQkFBaUJRO0lBQ25CO0lBRUEsTUFBTUMsYUFBYTtRQUNqQixNQUFNSixTQUFTLE1BQU1sQixpREFBUUEsQ0FBQ1ksZUFBZUUsUUFBUUU7UUFDckRHLFVBQVVEO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ1o7UUFBSWlCLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBNEQ7Ozs7OzswQkFJMUUsOERBQUNsQjswQkFDRSxDQUFDTyw4QkFDQSw4REFBQ1Q7b0JBQ0NzQixTQUFTTDtvQkFDVE0sWUFBWTt3QkFBRUMsT0FBTztvQkFBSTtvQkFDekJDLFVBQVU7d0JBQUVELE9BQU87b0JBQUk7OEJBQ3hCOzs7Ozt5Q0FJRDs7c0NBQ0UsOERBQUMxQixpREFBTUEsQ0FBQ0ssR0FBRzs0QkFDVHVCLFNBQVM7Z0NBQUVDLFNBQVM7NEJBQUU7NEJBQ3RCQyxTQUFTO2dDQUFFRCxTQUFTOzRCQUFFOzRCQUN0QkUsWUFBWTtnQ0FBRUMsT0FBTzs0QkFBSTs7OENBRXpCLDhEQUFDMUI7b0NBQ0MyQixNQUFLO29DQUNMQyxPQUFPckI7b0NBQ1BzQixVQUFVLENBQUNDLElBQU10QixVQUFVc0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUN6Q0ksYUFBWTs7Ozs7OzhDQUVkLDhEQUFDOUI7b0NBQU8wQixPQUFPbkI7b0NBQU1vQixVQUFVLENBQUNDLElBQU1wQixRQUFRb0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOztzREFDMUQsOERBQUNLOzRDQUFPTCxPQUFNO3NEQUFROzs7Ozs7c0RBQ3RCLDhEQUFDSzs0Q0FBT0wsT0FBTTtzREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUcxQiw4REFBQ2hDOzRCQUNDc0IsU0FBU0g7NEJBQ1RJLFlBQVk7Z0NBQUVDLE9BQU87NEJBQUk7NEJBQ3pCQyxVQUFVO2dDQUFFRCxPQUFPOzRCQUFJO3NDQUN4Qjs7Ozs7O3dCQUdBVCx3QkFDQyw4REFBQ2pCLGlEQUFNQSxDQUFDd0MsQ0FBQzs0QkFDUFosU0FBUztnQ0FBRUMsU0FBUzs0QkFBRTs0QkFDdEJDLFNBQVM7Z0NBQUVELFNBQVM7NEJBQUU7NEJBQ3RCRSxZQUFZO2dDQUFFQyxPQUFPOzRCQUFJO3NDQUV4QmYsV0FBVyxRQUFRLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakQ7R0ExRVNQO01BQUFBO0FBNEVULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ta2lsbHMuanM/NGQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb3R0aWUgZnJvbSBcImxvdHRpZS13ZWJcIjtcbmltcG9ydCB7IGNvbm5lY3RXYWxsZXQsIGZsaXBDb2luIH0gZnJvbSBcIi4vc29sYW5hXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZChtb3Rpb24uYnV0dG9uKWBcbiAgYmFja2dyb3VuZDogZGFya2JsdWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gIH1cbmA7XG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA0MHB4OyBcbmA7XG5cblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbmA7XG5cbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5mdW5jdGlvbiBTa2lsbHMoKSB7XG4gIFxuXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaWRlLCBzZXRTaWRlXSA9IHVzZVN0YXRlKFwiaGVhZHNcIik7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBjb25uZWN0V2FsbGV0KCk7XG4gICAgc2V0V2FsbGV0QWRkcmVzcyhhZGRyZXNzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGbGlwID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZsaXBDb2luKHdhbGxldEFkZHJlc3MsIGFtb3VudCwgc2lkZSk7XG4gICAgc2V0UmVzdWx0KHJlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTMyXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidHJhY2tpbmctWzIwcHhdIHRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIHRleHQtMnhsXCI+XG4gICAgICAgIExldCdzIFN0YXJ0XG4gICAgICA8L2gzPlxuXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgeyF3YWxsZXRBZGRyZXNzID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbm5lY3RXYWxsZXR9XG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFtb3VudCB0byByaXNrXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17c2lkZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRTaWRlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhlYWRzXCI+SGVhZHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGFpbHNcIj5UYWlsczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmxpcH1cbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRmxpcCBDb2luXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHtyZXN1bHQgJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtyZXN1bHQgPT09IFwid2luXCIgPyBcIllvdSB3b24hXCIgOiBcIllvdSBsb3N0LlwifVxuICAgICAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cblxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJsb3R0aWUiLCJjb25uZWN0V2FsbGV0IiwiZmxpcENvaW4iLCJtb3Rpb24iLCJzdHlsZWQiLCJCdXR0b24iLCJidXR0b24iLCJCdXR0b25XcmFwcGVyIiwiZGl2IiwiSW5wdXQiLCJpbnB1dCIsIlNlbGVjdCIsInNlbGVjdCIsIlNraWxscyIsIndhbGxldEFkZHJlc3MiLCJzZXRXYWxsZXRBZGRyZXNzIiwiYW1vdW50Iiwic2V0QW1vdW50Iiwic2lkZSIsInNldFNpZGUiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJoYW5kbGVDb25uZWN0V2FsbGV0IiwiYWRkcmVzcyIsImhhbmRsZUZsaXAiLCJjbGFzc05hbWUiLCJoMyIsIm9uQ2xpY2siLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ3aGlsZVRhcCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib3B0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Skills.js\n"));

/***/ })

});