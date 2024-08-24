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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ \"(app-pages-browser)/./node_modules/lottie-web/build/player/lottie.js\");\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solana */ \"(app-pages-browser)/./src/app/components/solana.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ \"(app-pages-browser)/./node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background: darkblue;\\n  border: none;\\n  border-radius: 50px;\\n  color: white;\\n  font-size: 18px;\\n  padding: 10px 30px;\\n  margin: 10px;\\n  cursor: pointer;\\n  transition: background 0.3s ease;\\n\\n  &:hover {\\n    background: blue;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  margin-top: 40px; \\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n  margin-right: 10px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Button = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.button)(_templateObject());\n_c = Button;\nconst ButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = ButtonWrapper;\nconst Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].input(_templateObject2());\n_c2 = Input;\nconst Select = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].select(_templateObject3());\n_c3 = Select;\nfunction Skills() {\n    _s();\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"heads\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleConnectWallet = async ()=>{\n        const address = await (0,_solana__WEBPACK_IMPORTED_MODULE_4__.connectWallet)();\n        setWalletAddress(address);\n    };\n    const handleFlip = async ()=>{\n        const flipResult = await (0,_solana__WEBPACK_IMPORTED_MODULE_4__.flipCoin)(walletAddress, amount, side);\n        setResult(flipResult);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"pt-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"tracking-[20px] text-center uppercase text-white text-2xl\",\n                children: \"Let's Start\"\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonWrapper, {\n                children: !walletAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                    onClick: handleConnectWallet,\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            transition: {\n                                delay: 0.3\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                                    type: \"number\",\n                                    value: amount,\n                                    onChange: (e)=>setAmount(e.target.value),\n                                    placeholder: \"Amount to risk\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Select, {\n                                    value: side,\n                                    onChange: (e)=>setSide(e.target.value),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"heads\",\n                                            children: \"Heads\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"tails\",\n                                            children: \"Tails\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                            onClick: handleFlip,\n                            whileHover: {\n                                scale: 1.1\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: \"Flip Coin\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this),\n                        result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            transition: {\n                                delay: 0.5\n                            },\n                            children: result === \"win\" ? \"You won!\" : \"You lost.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 107,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"TDSHMGMwGM3Rp7inNQ+eYHAOOhg=\");\n_c4 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"ButtonWrapper\");\n$RefreshReg$(_c2, \"Input\");\n$RefreshReg$(_c3, \"Select\");\n$RefreshReg$(_c4, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ta2lsbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRDtBQUMzQjtBQUNtQjtBQUNaO0FBQ0Y7QUFFckMsTUFBTVMsU0FBU0QsMkRBQU1BLENBQUNELGlEQUFNQSxDQUFDRyxNQUFNO0tBQTdCRDtBQWVOLE1BQU1FLGdCQUFnQkgsdURBQU1BLENBQUNJLEdBQUc7TUFBMUJEO0FBU04sTUFBTUUsUUFBUUwsdURBQU1BLENBQUNNLEtBQUs7TUFBcEJEO0FBUU4sTUFBTUUsU0FBU1AsdURBQU1BLENBQUNRLE1BQU07TUFBdEJEO0FBT04sU0FBU0U7O0lBR1AsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2lCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ21CLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ3FCLFFBQVFDLFVBQVUsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU11QixzQkFBc0I7UUFDMUIsTUFBTUMsVUFBVSxNQUFNdEIsc0RBQWFBO1FBQ25DYyxpQkFBaUJRO0lBQ25CO0lBRUEsTUFBTUMsYUFBYTtRQUNqQixNQUFNQyxhQUFhLE1BQU12QixpREFBUUEsQ0FBQ1ksZUFBZUUsUUFBUUU7UUFDekRHLFVBQVVJO0lBQ1o7SUFHQSxxQkFDRSw4REFBQ2pCO1FBQUlrQixXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTREOzs7Ozs7MEJBSTFFLDhEQUFDbkI7MEJBQ0UsQ0FBQ08sOEJBQ0EsOERBQUNUO29CQUNDdUIsU0FBU047b0JBQ1RPLFlBQVk7d0JBQUVDLE9BQU87b0JBQUk7b0JBQ3pCQyxVQUFVO3dCQUFFRCxPQUFPO29CQUFJOzhCQUN4Qjs7Ozs7eUNBSUQ7O3NDQUNFLDhEQUFDM0IsaURBQU1BLENBQUNLLEdBQUc7NEJBQ1R3QixTQUFTO2dDQUFFQyxTQUFTOzRCQUFFOzRCQUN0QkMsU0FBUztnQ0FBRUQsU0FBUzs0QkFBRTs0QkFDdEJFLFlBQVk7Z0NBQUVDLE9BQU87NEJBQUk7OzhDQUV6Qiw4REFBQzNCO29DQUNDNEIsTUFBSztvQ0FDTEMsT0FBT3RCO29DQUNQdUIsVUFBVSxDQUFDQyxJQUFNdkIsVUFBVXVCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDekNJLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQy9CO29DQUFPMkIsT0FBT3BCO29DQUFNcUIsVUFBVSxDQUFDQyxJQUFNckIsUUFBUXFCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7c0RBQzFELDhEQUFDSzs0Q0FBT0wsT0FBTTtzREFBUTs7Ozs7O3NEQUN0Qiw4REFBQ0s7NENBQU9MLE9BQU07c0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNqQzs0QkFDQ3VCLFNBQVNKOzRCQUNUSyxZQUFZO2dDQUFFQyxPQUFPOzRCQUFJOzRCQUN6QkMsVUFBVTtnQ0FBRUQsT0FBTzs0QkFBSTtzQ0FDeEI7Ozs7Ozt3QkFHQVYsd0JBQ0MsOERBQUNqQixpREFBTUEsQ0FBQ3lDLENBQUM7NEJBQ1BaLFNBQVM7Z0NBQUVDLFNBQVM7NEJBQUU7NEJBQ3RCQyxTQUFTO2dDQUFFRCxTQUFTOzRCQUFFOzRCQUN0QkUsWUFBWTtnQ0FBRUMsT0FBTzs0QkFBSTtzQ0FFeEJoQixXQUFXLFFBQVEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqRDtHQTNFU1A7TUFBQUE7QUE2RVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NraWxscy5qcz80ZDIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvdHRpZSBmcm9tIFwibG90dGllLXdlYlwiO1xuaW1wb3J0IHsgY29ubmVjdFdhbGxldCwgZmxpcENvaW4gfSBmcm9tIFwiLi9zb2xhbmFcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKG1vdGlvbi5idXR0b24pYFxuICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgfVxuYDtcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQwcHg7IFxuYDtcblxuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuYDtcblxuY29uc3QgU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbmA7XG5cbmZ1bmN0aW9uIFNraWxscygpIHtcbiAgXG5cbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NpZGUsIHNldFNpZGVdID0gdXNlU3RhdGUoXCJoZWFkc1wiKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGNvbm5lY3RXYWxsZXQoKTtcbiAgICBzZXRXYWxsZXRBZGRyZXNzKGFkZHJlc3MpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZsaXAgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZmxpcFJlc3VsdCA9IGF3YWl0IGZsaXBDb2luKHdhbGxldEFkZHJlc3MsIGFtb3VudCwgc2lkZSk7XG4gICAgc2V0UmVzdWx0KGZsaXBSZXN1bHQpO1xuICB9O1xuXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMzJcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0cmFja2luZy1bMjBweF0gdGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRleHQtd2hpdGUgdGV4dC0yeGxcIj5cbiAgICAgICAgTGV0J3MgU3RhcnRcbiAgICAgIDwvaDM+XG5cbiAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICB7IXdhbGxldEFkZHJlc3MgPyAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29ubmVjdFdhbGxldH1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvbm5lY3QgV2FsbGV0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4zIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50IHRvIHJpc2tcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtzaWRlfSBvbkNoYW5nZT17KGUpID0+IHNldFNpZGUoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGVhZHNcIj5IZWFkczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0YWlsc1wiPlRhaWxzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGbGlwfVxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBGbGlwIENvaW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAge3Jlc3VsdCAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Jlc3VsdCA9PT0gXCJ3aW5cIiA/IFwiWW91IHdvbiFcIiA6IFwiWW91IGxvc3QuXCJ9XG4gICAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxuXG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImxvdHRpZSIsImNvbm5lY3RXYWxsZXQiLCJmbGlwQ29pbiIsIm1vdGlvbiIsInN0eWxlZCIsIkJ1dHRvbiIsImJ1dHRvbiIsIkJ1dHRvbldyYXBwZXIiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiU2VsZWN0Iiwic2VsZWN0IiwiU2tpbGxzIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJzaWRlIiwic2V0U2lkZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUNvbm5lY3RXYWxsZXQiLCJhZGRyZXNzIiwiaGFuZGxlRmxpcCIsImZsaXBSZXN1bHQiLCJjbGFzc05hbWUiLCJoMyIsIm9uQ2xpY2siLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ3aGlsZVRhcCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib3B0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Skills.js\n"));

/***/ })

});