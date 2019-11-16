(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ons-page id=\"about\">\n\n  <div class=\"page__background\"></div>\n  <div class=\"page__content\">\n    <ons-card id=\"about-us-content\">\n      <img src=\"assets/img/logo.png\">\n      <div class=\"content\">\n        Copyright © {{copyrightYear}} <br/>\n        This app is designed by <a href=\"{{progicUrl}}\">PROGIC Team</a>\n      </div>\n    </ons-card>\n    <ons-list>\n      <ons-list-header>Developer</ons-list-header>\n      <ons-list-item>\n        <div class=\"left\">\n          <img class=\"list-item__thumbnail\" src=\"http://placekitten.com/g/40/40\">\n        </div>\n        <div class=\"center\">\n          <span class=\"list-item__title\">Cutest kitty</span><span class=\"list-item__subtitle\">On the Internet</span>\n        </div>\n      </ons-list-item>\n    </ons-list>\n    <br />\n    <ons-list>\n      <ons-list-header>Open Source Libraries</ons-list-header>\n      <ons-list-item *onsLazyRepeat=\"let data of dependecyList; let i = index\">\n        <div class=\"center\">\n          <span class=\"list-item__title\">{{data.name}}</span>\n          <span class=\"list-item__subtitle\">Created By {{data.author}}</span>\n        </div>\n      </ons-list-item>\n    </ons-list>\n  </div>\n</ons-page>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ons-navigator>\n  <ons-page>\n\n    <div class=\"page__background\"></div>\n    <div class=\"page__content\">\n        <app-header>\n          <router-outlet>\n            Loading Content...\n          </router-outlet>\n        </app-header>\n    </div>\n  </ons-page>\n</ons-navigator>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ons-splitter>\n  <ons-splitter-side side=\"left\" width=\"240px\" swipeable collapse #menuList>\n    <ons-page>\n      <app-menu [menuHeader]=\"menuList\">\n        Loading Menu...\n      </app-menu>\n    </ons-page>\n  </ons-splitter-side>\n\n  <ons-splitter-content>\n    <ons-page>\n      <ons-toolbar>\n        <!-- <div class=\"right\"><ons-back-button>Back</ons-back-button></div> -->\n        <div class=\"center\">\n\n        </div>\n        <div class=\"left\" (click)=\"menuList.open()\">\n          <ons-toolbar-button>\n            <ons-icon icon=\"ion-navicon, material:md-menu\"></ons-icon>\n          </ons-toolbar-button>\n        </div>\n      </ons-toolbar>\n      <p>\n        <ng-content></ng-content>\n      </p>\n    </ons-page>\n  </ons-splitter-content>\n</ons-splitter>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ons-page>\n  <div class=\"page__background\"></div>\n  <div class=\"page__content\">\n    <p>This is a kitchen sink example made with the Angular 2 bindings for Onsen UI.</p>\n\n    <p><a href=\"https://onsen.io/v2/angular2.html\" target=\"_blank\"><strong>Official site with docs</strong></a></p>\n\n    <ons-list>\n      <ons-list-header>Todos</ons-list-header>\n      <ons-list-item>\n        <div class=\"center\">Pull hook</div>\n      </ons-list-item>\n      <ons-list-item>\n        <div class=\"center\">Infinite scroll (lazy repeat)</div>\n      </ons-list-item>\n      <ons-list-item>\n        <div class=\"center\">Side menu</div>\n      </ons-list-item>\n      <ons-list-item>\n        <div class=\"center\">Floating Action Button (FAB)</div>\n      </ons-list-item>\n      <ons-list-item>\n        <div class=\"center\">Speed dial</div>\n      </ons-list-item>\n    </ons-list>\n  </div>\n</ons-page>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ons-list>\n  <ons-list-header>Menu</ons-list-header>\n  <ons-list-item modifier=\"longdivider\" tappable *ngFor=\"let tab of tabs\" [routerLink]=\"tab.path\">\n    <div (click)=\"menuHeader.close()\">\n    {{tab.label}}\n    </div>\n  </ons-list-item>\n</ons-list>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#about-us-content {\n  text-align: center;\n  margin-top: 10px\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dC11cy1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dependencyList_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependencyList.json */ "./src/app/about/dependencyList.json");
var _dependencyList_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dependencyList.json */ "./src/app/about/dependencyList.json", 1);



