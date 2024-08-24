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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web */ \"(app-pages-browser)/./node_modules/lottie-web/build/player/lottie.js\");\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solana */ \"(app-pages-browser)/./src/app/components/solana.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/styled */ \"(app-pages-browser)/./node_modules/@emotion/styled/dist/emotion-styled.browser.development.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background: #ff4d4d;\\n  border: none;\\n  border-radius: 50px;\\n  color: white;\\n  font-size: 18px;\\n  padding: 10px 30px;\\n  margin: 10px;\\n  cursor: pointer;\\n  transition: background 0.3s ease;\\n\\n  &:hover {\\n    background: #ff3333;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  margintop : 20px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n  margin-right: 10px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '*[_type == \"skill\"]'\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Button = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.button)(_templateObject());\n_c = Button;\nconst ButtonWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = ButtonWrapper;\nconst Input = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].input(_templateObject2());\n_c2 = Input;\nconst Select = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__[\"default\"].select(_templateObject3());\n_c3 = Select;\nasync function getData() {\n    // Replace this with your actual client fetch logic\n    return client.fetch(groq(_templateObject4()));\n}\nfunction Skills() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const animationData = __webpack_require__(/*! ../../../public/assets/hello.json */ \"(app-pages-browser)/./public/assets/hello.json\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        lottie_web__WEBPACK_IMPORTED_MODULE_3___default().loadAnimation({\n            container: container.current,\n            renderer: \"svg\",\n            loop: true,\n            autoplay: true,\n            animationData: animationData\n        });\n    }, [\n        animationData\n    ]);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getData().then((data)=>{\n            setPosts(data);\n        }).catch((error)=>{\n            console.error(\"Error fetching posts:\", error);\n        });\n    }, []);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [side, setSide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"heads\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleConnectWallet = async ()=>{\n        const address = await (0,_solana__WEBPACK_IMPORTED_MODULE_4__.connectWallet)();\n        setWalletAddress(address);\n    };\n    const handleFlip = async ()=>{\n        const result = await (0,_solana__WEBPACK_IMPORTED_MODULE_4__.flipCoin)(walletAddress, amount, side);\n        setResult(result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"pt-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                className: \"tracking-[20px] text-center uppercase text-white text-2xl\",\n                children: \"Let's Start\"\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ButtonWrapper, {\n                children: !walletAddress ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                    onClick: handleConnectWallet,\n                    whileHover: {\n                        scale: 1.1\n                    },\n                    whileTap: {\n                        scale: 0.9\n                    },\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            transition: {\n                                delay: 0.3\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                                    type: \"number\",\n                                    value: amount,\n                                    onChange: (e)=>setAmount(e.target.value),\n                                    placeholder: \"Amount to risk\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Select, {\n                                    value: side,\n                                    onChange: (e)=>setSide(e.target.value),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"heads\",\n                                            children: \"Heads\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"tails\",\n                                            children: \"Tails\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                            onClick: handleFlip,\n                            whileHover: {\n                                scale: 1.1\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            children: \"Flip Coin\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this),\n                        result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.p, {\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1\n                            },\n                            transition: {\n                                delay: 0.5\n                            },\n                            children: result === \"win\" ? \"You won!\" : \"You lost.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                            lineNumber: 133,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"md:w-1/2 z-auto pt-2 md:mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        ref: container\n                    }, void 0, false, {\n                        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                    lineNumber: 146,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\vs study\\\\CryptoSwapApp\\\\coinflip\\\\src\\\\app\\\\components\\\\Skills.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"O4Gb9hnGIVZ+BrNInd+ASMD+PLs=\");\n_c4 = Skills;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"ButtonWrapper\");\n$RefreshReg$(_c2, \"Input\");\n$RefreshReg$(_c3, \"Select\");\n$RefreshReg$(_c4, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ta2lsbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRDtBQUMzQjtBQUNtQjtBQUNaO0FBQ0Y7QUFFckMsTUFBTVMsU0FBU0QsMkRBQU1BLENBQUNELGlEQUFNQSxDQUFDRyxNQUFNO0tBQTdCRDtBQWdCTixNQUFNRSxnQkFBZ0JILHVEQUFNQSxDQUFDSSxHQUFHO01BQTFCRDtBQVFOLE1BQU1FLFFBQVFMLHVEQUFNQSxDQUFDTSxLQUFLO01BQXBCRDtBQVFOLE1BQU1FLFNBQVNQLHVEQUFNQSxDQUFDUSxNQUFNO01BQXRCRDtBQU9OLGVBQWVFO0lBQ2IsbURBQW1EO0lBQ25ELE9BQU9DLE9BQU9DLEtBQUssQ0FBQ0M7QUFDdEI7QUFFQSxTQUFTQzs7SUFDUCxNQUFNQyxZQUFZcEIsNkNBQU1BLENBQUM7SUFDekIsTUFBTXFCLGdCQUFnQkMsbUJBQU9BLENBQUMseUZBQW1DO0lBRWpFdkIsZ0RBQVNBLENBQUM7UUFDUkcsK0RBQW9CLENBQUM7WUFDbkJrQixXQUFXQSxVQUFVSSxPQUFPO1lBQzVCQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsVUFBVTtZQUNWTixlQUFlQTtRQUNqQjtJQUNGLEdBQUc7UUFBQ0E7S0FBYztJQUVsQixNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBRzVCLCtDQUFRQSxDQUFDLEVBQUU7SUFDckNGLGdEQUFTQSxDQUFDO1FBQ1JnQixVQUNHZSxJQUFJLENBQUMsQ0FBQ0M7WUFDTEYsU0FBU0U7UUFDWCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNFLGVBQWVDLGlCQUFpQixHQUFHbkMsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDb0MsUUFBUUMsVUFBVSxHQUFHckMsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDc0MsTUFBTUMsUUFBUSxHQUFHdkMsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDd0MsUUFBUUMsVUFBVSxHQUFHekMsK0NBQVFBLENBQUM7SUFFckMsTUFBTTBDLHNCQUFzQjtRQUMxQixNQUFNQyxVQUFVLE1BQU16QyxzREFBYUE7UUFDbkNpQyxpQkFBaUJRO0lBQ25CO0lBRUEsTUFBTUMsYUFBYTtRQUNqQixNQUFNSixTQUFTLE1BQU1yQyxpREFBUUEsQ0FBQytCLGVBQWVFLFFBQVFFO1FBQ3JERyxVQUFVRDtJQUNaO0lBRUEscUJBQ0UsOERBQUMvQjtRQUFJb0MsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE0RDs7Ozs7OzBCQUkxRSw4REFBQ3JDOzBCQUNFLENBQUMwQiw4QkFDQSw4REFBQzVCO29CQUNDeUMsU0FBU0w7b0JBQ1RNLFlBQVk7d0JBQUVDLE9BQU87b0JBQUk7b0JBQ3pCQyxVQUFVO3dCQUFFRCxPQUFPO29CQUFJOzhCQUN4Qjs7Ozs7eUNBSUQ7O3NDQUNFLDhEQUFDN0MsaURBQU1BLENBQUNLLEdBQUc7NEJBQ1QwQyxTQUFTO2dDQUFFQyxTQUFTOzRCQUFFOzRCQUN0QkMsU0FBUztnQ0FBRUQsU0FBUzs0QkFBRTs0QkFDdEJFLFlBQVk7Z0NBQUVDLE9BQU87NEJBQUk7OzhDQUV6Qiw4REFBQzdDO29DQUNDOEMsTUFBSztvQ0FDTEMsT0FBT3JCO29DQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsVUFBVXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDekNJLGFBQVk7Ozs7Ozs4Q0FFZCw4REFBQ2pEO29DQUFPNkMsT0FBT25CO29DQUFNb0IsVUFBVSxDQUFDQyxJQUFNcEIsUUFBUW9CLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7c0RBQzFELDhEQUFDSzs0Q0FBT0wsT0FBTTtzREFBUTs7Ozs7O3NEQUN0Qiw4REFBQ0s7NENBQU9MLE9BQU07c0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUIsOERBQUNuRDs0QkFDQ3lDLFNBQVNIOzRCQUNUSSxZQUFZO2dDQUFFQyxPQUFPOzRCQUFJOzRCQUN6QkMsVUFBVTtnQ0FBRUQsT0FBTzs0QkFBSTtzQ0FDeEI7Ozs7Ozt3QkFHQVQsd0JBQ0MsOERBQUNwQyxpREFBTUEsQ0FBQzJELENBQUM7NEJBQ1BaLFNBQVM7Z0NBQUVDLFNBQVM7NEJBQUU7NEJBQ3RCQyxTQUFTO2dDQUFFRCxTQUFTOzRCQUFFOzRCQUN0QkUsWUFBWTtnQ0FBRUMsT0FBTzs0QkFBSTtzQ0FFeEJmLFdBQVcsUUFBUSxhQUFhOzs7Ozs7Ozs7Ozs7OzBCQU8zQyw4REFBQy9CO2dCQUFJb0MsV0FBVTswQkFDYiw0RUFBQ3BDO29CQUFJb0MsV0FBVTs4QkFDYiw0RUFBQ3BDO3dCQUFJdUQsS0FBSzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBcEdTRDtNQUFBQTtBQXNHVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2tpbGxzLmpzPzRkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbG90dGllIGZyb20gXCJsb3R0aWUtd2ViXCI7XG5pbXBvcnQgeyBjb25uZWN0V2FsbGV0LCBmbGlwQ29pbiB9IGZyb20gXCIuL3NvbGFuYVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQobW90aW9uLmJ1dHRvbilgXG4gIGJhY2tncm91bmQ6ICNmZjRkNGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmZjMzMzM7XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbnRvcCA6IDIwcHg7XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuYDtcblxuY29uc3QgU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbmA7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gIC8vIFJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgYWN0dWFsIGNsaWVudCBmZXRjaCBsb2dpY1xuICByZXR1cm4gY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcInNraWxsXCJdYCk7XG59XG5cbmZ1bmN0aW9uIFNraWxscygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBhbmltYXRpb25EYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uL3B1YmxpYy9hc3NldHMvaGVsbG8uanNvblwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvdHRpZS5sb2FkQW5pbWF0aW9uKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLmN1cnJlbnQsXG4gICAgICByZW5kZXJlcjogXCJzdmdcIixcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEsXG4gICAgfSk7XG4gIH0sIFthbmltYXRpb25EYXRhXSk7XG5cbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0RGF0YSgpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRQb3N0cyhkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwb3N0czpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbc2lkZSwgc2V0U2lkZV0gPSB1c2VTdGF0ZShcImhlYWRzXCIpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgY29ubmVjdFdhbGxldCgpO1xuICAgIHNldFdhbGxldEFkZHJlc3MoYWRkcmVzcyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmxpcCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmbGlwQ29pbih3YWxsZXRBZGRyZXNzLCBhbW91bnQsIHNpZGUpO1xuICAgIHNldFJlc3VsdChyZXN1bHQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zMlwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRyYWNraW5nLVsyMHB4XSB0ZXh0LWNlbnRlciB1cHBlcmNhc2UgdGV4dC13aGl0ZSB0ZXh0LTJ4bFwiPlxuICAgICAgICBMZXQncyBTdGFydFxuICAgICAgPC9oMz5cblxuICAgICAgPEJ1dHRvbldyYXBwZXI+XG4gICAgICAgIHshd2FsbGV0QWRkcmVzcyA/IChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb25uZWN0V2FsbGV0fVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjMgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbW91bnQgdG8gcmlza1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e3NpZGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2lkZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoZWFkc1wiPkhlYWRzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRhaWxzXCI+VGFpbHM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZsaXB9XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZsaXAgQ29pblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7cmVzdWx0ICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC41IH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cmVzdWx0ID09PSBcIndpblwiID8gXCJZb3Ugd29uIVwiIDogXCJZb3UgbG9zdC5cIn1cbiAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0J1dHRvbldyYXBwZXI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWF4LXctNnhsIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgei1hdXRvIHB0LTIgbWQ6bXQtMFwiPlxuICAgICAgICAgIDxkaXYgcmVmPXtjb250YWluZXJ9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImxvdHRpZSIsImNvbm5lY3RXYWxsZXQiLCJmbGlwQ29pbiIsIm1vdGlvbiIsInN0eWxlZCIsIkJ1dHRvbiIsImJ1dHRvbiIsIkJ1dHRvbldyYXBwZXIiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiU2VsZWN0Iiwic2VsZWN0IiwiZ2V0RGF0YSIsImNsaWVudCIsImZldGNoIiwiZ3JvcSIsIlNraWxscyIsImNvbnRhaW5lciIsImFuaW1hdGlvbkRhdGEiLCJyZXF1aXJlIiwibG9hZEFuaW1hdGlvbiIsImN1cnJlbnQiLCJyZW5kZXJlciIsImxvb3AiLCJhdXRvcGxheSIsInBvc3RzIiwic2V0UG9zdHMiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJzaWRlIiwic2V0U2lkZSIsInJlc3VsdCIsInNldFJlc3VsdCIsImhhbmRsZUNvbm5lY3RXYWxsZXQiLCJhZGRyZXNzIiwiaGFuZGxlRmxpcCIsImNsYXNzTmFtZSIsImgzIiwib25DbGljayIsIndoaWxlSG92ZXIiLCJzY2FsZSIsIndoaWxlVGFwIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvcHRpb24iLCJwIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Skills.js\n"));

/***/ })

});