"use strict";
exports.id = 882;
exports.ids = [882];
exports.modules = {

/***/ 1290:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8262);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__]);
([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Education = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_3__.ResumeContext);
    const handleEducation = (e, index)=>{
        const newEducation = [
            ...resumeData.education
        ];
        newEducation[index][e.target.name] = e.target.value;
        setResumeData({
            ...resumeData,
            education: newEducation
        });
    };
    const addEducation = ()=>{
        setResumeData({
            ...resumeData,
            education: [
                ...resumeData.education,
                {
                    school: "",
                    degree: "",
                    startYear: "",
                    endYear: ""
                }
            ]
        });
    };
    const removeEducation = (index)=>{
        const newEducation = [
            ...resumeData.education
        ];
        newEducation[index] = newEducation[newEducation.length - 1];
        newEducation.pop();
        setResumeData({
            ...resumeData,
            education: newEducation
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: "Education"
            }),
            resumeData.education.map((education, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "f-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "School",
                            name: "school",
                            className: "w-full other-input",
                            value: education.school,
                            onChange: (e)=>handleEducation(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Degree",
                            name: "degree",
                            className: "w-full other-input",
                            value: education.degree,
                            onChange: (e)=>handleEducation(e, index)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-wrap-gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    placeholder: "Start Year",
                                    name: "startYear",
                                    className: "other-input",
                                    value: education.startYear,
                                    onChange: (e)=>handleEducation(e, index)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    placeholder: "End Year",
                                    name: "endYear",
                                    className: "other-input",
                                    value: education.endYear,
                                    onChange: (e)=>handleEducation(e, index)
                                })
                            ]
                        })
                    ]
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                size: resumeData.education.length,
                add: addEducation,
                remove: removeEducation
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Education);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_md__WEBPACK_IMPORTED_MODULE_1__]);
react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const FormButton = ({ size , remove , add  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-wrap-gap-2 mb-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: add,
                "aria-label": "Add",
                className: "p-2 text-white bg-blue-700 rounded text-xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdAddCircle, {})
            }),
            size > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: remove,
                "aria-label": "Remove",
                className: "p-2 text-white bg-blue-700 rounded text-xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_1__.MdRemoveCircle, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7260:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_bs__WEBPACK_IMPORTED_MODULE_2__]);
react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const FormCP = ({ formClose , setFormClose  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": "Form Open/Close",
        className: "exclude-print fixed bottom-5 left-10 font-bold rounded-xl bg-white text-gray-600 shadow-2xl border-2 border-white",
        onClick: ()=>setFormClose(!formClose),
        children: formClose ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsFillArrowRightSquareFill, {
            className: "w-10 h-10",
            title: "Form Open"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsFillArrowLeftSquareFill, {
            className: "w-10 h-10",
            title: "Form Close"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCP);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9882);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_builder__WEBPACK_IMPORTED_MODULE_2__, _FormButton__WEBPACK_IMPORTED_MODULE_3__]);
([_pages_builder__WEBPACK_IMPORTED_MODULE_2__, _FormButton__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Language = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_2__.ResumeContext);
    const skillType = "languages";
    const title = "Languages";
    const placeholder = "Language";
    const handleSkills = (e, index, skillType)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills[index] = e.target.value;
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    const addSkill = ()=>{
        setResumeData({
            ...resumeData,
            [skillType]: [
                ...resumeData[skillType],
                ""
            ]
        });
    };
    const removeSkill = (index)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills.splice(-1, 1);
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: title
            }),
            resumeData[skillType].map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "f-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: placeholder,
                        name: "skill",
                        className: "w-full other-input",
                        value: skill,
                        onChange: (e)=>handleSkills(e, index, skillType)
                    })
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                size: resumeData[skillType].length,
                add: addSkill,
                remove: removeSkill
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6583:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1301);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_fa__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__]);
([react_icons_fa__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const LoadUnload = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_3__.ResumeContext);
    // load backup resume data
    const handleLoad = (event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event)=>{
            const resumeData = JSON.parse(event.target.result);
            setResumeData(resumeData);
        };
        reader.readAsText(file);
    };
    // download resume data
    const handleDownload = (data, filename, event)=>{
        event.preventDefault();
        const jsonData = JSON.stringify(data);
        const blob = new Blob([
            jsonData
        ], {
            type: "application/json"
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap gap-4 mb-2 justify-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inline-flex flex-row items-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-[1.2rem] text-white",
                        children: "Load Data"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "p-2 text-white bg-blue-700 rounded cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaCloudUploadAlt, {
                                className: "text-[1.2rem] text-white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                "aria-label": "Load Data",
                                type: "file",
                                className: "hidden",
                                onChange: handleLoad,
                                accept: ".json"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inline-flex flex-row items-center gap-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-[1.2rem] text-white",
                        children: "Save Data"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "Save Data",
                        className: "p-2 text-white bg-blue-700 rounded",
                        onClick: (event)=>handleDownload(resumeData, resumeData.name + " by Resume_Forge.json", event),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaCloudDownloadAlt, {
                            className: "text-[1.2rem] text-white"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadUnload);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_builder__WEBPACK_IMPORTED_MODULE_2__]);
_pages_builder__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const PersonalInformation = ({})=>{
    const { resumeData , setResumeData , handleProfilePicture , handleChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_2__.ResumeContext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: "Personal Information"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Full Name",
                        name: "name",
                        className: "pi",
                        value: resumeData.name,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Job Title",
                        name: "position",
                        className: "pi",
                        value: resumeData.position,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Contact Information",
                        name: "contactInformation",
                        className: "pi",
                        value: resumeData.contactInformation,
                        onChange: handleChange,
                        minLength: "10",
                        maxLength: "15"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        placeholder: "Email",
                        name: "email",
                        className: "pi",
                        value: resumeData.email,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: "Address",
                        name: "address",
                        className: "pi",
                        value: resumeData.address,
                        onChange: handleChange
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        name: "profileImage",
                        accept: "image/*",
                        className: "profileInput",
                        onChange: handleProfilePicture,
                        placeholder: "Profile Picture"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalInformation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8262);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__]);
