"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/builder.jsx":
/*!***************************!*\
  !*** ./pages/builder.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResumeContext\": function() { return /* binding */ ResumeContext; },\n/* harmony export */   \"default\": function() { return /* binding */ Builder; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.3.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.3.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_form_Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/Language */ \"./components/form/Language.jsx\");\n/* harmony import */ var _components_meta_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meta/Meta */ \"./components/meta/Meta.js\");\n/* harmony import */ var _components_form_FormCP__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/FormCP */ \"./components/form/FormCP.jsx\");\n/* harmony import */ var _components_form_LoadUnload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/LoadUnload */ \"./components/form/LoadUnload.jsx\");\n/* harmony import */ var _components_preview_Preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/preview/Preview */ \"./components/preview/Preview.jsx\");\n/* harmony import */ var _components_utility_DefaultResumeData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/utility/DefaultResumeData */ \"./components/utility/DefaultResumeData.jsx\");\n/* harmony import */ var _components_form_SocialMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/form/SocialMedia */ \"./components/form/SocialMedia.jsx\");\n/* harmony import */ var _components_form_WorkExperience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/form/WorkExperience */ \"./components/form/WorkExperience.jsx\");\n/* harmony import */ var _components_form_Skill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/form/Skill */ \"./components/form/Skill.jsx\");\n/* harmony import */ var _components_form_PersonalInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/form/PersonalInformation */ \"./components/form/PersonalInformation.jsx\");\n/* harmony import */ var _components_form_Summary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/form/Summary */ \"./components/form/Summary.jsx\");\n/* harmony import */ var _components_form_Projects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/form/Projects */ \"./components/form/Projects.jsx\");\n/* harmony import */ var _components_form_Education__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/form/Education */ \"./components/form/Education.jsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/.pnpm/next@13.1.6_react-dom@18.3.0_react@18.3.0__react@18.3.0/node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_form_certification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/form/certification */ \"./components/form/certification.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst ResumeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_components_utility_DefaultResumeData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n_c = ResumeContext;\n// server side rendering false\nconst Print = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(()=>__webpack_require__.e(/*! import() */ \"components_utility_WinPrint_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/utility/WinPrint */ \"./components/utility/WinPrint.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"builder.jsx -> \" + \"../components/utility/WinPrint\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Print;\nfunction Builder(props) {\n    _s();\n    // resume data\n    const [resumeData, setResumeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_utility_DefaultResumeData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    // form hide/show\n    const [formClose, setFormClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // profile picture\n    const handleProfilePicture = (e)=>{\n        const file = e.target.files[0];\n        if (file instanceof Blob) {\n            const reader = new FileReader();\n            reader.onload = (event)=>{\n                setResumeData({\n                    ...resumeData,\n                    profilePicture: event.target.result\n                });\n            };\n            reader.readAsDataURL(file);\n        } else {\n            console.error(\"Invalid file type\");\n        }\n    };\n    const handleChange = (e)=>{\n        setResumeData({\n            ...resumeData,\n            [e.target.name]: e.target.value\n        });\n        console.log(resumeData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ResumeContext.Provider, {\n            value: {\n                resumeData,\n                setResumeData,\n                handleProfilePicture,\n                handleChange\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen m-4 rounded-2xl\",\n                    children: [\n                        !formClose && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"p-4 bg-gray-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_LoadUnload__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_PersonalInformation__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_SocialMedia__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_Summary__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_Education__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_WorkExperience__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_Projects__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 8\n                                }, this),\n                                resumeData.skills.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_Skill__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        title: skill.title\n                                    }, index, false, {\n                                        fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 9\n                                    }, this)),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_Language__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 8\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_certification__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 8\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_preview_Preview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_FormCP__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    formClose: formClose,\n                    setFormClose: setFormClose\n                }, void 0, false, {\n                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Print, {}, void 0, false, {\n                    fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/kurtcalacday/Downloads/Resume-Forge/pages/builder.jsx\",\n            lineNumber: 54,\n            columnNumber: 4\n        }, this)\n    }, void 0, false);\n}\n_s(Builder, \"gwvHiYGY4NVyMu1WGO00NilfinY=\");\n_c2 = Builder;\n\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ResumeContext\");\n$RefreshReg$(_c1, \"Print\");\n$RefreshReg$(_c2, \"Builder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9idWlsZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUU7QUFDaEI7QUFDUjtBQUNJO0FBQ1E7QUFDSDtBQUNvQjtBQUNmO0FBQ007QUFDbEI7QUFDNEI7QUFDeEI7QUFDRTtBQUNFO0FBQ2xCO0FBQzBCO0FBRTdELE1BQU1tQiw4QkFBZ0JqQixvREFBYUEsQ0FBQ08sNkVBQWlCQTs7QUFFckQsOEJBQThCO0FBQzlCLE1BQU1XLFFBQVFILG9EQUFPQSxDQUFDLElBQU0scU1BQXdDOzs7Ozs7SUFDbkVJLEtBQUssS0FBSzs7TUFETEQ7QUFJUyxTQUFTRSxRQUFRQyxLQUFLLEVBQUU7O0lBQ3RDLGNBQWM7SUFDZCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR3hCLCtDQUFRQSxDQUFDUSw2RUFBaUJBO0lBRTlELGlCQUFpQjtJQUNqQixNQUFNLENBQUNpQixXQUFXQyxhQUFhLEdBQUcxQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELGtCQUFrQjtJQUNsQixNQUFNMkIsdUJBQXVCLENBQUNDLElBQU07UUFDbkMsTUFBTUMsT0FBT0QsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUU5QixJQUFJRixnQkFBZ0JHLE1BQU07WUFDekIsTUFBTUMsU0FBUyxJQUFJQztZQUNuQkQsT0FBT0UsTUFBTSxHQUFHLENBQUNDLFFBQVU7Z0JBQzFCWixjQUFjO29CQUFFLEdBQUdELFVBQVU7b0JBQUVjLGdCQUFnQkQsTUFBTU4sTUFBTSxDQUFDUSxNQUFNO2dCQUFDO1lBQ3BFO1lBQ0FMLE9BQU9NLGFBQWEsQ0FBQ1Y7UUFDdEIsT0FBTztZQUNOVyxRQUFRQyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlLENBQUNkLElBQU07UUFDM0JKLGNBQWM7WUFBRSxHQUFHRCxVQUFVO1lBQUUsQ0FBQ0ssRUFBRUUsTUFBTSxDQUFDYSxJQUFJLENBQUMsRUFBRWYsRUFBRUUsTUFBTSxDQUFDYyxLQUFLO1FBQUM7UUFDL0RKLFFBQVFLLEdBQUcsQ0FBQ3RCO0lBQ2I7SUFFQSxxQkFDQztrQkFDQyw0RUFBQ0wsY0FBYzRCLFFBQVE7WUFDdEJGLE9BQU87Z0JBQ05yQjtnQkFDQUM7Z0JBQ0FHO2dCQUNBZTtZQUNEOzs4QkFPQSw4REFBQ0s7b0JBQUlDLFdBQVU7O3dCQUNiLENBQUN2QiwyQkFDRCw4REFBQ3dCOzRCQUFLRCxXQUFVOzs4Q0FDZiw4REFBQzFDLG1FQUFVQTs7Ozs7OENBQ1gsOERBQUNNLDZFQUFtQkE7Ozs7OzhDQUNwQiw4REFBQ0gsb0VBQVdBOzs7Ozs4Q0FDWiw4REFBQ0ksaUVBQU9BOzs7Ozs4Q0FDUiw4REFBQ0UsbUVBQVNBOzs7Ozs4Q0FDViw4REFBQ0wsdUVBQWNBOzs7Ozs4Q0FDZiw4REFBQ0ksa0VBQVFBOzs7OztnQ0FDUlMsV0FBVzJCLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUM5Qiw4REFBQzFDLCtEQUFLQTt3Q0FBQzJDLE9BQU9GLE1BQU1FLEtBQUs7dUNBQU9EOzs7Ozs4Q0FFakMsOERBQUNsRCxpRUFBUUE7Ozs7OzhDQUNULDhEQUFDYyx1RUFBYUE7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQ1YsbUVBQU9BOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0YsK0RBQU1BO29CQUFDb0IsV0FBV0E7b0JBQVdDLGNBQWNBOzs7Ozs7OEJBQzVDLDhEQUFDUDs7Ozs7Ozs7Ozs7O0FBSUwsQ0FBQztHQWxFdUJFO01BQUFBO0FBbUVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2J1aWxkZXIuanN4PzNmNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGFuZ3VhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9MYW5ndWFnZVwiO1xuaW1wb3J0IE1ldGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWV0YS9NZXRhXCI7XG5pbXBvcnQgRm9ybUNQIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vRm9ybUNQXCI7XG5pbXBvcnQgTG9hZFVubG9hZCBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL0xvYWRVbmxvYWRcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL3ByZXZpZXcvUHJldmlld1wiO1xuaW1wb3J0IERlZmF1bHRSZXN1bWVEYXRhIGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxpdHkvRGVmYXVsdFJlc3VtZURhdGFcIjtcbmltcG9ydCBTb2NpYWxNZWRpYSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL1NvY2lhbE1lZGlhXCI7XG5pbXBvcnQgV29ya0V4cGVyaWVuY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9Xb3JrRXhwZXJpZW5jZVwiO1xuaW1wb3J0IFNraWxsIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vU2tpbGxcIjtcbmltcG9ydCBQZXJzb25hbEluZm9ybWF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0vUGVyc29uYWxJbmZvcm1hdGlvblwiO1xuaW1wb3J0IFN1bW1hcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9TdW1tYXJ5XCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9Qcm9qZWN0c1wiO1xuaW1wb3J0IEVkdWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtL0VkdWNhdGlvblwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IENlcnRpZmljYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS9jZXJ0aWZpY2F0aW9uXCI7XG5cbmNvbnN0IFJlc3VtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KERlZmF1bHRSZXN1bWVEYXRhKTtcblxuLy8gc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZhbHNlXG5jb25zdCBQcmludCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy91dGlsaXR5L1dpblByaW50XCIpLCB7XG5cdHNzcjogZmFsc2UsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVpbGRlcihwcm9wcykge1xuXHQvLyByZXN1bWUgZGF0YVxuXHRjb25zdCBbcmVzdW1lRGF0YSwgc2V0UmVzdW1lRGF0YV0gPSB1c2VTdGF0ZShEZWZhdWx0UmVzdW1lRGF0YSk7XG5cblx0Ly8gZm9ybSBoaWRlL3Nob3dcblx0Y29uc3QgW2Zvcm1DbG9zZSwgc2V0Rm9ybUNsb3NlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvLyBwcm9maWxlIHBpY3R1cmVcblx0Y29uc3QgaGFuZGxlUHJvZmlsZVBpY3R1cmUgPSAoZSkgPT4ge1xuXHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuXHRcdGlmIChmaWxlIGluc3RhbmNlb2YgQmxvYikge1xuXHRcdFx0Y29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRcdHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0UmVzdW1lRGF0YSh7IC4uLnJlc3VtZURhdGEsIHByb2ZpbGVQaWN0dXJlOiBldmVudC50YXJnZXQucmVzdWx0IH0pO1xuXHRcdFx0fTtcblx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiSW52YWxpZCBmaWxlIHR5cGVcIik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0c2V0UmVzdW1lRGF0YSh7IC4uLnJlc3VtZURhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG5cdFx0Y29uc29sZS5sb2cocmVzdW1lRGF0YSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFJlc3VtZUNvbnRleHQuUHJvdmlkZXJcblx0XHRcdFx0dmFsdWU9e3tcblx0XHRcdFx0XHRyZXN1bWVEYXRhLFxuXHRcdFx0XHRcdHNldFJlc3VtZURhdGEsXG5cdFx0XHRcdFx0aGFuZGxlUHJvZmlsZVBpY3R1cmUsXG5cdFx0XHRcdFx0aGFuZGxlQ2hhbmdlLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHR7LyogPE1ldGFcblx0XHRcdFx0XHR0aXRsZT1cIlJlc3VtZSBGb3JnZSB8IEdldCBoaXJlZCB3aXRoIGFuIEFUUy1vcHRpbWl6ZWQgcmVzdW1lXCJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRrZXl3b3Jkcz1cIkFUUy1mcmllbmRseSwgUmVzdW1lIG9wdGltaXphdGlvbiwgS2V5d29yZC1yaWNoIHJlc3VtZSwgQXBwbGljYW50IFRyYWNraW5nIFN5c3RlbSwgQVRTIHJlc3VtZSBidWlsZGVyLCBBVFMgcmVzdW1lIHRlbXBsYXRlcywgQVRTLWNvbXBsaWFudCByZXN1bWUsIEFUUy1vcHRpbWl6ZWQgQ1YsIEFUUy1mcmllbmRseSBmb3JtYXQsIEFUUyByZXN1bWUgdGlwcywgUmVzdW1lIHdyaXRpbmcgc2VydmljZXMsIENhcmVlciBndWlkYW5jZSwgSm9iIHNlYXJjaCBpbiBJbmRpYSwgUmVzdW1lIHRpcHMgZm9yIEluZGlhLCBQcm9mZXNzaW9uYWwgcmVzdW1lIGJ1aWxkZXIsIENvdmVyIGxldHRlciB3cml0aW5nLCBJbnRlcnZpZXcgcHJlcGFyYXRpb24sIEpvYiBpbnRlcnZpZXcgdGlwcywgQ2FyZWVyIGdyb3d0aCwgT25saW5lIGpvYiBhcHBsaWNhdGlvbnMsIHJlc3VtZSBidWlsZGVyLCBmcmVlIHJlc3VtZSBidWlsZGVyLCByZXN1bWUgYXRzLCBiZXN0IGZyZWUgcmVzdW1lIGJ1aWxkZXIsIHJlc3VtZSBjcmVhdG9yLCByZXN1bWUgY3YsIHJlc3VtZSBkZXNpZ24sIHJlc3VtZSBlZGl0b3IsIHJlc3VtZSBtYWtlclwiXG5cdFx0XHRcdC8+ICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImYtY29sIGdhcC00IG1kOmZsZXgtcm93IGp1c3RpZnktZXZlbmx5IG1heC13LTd4bCBtZDpteC1hdXRvIG1kOmgtc2NyZWVuIG0tNCByb3VuZGVkLTJ4bFwiPlxuXHRcdFx0XHRcdHshZm9ybUNsb3NlICYmIChcblx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cInAtNCBiZy1ncmF5LTYwMCBleGNsdWRlLXByaW50IG1kOm1heC13LVs0MCVdIG1kOmgtc2NyZWVuIG1kOm92ZXJmbG93LXktc2Nyb2xsXCI+XG5cdFx0XHRcdFx0XHRcdDxMb2FkVW5sb2FkIC8+XG5cdFx0XHRcdFx0XHRcdDxQZXJzb25hbEluZm9ybWF0aW9uIC8+XG5cdFx0XHRcdFx0XHRcdDxTb2NpYWxNZWRpYSAvPlxuXHRcdFx0XHRcdFx0XHQ8U3VtbWFyeSAvPlxuXHRcdFx0XHRcdFx0XHQ8RWR1Y2F0aW9uIC8+XG5cdFx0XHRcdFx0XHRcdDxXb3JrRXhwZXJpZW5jZSAvPlxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdHMgLz5cblx0XHRcdFx0XHRcdFx0e3Jlc3VtZURhdGEuc2tpbGxzLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PFNraWxsIHRpdGxlPXtza2lsbC50aXRsZX0ga2V5PXtpbmRleH0gLz5cblx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDxMYW5ndWFnZSAvPlxuXHRcdFx0XHRcdFx0XHQ8Q2VydGlmaWNhdGlvbiAvPlxuXHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PFByZXZpZXcgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxGb3JtQ1AgZm9ybUNsb3NlPXtmb3JtQ2xvc2V9IHNldEZvcm1DbG9zZT17c2V0Rm9ybUNsb3NlfSAvPlxuXHRcdFx0XHQ8UHJpbnQgLz5cblx0XHRcdDwvUmVzdW1lQ29udGV4dC5Qcm92aWRlcj5cblx0XHQ8Lz5cblx0KTtcbn1cbmV4cG9ydCB7IFJlc3VtZUNvbnRleHQgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJMYW5ndWFnZSIsIk1ldGEiLCJGb3JtQ1AiLCJMb2FkVW5sb2FkIiwiUHJldmlldyIsIkRlZmF1bHRSZXN1bWVEYXRhIiwiU29jaWFsTWVkaWEiLCJXb3JrRXhwZXJpZW5jZSIsIlNraWxsIiwiUGVyc29uYWxJbmZvcm1hdGlvbiIsIlN1bW1hcnkiLCJQcm9qZWN0cyIsIkVkdWNhdGlvbiIsImR5bmFtaWMiLCJDZXJ0aWZpY2F0aW9uIiwiUmVzdW1lQ29udGV4dCIsIlByaW50Iiwic3NyIiwiQnVpbGRlciIsInByb3BzIiwicmVzdW1lRGF0YSIsInNldFJlc3VtZURhdGEiLCJmb3JtQ2xvc2UiLCJzZXRGb3JtQ2xvc2UiLCJoYW5kbGVQcm9maWxlUGljdHVyZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJCbG9iIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwicHJvZmlsZVBpY3R1cmUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwibG9nIiwiUHJvdmlkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwic2tpbGxzIiwibWFwIiwic2tpbGwiLCJpbmRleCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/builder.jsx\n"));

/***/ })

});