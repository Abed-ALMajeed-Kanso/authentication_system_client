exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 4758:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9646))

/***/ }),

/***/ 1106:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23))

/***/ }),

/***/ 8514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("C:\\Users\\Abed\\Documents\\Massyve\\authentication_system\\client\\app\\layout.tsx");


/***/ }),

/***/ 1324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser),
/* harmony export */   "d": () => (/* binding */ UserProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const UserProvider = ({ children  })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Track loading state
    // Client-side check to ensure localStorage is available
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {} else {
            setIsLoading(false);
        }
    }, []);
    // Whenever the user changes, save the user data to localStorage
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: {
            user,
            setUser,
            isLoading
        },
        children: children
    });
};
const useUser = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};


/***/ }),

/***/ 9646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(307);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/AppBar.tsx


const AppBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gradient-to-b from-cyan-50 to-cyan-200 p-4 flex gap-5 "
    });
};
/* harmony default export */ const app_AppBar = (AppBar);

// EXTERNAL MODULE: ./app/context/UserContext.tsx
var UserContext = __webpack_require__(1324);
;// CONCATENATED MODULE: ./app/Providers.tsx


function Providers({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(UserContext/* UserProvider */.d, {
        children: children
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx




function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Providers, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(app_AppBar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "min-h-screen",
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 2876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wt": () => (/* binding */ checkAuth),
  "x4": () => (/* binding */ login),
  "kS": () => (/* binding */ logout)
});

// UNUSED EXPORTS: fetchProfile, saveUser

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 53 modules
var axios = __webpack_require__(3679);
;// CONCATENATED MODULE: ./app/utils/api.ts

const api = axios/* default.create */.Z.create({
    baseURL: "https://authentication-system-e8yz.onrender.com",
    withCredentials: true
});
/* harmony default export */ const utils_api = (api);

;// CONCATENATED MODULE: ./app/utils/auth.ts

// Login function
const login = async (email, password, setUser)=>{
    try {
        const res = await utils_api.post("/login", {
            email,
            password
        });
        if (res.status === 200) {
            const profile = await fetchProfile();
            if (profile) {
                setUser(profile);
            }
            return {
                success: true,
                data: res.data
            };
        } else {
            return {
                success: false,
                message: "Invalid credentials"
            };
        }
    } catch (err) {
        return {
            success: false,
            message: err?.response?.data?.message || "Login failed. Please try again."
        };
    }
};
// Fetch profile function
const fetchProfile = async ()=>{
    try {
        const res = await utils_api.get("/authenticated/profile");
        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error("Failed to fetch profile data");
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw new Error("Failed to fetch profile data");
    }
};
// Save User to UserContext 
const saveUser = async (setUser)=>{
    try {
        const profile = await fetchProfile();
        if (profile) {
            setUser(profile);
        }
    } catch (err) {
        console.error("Failed to save user profile:", err);
    }
};
// Logout function
const logout = async (setUser)=>{
    try {
        const res = await utils_api.post("/authenticated/logout");
        if (res.status === 200) {
            setUser(null);
            return {
                success: true,
                message: res.data.message
            };
        } else {
            return {
                success: false,
                message: "Logout failed"
            };
        }
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message || "Logout failed. Please try again."
        };
    }
};
// Check authentication status
const checkAuth = async ()=>{
    try {
        const res = await utils_api.get("/check-auth");
        if (res.status === 200 && res.data.user) {
            return {
                authenticated: true,
                user: res.data.user
            };
        } else {
            return {
                authenticated: false
            };
        }
    } catch (error) {
        console.error("Error checking auth:", error);
        return {
            authenticated: false
        };
    }
};



/***/ }),

/***/ 3890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({ className , children , variant , square , paddingLess , type ="button" , ...props })=>{
    const getVariant = ()=>{
        switch(variant){
            case "primary":
                return "bg-violet-500 hover:bg-violet-700 text-white";
            case "danger":
                return "bg-red-500 hover:bg-red-700 text-white ";
            case "success":
                return "bg-green-500 hover:bg-green-700 text-white ";
            case "warning":
                return "bg-amber-500 hover:bg-amber-700 text-white ";
            case "outline-danger":
                return "bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-700  ";
            case "outline-danger":
                return "bg-white text-red-500 border border-red-500 hover:text-white hover:bg-red-700  ";
            case "outline-success":
                return "bg-white text-green-500 border border-green-500 hover:text-white hover:bg-green-700  ";
            case "outline-warning":
                return "bg-white text-amber-400 border border-amber-500 hover:text-white hover:bg-amber-500  ";
            case "outline-primary":
                return "bg-white text-violet-500 border border-violet-500 hover:text-white hover:bg-violet-700  ";
            default:
                return "bg-violet-500 hover:bg-violet-700 hover:bg-gra text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...props,
        type: type,
        className: `
 
        ${getVariant()}  transition duration-500  ${!paddingLess && "py-2 px-4"}  ${!square && "rounded-md"} active:scale-95 ${className} `,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 8472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const TextBox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ className , children , labelText , type ="text" , error , ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className + " relative",
        children: [
            labelText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "block text-gray-600 mb-2 text-xs lg:text-sm xl:text-base",
                htmlFor: "txt",
                children: labelText
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-stretch",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: "txt",
                        autoComplete: "off",
                        type: type,
                        ref: ref,
                        ...props,
                        className: `border border-slate-400 w-full block outline-none py-2 pl-4 pr-2 transition-all text-xs lg:text-sm xl:text-base bg-slate-50 focus:shadow focus:shadow-blue-500
              disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-600
              ${error ? "border-red-500 animate-shake" : ""}
              ${children ? "rounded-r-md" : "rounded-md"}`
                    }),
                    children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex",
                        children: children
                    })
                ]
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-red-600 text-right text-xs mt-1 animate-shake",
                children: error
            })
        ]
    });
});
TextBox.displayName = "TextBox";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextBox);


/***/ }),

/***/ 307:
/***/ (() => {



/***/ })

};
;