let AboutComponent = class AboutComponent {
    constructor() {
        this.progicUrl = 'https://github.com/progictech';
    }
    ngOnInit() {
        this.copyrightYear = new Date().getFullYear();
        this.dependecyList = _dependencyList_json__WEBPACK_IMPORTED_MODULE_2__;
        this.dependecyList = this.dependecyList.filter(value => {
            return (value.name) && (value.author);
        });
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/about/dependencyList.json":
/*!*******************************************!*\
  !*** ./src/app/about/dependencyList.json ***!
  \*******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"@angular-devkit/build-angular\",\"version\":\"0.803.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"development\"},{\"id\":1,\"name\":\"@angular-devkit/architect\",\"version\":\"0.803.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"development\"},{\"id\":2,\"name\":\"@angular-devkit/build-optimizer\",\"version\":\"0.803.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"development\"},{\"id\":3,\"name\":\"@angular-devkit/build-webpack\",\"version\":\"0.803.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"development\"},{\"id\":4,\"name\":\"@angular-devkit/core\",\"version\":\"8.3.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"production\"},{\"id\":5,\"name\":\"@babel/core\",\"version\":\"7.5.5\",\"license\":\"MIT License (MIT)\",\"repository\":\"https://github.com/babel/babel/tree/master/packages/babel-core\",\"author\":\"Sebastian McKenzie\",\"homepage\":\"https://babeljs.io/\",\"dependencyLevel\":\"development\"},{\"id\":6,\"name\":\"@babel/preset-env\",\"version\":\"7.5.5\",\"license\":\"MIT License (MIT)\",\"repository\":\"https://github.com/babel/babel/tree/master/packages/babel-preset-env\",\"author\":\"Henry Zhu\",\"homepage\":\"https://babeljs.io/\",\"dependencyLevel\":\"development\"},{\"id\":7,\"name\":\"@ngtools/webpack\",\"version\":\"8.3.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"development\"},{\"id\":8,\"name\":\"ajv\",\"version\":\"6.10.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/epoberezkin/ajv.git\",\"author\":\"Evgeny Poberezkin\",\"homepage\":\"https://github.com/epoberezkin/ajv\",\"dependencyLevel\":\"production\"},{\"id\":9,\"name\":\"autoprefixer\",\"version\":\"9.6.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/postcss/autoprefixer.git\",\"author\":\"Andrey Sitnik\",\"homepage\":\"https://github.com/postcss/autoprefixer#readme\",\"dependencyLevel\":\"development\"},{\"id\":10,\"name\":\"browserslist\",\"version\":\"4.6.6\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/browserslist/browserslist.git\",\"author\":\"Andrey Sitnik\",\"homepage\":\"https://github.com/browserslist/browserslist#readme\",\"dependencyLevel\":\"development\"},{\"id\":11,\"name\":\"cacache\",\"version\":\"12.0.2\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/npm/cacache.git\",\"author\":\"Kat Marchán\",\"homepage\":\"https://github.com/npm/cacache#readme\",\"dependencyLevel\":\"development\"},{\"id\":12,\"name\":\"caniuse-lite\",\"version\":\"1.0.30000989\",\"license\":\"Creative Commons Attribution 4.0 International (CC-BY-4.0)\",\"repository\":\"git+https://github.com/ben-eb/caniuse-lite.git\",\"author\":\"Ben Briggs\",\"homepage\":\"https://github.com/ben-eb/caniuse-lite#readme\",\"dependencyLevel\":\"development\"},{\"id\":13,\"name\":\"circular-dependency-plugin\",\"version\":\"5.2.0\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/aackerman/circular-dependency-plugin.git\",\"homepage\":\"https://github.com/aackerman/circular-dependency-plugin#readme\",\"dependencyLevel\":\"development\"},{\"id\":14,\"name\":\"clean-css\",\"version\":\"4.2.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/jakubpawlowicz/clean-css.git\",\"author\":\"Jakub Pawlowicz\",\"homepage\":\"https://github.com/jakubpawlowicz/clean-css\",\"dependencyLevel\":\"development\"},{\"id\":15,\"name\":\"copy-webpack-plugin\",\"version\":\"5.0.4\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/copy-webpack-plugin.git\",\"author\":\"Len Boyette\",\"homepage\":\"https://github.com/webpack-contrib/copy-webpack-plugin\",\"dependencyLevel\":\"development\"},{\"id\":16,\"name\":\"core-js\",\"version\":\"3.2.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/zloirock/core-js.git\",\"homepage\":\"https://github.com/zloirock/core-js#readme\",\"dependencyLevel\":\"development\"},{\"id\":17,\"name\":\"file-loader\",\"version\":\"4.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/file-loader.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack-contrib/file-loader\",\"dependencyLevel\":\"development\"},{\"id\":18,\"name\":\"find-cache-dir\",\"version\":\"3.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/avajs/find-cache-dir.git\",\"homepage\":\"https://github.com/avajs/find-cache-dir#readme\",\"dependencyLevel\":\"development\"},{\"id\":19,\"name\":\"glob\",\"version\":\"7.1.4\",\"license\":\"ISC License (ISC)\",\"repository\":\"git://github.com/isaacs/node-glob.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/isaacs/node-glob#readme\",\"dependencyLevel\":\"production\"},{\"id\":20,\"name\":\"istanbul-instrumenter-loader\",\"version\":\"3.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/istanbul-instrumenter-loader.git\",\"author\":\"Kir Belevich\",\"homepage\":\"https://github.com/webpack-contrib/istanbul-instrumenter-loader\",\"dependencyLevel\":\"development\"},{\"id\":21,\"name\":\"jest-worker\",\"version\":\"24.9.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/facebook/jest.git\",\"homepage\":\"https://github.com/facebook/jest#readme\",\"dependencyLevel\":\"development\"},{\"id\":22,\"name\":\"karma-source-map-support\",\"version\":\"1.4.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/tschaub/karma-source-map-support.git\",\"author\":\"Tim Schaub\",\"homepage\":\"https://github.com/tschaub/karma-source-map-support\",\"dependencyLevel\":\"development\"},{\"id\":23,\"name\":\"less\",\"version\":\"3.9.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/less/less.js.git\",\"author\":\"Alexis Sellier\",\"homepage\":\"http://lesscss.org\",\"dependencyLevel\":\"development\"},{\"id\":24,\"name\":\"less-loader\",\"version\":\"5.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/less-loader.git\",\"author\":\"Johannes Ewald @jhnns\",\"homepage\":\"https://github.com/webpack-contrib/less-loader\",\"dependencyLevel\":\"development\"},{\"id\":25,\"name\":\"license-webpack-plugin\",\"version\":\"2.1.2\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+ssh://git@github.com/xz64/license-webpack-plugin.git\",\"author\":\"S K\",\"homepage\":\"https://github.com/xz64/license-webpack-plugin#readme\",\"dependencyLevel\":\"development\"},{\"id\":26,\"name\":\"loader-utils\",\"version\":\"1.2.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack/loader-utils.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack/loader-utils#readme\",\"dependencyLevel\":\"development\"},{\"id\":27,\"name\":\"mini-css-extract-plugin\",\"version\":\"0.8.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/mini-css-extract-plugin.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack-contrib/mini-css-extract-plugin\",\"dependencyLevel\":\"development\"},{\"id\":28,\"name\":\"minimatch\",\"version\":\"3.0.4\",\"license\":\"ISC License (ISC)\",\"repository\":\"git://github.com/isaacs/minimatch.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/isaacs/minimatch#readme\",\"dependencyLevel\":\"production\"},{\"id\":29,\"name\":\"open\",\"version\":\"6.4.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/sindresorhus/open.git\",\"author\":\"Sindre Sorhus\",\"homepage\":\"https://github.com/sindresorhus/open#readme\",\"dependencyLevel\":\"development\"},{\"id\":30,\"name\":\"parse5\",\"version\":\"4.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/inikulin/parse5.git\",\"author\":\"Ivan Nikulin\",\"homepage\":\"https://github.com/inikulin/parse5\",\"dependencyLevel\":\"development\"},{\"id\":31,\"name\":\"postcss\",\"version\":\"7.0.17\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/postcss/postcss.git\",\"author\":\"Andrey Sitnik\",\"homepage\":\"https://postcss.org/\",\"dependencyLevel\":\"development\"},{\"id\":32,\"name\":\"postcss-import\",\"version\":\"12.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/postcss/postcss-import.git\",\"author\":\"Maxime Thirouin\",\"homepage\":\"https://github.com/postcss/postcss-import#readme\",\"dependencyLevel\":\"development\"},{\"id\":33,\"name\":\"postcss-loader\",\"version\":\"3.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/postcss/postcss-loader.git\",\"author\":\"Andrey Sitnik\",\"homepage\":\"https://github.com/postcss/postcss-loader#readme\",\"dependencyLevel\":\"development\"},{\"id\":34,\"name\":\"raw-loader\",\"version\":\"3.1.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/raw-loader.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack-contrib/raw-loader\",\"dependencyLevel\":\"development\"},{\"id\":35,\"name\":\"regenerator-runtime\",\"version\":\"0.13.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime\",\"author\":\"Ben Newman\",\"dependencyLevel\":\"development\"},{\"id\":36,\"name\":\"sass\",\"version\":\"1.22.9\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/sass/dart-sass.git\",\"author\":\"Natalie Weizenbaum\",\"homepage\":\"https://github.com/sass/dart-sass\",\"dependencyLevel\":\"development\"},{\"id\":37,\"name\":\"sass-loader\",\"version\":\"7.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/sass-loader.git\",\"author\":\"J. Tangelder\",\"homepage\":\"https://github.com/webpack-contrib/sass-loader\",\"dependencyLevel\":\"development\"},{\"id\":38,\"name\":\"semver\",\"version\":\"6.3.0\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/npm/node-semver.git\",\"homepage\":\"https://github.com/npm/node-semver#readme\",\"dependencyLevel\":\"development\"},{\"id\":39,\"name\":\"source-map\",\"version\":\"0.7.3\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+ssh://git@github.com/mozilla/source-map.git\",\"author\":\"Nick Fitzgerald\",\"homepage\":\"https://github.com/mozilla/source-map\",\"dependencyLevel\":\"production\"},{\"id\":40,\"name\":\"source-map-loader\",\"version\":\"0.2.4\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/source-map-loader.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack-contrib/source-map-loader\",\"dependencyLevel\":\"development\"},{\"id\":41,\"name\":\"source-map-support\",\"version\":\"0.5.13\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/evanw/node-source-map-support.git\",\"homepage\":\"https://github.com/evanw/node-source-map-support#readme\",\"dependencyLevel\":\"development\"},{\"id\":42,\"name\":\"speed-measure-webpack-plugin\",\"version\":\"1.3.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/stephencookdev/speed-measure-webpack-plugin.git\",\"author\":\"Stephen Cook\",\"homepage\":\"https://github.com/stephencookdev/speed-measure-webpack-plugin#readme\",\"dependencyLevel\":\"development\"},{\"id\":43,\"name\":\"style-loader\",\"version\":\"1.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/style-loader.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack-contrib/style-loader\",\"dependencyLevel\":\"development\"},{\"id\":44,\"name\":\"stylus\",\"version\":\"0.54.5\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/stylus/stylus.git\",\"author\":\"TJ Holowaychuk\",\"homepage\":\"https://github.com/stylus/stylus\",\"dependencyLevel\":\"development\"},{\"id\":45,\"name\":\"stylus-loader\",\"version\":\"3.0.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+ssh://git@github.com/shama/stylus-loader.git\",\"author\":\"Kyle Robinson Young\",\"homepage\":\"https://github.com/shama/stylus-loader#readme\",\"dependencyLevel\":\"development\"},{\"id\":46,\"name\":\"terser\",\"version\":\"4.3.9\",\"license\":\"BSD 2-Clause \\\"Simplified\\\" License (BSD-2-Clause)\",\"repository\":\"git+https://github.com/terser/terser.git\",\"author\":\"Mihai Bazon\",\"homepage\":\"https://terser.org\",\"dependencyLevel\":\"development\"},{\"id\":47,\"name\":\"terser-webpack-plugin\",\"version\":\"1.4.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack-contrib/terser-webpack-plugin.git\",\"author\":\"webpack Contrib Team\",\"homepage\":\"https://github.com/webpack-contrib/terser-webpack-plugin\",\"dependencyLevel\":\"development\"},{\"id\":48,\"name\":\"tree-kill\",\"version\":\"1.2.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/pkrumins/node-tree-kill.git\",\"author\":\"Peteris Krumins\",\"homepage\":\"https://github.com/pkrumins/node-tree-kill\",\"dependencyLevel\":\"development\"},{\"id\":49,\"name\":\"webpack\",\"version\":\"4.39.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack/webpack.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack/webpack\",\"dependencyLevel\":\"development\"},{\"id\":50,\"name\":\"webpack-dev-middleware\",\"version\":\"3.7.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack/webpack-dev-middleware.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack/webpack-dev-middleware\",\"dependencyLevel\":\"development\"},{\"id\":51,\"name\":\"webpack-dev-server\",\"version\":\"3.9.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack/webpack-dev-server.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack/webpack-dev-server#readme\",\"dependencyLevel\":\"development\"},{\"id\":52,\"name\":\"webpack-merge\",\"version\":\"4.2.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/survivejs/webpack-merge.git\",\"author\":\"Juho Vepsalainen\",\"homepage\":\"https://github.com/survivejs/webpack-merge\",\"dependencyLevel\":\"development\"},{\"id\":53,\"name\":\"webpack-sources\",\"version\":\"1.4.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/webpack/webpack-sources.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/webpack/webpack-sources#readme\",\"dependencyLevel\":\"development\"},{\"id\":54,\"name\":\"webpack-subresource-integrity\",\"version\":\"1.1.0-rc.6\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/waysact/webpack-subresource-integrity.git\",\"author\":\"Julian Scheid\",\"homepage\":\"https://github.com/waysact/webpack-subresource-integrity#readme\",\"dependencyLevel\":\"development\"},{\"id\":55,\"name\":\"worker-plugin\",\"version\":\"3.2.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/GoogleChromeLabs/worker-plugin.git\",\"author\":\"The Chromium Authors\",\"homepage\":\"https://github.com/GoogleChromeLabs/worker-plugin#readme\",\"dependencyLevel\":\"development\"},{\"id\":56,\"name\":\"@angular/animations\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":57,\"name\":\"@angular/cli\",\"version\":\"8.3.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"development\"},{\"id\":58,\"name\":\"@angular-devkit/schematics\",\"version\":\"8.3.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"production\"},{\"id\":59,\"name\":\"@schematics/angular\",\"version\":\"8.3.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"production\"},{\"id\":60,\"name\":\"@schematics/update\",\"version\":\"0.803.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"development\"},{\"id\":61,\"name\":\"@yarnpkg/lockfile\",\"version\":\"1.1.0\",\"license\":\"BSD 2-Clause \\\"Simplified\\\" License (BSD-2-Clause)\",\"repository\":\"https://github.com/yarnpkg/yarn/blob/master/packages/lockfile\",\"dependencyLevel\":\"development\"},{\"id\":62,\"name\":\"ansi-colors\",\"version\":\"4.1.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/doowb/ansi-colors.git\",\"author\":\"Brian Woodward\",\"homepage\":\"https://github.com/doowb/ansi-colors\",\"dependencyLevel\":\"development\"},{\"id\":63,\"name\":\"debug\",\"version\":\"4.1.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/visionmedia/debug.git\",\"author\":\"TJ Holowaychuk\",\"homepage\":\"https://github.com/visionmedia/debug#readme\",\"dependencyLevel\":\"development\"},{\"id\":64,\"name\":\"ini\",\"version\":\"1.3.5\",\"license\":\"ISC License (ISC)\",\"repository\":\"git://github.com/isaacs/ini.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/isaacs/ini#readme\",\"dependencyLevel\":\"production\"},{\"id\":65,\"name\":\"inquirer\",\"version\":\"6.5.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/SBoudrias/Inquirer.js.git\",\"author\":\"Simon Boudrias\",\"homepage\":\"https://github.com/SBoudrias/Inquirer.js#readme\",\"dependencyLevel\":\"development\"},{\"id\":66,\"name\":\"npm-package-arg\",\"version\":\"6.1.0\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/npm/npm-package-arg.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/npm/npm-package-arg\",\"dependencyLevel\":\"development\"},{\"id\":67,\"name\":\"npm-pick-manifest\",\"version\":\"3.0.2\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/npm/npm-pick-manifest.git\",\"author\":\"Kat Marchán\",\"homepage\":\"https://github.com/npm/npm-pick-manifest#readme\",\"dependencyLevel\":\"development\"},{\"id\":68,\"name\":\"pacote\",\"version\":\"9.5.5\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/npm/pacote.git\",\"author\":\"Kat Marchán\",\"homepage\":\"https://github.com/npm/pacote#readme\",\"dependencyLevel\":\"development\"},{\"id\":69,\"name\":\"read-package-tree\",\"version\":\"5.3.1\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/npm/read-package-tree.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/npm/read-package-tree\",\"dependencyLevel\":\"development\"},{\"id\":70,\"name\":\"rimraf\",\"version\":\"3.0.0\",\"license\":\"ISC License (ISC)\",\"repository\":\"git://github.com/isaacs/rimraf.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/isaacs/rimraf#readme\",\"dependencyLevel\":\"development\"},{\"id\":71,\"name\":\"symbol-observable\",\"version\":\"1.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/blesh/symbol-observable.git\",\"author\":\"Ben Lesh\",\"homepage\":\"https://github.com/blesh/symbol-observable#readme\",\"dependencyLevel\":\"development\"},{\"id\":72,\"name\":\"universal-analytics\",\"version\":\"0.4.20\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+ssh://git@github.com/peaksandpies/universal-analytics.git\",\"author\":\"Jörg Tillmann\",\"homepage\":\"https://github.com/peaksandpies/universal-analytics#readme\",\"dependencyLevel\":\"development\"},{\"id\":73,\"name\":\"uuid\",\"version\":\"3.3.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/kelektiv/node-uuid.git\",\"homepage\":\"https://github.com/kelektiv/node-uuid#readme\",\"dependencyLevel\":\"production\"},{\"id\":74,\"name\":\"@angular/common\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":75,\"name\":\"@angular/compiler\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":76,\"name\":\"@angular/compiler-cli\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"homepage\":\"https://github.com/angular/angular/tree/master/packages/compiler-cli\",\"dependencyLevel\":\"development\"},{\"id\":77,\"name\":\"canonical-path\",\"version\":\"1.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/petebacondarwin/node-canonical-path.git\",\"author\":\"Pete Bacon Darwin\",\"homepage\":\"https://github.com/petebacondarwin/node-canonical-path#readme\",\"dependencyLevel\":\"development\"},{\"id\":78,\"name\":\"chokidar\",\"version\":\"2.1.8\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/paulmillr/chokidar.git\",\"author\":\"Paul Miller\",\"homepage\":\"https://github.com/paulmillr/chokidar\",\"dependencyLevel\":\"development\"},{\"id\":79,\"name\":\"convert-source-map\",\"version\":\"1.7.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/thlorenz/convert-source-map.git\",\"author\":\"Thorsten Lorenz\",\"homepage\":\"https://github.com/thlorenz/convert-source-map\",\"dependencyLevel\":\"development\"},{\"id\":80,\"name\":\"dependency-graph\",\"version\":\"0.7.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/jriecken/dependency-graph.git\",\"author\":\"Jim Riecken\",\"homepage\":\"https://github.com/jriecken/dependency-graph#readme\",\"dependencyLevel\":\"development\"},{\"id\":81,\"name\":\"magic-string\",\"version\":\"0.25.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/rich-harris/magic-string.git\",\"author\":\"Rich Harris\",\"homepage\":\"https://github.com/rich-harris/magic-string#readme\",\"dependencyLevel\":\"production\"},{\"id\":82,\"name\":\"minimist\",\"version\":\"1.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/substack/minimist.git\",\"author\":\"James Halliday\",\"homepage\":\"https://github.com/substack/minimist\",\"dependencyLevel\":\"production\"},{\"id\":83,\"name\":\"reflect-metadata\",\"version\":\"0.1.13\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/rbuckton/reflect-metadata.git\",\"author\":\"Ron Buckton\",\"homepage\":\"http://rbuckton.github.io/reflect-metadata\",\"dependencyLevel\":\"development\"},{\"id\":84,\"name\":\"source-map\",\"version\":\"0.6.1\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+ssh://git@github.com/mozilla/source-map.git\",\"author\":\"Nick Fitzgerald\",\"homepage\":\"https://github.com/mozilla/source-map\",\"dependencyLevel\":\"development\"},{\"id\":85,\"name\":\"yargs\",\"version\":\"13.1.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/yargs/yargs.git\",\"homepage\":\"https://yargs.js.org/\",\"dependencyLevel\":\"development\"},{\"id\":86,\"name\":\"@angular/core\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":87,\"name\":\"@angular/forms\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":88,\"name\":\"@angular/language-service\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"development\"},{\"id\":89,\"name\":\"@angular/platform-browser\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":90,\"name\":\"@angular/platform-browser-dynamic\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":91,\"name\":\"@angular/pwa\",\"version\":\"0.803.19\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular-cli.git\",\"author\":\"Angular Authors\",\"homepage\":\"https://github.com/angular/angular-cli\",\"dependencyLevel\":\"production\"},{\"id\":92,\"name\":\"parse5-html-rewriting-stream\",\"version\":\"5.1.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/inikulin/parse5.git\",\"author\":\"Ivan Nikulin\",\"homepage\":\"https://github.com/inikulin/parse5\",\"dependencyLevel\":\"production\"},{\"id\":93,\"name\":\"@angular/router\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular/tree/master/packages/router\",\"dependencyLevel\":\"production\"},{\"id\":94,\"name\":\"@angular/service-worker\",\"version\":\"8.2.14\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/angular.git\",\"author\":\"angular\",\"homepage\":\"https://github.com/angular/angular#readme\",\"dependencyLevel\":\"production\"},{\"id\":95,\"name\":\"@types/jasmine\",\"version\":\"3.3.16\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/DefinitelyTyped/DefinitelyTyped.git\",\"homepage\":\"https://github.com/DefinitelyTyped/DefinitelyTyped#readme\",\"dependencyLevel\":\"development\"},{\"id\":96,\"name\":\"@types/jasminewd2\",\"version\":\"2.0.8\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/DefinitelyTyped/DefinitelyTyped.git\",\"homepage\":\"https://github.com/DefinitelyTyped/DefinitelyTyped#readme\",\"dependencyLevel\":\"development\"},{\"id\":97,\"name\":\"@types/node\",\"version\":\"8.9.5\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/DefinitelyTyped/DefinitelyTyped.git\",\"homepage\":\"https://github.com/DefinitelyTyped/DefinitelyTyped#readme\",\"dependencyLevel\":\"development\"},{\"id\":98,\"name\":\"codelyzer\",\"version\":\"5.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/mgechev/codelyzer.git\",\"author\":\"Minko Gechev\",\"homepage\":\"https://github.com/mgechev/codelyzer#readme\",\"dependencyLevel\":\"development\"},{\"id\":99,\"name\":\"app-root-path\",\"version\":\"2.2.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/inxilpro/node-app-root-path.git\",\"author\":\"Chris Morrell\",\"homepage\":\"https://github.com/inxilpro/node-app-root-path\",\"dependencyLevel\":\"development\"},{\"id\":100,\"name\":\"aria-query\",\"version\":\"3.0.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/A11yance/aria-query.git\",\"author\":\"Jesse Beach\",\"homepage\":\"https://github.com/A11yance/aria-query#readme\",\"dependencyLevel\":\"development\"},{\"id\":101,\"name\":\"axobject-query\",\"version\":\"2.0.2\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/A11yance/axobject-query.git\",\"author\":\"Jesse Beach\",\"homepage\":\"https://github.com/A11yance/axobject-query#readme\",\"dependencyLevel\":\"development\"},{\"id\":102,\"name\":\"css-selector-tokenizer\",\"version\":\"0.7.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/css-modules/css-selector-tokenizer.git\",\"author\":\"Tobias Koppers @sokra\",\"homepage\":\"https://github.com/css-modules/css-selector-tokenizer\",\"dependencyLevel\":\"development\"},{\"id\":103,\"name\":\"cssauron\",\"version\":\"1.4.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/chrisdickinson/cssauron.git\",\"author\":\"Chris Dickinson\",\"homepage\":\"https://github.com/chrisdickinson/cssauron#readme\",\"dependencyLevel\":\"development\"},{\"id\":104,\"name\":\"damerau-levenshtein\",\"version\":\"1.0.5\",\"license\":\"BSD 2-Clause \\\"Simplified\\\" License (BSD-2-Clause)\",\"repository\":\"git+https://github.com/tad-lispy/node-damerau-levenshtein.git\",\"author\":\"The Spanish Inquisition\",\"homepage\":\"https://github.com/tad-lispy/node-damerau-levenshtein#readme\",\"dependencyLevel\":\"development\"},{\"id\":105,\"name\":\"semver-dsl\",\"version\":\"1.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/mgechev/semver-dsl.git\",\"author\":\"Minko Gechev\",\"homepage\":\"https://github.com/mgechev/semver-dsl#readme\",\"dependencyLevel\":\"development\"},{\"id\":106,\"name\":\"source-map\",\"version\":\"0.5.7\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+ssh://git@github.com/mozilla/source-map.git\",\"author\":\"Nick Fitzgerald\",\"homepage\":\"https://github.com/mozilla/source-map\",\"dependencyLevel\":\"development\"},{\"id\":107,\"name\":\"sprintf-js\",\"version\":\"1.1.2\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+https://github.com/alexei/sprintf.js.git\",\"author\":\"Alexandru Mărășteanu\",\"homepage\":\"https://github.com/alexei/sprintf.js#readme\",\"dependencyLevel\":\"development\"},{\"id\":108,\"name\":\"jasmine-core\",\"version\":\"3.4.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/jasmine/jasmine.git\",\"homepage\":\"https://jasmine.github.io\",\"dependencyLevel\":\"development\"},{\"id\":109,\"name\":\"jasmine-spec-reporter\",\"version\":\"4.2.1\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/bcaudan/jasmine-spec-reporter.git\",\"author\":\"Bastien Caudan\",\"homepage\":\"https://github.com/bcaudan/jasmine-spec-reporter\",\"dependencyLevel\":\"development\"},{\"id\":110,\"name\":\"colors\",\"version\":\"1.1.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+ssh://git@github.com/Marak/colors.js.git\",\"author\":\"Marak Squires\",\"homepage\":\"https://github.com/Marak/colors.js\",\"dependencyLevel\":\"development\"},{\"id\":111,\"name\":\"karma\",\"version\":\"4.1.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/karma-runner/karma.git\",\"author\":\"Vojta Jína\",\"homepage\":\"http://karma-runner.github.io/\",\"dependencyLevel\":\"development\"},{\"id\":112,\"name\":\"bluebird\",\"version\":\"3.7.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/petkaantonov/bluebird.git\",\"author\":\"Petka Antonov\",\"homepage\":\"https://github.com/petkaantonov/bluebird\",\"dependencyLevel\":\"development\"},{\"id\":113,\"name\":\"body-parser\",\"version\":\"1.19.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/expressjs/body-parser.git\",\"homepage\":\"https://github.com/expressjs/body-parser#readme\",\"dependencyLevel\":\"development\"},{\"id\":114,\"name\":\"braces\",\"version\":\"2.3.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/micromatch/braces.git\",\"author\":\"Jon Schlinkert\",\"homepage\":\"https://github.com/micromatch/braces\",\"dependencyLevel\":\"development\"},{\"id\":115,\"name\":\"chokidar\",\"version\":\"2.1.8\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/paulmillr/chokidar.git\",\"author\":\"Paul Miller\",\"homepage\":\"https://github.com/paulmillr/chokidar\",\"dependencyLevel\":\"development\"},{\"id\":116,\"name\":\"connect\",\"version\":\"3.7.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/senchalabs/connect.git\",\"author\":\"TJ Holowaychuk\",\"homepage\":\"https://github.com/senchalabs/connect#readme\",\"dependencyLevel\":\"development\"},{\"id\":117,\"name\":\"core-js\",\"version\":\"2.6.10\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/zloirock/core-js.git\",\"homepage\":\"https://github.com/zloirock/core-js#readme\",\"dependencyLevel\":\"development\"},{\"id\":118,\"name\":\"di\",\"version\":\"0.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/vojtajina/node-di.git\",\"author\":\"Vojta Jina\",\"homepage\":\"https://github.com/vojtajina/node-di#readme\",\"dependencyLevel\":\"development\"},{\"id\":119,\"name\":\"dom-serialize\",\"version\":\"2.2.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/webmodules/dom-serialize.git\",\"author\":\"Nathan Rajlich\",\"homepage\":\"https://github.com/webmodules/dom-serialize\",\"dependencyLevel\":\"development\"},{\"id\":120,\"name\":\"flatted\",\"version\":\"2.0.1\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/WebReflection/flatted.git\",\"author\":\"Andrea Giammarchi\",\"homepage\":\"https://github.com/WebReflection/flatted#readme\",\"dependencyLevel\":\"development\"},{\"id\":121,\"name\":\"graceful-fs\",\"version\":\"4.2.3\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/isaacs/node-graceful-fs.git\",\"homepage\":\"https://github.com/isaacs/node-graceful-fs#readme\",\"dependencyLevel\":\"development\"},{\"id\":122,\"name\":\"http-proxy\",\"version\":\"1.18.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/http-party/node-http-proxy.git\",\"author\":\"Charlie Robbins\",\"homepage\":\"https://github.com/http-party/node-http-proxy#readme\",\"dependencyLevel\":\"development\"},{\"id\":123,\"name\":\"isbinaryfile\",\"version\":\"3.0.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/gjtorikian/isBinaryFile.git\",\"homepage\":\"https://github.com/gjtorikian/isBinaryFile#readme\",\"dependencyLevel\":\"development\"},{\"id\":124,\"name\":\"lodash\",\"version\":\"4.17.15\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/lodash/lodash.git\",\"author\":\"John-David Dalton\",\"homepage\":\"https://lodash.com/\",\"dependencyLevel\":\"production\"},{\"id\":125,\"name\":\"log4js\",\"version\":\"4.5.1\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/log4js-node/log4js-node.git\",\"author\":\"Gareth Jones\",\"homepage\":\"https://log4js-node.github.io/log4js-node/\",\"dependencyLevel\":\"development\"},{\"id\":126,\"name\":\"mime\",\"version\":\"2.4.4\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/broofa/node-mime.git\",\"author\":\"Robert Kieffer\",\"homepage\":\"https://github.com/broofa/node-mime#readme\",\"dependencyLevel\":\"development\"},{\"id\":127,\"name\":\"optimist\",\"version\":\"0.6.1\",\"license\":\"unknown (MIT/X11)\",\"repository\":\"git+ssh://git@github.com/substack/node-optimist.git\",\"author\":\"James Halliday\",\"homepage\":\"https://github.com/substack/node-optimist#readme\",\"dependencyLevel\":\"production\"},{\"id\":128,\"name\":\"qjobs\",\"version\":\"1.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/franck34/qjobs.git\",\"author\":\"Franck TABARY\",\"homepage\":\"https://github.com/franck34/qjobs#readme\",\"dependencyLevel\":\"development\"},{\"id\":129,\"name\":\"range-parser\",\"version\":\"1.2.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/jshttp/range-parser.git\",\"author\":\"TJ Holowaychuk\",\"homepage\":\"https://github.com/jshttp/range-parser#readme\",\"dependencyLevel\":\"development\"},{\"id\":130,\"name\":\"rimraf\",\"version\":\"2.7.1\",\"license\":\"ISC License (ISC)\",\"repository\":\"git://github.com/isaacs/rimraf.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/isaacs/rimraf#readme\",\"dependencyLevel\":\"production\"},{\"id\":131,\"name\":\"safe-buffer\",\"version\":\"5.1.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/feross/safe-buffer.git\",\"author\":\"Feross Aboukhadijeh\",\"homepage\":\"https://github.com/feross/safe-buffer\",\"dependencyLevel\":\"production\"},{\"id\":132,\"name\":\"socket.io\",\"version\":\"2.1.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/socketio/socket.io.git\",\"homepage\":\"https://github.com/socketio/socket.io#readme\",\"dependencyLevel\":\"development\"},{\"id\":133,\"name\":\"source-map\",\"version\":\"0.6.1\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+ssh://git@github.com/mozilla/source-map.git\",\"author\":\"Nick Fitzgerald\",\"homepage\":\"https://github.com/mozilla/source-map\",\"dependencyLevel\":\"development\"},{\"id\":134,\"name\":\"tmp\",\"version\":\"0.0.33\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/raszi/node-tmp.git\",\"author\":\"KARASZI István\",\"homepage\":\"http://github.com/raszi/node-tmp\",\"dependencyLevel\":\"development\"},{\"id\":135,\"name\":\"useragent\",\"version\":\"2.3.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+ssh://git@github.com/3rd-Eden/useragent.git\",\"author\":\"Arnout Kazemier\",\"homepage\":\"https://github.com/3rd-Eden/useragent#readme\",\"dependencyLevel\":\"development\"},{\"id\":136,\"name\":\"karma-chrome-launcher\",\"version\":\"2.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/karma-runner/karma-chrome-launcher.git\",\"author\":\"Vojta Jina\",\"homepage\":\"https://github.com/karma-runner/karma-chrome-launcher#readme\",\"dependencyLevel\":\"development\"},{\"id\":137,\"name\":\"fs-access\",\"version\":\"1.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/sindresorhus/fs-access.git\",\"author\":\"Sindre Sorhus\",\"homepage\":\"https://github.com/sindresorhus/fs-access#readme\",\"dependencyLevel\":\"development\"},{\"id\":138,\"name\":\"which\",\"version\":\"1.3.1\",\"license\":\"ISC License (ISC)\",\"repository\":\"git://github.com/isaacs/node-which.git\",\"author\":\"Isaac Z. Schlueter\",\"homepage\":\"https://github.com/isaacs/node-which#readme\",\"dependencyLevel\":\"development\"},{\"id\":139,\"name\":\"karma-coverage-istanbul-reporter\",\"version\":\"2.0.6\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/mattlewis92/karma-coverage-istanbul-reporter.git\",\"author\":\"Matt Lewis\",\"homepage\":\"https://github.com/mattlewis92/karma-coverage-istanbul-reporter#readme\",\"dependencyLevel\":\"development\"},{\"id\":140,\"name\":\"istanbul-api\",\"version\":\"2.1.6\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+ssh://git@github.com/istanbuljs/istanbuljs.git\",\"author\":\"Krishnan Anantheswaran\",\"homepage\":\"https://istanbul.js.org/\",\"dependencyLevel\":\"development\"},{\"id\":141,\"name\":\"karma-jasmine\",\"version\":\"2.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/karma-runner/karma-jasmine.git\",\"author\":\"Vojta Jina\",\"homepage\":\"https://github.com/karma-runner/karma-jasmine#readme\",\"dependencyLevel\":\"development\"},{\"id\":142,\"name\":\"karma-jasmine-html-reporter\",\"version\":\"1.4.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/dfederm/karma-jasmine-html-reporter.git\",\"homepage\":\"https://github.com/dfederm/karma-jasmine-html-reporter#readme\",\"dependencyLevel\":\"development\"},{\"id\":143,\"name\":\"license-ls\",\"version\":\"1.4.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/morficus/license-ls.git\",\"author\":\"Maurice Williams\",\"homepage\":\"https://github.com/morficus/license-ls#readme\",\"dependencyLevel\":\"development\"},{\"id\":144,\"name\":\"cross-spawn\",\"version\":\"7.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+ssh://git@github.com/moxystudio/node-cross-spawn.git\",\"author\":\"André Cruz\",\"homepage\":\"https://github.com/moxystudio/node-cross-spawn\",\"dependencyLevel\":\"development\"},{\"id\":145,\"name\":\"json2csv\",\"version\":\"4.5.4\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/zemirco/json2csv.git\",\"author\":\"Mirco Zeiss\",\"homepage\":\"https://github.com/zemirco/json2csv#readme\",\"dependencyLevel\":\"development\"},{\"id\":146,\"name\":\"jstoxml\",\"version\":\"1.6.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/davidcalhoun/jstoxml.git\",\"author\":\"David Calhoun\",\"homepage\":\"http://github.com/davidcalhoun/jstoxml\",\"dependencyLevel\":\"development\"},{\"id\":147,\"name\":\"libnpm\",\"version\":\"3.0.1\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/npm/libnpm.git\",\"author\":\"Kat Marchán\",\"homepage\":\"https://github.com/npm/libnpm#readme\",\"dependencyLevel\":\"development\"},{\"id\":148,\"name\":\"ora\",\"version\":\"3.4.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/sindresorhus/ora.git\",\"author\":\"Sindre Sorhus\",\"homepage\":\"https://github.com/sindresorhus/ora#readme\",\"dependencyLevel\":\"development\"},{\"id\":149,\"name\":\"spdx-expression-parse\",\"version\":\"3.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/jslicense/spdx-expression-parse.js.git\",\"author\":\"Kyle E. Mitchell\",\"homepage\":\"https://github.com/jslicense/spdx-expression-parse.js#readme\",\"dependencyLevel\":\"development\"},{\"id\":150,\"name\":\"spdx-license-list\",\"version\":\"6.1.0\",\"license\":\"Creative Commons Zero v1.0 Universal (CC0-1.0)\",\"repository\":\"git+https://github.com/sindresorhus/spdx-license-list.git\",\"author\":\"Sindre Sorhus\",\"homepage\":\"https://github.com/sindresorhus/spdx-license-list#readme\",\"dependencyLevel\":\"development\"},{\"id\":151,\"name\":\"table\",\"version\":\"5.4.6\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+https://github.com/gajus/table.git\",\"author\":\"Gajus Kuizinas\",\"homepage\":\"https://github.com/gajus/table#readme\",\"dependencyLevel\":\"development\"},{\"id\":152,\"name\":\"yargs\",\"version\":\"14.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/yargs/yargs.git\",\"homepage\":\"https://yargs.js.org/\",\"dependencyLevel\":\"development\"},{\"id\":153,\"name\":\"ngx-onsenui\",\"version\":\"7.0.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"https://github.com/OnsenUI/OnsenUI/tree/master/bindings/angular2\",\"author\":\"Mitsunori Kubota\",\"homepage\":\"https://onsen.io/angular2/\",\"dependencyLevel\":\"production\"},{\"id\":154,\"name\":\"onsenui\",\"version\":\"2.10.10\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/OnsenUI/OnsenUI.git\",\"homepage\":\"https://onsen.io/\",\"dependencyLevel\":\"production\"},{\"id\":155,\"name\":\"@onsenui/custom-elements\",\"version\":\"1.0.0\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git+https://github.com/OnsenUI/custom-elements.git\",\"author\":\"The Polymer Authors\",\"homepage\":\"http://webcomponents.org\",\"dependencyLevel\":\"production\"},{\"id\":156,\"name\":\"@onsenui/fastclick\",\"version\":\"1.1.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/OnsenUI/fastclick.git\",\"author\":\"Rowan Beentje\",\"homepage\":\"https://github.com/OnsenUI/fastclick\",\"dependencyLevel\":\"production\"},{\"id\":157,\"name\":\"core-js\",\"version\":\"2.6.10\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/zloirock/core-js.git\",\"homepage\":\"https://github.com/zloirock/core-js#readme\",\"dependencyLevel\":\"production\"},{\"id\":158,\"name\":\"gulp-protractor\",\"version\":\"4.1.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/mllrsohn/gulp-protractor.git\",\"author\":\"Steffen Müller\",\"homepage\":\"https://github.com/mllrsohn/gulp-protractor\",\"dependencyLevel\":\"production\"},{\"id\":159,\"name\":\"protractor\",\"version\":\"5.4.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/angular/protractor.git\",\"author\":\"Julie Ralph\",\"homepage\":\"https://github.com/angular/protractor\",\"dependencyLevel\":\"production\"},{\"id\":160,\"name\":\"@types/q\",\"version\":\"0.0.32\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/DefinitelyTyped/DefinitelyTyped.git\",\"author\":\"Barrie Nemetchek\",\"homepage\":\"https://github.com/DefinitelyTyped/DefinitelyTyped#readme\",\"dependencyLevel\":\"production\"},{\"id\":161,\"name\":\"@types/selenium-webdriver\",\"version\":\"3.0.16\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/DefinitelyTyped/DefinitelyTyped.git\",\"homepage\":\"https://github.com/DefinitelyTyped/DefinitelyTyped#readme\",\"dependencyLevel\":\"production\"},{\"id\":162,\"name\":\"blocking-proxy\",\"version\":\"1.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/angular/jasminewd.git\",\"homepage\":\"https://github.com/angular/blocking-proxy\",\"dependencyLevel\":\"production\"},{\"id\":163,\"name\":\"browserstack\",\"version\":\"1.5.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/scottgonzalez/node-browserstack.git\",\"author\":\"Scott González\",\"homepage\":\"https://github.com/scottgonzalez/node-browserstack\",\"dependencyLevel\":\"production\"},{\"id\":164,\"name\":\"chalk\",\"version\":\"1.1.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/chalk/chalk.git\",\"homepage\":\"https://github.com/chalk/chalk#readme\",\"dependencyLevel\":\"production\"},{\"id\":165,\"name\":\"jasmine\",\"version\":\"2.8.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/jasmine/jasmine-npm.git\",\"homepage\":\"http://jasmine.github.io/\",\"dependencyLevel\":\"production\"},{\"id\":166,\"name\":\"jasminewd2\",\"version\":\"2.2.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/angular/jasminewd.git\",\"author\":\"Julie Ralph\",\"homepage\":\"https://github.com/angular/jasminewd\",\"dependencyLevel\":\"production\"},{\"id\":167,\"name\":\"q\",\"version\":\"1.4.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/kriskowal/q.git\",\"author\":\"Kris Kowal\",\"homepage\":\"https://github.com/kriskowal/q\",\"dependencyLevel\":\"production\"},{\"id\":168,\"name\":\"saucelabs\",\"version\":\"1.5.0\",\"license\":\"unknown ()\",\"repository\":\"git://github.com/holidayextras/node-saucelabs.git\",\"author\":\"Dan Jenkins\",\"homepage\":\"https://github.com/holidayextras/node-saucelabs\",\"dependencyLevel\":\"production\"},{\"id\":169,\"name\":\"selenium-webdriver\",\"version\":\"3.6.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/SeleniumHQ/selenium.git\",\"homepage\":\"https://github.com/SeleniumHQ/selenium\",\"dependencyLevel\":\"production\"},{\"id\":170,\"name\":\"source-map-support\",\"version\":\"0.4.18\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/evanw/node-source-map-support.git\",\"homepage\":\"https://github.com/evanw/node-source-map-support#readme\",\"dependencyLevel\":\"production\"},{\"id\":171,\"name\":\"webdriver-js-extender\",\"version\":\"2.1.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/angular/webdriver-js-extender.git\",\"author\":\"Sammy Jelin\",\"homepage\":\"https://github.com/angular/webdriver-js-extender#readme\",\"dependencyLevel\":\"production\"},{\"id\":172,\"name\":\"webdriver-manager\",\"version\":\"12.1.7\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/angular/webdriver-manager.git\",\"author\":\"Craig Nishina\",\"homepage\":\"https://github.com/angular/webdriver-manager#readme\",\"dependencyLevel\":\"production\"},{\"id\":173,\"name\":\"rxjs\",\"version\":\"6.4.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/reactivex/rxjs.git\",\"author\":\"Ben Lesh\",\"homepage\":\"https://github.com/ReactiveX/RxJS\",\"dependencyLevel\":\"production\"},{\"id\":174,\"name\":\"ts-node\",\"version\":\"7.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/TypeStrong/ts-node.git\",\"author\":\"Blake Embrey\",\"homepage\":\"https://github.com/TypeStrong/ts-node\",\"dependencyLevel\":\"development\"},{\"id\":175,\"name\":\"arrify\",\"version\":\"1.0.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/sindresorhus/arrify.git\",\"author\":\"Sindre Sorhus\",\"homepage\":\"https://github.com/sindresorhus/arrify#readme\",\"dependencyLevel\":\"production\"},{\"id\":176,\"name\":\"buffer-from\",\"version\":\"1.1.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/LinusU/buffer-from.git\",\"homepage\":\"https://github.com/LinusU/buffer-from#readme\",\"dependencyLevel\":\"development\"},{\"id\":177,\"name\":\"diff\",\"version\":\"3.5.0\",\"license\":\"BSD 3-Clause \\\"New\\\" or \\\"Revised\\\" License (BSD-3-Clause)\",\"repository\":\"git://github.com/kpdecker/jsdiff.git\",\"homepage\":\"https://github.com/kpdecker/jsdiff#readme\",\"dependencyLevel\":\"development\"},{\"id\":178,\"name\":\"make-error\",\"version\":\"1.3.5\",\"license\":\"ISC License (ISC)\",\"repository\":\"git://github.com/JsCommunity/make-error.git\",\"author\":\"Julien Fontanet\",\"homepage\":\"https://github.com/JsCommunity/make-error\",\"dependencyLevel\":\"development\"},{\"id\":179,\"name\":\"mkdirp\",\"version\":\"0.5.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/substack/node-mkdirp.git\",\"author\":\"James Halliday\",\"homepage\":\"https://github.com/substack/node-mkdirp#readme\",\"dependencyLevel\":\"development\"},{\"id\":180,\"name\":\"yn\",\"version\":\"2.0.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/sindresorhus/yn.git\",\"author\":\"Sindre Sorhus\",\"homepage\":\"https://github.com/sindresorhus/yn#readme\",\"dependencyLevel\":\"development\"},{\"id\":181,\"name\":\"tslib\",\"version\":\"1.10.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/Microsoft/tslib.git\",\"author\":\"Microsoft Corp.\",\"homepage\":\"http://typescriptlang.org/\",\"dependencyLevel\":\"production\"},{\"id\":182,\"name\":\"tslint\",\"version\":\"5.15.0\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/palantir/tslint.git\",\"homepage\":\"https://palantir.github.io/tslint\",\"dependencyLevel\":\"development\"},{\"id\":183,\"name\":\"babel-code-frame\",\"version\":\"6.26.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"https://github.com/babel/babel/tree/master/packages/babel-code-frame\",\"author\":\"Sebastian McKenzie\",\"homepage\":\"https://babeljs.io/\",\"dependencyLevel\":\"development\"},{\"id\":184,\"name\":\"builtin-modules\",\"version\":\"1.1.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/sindresorhus/builtin-modules.git\",\"author\":\"Sindre Sorhus\",\"homepage\":\"https://github.com/sindresorhus/builtin-modules#readme\",\"dependencyLevel\":\"development\"},{\"id\":185,\"name\":\"chalk\",\"version\":\"2.4.2\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/chalk/chalk.git\",\"homepage\":\"https://github.com/chalk/chalk#readme\",\"dependencyLevel\":\"development\"},{\"id\":186,\"name\":\"commander\",\"version\":\"2.20.3\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/tj/commander.js.git\",\"author\":\"TJ Holowaychuk\",\"homepage\":\"https://github.com/tj/commander.js#readme\",\"dependencyLevel\":\"development\"},{\"id\":187,\"name\":\"js-yaml\",\"version\":\"3.13.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/nodeca/js-yaml.git\",\"author\":\"Vladimir Zapparov\",\"homepage\":\"https://github.com/nodeca/js-yaml\",\"dependencyLevel\":\"development\"},{\"id\":188,\"name\":\"resolve\",\"version\":\"1.12.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/browserify/resolve.git\",\"author\":\"James Halliday\",\"homepage\":\"https://github.com/browserify/resolve#readme\",\"dependencyLevel\":\"development\"},{\"id\":189,\"name\":\"semver\",\"version\":\"5.7.1\",\"license\":\"ISC License (ISC)\",\"repository\":\"git+https://github.com/npm/node-semver.git\",\"homepage\":\"https://github.com/npm/node-semver#readme\",\"dependencyLevel\":\"development\"},{\"id\":190,\"name\":\"tsutils\",\"version\":\"2.29.0\",\"license\":\"MIT License (MIT)\",\"repository\":\"git+https://github.com/ajafff/tsutils.git\",\"author\":\"Klaus Meinhardt\",\"homepage\":\"https://github.com/ajafff/tsutils#readme\",\"dependencyLevel\":\"development\"},{\"id\":191,\"name\":\"typescript\",\"version\":\"3.5.3\",\"license\":\"Apache License 2.0 (Apache-2.0)\",\"repository\":\"git+https://github.com/Microsoft/TypeScript.git\",\"author\":\"Microsoft Corp.\",\"homepage\":\"https://www.typescriptlang.org/\",\"dependencyLevel\":\"development\"},{\"id\":192,\"name\":\"zone.js\",\"version\":\"0.9.1\",\"license\":\"MIT License (MIT)\",\"repository\":\"git://github.com/angular/zone.js.git\",\"author\":\"Brian Ford\",\"homepage\":\"https://github.com/angular/zone.js#readme\",\"dependencyLevel\":\"production\"}]");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/js/onsenui.js");
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(onsenui__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'pwa-starter';
    }
    ngOnInit() {
        onsenui__WEBPACK_IMPORTED_MODULE_2__["platform"].select('android');
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_onsenui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-onsenui */ "./node_modules/ngx-onsenui/ngx-onsenui.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_onsenui__WEBPACK_IMPORTED_MODULE_6__["OnsenModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            _app_router__WEBPACK_IMPORTED_MODULE_8__["Routing"]
        ],
        providers: [],
        entryComponents: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");




const appRoutes = [
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
        this.tabs = [
            { path: 'home', label: 'Home', },
            { path: 'about', label: 'About Us', },
        ];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MenuComponent.prototype, "menuHeader", void 0);
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    title: 'angular-pwa-starter'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/progictech/angular-onsen-framework/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map