([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Projects = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_3__.ResumeContext);
    const handleProjects = (e, index)=>{
        const newProjects = [
            ...resumeData.projects
        ];
        newProjects[index][e.target.name] = e.target.value;
        setResumeData({
            ...resumeData,
            projects: newProjects
        });
    };
    const addProjects = ()=>{
        setResumeData({
            ...resumeData,
            projects: [
                ...resumeData.projects,
                {
                    title: "",
                    link: "",
                    description: "",
                    keyAchievements: "",
                    startYear: "",
                    endYear: ""
                }
            ]
        });
    };
    const removeProjects = (index)=>{
        const newProjects = [
            ...resumeData.projects
        ];
        newProjects[index] = newProjects[newProjects.length - 1];
        newProjects.pop();
        setResumeData({
            ...resumeData,
            projects: newProjects
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: "Projects"
            }),
            resumeData.projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "f-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Project Name",
                            name: "name",
                            className: "w-full other-input",
                            value: project.name,
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Link",
                            name: "link",
                            className: "w-full other-input",
                            value: project.link,
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            type: "text",
                            placeholder: "Description",
                            name: "description",
                            className: "w-full other-input h-32",
                            value: project.description,
                            maxLength: "250",
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            type: "text",
                            placeholder: "Key Achievements",
                            name: "keyAchievements",
                            className: "w-full other-input h-40",
                            value: project.keyAchievements,
                            onChange: (e)=>handleProjects(e, index)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-wrap-gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    placeholder: "Start Year",
                                    name: "startYear",
                                    className: "other-input",
                                    value: project.startYear,
                                    onChange: (e)=>handleProjects(e, index)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    placeholder: "End Year",
                                    name: "endYear",
                                    className: "other-input",
                                    value: project.endYear,
                                    onChange: (e)=>handleProjects(e, index)
                                })
                            ]
                        })
                    ]
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                size: resumeData.projects.length,
                add: addProjects,
                remove: removeProjects
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4606:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9882);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_builder__WEBPACK_IMPORTED_MODULE_2__, _FormButton__WEBPACK_IMPORTED_MODULE_3__]);
([_pages_builder__WEBPACK_IMPORTED_MODULE_2__, _FormButton__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Skill = ({ title  })=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_2__.ResumeContext);
    // skills
    const handleSkill = (e, index, title)=>{
        const newSkills = [
            ...resumeData.skills.find((skillType)=>skillType.title === title).skills
        ];
        newSkills[index] = e.target.value;
        setResumeData((prevData)=>({
                ...prevData,
                skills: prevData.skills.map((skill)=>skill.title === title ? {
                        ...skill,
                        skills: newSkills
                    } : skill)
            }));
    };
    const addSkill = (title)=>{
        setResumeData((prevData)=>{
            const skillType = prevData.skills.find((skillType)=>skillType.title === title);
            const newSkills = [
                ...skillType.skills,
                ""
            ];
            const updatedSkills = prevData.skills.map((skill)=>skill.title === title ? {
                    ...skill,
                    skills: newSkills
                } : skill);
            return {
                ...prevData,
                skills: updatedSkills
            };
        });
    };
    const removeSkill = (title, index)=>{
        setResumeData((prevData)=>{
            const skillType = prevData.skills.find((skillType)=>skillType.title === title);
            const newSkills = [
                ...skillType.skills
            ];
            newSkills.pop();
            const updatedSkills = prevData.skills.map((skill)=>skill.title === title ? {
                    ...skill,
                    skills: newSkills
                } : skill);
            return {
                ...prevData,
                skills: updatedSkills
            };
        });
    };
    const skillType = resumeData.skills.find((skillType)=>skillType.title === title);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: title
            }),
            skillType.skills.map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "f-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: title,
                        name: title,
                        className: "w-full other-input",
                        value: skill,
                        onChange: (e)=>handleSkill(e, index, title)
                    })
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                size: skillType.skills.length,
                add: ()=>addSkill(title),
                remove: ()=>removeSkill(title)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skill);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4850:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8262);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__]);
