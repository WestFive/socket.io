webpackJsonp([0],{

/***/ "../../../../../src/app/routes/SessionLog/session.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/SessionLog/session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_messagehub2_service__ = __webpack_require__("../../../../../src/app/service/messagehub2.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionComponent = (function () {
    function SessionComponent(messagehubService) {
        this.messagehubService = messagehubService;
    }
    SessionComponent.prototype.ngOnInit = function () {
        console.log(this.messagehubService.sessionData);
    };
    return SessionComponent;
}());
SessionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-session',
        template: __webpack_require__("../../../../../src/app/routes/SessionLog/session.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/SessionLog/session.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_messagehub2_service__["a" /* MessagehubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_messagehub2_service__["a" /* MessagehubService */]) === "function" && _a || Object])
], SessionComponent);

var _a;
//# sourceMappingURL=session.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/SessionLog/session.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">资源日志</div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n              <th>connectionId</th>\r\n              <th>connectionIpAdress</th>\r\n              <th>connectionName</th>\r\n              <th>privatePools</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let item of messagehubService.sessionData\">\r\n              <td>{{item.connectionId}}</td>\r\n              <td>{{item.connectionIpAdress}}</td>\r\n              <td>{{item.connectionName}}</td>\r\n              <td>{{item.privatePools}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/SessionLog/session.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_component__ = __webpack_require__("../../../../../src/app/routes/SessionLog/session.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // { path: '', redirectTo: 'dashboard' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__session_component__["a" /* SessionComponent */] },
];
var SessionModule = (function () {
    function SessionModule() {
    }
    return SessionModule;
}());
SessionModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__session_component__["a" /* SessionComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], SessionModule);

//# sourceMappingURL=session.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map