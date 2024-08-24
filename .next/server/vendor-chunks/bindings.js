"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bindings";
exports.ids = ["vendor-chunks/bindings"];
exports.modules = {

/***/ "(ssr)/./node_modules/bindings/bindings.js":
/*!*******************************************!*\
  !*** ./node_modules/bindings/bindings.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/**\n * Module dependencies.\n */ \nvar fs = __webpack_require__(/*! fs */ \"fs\"), path = __webpack_require__(/*! path */ \"path\"), fileURLToPath = __webpack_require__(/*! file-uri-to-path */ \"(ssr)/./node_modules/file-uri-to-path/index.js\"), join = path.join, dirname = path.dirname, exists = fs.accessSync && function(path) {\n    try {\n        fs.accessSync(path);\n    } catch (e) {\n        return false;\n    }\n    return true;\n} || fs.existsSync || path.existsSync, defaults = {\n    arrow: process.env.NODE_BINDINGS_ARROW || \" → \",\n    compiled: process.env.NODE_BINDINGS_COMPILED_DIR || \"compiled\",\n    platform: process.platform,\n    arch: process.arch,\n    nodePreGyp: \"node-v\" + process.versions.modules + \"-\" + process.platform + \"-\" + process.arch,\n    version: process.versions.node,\n    bindings: \"bindings.node\",\n    try: [\n        // node-gyp's linked version in the \"build\" dir\n        [\n            \"module_root\",\n            \"build\",\n            \"bindings\"\n        ],\n        // node-waf and gyp_addon (a.k.a node-gyp)\n        [\n            \"module_root\",\n            \"build\",\n            \"Debug\",\n            \"bindings\"\n        ],\n        [\n            \"module_root\",\n            \"build\",\n            \"Release\",\n            \"bindings\"\n        ],\n        // Debug files, for development (legacy behavior, remove for node v0.9)\n        [\n            \"module_root\",\n            \"out\",\n            \"Debug\",\n            \"bindings\"\n        ],\n        [\n            \"module_root\",\n            \"Debug\",\n            \"bindings\"\n        ],\n        // Release files, but manually compiled (legacy behavior, remove for node v0.9)\n        [\n            \"module_root\",\n            \"out\",\n            \"Release\",\n            \"bindings\"\n        ],\n        [\n            \"module_root\",\n            \"Release\",\n            \"bindings\"\n        ],\n        // Legacy from node-waf, node <= 0.4.x\n        [\n            \"module_root\",\n            \"build\",\n            \"default\",\n            \"bindings\"\n        ],\n        // Production \"Release\" buildtype binary (meh...)\n        [\n            \"module_root\",\n            \"compiled\",\n            \"version\",\n            \"platform\",\n            \"arch\",\n            \"bindings\"\n        ],\n        // node-qbs builds\n        [\n            \"module_root\",\n            \"addon-build\",\n            \"release\",\n            \"install-root\",\n            \"bindings\"\n        ],\n        [\n            \"module_root\",\n            \"addon-build\",\n            \"debug\",\n            \"install-root\",\n            \"bindings\"\n        ],\n        [\n            \"module_root\",\n            \"addon-build\",\n            \"default\",\n            \"install-root\",\n            \"bindings\"\n        ],\n        // node-pre-gyp path ./lib/binding/{node_abi}-{platform}-{arch}\n        [\n            \"module_root\",\n            \"lib\",\n            \"binding\",\n            \"nodePreGyp\",\n            \"bindings\"\n        ]\n    ]\n};\n/**\n * The main `bindings()` function loads the compiled bindings for a given module.\n * It uses V8's Error API to determine the parent filename that this function is\n * being invoked from, which is then used to find the root directory.\n */ function bindings(opts) {\n    // Argument surgery\n    if (typeof opts == \"string\") {\n        opts = {\n            bindings: opts\n        };\n    } else if (!opts) {\n        opts = {};\n    }\n    // maps `defaults` onto `opts` object\n    Object.keys(defaults).map(function(i) {\n        if (!(i in opts)) opts[i] = defaults[i];\n    });\n    // Get the module root\n    if (!opts.module_root) {\n        opts.module_root = exports.getRoot(exports.getFileName());\n    }\n    // Ensure the given bindings name ends with .node\n    if (path.extname(opts.bindings) != \".node\") {\n        opts.bindings += \".node\";\n    }\n    // https://github.com/webpack/webpack/issues/4175#issuecomment-342931035\n    var requireFunc =  true ? require : 0;\n    var tries = [], i = 0, l = opts.try.length, n, b, err;\n    for(; i < l; i++){\n        n = join.apply(null, opts.try[i].map(function(p) {\n            return opts[p] || p;\n        }));\n        tries.push(n);\n        try {\n            b = opts.path ? requireFunc.resolve(n) : requireFunc(n);\n            if (!opts.path) {\n                b.path = n;\n            }\n            return b;\n        } catch (e) {\n            if (e.code !== \"MODULE_NOT_FOUND\" && e.code !== \"QUALIFIED_PATH_RESOLUTION_FAILED\" && !/not find/i.test(e.message)) {\n                throw e;\n            }\n        }\n    }\n    err = new Error(\"Could not locate the bindings file. Tried:\\n\" + tries.map(function(a) {\n        return opts.arrow + a;\n    }).join(\"\\n\"));\n    err.tries = tries;\n    throw err;\n}\nmodule.exports = exports = bindings;\n/**\n * Gets the filename of the JavaScript file that invokes this function.\n * Used to help find the root directory of a module.\n * Optionally accepts an filename argument to skip when searching for the invoking filename\n */ exports.getFileName = function getFileName(calling_file) {\n    var origPST = Error.prepareStackTrace, origSTL = Error.stackTraceLimit, dummy = {}, fileName;\n    Error.stackTraceLimit = 10;\n    Error.prepareStackTrace = function(e, st) {\n        for(var i = 0, l = st.length; i < l; i++){\n            fileName = st[i].getFileName();\n            if (fileName !== __filename) {\n                if (calling_file) {\n                    if (fileName !== calling_file) {\n                        return;\n                    }\n                } else {\n                    return;\n                }\n            }\n        }\n    };\n    // run the 'prepareStackTrace' function above\n    Error.captureStackTrace(dummy);\n    dummy.stack;\n    // cleanup\n    Error.prepareStackTrace = origPST;\n    Error.stackTraceLimit = origSTL;\n    // handle filename that starts with \"file://\"\n    var fileSchema = \"file://\";\n    if (fileName.indexOf(fileSchema) === 0) {\n        fileName = fileURLToPath(fileName);\n    }\n    return fileName;\n};\n/**\n * Gets the root directory of a module, given an arbitrary filename\n * somewhere in the module tree. The \"root directory\" is the directory\n * containing the `package.json` file.\n *\n *   In:  /home/nate/node-native-module/lib/index.js\n *   Out: /home/nate/node-native-module\n */ exports.getRoot = function getRoot(file) {\n    var dir = dirname(file), prev;\n    while(true){\n        if (dir === \".\") {\n            // Avoids an infinite loop in rare cases, like the REPL\n            dir = process.cwd();\n        }\n        if (exists(join(dir, \"package.json\")) || exists(join(dir, \"node_modules\"))) {\n            // Found the 'package.json' file or 'node_modules' dir; we're done\n            return dir;\n        }\n        if (prev === dir) {\n            // Got to the top\n            throw new Error('Could not find module root given file: \"' + file + '\". Do you have a `package.json` file? ');\n        }\n        // Try the parent dir next\n        prev = dir;\n        dir = join(dir, \"..\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmluZGluZ3MvYmluZGluZ3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7QUFFRCxJQUFJQSxLQUFLQyxtQkFBT0EsQ0FBQyxpQkFDZkMsT0FBT0QsbUJBQU9BLENBQUMscUJBQ2ZFLGdCQUFnQkYsbUJBQU9BLENBQUMsMkVBQ3hCRyxPQUFPRixLQUFLRSxJQUFJLEVBQ2hCQyxVQUFVSCxLQUFLRyxPQUFPLEVBQ3RCQyxTQUNFLEdBQUlDLFVBQVUsSUFDWixTQUFTTCxJQUFJO0lBQ1gsSUFBSTtRQUNGRixHQUFHTyxVQUFVLENBQUNMO0lBQ2hCLEVBQUUsT0FBT00sR0FBRztRQUNWLE9BQU87SUFDVDtJQUNBLE9BQU87QUFDVCxLQUNGUixHQUFHUyxVQUFVLElBQ2JQLEtBQUtPLFVBQVUsRUFDakJDLFdBQVc7SUFDVEMsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSTtJQUMxQ0MsVUFBVUgsUUFBUUMsR0FBRyxDQUFDRywwQkFBMEIsSUFBSTtJQUNwREMsVUFBVUwsUUFBUUssUUFBUTtJQUMxQkMsTUFBTU4sUUFBUU0sSUFBSTtJQUNsQkMsWUFDRSxXQUNBUCxRQUFRUSxRQUFRLENBQUNDLE9BQU8sR0FDeEIsTUFDQVQsUUFBUUssUUFBUSxHQUNoQixNQUNBTCxRQUFRTSxJQUFJO0lBQ2RJLFNBQVNWLFFBQVFRLFFBQVEsQ0FBQ0csSUFBSTtJQUM5QkMsVUFBVTtJQUNWQyxLQUFLO1FBQ0gsK0NBQStDO1FBQy9DO1lBQUM7WUFBZTtZQUFTO1NBQVc7UUFDcEMsMENBQTBDO1FBQzFDO1lBQUM7WUFBZTtZQUFTO1lBQVM7U0FBVztRQUM3QztZQUFDO1lBQWU7WUFBUztZQUFXO1NBQVc7UUFDL0MsdUVBQXVFO1FBQ3ZFO1lBQUM7WUFBZTtZQUFPO1lBQVM7U0FBVztRQUMzQztZQUFDO1lBQWU7WUFBUztTQUFXO1FBQ3BDLCtFQUErRTtRQUMvRTtZQUFDO1lBQWU7WUFBTztZQUFXO1NBQVc7UUFDN0M7WUFBQztZ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bGVzL2JpbmRpbmdzL2JpbmRpbmdzLmpzPzYwZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4gIHBhdGggPSByZXF1aXJlKCdwYXRoJyksXG4gIGZpbGVVUkxUb1BhdGggPSByZXF1aXJlKCdmaWxlLXVyaS10by1wYXRoJyksXG4gIGpvaW4gPSBwYXRoLmpvaW4sXG4gIGRpcm5hbWUgPSBwYXRoLmRpcm5hbWUsXG4gIGV4aXN0cyA9XG4gICAgKGZzLmFjY2Vzc1N5bmMgJiZcbiAgICAgIGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmcy5hY2Nlc3NTeW5jKHBhdGgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSkgfHxcbiAgICBmcy5leGlzdHNTeW5jIHx8XG4gICAgcGF0aC5leGlzdHNTeW5jLFxuICBkZWZhdWx0cyA9IHtcbiAgICBhcnJvdzogcHJvY2Vzcy5lbnYuTk9ERV9CSU5ESU5HU19BUlJPVyB8fCAnIOKGkiAnLFxuICAgIGNvbXBpbGVkOiBwcm9jZXNzLmVudi5OT0RFX0JJTkRJTkdTX0NPTVBJTEVEX0RJUiB8fCAnY29tcGlsZWQnLFxuICAgIHBsYXRmb3JtOiBwcm9jZXNzLnBsYXRmb3JtLFxuICAgIGFyY2g6IHByb2Nlc3MuYXJjaCxcbiAgICBub2RlUHJlR3lwOlxuICAgICAgJ25vZGUtdicgK1xuICAgICAgcHJvY2Vzcy52ZXJzaW9ucy5tb2R1bGVzICtcbiAgICAgICctJyArXG4gICAgICBwcm9jZXNzLnBsYXRmb3JtICtcbiAgICAgICctJyArXG4gICAgICBwcm9jZXNzLmFyY2gsXG4gICAgdmVyc2lvbjogcHJvY2Vzcy52ZXJzaW9ucy5ub2RlLFxuICAgIGJpbmRpbmdzOiAnYmluZGluZ3Mubm9kZScsXG4gICAgdHJ5OiBbXG4gICAgICAvLyBub2RlLWd5cCdzIGxpbmtlZCB2ZXJzaW9uIGluIHRoZSBcImJ1aWxkXCIgZGlyXG4gICAgICBbJ21vZHVsZV9yb290JywgJ2J1aWxkJywgJ2JpbmRpbmdzJ10sXG4gICAgICAvLyBub2RlLXdhZiBhbmQgZ3lwX2FkZG9uIChhLmsuYSBub2RlLWd5cClcbiAgICAgIFsnbW9kdWxlX3Jvb3QnLCAnYnVpbGQnLCAnRGVidWcnLCAnYmluZGluZ3MnXSxcbiAgICAgIFsnbW9kdWxlX3Jvb3QnLCAnYnVpbGQnLCAnUmVsZWFzZScsICdiaW5kaW5ncyddLFxuICAgICAgLy8gRGVidWcgZmlsZXMsIGZvciBkZXZlbG9wbWVudCAobGVnYWN5IGJlaGF2aW9yLCByZW1vdmUgZm9yIG5vZGUgdjAuOSlcbiAgICAgIFsnbW9kdWxlX3Jvb3QnLCAnb3V0JywgJ0RlYnVnJywgJ2JpbmRpbmdzJ10sXG4gICAgICBbJ21vZHVsZV9yb290JywgJ0RlYnVnJywgJ2JpbmRpbmdzJ10sXG4gICAgICAvLyBSZWxlYXNlIGZpbGVzLCBidXQgbWFudWFsbHkgY29tcGlsZWQgKGxlZ2FjeSBiZWhhdmlvciwgcmVtb3ZlIGZvciBub2RlIHYwLjkpXG4gICAgICBbJ21vZHVsZV9yb290JywgJ291dCcsICdSZWxlYXNlJywgJ2JpbmRpbmdzJ10sXG4gICAgICBbJ21vZHVsZV9yb290JywgJ1JlbGVhc2UnLCAnYmluZGluZ3MnXSxcbiAgICAgIC8vIExlZ2FjeSBmcm9tIG5vZGUtd2FmLCBub2RlIDw9IDAuNC54XG4gICAgICBbJ21vZHVsZV9yb290JywgJ2J1aWxkJywgJ2RlZmF1bHQnLCAnYmluZGluZ3MnXSxcbiAgICAgIC8vIFByb2R1Y3Rpb24gXCJSZWxlYXNlXCIgYnVpbGR0eXBlIGJpbmFyeSAobWVoLi4uKVxuICAgICAgWydtb2R1bGVfcm9vdCcsICdjb21waWxlZCcsICd2ZXJzaW9uJywgJ3BsYXRmb3JtJywgJ2FyY2gnLCAnYmluZGluZ3MnXSxcbiAgICAgIC8vIG5vZGUtcWJzIGJ1aWxkc1xuICAgICAgWydtb2R1bGVfcm9vdCcsICdhZGRvbi1idWlsZCcsICdyZWxlYXNlJywgJ2luc3RhbGwtcm9vdCcsICdiaW5kaW5ncyddLFxuICAgICAgWydtb2R1bGVfcm9vdCcsICdhZGRvbi1idWlsZCcsICdkZWJ1ZycsICdpbnN0YWxsLXJvb3QnLCAnYmluZGluZ3MnXSxcbiAgICAgIFsnbW9kdWxlX3Jvb3QnLCAnYWRkb24tYnVpbGQnLCAnZGVmYXVsdCcsICdpbnN0YWxsLXJvb3QnLCAnYmluZGluZ3MnXSxcbiAgICAgIC8vIG5vZGUtcHJlLWd5cCBwYXRoIC4vbGliL2JpbmRpbmcve25vZGVfYWJpfS17cGxhdGZvcm19LXthcmNofVxuICAgICAgWydtb2R1bGVfcm9vdCcsICdsaWInLCAnYmluZGluZycsICdub2RlUHJlR3lwJywgJ2JpbmRpbmdzJ11cbiAgICBdXG4gIH07XG5cbi8qKlxuICogVGhlIG1haW4gYGJpbmRpbmdzKClgIGZ1bmN0aW9uIGxvYWRzIHRoZSBjb21waWxlZCBiaW5kaW5ncyBmb3IgYSBnaXZlbiBtb2R1bGUuXG4gKiBJdCB1c2VzIFY4J3MgRXJyb3IgQVBJIHRvIGRldGVybWluZSB0aGUgcGFyZW50IGZpbGVuYW1lIHRoYXQgdGhpcyBmdW5jdGlvbiBpc1xuICogYmVpbmcgaW52b2tlZCBmcm9tLCB3aGljaCBpcyB0aGVuIHVzZWQgdG8gZmluZCB0aGUgcm9vdCBkaXJlY3RvcnkuXG4gKi9cblxuZnVuY3Rpb24gYmluZGluZ3Mob3B0cykge1xuICAvLyBBcmd1bWVudCBzdXJnZXJ5XG4gIGlmICh0eXBlb2Ygb3B0cyA9PSAnc3RyaW5nJykge1xuICAgIG9wdHMgPSB7IGJpbmRpbmdzOiBvcHRzIH07XG4gIH0gZWxzZSBpZiAoIW9wdHMpIHtcbiAgICBvcHRzID0ge307XG4gIH1cblxuICAvLyBtYXBzIGBkZWZhdWx0c2Agb250byBgb3B0c2Agb2JqZWN0XG4gIE9iamVjdC5rZXlzKGRlZmF1bHRzKS5tYXAoZnVuY3Rpb24oaSkge1xuICAgIGlmICghKGkgaW4gb3B0cykpIG9wdHNbaV0gPSBkZWZhdWx0c1tpXTtcbiAgfSk7XG5cbiAgLy8gR2V0IHRoZSBtb2R1bGUgcm9vdFxuICBpZiAoIW9wdHMubW9kdWxlX3Jvb3QpIHtcbiAgICBvcHRzLm1vZHVsZV9yb290ID0gZXhwb3J0cy5nZXRSb290KGV4cG9ydHMuZ2V0RmlsZU5hbWUoKSk7XG4gIH1cblxuICAvLyBFbnN1cmUgdGhlIGdpdmVuIGJpbmRpbmdzIG5hbWUgZW5kcyB3aXRoIC5ub2RlXG4gIGlmIChwYXRoLmV4dG5hbWUob3B0cy5iaW5kaW5ncykgIT0gJy5ub2RlJykge1xuICAgIG9wdHMuYmluZGluZ3MgKz0gJy5ub2RlJztcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svaXNzdWVzLzQxNzUjaXNzdWVjb21tZW50LTM0MjkzMTAzNVxuICB2YXIgcmVxdWlyZUZ1bmMgPVxuICAgIHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fID09PSAnZnVuY3Rpb24nXG4gICAgICA/IF9fbm9uX3dlYnBhY2tfcmVxdWlyZV9fXG4gICAgICA6IHJlcXVpcmU7XG5cbiAgdmFyIHRyaWVzID0gW10sXG4gICAgaSA9IDAsXG4gICAgbCA9IG9wdHMudHJ5Lmxlbmd0aCxcbiAgICBuLFxuICAgIGIsXG4gICAgZXJyO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgbiA9IGpvaW4uYXBwbHkoXG4gICAgICBudWxsLFxuICAgICAgb3B0cy50cnlbaV0ubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIG9wdHNbcF0gfHwgcDtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0cmllcy5wdXNoKG4pO1xuICAgIHRyeSB7XG4gICAgICBiID0gb3B0cy5wYXRoID8gcmVxdWlyZUZ1bmMucmVzb2x2ZShuKSA6IHJlcXVpcmVGdW5jKG4pO1xuICAgICAgaWYgKCFvcHRzLnBhdGgpIHtcbiAgICAgICAgYi5wYXRoID0gbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLmNvZGUgIT09ICdNT0RVTEVfTk9UX0ZPVU5EJyAmJlxuICAgICAgICAgIGUuY29kZSAhPT0gJ1FVQUxJRklFRF9QQVRIX1JFU09MVVRJT05fRkFJTEVEJyAmJlxuICAgICAgICAgICEvbm90IGZpbmQvaS50ZXN0KGUubWVzc2FnZSkpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlcnIgPSBuZXcgRXJyb3IoXG4gICAgJ0NvdWxkIG5vdCBsb2NhdGUgdGhlIGJpbmRpbmdzIGZpbGUuIFRyaWVkOlxcbicgK1xuICAgICAgdHJpZXNcbiAgICAgICAgLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdHMuYXJyb3cgKyBhO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgKTtcbiAgZXJyLnRyaWVzID0gdHJpZXM7XG4gIHRocm93IGVycjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGJpbmRpbmdzO1xuXG4vKipcbiAqIEdldHMgdGhlIGZpbGVuYW1lIG9mIHRoZSBKYXZhU2NyaXB0IGZpbGUgdGhhdCBpbnZva2VzIHRoaXMgZnVuY3Rpb24uXG4gKiBVc2VkIHRvIGhlbHAgZmluZCB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBtb2R1bGUuXG4gKiBPcHRpb25hbGx5IGFjY2VwdHMgYW4gZmlsZW5hbWUgYXJndW1lbnQgdG8gc2tpcCB3aGVuIHNlYXJjaGluZyBmb3IgdGhlIGludm9raW5nIGZpbGVuYW1lXG4gKi9cblxuZXhwb3J0cy5nZXRGaWxlTmFtZSA9IGZ1bmN0aW9uIGdldEZpbGVOYW1lKGNhbGxpbmdfZmlsZSkge1xuICB2YXIgb3JpZ1BTVCA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlLFxuICAgIG9yaWdTVEwgPSBFcnJvci5zdGFja1RyYWNlTGltaXQsXG4gICAgZHVtbXkgPSB7fSxcbiAgICBmaWxlTmFtZTtcblxuICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSAxMDtcblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IGZ1bmN0aW9uKGUsIHN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZpbGVOYW1lID0gc3RbaV0uZ2V0RmlsZU5hbWUoKTtcbiAgICAgIGlmIChmaWxlTmFtZSAhPT0gX19maWxlbmFtZSkge1xuICAgICAgICBpZiAoY2FsbGluZ19maWxlKSB7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lICE9PSBjYWxsaW5nX2ZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIHJ1biB0aGUgJ3ByZXBhcmVTdGFja1RyYWNlJyBmdW5jdGlvbiBhYm92ZVxuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShkdW1teSk7XG4gIGR1bW15LnN0YWNrO1xuXG4gIC8vIGNsZWFudXBcbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBvcmlnUFNUO1xuICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBvcmlnU1RMO1xuXG4gIC8vIGhhbmRsZSBmaWxlbmFtZSB0aGF0IHN0YXJ0cyB3aXRoIFwiZmlsZTovL1wiXG4gIHZhciBmaWxlU2NoZW1hID0gJ2ZpbGU6Ly8nO1xuICBpZiAoZmlsZU5hbWUuaW5kZXhPZihmaWxlU2NoZW1hKSA9PT0gMCkge1xuICAgIGZpbGVOYW1lID0gZmlsZVVSTFRvUGF0aChmaWxlTmFtZSk7XG4gIH1cblxuICByZXR1cm4gZmlsZU5hbWU7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgbW9kdWxlLCBnaXZlbiBhbiBhcmJpdHJhcnkgZmlsZW5hbWVcbiAqIHNvbWV3aGVyZSBpbiB0aGUgbW9kdWxlIHRyZWUuIFRoZSBcInJvb3QgZGlyZWN0b3J5XCIgaXMgdGhlIGRpcmVjdG9yeVxuICogY29udGFpbmluZyB0aGUgYHBhY2thZ2UuanNvbmAgZmlsZS5cbiAqXG4gKiAgIEluOiAgL2hvbWUvbmF0ZS9ub2RlLW5hdGl2ZS1tb2R1bGUvbGliL2luZGV4LmpzXG4gKiAgIE91dDogL2hvbWUvbmF0ZS9ub2RlLW5hdGl2ZS1tb2R1bGVcbiAqL1xuXG5leHBvcnRzLmdldFJvb3QgPSBmdW5jdGlvbiBnZXRSb290KGZpbGUpIHtcbiAgdmFyIGRpciA9IGRpcm5hbWUoZmlsZSksXG4gICAgcHJldjtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoZGlyID09PSAnLicpIHtcbiAgICAgIC8vIEF2b2lkcyBhbiBpbmZpbml0ZSBsb29wIGluIHJhcmUgY2FzZXMsIGxpa2UgdGhlIFJFUExcbiAgICAgIGRpciA9IHByb2Nlc3MuY3dkKCk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGV4aXN0cyhqb2luKGRpciwgJ3BhY2thZ2UuanNvbicpKSB8fFxuICAgICAgZXhpc3RzKGpvaW4oZGlyLCAnbm9kZV9tb2R1bGVzJykpXG4gICAgKSB7XG4gICAgICAvLyBGb3VuZCB0aGUgJ3BhY2thZ2UuanNvbicgZmlsZSBvciAnbm9kZV9tb2R1bGVzJyBkaXI7IHdlJ3JlIGRvbmVcbiAgICAgIHJldHVybiBkaXI7XG4gICAgfVxuICAgIGlmIChwcmV2ID09PSBkaXIpIHtcbiAgICAgIC8vIEdvdCB0byB0aGUgdG9wXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDb3VsZCBub3QgZmluZCBtb2R1bGUgcm9vdCBnaXZlbiBmaWxlOiBcIicgK1xuICAgICAgICAgIGZpbGUgK1xuICAgICAgICAgICdcIi4gRG8geW91IGhhdmUgYSBgcGFja2FnZS5qc29uYCBmaWxlPyAnXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBUcnkgdGhlIHBhcmVudCBkaXIgbmV4dFxuICAgIHByZXYgPSBkaXI7XG4gICAgZGlyID0gam9pbihkaXIsICcuLicpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImZzIiwicmVxdWlyZSIsInBhdGgiLCJmaWxlVVJMVG9QYXRoIiwiam9pbiIsImRpcm5hbWUiLCJleGlzdHMiLCJhY2Nlc3NTeW5jIiwiZSIsImV4aXN0c1N5bmMiLCJkZWZhdWx0cyIsImFycm93IiwicHJvY2VzcyIsImVudiIsIk5PREVfQklORElOR1NfQVJST1ciLCJjb21waWxlZCIsIk5PREVfQklORElOR1NfQ09NUElMRURfRElSIiwicGxhdGZvcm0iLCJhcmNoIiwibm9kZVByZUd5cCIsInZlcnNpb25zIiwibW9kdWxlcyIsInZlcnNpb24iLCJub2RlIiwiYmluZGluZ3MiLCJ0cnkiLCJvcHRzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImkiLCJtb2R1bGVfcm9vdCIsImV4cG9ydHMiLCJnZXRSb290IiwiZ2V0RmlsZU5hbWUiLCJleHRuYW1lIiwicmVxdWlyZUZ1bmMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiX19ub25fd2VicGFja19yZXF1aXJlX18iLCJ0cmllcyIsImwiLCJsZW5ndGgiLCJuIiwiYiIsImVyciIsImFwcGx5IiwicCIsInB1c2giLCJyZXNvbHZlIiwiY29kZSIsInRlc3QiLCJtZXNzYWdlIiwiRXJyb3IiLCJhIiwibW9kdWxlIiwiY2FsbGluZ19maWxlIiwib3JpZ1BTVCIsInByZXBhcmVTdGFja1RyYWNlIiwib3JpZ1NUTCIsInN0YWNrVHJhY2VMaW1pdCIsImR1bW15IiwiZmlsZU5hbWUiLCJzdCIsIl9fZmlsZW5hbWUiLCJjYXB0dXJlU3RhY2tUcmFjZSIsInN0YWNrIiwiZmlsZVNjaGVtYSIsImluZGV4T2YiLCJmaWxlIiwiZGlyIiwicHJldiIsImN3ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/bindings/bindings.js\n");

/***/ })

};
;