([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SocialMedia = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_3__.ResumeContext);
    // social media
    const handleSocialMedia = (e, index)=>{
        const newSocialMedia = [
            ...resumeData.socialMedia
        ];
        newSocialMedia[index][e.target.name] = e.target.value.replace("https://", "");
        setResumeData({
            ...resumeData,
            socialMedia: newSocialMedia
        });
    };
    const addSocialMedia = ()=>{
        setResumeData({
            ...resumeData,
            socialMedia: [
                ...resumeData.socialMedia,
                {
                    socialMedia: "",
                    link: ""
                }
            ]
        });
    };
    const removeSocialMedia = (index)=>{
        const newSocialMedia = [
            ...resumeData.socialMedia
        ];
        newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
        newSocialMedia.pop();
        setResumeData({
            ...resumeData,
            socialMedia: newSocialMedia
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: "Social Media"
            }),
            resumeData.socialMedia.map((socialMedia, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex-wrap-gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Social Media",
                            name: "socialMedia",
                            className: "other-input",
                            value: socialMedia.socialMedia,
                            onChange: (e)=>handleSocialMedia(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Link",
                            name: "link",
                            className: "other-input",
                            value: socialMedia.link,
                            onChange: (e)=>handleSocialMedia(e, index)
                        })
                    ]
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                size: resumeData.socialMedia.length,
                add: addSocialMedia,
                remove: removeSocialMedia
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialMedia);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_builder__WEBPACK_IMPORTED_MODULE_2__]);
_pages_builder__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Summary = ()=>{
    const { resumeData , setResumeData , handleChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_2__.ResumeContext);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: "Summary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    placeholder: "Summary",
                    name: "summary",
                    className: "w-full other-input h-40",
                    value: resumeData.summary,
                    onChange: handleChange,
                    maxLength: "500"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Summary);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8262);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__]);
([_FormButton__WEBPACK_IMPORTED_MODULE_1__, _pages_builder__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const WorkExperience = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_3__.ResumeContext);
    const handleWorkExperience = (e, index)=>{
        const newworkExperience = [
            ...resumeData.workExperience
        ];
        newworkExperience[index][e.target.name] = e.target.value;
        setResumeData({
            ...resumeData,
            workExperience: newworkExperience
        });
    };
    const addWorkExperience = ()=>{
        setResumeData({
            ...resumeData,
            workExperience: [
                ...resumeData.workExperience,
                {
                    company: "",
                    position: "",
                    description: "",
                    keyAchievements: "",
                    startYear: "",
                    endYear: ""
                }
            ]
        });
    };
    const removeWorkExperience = (index)=>{
        const newworkExperience = [
            ...resumeData.workExperience
        ];
        newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
        newworkExperience.pop();
        setResumeData({
            ...resumeData,
            workExperience: newworkExperience
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: "Work Experience"
            }),
            resumeData.workExperience.map((workExperience, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "f-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Company",
                            name: "company",
                            className: "w-full other-input",
                            value: workExperience.company,
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Job Title",
                            name: "position",
                            className: "w-full other-input",
                            value: workExperience.position,
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            type: "text",
                            placeholder: "Description",
                            name: "description",
                            className: "w-full other-input h-32",
                            value: workExperience.description,
                            maxLength: "250",
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            type: "text",
                            placeholder: "Key Achievements",
                            name: "keyAchievements",
                            className: "w-full other-input h-40",
                            value: workExperience.keyAchievements,
                            onChange: (e)=>handleWorkExperience(e, index)
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-wrap-gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    placeholder: "Start Year",
                                    name: "startYear",
                                    className: "other-input",
                                    value: workExperience.startYear,
                                    onChange: (e)=>handleWorkExperience(e, index)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    placeholder: "End Year",
                                    name: "endYear",
                                    className: "other-input",
                                    value: workExperience.endYear,
                                    onChange: (e)=>handleWorkExperience(e, index)
                                })
                            ]
                        })
                    ]
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                size: resumeData.workExperience.length,
                add: addWorkExperience,
                remove: removeWorkExperience
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkExperience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7439:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9882);
/* harmony import */ var _FormButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_builder__WEBPACK_IMPORTED_MODULE_2__, _FormButton__WEBPACK_IMPORTED_MODULE_3__]);
([_pages_builder__WEBPACK_IMPORTED_MODULE_2__, _FormButton__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Certification = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_2__.ResumeContext);
    const skillType = "certifications";
    const title = "Certifications";
    const handleSkills = (e, index, skillType)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills[index] = e.target.value;
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    const addSkill = ()=>{
        setResumeData({
            ...resumeData,
            [skillType]: [
                ...resumeData[skillType],
                ""
            ]
        });
    };
    const removeSkill = (index)=>{
        const newSkills = [
            ...resumeData[skillType]
        ];
        newSkills.splice(-1, 1);
        setResumeData({
            ...resumeData,
            [skillType]: newSkills
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col-gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "input-title",
                children: title
            }),
            resumeData[skillType].map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "f-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        placeholder: title,
                        name: title,
                        className: "w-full other-input",
                        value: skill,
                        onChange: (e)=>handleSkills(e, index, skillType)
                    })
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FormButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                size: resumeData[skillType].length,
                add: addSkill,
                remove: removeSkill
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Certification);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function Meta({ title , keywords , description  }) {
    const homepage = "https://atsresume.vercel.app/";
    const logo = "https://atsresume.vercel.app/assets/logo.png";
    const fevicon = "https://atsresume.vercel.app/assets/favicon.ico";
    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 9999999999",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Saurav Hathi",
                "foundingDate": "2023",
                "foundingLocation": "IN",
                "email": "xyz@gmail.com",
                "telephone": "+91 9999999999",
                "areaServed": "IN",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Saurav Hathi",
                "owns": "Saurav Hathi",
                "publishingPrinciples": ${homepage},
                "slogan": "Get hired with an ATS-optimized resume"
            }`
        };
    }
    return /*#__PURE__*/ _jsxs(Head, {
        children: [
            /*#__PURE__*/ _jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ _jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ _jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ _jsx("link", {
                rel: "icon",
                href: fevicon
            }),
            /*#__PURE__*/ _jsx("title", {
                children: title
            }),
            /*#__PURE__*/ _jsx("meta", {
                type: "copyright",
                content: "Resume Forge"
            }),
            /*#__PURE__*/ _jsx("meta", {
                type: "author",
                content: "Kurt Calacday"
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:url",
                content: homepage
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "og:image",
                content: logo
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "twitter:url",
                content: homepage
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ _jsx("meta", {
                property: "twitter:image",
                content: logo
            }),
            /*#__PURE__*/ _jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: isiteJsonLd()
            }, "isiteJsonLd")
        ]
    });
}


/***/ }),

/***/ 2812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Certification = ({ title , certifications  })=>{
    return certifications.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "section-title mb-1 border-b-2 border-gray-300",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "sub-content list-disc ul-padding",
                children: certifications.map((certification, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: certification
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Certification);


/***/ }),

/***/ 2516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ContactInfo = ({ mainclass , linkclass , teldata , emaildata , addressdata , telicon , emailicon , addressicon  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: mainclass,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: linkclass,
                "aria-label": "Phone Number",
                href: `tel:${teldata}`,
                children: [
                    telicon,
                    "  ",
                    teldata
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: linkclass,
                "aria-label": "Email Address",
                href: `mailto:${emaildata}`,
                children: [
                    emailicon,
                    " ",
                    emaildata
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("address", {
                "aria-label": "Address",
                className: linkclass + " not-italic",
                children: [
                    addressicon,
                    " ",
                    addressdata
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactInfo);


/***/ }),

/***/ 320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Language = ({ title , languages  })=>{
    return languages.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "section-title mb-1 border-b-2 border-gray-300",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "sub-content",
                children: languages.join(", ")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);


/***/ }),

/***/ 3245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1301);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6905);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8895);
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4503);
/* harmony import */ var _utility_DateRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(941);
/* harmony import */ var _ContactInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2516);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5304);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1169);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9882);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1765);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(320);
/* harmony import */ var _Certification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_fa__WEBPACK_IMPORTED_MODULE_1__, react_icons_md__WEBPACK_IMPORTED_MODULE_2__, react_icons_cg__WEBPACK_IMPORTED_MODULE_3__, _Skills__WEBPACK_IMPORTED_MODULE_4__, _pages_builder__WEBPACK_IMPORTED_MODULE_10__]);
([react_icons_fa__WEBPACK_IMPORTED_MODULE_1__, react_icons_md__WEBPACK_IMPORTED_MODULE_2__, react_icons_cg__WEBPACK_IMPORTED_MODULE_3__, _Skills__WEBPACK_IMPORTED_MODULE_4__, _pages_builder__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const DragDropContext = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/preview/Preview.jsx -> " + "react-beautiful-dnd"
        ]
    },
    ssr: false
});
const Droppable = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/preview/Preview.jsx -> " + "react-beautiful-dnd"
        ]
    },
    ssr: false
});
const Draggable = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/preview/Preview.jsx -> " + "react-beautiful-dnd"
        ]
    },
    ssr: false
});
const Preview = ()=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_10__.ResumeContext);
    const icons = [
        {
            name: "github",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {})
        },
        {
            name: "linkedin",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedin, {})
        },
        {
            name: "twitter",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTwitter, {})
        },
        {
            name: "facebook",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFacebook, {})
        },
        {
            name: "instagram",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaInstagram, {})
        },
        {
            name: "youtube",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaYoutube, {})
        },
        {
            name: "website",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_3__.CgWebsite, {})
        }
    ];
    const onDragEnd = (result)=>{
        const { destination , source  } = result;
        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;
        if (source.droppableId === "work-experience") {
            const newWorkExperience = [
                ...resumeData.workExperience
            ];
            const [removed] = newWorkExperience.splice(source.index, 1);
            newWorkExperience.splice(destination.index, 0, removed);
            setResumeData({
                ...resumeData,
                workExperience: newWorkExperience
            });
        }
        if (source.droppableId.includes("WORK_EXPERIENCE_KEY_ACHIEVEMENT")) {
            const newWorkExperience = [
                ...resumeData.workExperience
            ];
            const workExperienceIndex = parseInt(source.droppableId.split("-")[1]);
            const keyAchievements = newWorkExperience[workExperienceIndex].keyAchievements.split("\n");
            const [removed] = keyAchievements.splice(source.index, 1);
            keyAchievements.splice(destination.index, 0, removed);
            newWorkExperience[workExperienceIndex].keyAchievements = keyAchievements.join("\n");
            setResumeData({
                ...resumeData,
                workExperience: newWorkExperience
            });
        }
        if (source.droppableId === "skills") {
            const newSkills = [
                ...resumeData.skills
            ];
            const [removed] = newSkills.splice(source.index, 1);
            newSkills.splice(destination.index, 0, removed);
            setResumeData({
                ...resumeData,
                skills: newSkills
            });
        }
        if (source.droppableId.includes("projects")) {
            const newProjects = [
                ...resumeData.projects
            ];
            const [removed] = newProjects.splice(source.index, 1);
            newProjects.splice(destination.index, 0, removed);
            setResumeData({
                ...resumeData,
                projects: newProjects
            });
        }
        if (source.droppableId.includes("PROJECTS_KEY_ACHIEVEMENT")) {
            const newProjects = [
                ...resumeData.projects
            ];
            const projectIndex = parseInt(source.droppableId.split("-")[1]);
            const keyAchievements = newProjects[projectIndex].keyAchievements.split("\n");
            const [removed] = keyAchievements.splice(source.index, 1);
            keyAchievements.splice(destination.index, 0, removed);
            newProjects[projectIndex].keyAchievements = keyAchievements.join("\n");
            setResumeData({
                ...resumeData,
                projects: newProjects
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:max-w-[60%] sticky top-0 preview rm-padding-print p-6 md:overflow-y-scroll md:h-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(A4PageWrapper, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DragDropContext, {
                onDragEnd: onDragEnd,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "f-col items-center mb-1",
                        children: [
                            resumeData.profilePicture.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: resumeData.profilePicture,
                                    alt: "profile",
                                    width: 100,
                                    height: 100,
                                    className: "object-cover h-full w-full"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "name",
                                children: resumeData.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "profession",
                                children: resumeData.position
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactInfo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                mainclass: "flex flex-row gap-1 mb-1 contact",
                                linkclass: "inline-flex items-center gap-1",
                                teldata: resumeData.contactInformation,
                                emaildata: resumeData.email,
                                addressdata: resumeData.address,
                                telicon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdPhone, {}),
                                emailicon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdEmail, {}),
                                addressicon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdLocationOn, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid grid-cols-3 gap-1",
                                children: resumeData.socialMedia.map((socialMedia, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: `http://${socialMedia.link}`,
                                        "aria-label": socialMedia.socialMedia,
                                        title: socialMedia.socialMedia,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "inline-flex items-center gap-1 social-media",
                                        // Prevent text overflowing, If the socialMedia.link string is longer than 32 characters, apply the wordWrap and display styles to this <a> tag.
                                        // wordWrap: "break-word" breaks the text onto the next line if it's too long,
                                        // display: "inline-block" is necessary for wordWrap to work on an inline element like <a>.
                                        style: socialMedia.link.length > 32 ? {
                                            wordWrap: "break-word",
                                            display: "inline-block"
                                        } : {},
                                        children: [
                                            icons.map((icon, index)=>{
                                                if (icon.name === socialMedia.socialMedia.toLowerCase()) {
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: icon.icon
                                                    }, index);
                                                }
                                            }),
                                            socialMedia.link
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "border-dashed my-2"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-1 space-y-2",
                                children: [
                                    resumeData.summary.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "section-title mb-1 border-b-2 border-gray-300",
                                                children: "Summary"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "content break-words",
                                                children: resumeData.summary
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: resumeData.education.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "section-title mb-1 border-b-2 border-gray-300",
                                                    children: "Education"
                                                }),
                                                resumeData.education.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "content i-bold",
                                                                children: item.degree
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "content",
                                                                children: item.school
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utility_DateRange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                startYear: item.startYear,
                                                                endYear: item.endYear,
                                                                id: `education-start-end-date`
                                                            })
                                                        ]
                                                    }, index))
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Droppable, {
                                        droppableId: "skills",
                                        type: "SKILLS",
                                        children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                children: [
                                                    resumeData.skills.map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Draggable, {
                                                            draggableId: `SKILLS-${index}`,
                                                            index: index,
                                                            children: (provided, snapshot)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    ref: provided.innerRef,
                                                                    ...provided.draggableProps,
                                                                    ...provided.dragHandleProps,
                                                                    className: `mb-1 ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Skills__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                        title: skill.title,
                                                                        skills: skill.skills
                                                                    })
                                                                })
                                                        }, `SKILLS-${index}`)),
                                                    provided.placeholder
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Language__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        title: "Languages",
                                        languages: resumeData.languages
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Certification__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        title: "Certifications",
                                        certifications: resumeData.certifications
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-2 space-y-2",
                                children: [
                                    resumeData.workExperience.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Droppable, {
                                        droppableId: "work-experience",
                                        type: "WORK_EXPERIENCE",
                                        children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "section-title mb-1 border-b-2 border-gray-300 editable",
                                                        contentEditable: true,
                                                        suppressContentEditableWarning: true,
                                                        children: "Work Experience"
                                                    }),
                                                    resumeData.workExperience.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Draggable, {
                                                            draggableId: `WORK_EXPERIENCE-${index}`,
                                                            index: index,
                                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    ref: provided.innerRef,
                                                                    ...provided.draggableProps,
                                                                    ...provided.dragHandleProps,
                                                                    className: `mb-1 ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "content i-bold",
                                                                            children: item.company
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "content",
                                                                            children: item.position
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utility_DateRange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                            startYear: item.startYear,
                                                                            endYear: item.endYear,
                                                                            id: `work-experience-start-end-date`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "content hyphens-auto",
                                                                            children: item.description
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Droppable, {
                                                                            droppableId: `WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`,
                                                                            type: "WORK_EXPERIENCE_KEY_ACHIEVEMENT",
                                                                            children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "list-disc ul-padding content",
                                                                                    ...provided.droppableProps,
                                                                                    ref: provided.innerRef,
                                                                                    children: [
                                                                                        typeof item.keyAchievements === "string" && item.keyAchievements.split("\n").map((achievement, subIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Draggable, {
                                                                                                draggableId: `WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`,
                                                                                                index: subIndex,
                                                                                                children: (provided, snapshot)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        ref: provided.innerRef,
                                                                                                        ...provided.draggableProps,
                                                                                                        ...provided.dragHandleProps,
                                                                                                        className: `
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                                                        children: achievement
                                                                                                    })
                                                                                            }, `${item.company}-${index}-${subIndex}`)),
                                                                                        provided.placeholder
                                                                                    ]
                                                                                })
                                                                        })
                                                                    ]
                                                                })
                                                        }, `${item.company}-${index}`)),
                                                    provided.placeholder
                                                ]
                                            })
                                    }),
                                    resumeData.projects.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Droppable, {
                                        droppableId: "projects",
                                        type: "PROJECTS",
                                        children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                ...provided.droppableProps,
                                                ref: provided.innerRef,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "section-title mb-1 border-b-2 border-gray-300 editable",
                                                        contentEditable: true,
                                                        suppressContentEditableWarning: true,
                                                        children: "Projects"
                                                    }),
                                                    resumeData.projects.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Draggable, {
                                                            draggableId: `PROJECTS-${index}`,
                                                            index: index,
                                                            children: (provided, snapshot)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    ref: provided.innerRef,
                                                                    ...provided.draggableProps,
                                                                    ...provided.dragHandleProps,
                                                                    className: `mb-1 ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "content i-bold",
                                                                            children: item.name
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utility_DateRange__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                            startYear: item.startYear,
                                                                            endYear: item.endYear,
                                                                            id: `work-experience-start-end-date`
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                            href: item.link,
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "content",
                                                                            children: item.link
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "content",
                                                                            children: item.description
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Droppable, {
                                                                            droppableId: `PROJECTS_KEY_ACHIEVEMENT-${index}`,
                                                                            type: "PROJECTS_KEY_ACHIEVEMENT",
                                                                            children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "list-disc ul-padding content",
                                                                                    ...provided.droppableProps,
                                                                                    ref: provided.innerRef,
                                                                                    children: [
                                                                                        typeof item.keyAchievements === "string" && item.keyAchievements.split("\n").map((achievement, subIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Draggable, {
                                                                                                draggableId: `PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`,
                                                                                                index: subIndex,
                                                                                                children: (provided, snapshot)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                                        ref: provided.innerRef,
                                                                                                        ...provided.draggableProps,
                                                                                                        ...provided.dragHandleProps,
                                                                                                        className: `
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${snapshot.isDragging && "outline-dashed outline-2 outline-gray-400 bg-white"}`,
                                                                                                        children: achievement
                                                                                                    })
                                                                                            }, `${item.name}-${index}-${subIndex}`)),
                                                                                        provided.placeholder
                                                                                    ]
                                                                                })
                                                                        })
                                                                    ]
                                                                })
                                                        }, `${item.name}-${index}`)),
                                                    provided.placeholder
                                                ]
                                            })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const A4PageWrapper = ({ children  })=>{
    const alertA4Size = ()=>{
        const preview = document.querySelector(".preview");
        const previewHeight = preview.offsetHeight;
        console.log(previewHeight);
        if (previewHeight > 1122) {
            alert("A4 size exceeded");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-8.5in",
        onLoad: alertA4Size,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9882);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_builder__WEBPACK_IMPORTED_MODULE_2__]);
_pages_builder__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Skills = ({ title , skills  })=>{
    const { resumeData , setResumeData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_builder__WEBPACK_IMPORTED_MODULE_2__.ResumeContext);
    const handleTitleChange = (e)=>{
        const newSkills = [
            ...resumeData.skills
        ];
        newSkills.find((skillType)=>skillType.title === title).title = e.target.innerText;
        setResumeData({
            ...resumeData,
            skills: newSkills
        });
    };
    return skills.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "section-title mb-1 border-b-2 border-gray-300 editable",
                contentEditable: true,
                suppressContentEditableWarning: true,
                onBlur: handleTitleChange,
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "sub-content",
                children: skills.join(", ")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DateRange = ({ startYear , endYear , id  })=>{
    const start = new Date(startYear);
    const end = new Date(endYear);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        id: id,
        className: "sub-content",
        children: [
            start.toLocaleString("default", {
                month: "short"
            }),
            ", ",
            start.getFullYear(),
            " - ",
            end != "Invalid Date" ? end.toLocaleString("default", {
                month: "short"
            }) + ", " + end.getFullYear() : "Present"
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateRange);


/***/ }),

/***/ 7224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DefaultResumeData = {
    name: "Wilbert Baybay",
    position: "Sofware Developer",
    contactInformation: "+1-555-0100",
    email: "wilbert.baybay@gmail.com",
    address: "Metro Manila, Philippines",
    profilePicture: "",
    socialMedia: [
        {
            socialMedia: "Github",
            link: "github.com//wilbert-baybay"
        },
        {
            socialMedia: "LinkedIn",
            link: "linkedin.com/in/wilbert-baybay"
        },
        {
            socialMedia: "Website",
            link: "wilbert-baybay.github.io"
        }
    ],
    summary: "Resourceful Developer with 11 years of experience in designing and developing user interfaces, testing and training employees. Skilled at utilizing a wide variety of tools and programs to provide effective applications.",
    education: [
        {
            school: "Bachelor of Computer Science",
            degree: "New York University",
            startYear: "2020-08-20",
            endYear: "2024-07-01"
        }
    ],
    workExperience: [
        {
            company: "Torph TTC",
            position: "Developer",
            description: "Torph TTC is a global software company that offers user interface UI development tools and components for a range of developer applications across all platforms.",
            keyAchievements: "Created and maintained 10 web applications for numerous national and foreign clients.\nEnsured that the user interfaces and user experience of the software applications developed by the team met at least 80% of users expectations.\nCreated and analyzed 500 unit test cases.\nDeveloped python scripts to automate image's noise-reduction process which helped improve research analysis time by 40%.\nEstablished and lead a team of 10 people; covering every key role in the early stages.",
            startYear: "2023-02-16",
            endYear: "2023-02-21"
        },
        {
            company: "Reilty Group",
            position: "Front End Web Developer",
            description: "Reilty Group is an industry-leading provider of online gambling software and solutions.",
            keyAchievements: "Increased by 35% the reach of users to the platform, over the installation of the web platform in mobile devices.\nDelivered 30 web solutions.\nReplaced 1 full-time web developer under part-time employment achieving a productivity gain of over 60% as measured by working hours.\nWorked with more than 4 different teams at different points of time and provided end-to-end solutions for clients.",
            startYear: "2023-02-22",
            endYear: "2023-03-09"
        },
        {
            company: "HellX",
            position: "Python Developer",
            description: "Heller is a Software Editor specialized in logistics management.",
            keyAchievements: "Developed several automation systems - saved over $50,000 annually.\nJoined the team as #10 employee as a developer working directly with the biggest customers.\nInvolved in coding as per the requirement, delivered well ahead of time which saved project cost by 20%.\nReduced database size by nearly 50% and improved its performance by 20%.\nDelivery time of good reduced by 50%.",
            startYear: "2023-02-22",
            endYear: "2023-03-09"
        }
    ],
    projects: [],
    skills: [
        {
            title: "Technical Skills",
            skills: [
                "JavaScript",
                "Python",
                "Web Services",
                "C++",
                "HTML5",
                "CSS",
                "SQL",
                "User Interface",
                "Creativity"
            ]
        },
        {
            title: "Soft Skills",
            skills: [
                "Collaboration",
                "Problem-solving",
                "Communication",
                "Time management",
                "Result-oriented"
            ]
        },
        {
            title: "Additional Skills",
            skills: [
                "Public Speaking",
                "Writing",
                "Research"
            ]
        }
    ],
    languages: [
        "English",
        "Filipino"
    ],
    certifications: [
        "Certified Web Professional-Web Developer",
        "Java Development Certified Professional"
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultResumeData);


/***/ }),

/***/ 9882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumeContext": () => (/* binding */ ResumeContext),
/* harmony export */   "default": () => (/* binding */ Builder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_Language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1342);
/* harmony import */ var _components_meta_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7096);
/* harmony import */ var _components_form_FormCP__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7260);
/* harmony import */ var _components_form_LoadUnload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6583);
/* harmony import */ var _components_preview_Preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3245);
/* harmony import */ var _components_utility_DefaultResumeData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7224);
/* harmony import */ var _components_form_SocialMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4850);
/* harmony import */ var _components_form_WorkExperience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(592);
/* harmony import */ var _components_form_Skill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4606);
/* harmony import */ var _components_form_PersonalInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2964);
/* harmony import */ var _components_form_Summary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5229);
/* harmony import */ var _components_form_Projects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5204);
/* harmony import */ var _components_form_Education__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1290);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1765);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_form_certification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7439);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_form_Language__WEBPACK_IMPORTED_MODULE_2__, _components_form_FormCP__WEBPACK_IMPORTED_MODULE_4__, _components_form_LoadUnload__WEBPACK_IMPORTED_MODULE_5__, _components_preview_Preview__WEBPACK_IMPORTED_MODULE_6__, _components_form_SocialMedia__WEBPACK_IMPORTED_MODULE_8__, _components_form_WorkExperience__WEBPACK_IMPORTED_MODULE_9__, _components_form_Skill__WEBPACK_IMPORTED_MODULE_10__, _components_form_PersonalInformation__WEBPACK_IMPORTED_MODULE_11__, _components_form_Summary__WEBPACK_IMPORTED_MODULE_12__, _components_form_Projects__WEBPACK_IMPORTED_MODULE_13__, _components_form_Education__WEBPACK_IMPORTED_MODULE_14__, _components_form_certification__WEBPACK_IMPORTED_MODULE_16__]);
([_components_form_Language__WEBPACK_IMPORTED_MODULE_2__, _components_form_FormCP__WEBPACK_IMPORTED_MODULE_4__, _components_form_LoadUnload__WEBPACK_IMPORTED_MODULE_5__, _components_preview_Preview__WEBPACK_IMPORTED_MODULE_6__, _components_form_SocialMedia__WEBPACK_IMPORTED_MODULE_8__, _components_form_WorkExperience__WEBPACK_IMPORTED_MODULE_9__, _components_form_Skill__WEBPACK_IMPORTED_MODULE_10__, _components_form_PersonalInformation__WEBPACK_IMPORTED_MODULE_11__, _components_form_Summary__WEBPACK_IMPORTED_MODULE_12__, _components_form_Projects__WEBPACK_IMPORTED_MODULE_13__, _components_form_Education__WEBPACK_IMPORTED_MODULE_14__, _components_form_certification__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const ResumeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_components_utility_DefaultResumeData__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
// server side rendering false
const Print = next_dynamic__WEBPACK_IMPORTED_MODULE_15___default()(null, {
    loadableGenerated: {
        modules: [
            "builder.jsx -> " + "../components/utility/WinPrint"
        ]
    },
    ssr: false
});
function Builder(props) {
    // resume data
    const [resumeData, setResumeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_components_utility_DefaultResumeData__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    // form hide/show
    const [formClose, setFormClose] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // profile picture
    const handleProfilePicture = (e)=>{
        const file = e.target.files[0];
        if (file instanceof Blob) {
            const reader = new FileReader();
            reader.onload = (event)=>{
                setResumeData({
                    ...resumeData,
                    profilePicture: event.target.result
                });
            };
            reader.readAsDataURL(file);
        } else {
            console.error("Invalid file type");
        }
    };
    const handleChange = (e)=>{
        setResumeData({
            ...resumeData,
            [e.target.name]: e.target.value
        });
        console.log(resumeData);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ResumeContext.Provider, {
            value: {
                resumeData,
                setResumeData,
                handleProfilePicture,
                handleChange
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen",
                    children: [
                        !formClose && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "p-4 bg-gray-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll rounded-lg shadow-2xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_LoadUnload__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_PersonalInformation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_SocialMedia__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_Summary__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_Education__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_WorkExperience__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_Projects__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                                resumeData.skills.map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_Skill__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        title: skill.title
                                    }, index)),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_Language__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_certification__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_preview_Preview__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_form_FormCP__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    formClose: formClose,
                    setFormClose: setFormClose
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Print, {})
            ]
        })
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;