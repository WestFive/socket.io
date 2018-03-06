webpackJsonp([3],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./MessageHub2/message2.module": [
		"../../../../../src/app/routes/MessageHub2/message2.module.ts",
		0
	],
	"./SessionLog/session.module": [
		"../../../../../src/app/routes/SessionLog/session.module.ts",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(settings) {
        this.settings = settings;
    }
    Object.defineProperty(AppComponent.prototype, "isFixed", {
        get: function () { return this.settings.layout.isFixed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isCollapsed", {
        get: function () { return this.settings.layout.isCollapsed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isBoxed", {
        get: function () { return this.settings.layout.isBoxed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "useFullLayout", {
        get: function () { return this.settings.layout.useFullLayout; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "hiddenFooter", {
        get: function () { return this.settings.layout.hiddenFooter; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "horizontal", {
        get: function () { return this.settings.layout.horizontal; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isFloat", {
        get: function () { return this.settings.layout.isFloat; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "offsidebarOpen", {
        get: function () { return this.settings.layout.offsidebarOpen; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "asideToggled", {
        get: function () { return this.settings.layout.asideToggled; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isCollapsedText", {
        get: function () { return this.settings.layout.isCollapsedText; },
        enumerable: true,
        configurable: true
    });
    ;
    AppComponent.prototype.ngOnInit = function () {
        $(document).on('click', '[href="#"]', function (e) { return e.preventDefault(); });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-fixed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isFixed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-collapsed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isCollapsed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-boxed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isBoxed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-fs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "useFullLayout", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.hidden-footer'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "hiddenFooter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-h'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "horizontal", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-float'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isFloat", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.offsidebar-open'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "offsidebarOpen", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-toggled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "asideToggled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-collapsed-text'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isCollapsedText", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../../_@angular_platform-browser@4.3.4@@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../../_@angular_http@4.3.4@@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("../../../../_@ngx-translate_core@6.0.1@@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__("../../../../_@ngx-translate_http-loader@0.0.3@@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__("../../../../_ng2-file-upload@1.2.1@ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__ = __webpack_require__("../../../../_ng2-interceptors@1.3.0-1@ng2-interceptors/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__serverURLInterceptor__ = __webpack_require__("../../../../../src/app/serverURLInterceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_routes_module__ = __webpack_require__("../../../../../src/app/routes/routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_system_shared_service__ = __webpack_require__("../../../../../src/app/service/system-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_messagehub2_service__ = __webpack_require__("../../../../../src/app/service/messagehub2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../../_@angular_forms@4.3.4@@angular/forms/@angular/forms.es5.js");
/* unused harmony export interceptorFactory */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 // this is needed!















function interceptorFactory(xhrBackend, requestOptions, serverURLInterceptor) {
    var service = new __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__["InterceptorService"](xhrBackend, requestOptions);
    service.addInterceptor(serverURLInterceptor); // Add it here
    return service;
}
// https://github.com/ocombe/ng2-translate/issues/218
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_10__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__routes_routes_module__["a" /* RoutesModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]]
                }
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__service_system_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_14__service_messagehub2_service__["a" /* MessagehubService */], __WEBPACK_IMPORTED_MODULE_8__serverURLInterceptor__["a" /* ServerURLInterceptor */], {
                provide: __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__["InterceptorService"],
                useFactory: interceptorFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"], __WEBPACK_IMPORTED_MODULE_8__serverURLInterceptor__["a" /* ServerURLInterceptor */]]
            },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themes_themes_service__ = __webpack_require__("../../../../../src/app/core/themes/themes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__ = __webpack_require__("../../../../../src/app/core/translator/translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_import_guard__ = __webpack_require__("../../../../../src/app/core/module-import-guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__themes_themes_service__["a" /* ThemesService */],
            __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__["a" /* TranslatorService */],
            __WEBPACK_IMPORTED_MODULE_4__menu_menu_service__["a" /* MenuService */]
        ],
        declarations: [],
        exports: []
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/menu/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = (function () {
    function MenuService() {
        this.menuItems = [];
    }
    MenuService.prototype.addMenu = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.menuItems.push(item);
        });
    };
    MenuService.prototype.getMenu = function () {
        return this.menuItems;
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MenuService);

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
// https://angular.io/styleguide#!#04-12
// https://angular.io/styleguide#!#04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        // User Settings
        // -----------------------------------
        this.user = {
            name: 'MC',
            job: 'ng-developer',
            picture: 'assets/img/user/13.jpg'
        };
        // App Settings
        // -----------------------------------
        this.app = {
            name: 'Cortex',
            description: 'PFT',
            year: ((new Date()).getFullYear())
        };
        // Layout Settings
        // -----------------------------------
        this.layout = {
            isFixed: true,
            isCollapsed: false,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null,
            asideScrollbar: false,
            isCollapsedText: true,
            useFullLayout: false,
            hiddenFooter: true,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };
    }
    SettingsService.prototype.getAppSetting = function (name) {
        return name ? this.app[name] : this.app;
    };
    SettingsService.prototype.getUserSetting = function (name) {
        return name ? this.user[name] : this.user;
    };
    SettingsService.prototype.getLayoutSetting = function (name) {
        return name ? this.layout[name] : this.layout;
    };
    SettingsService.prototype.setAppSetting = function (name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    };
    SettingsService.prototype.setUserSetting = function (name, value) {
        if (typeof this.user[name] !== 'undefined') {
            this.user[name] = value;
        }
    };
    SettingsService.prototype.setLayoutSetting = function (name, value) {
        if (typeof this.layout[name] !== 'undefined') {
            return this.layout[name] = value;
        }
    };
    SettingsService.prototype.toggleLayoutSetting = function (name) {
        return this.setLayoutSetting(name, !this.getLayoutSetting(name));
    };
    return SettingsService;
}());
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/themes/themes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var themeA = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-a.scss");
var themeB = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-b.scss");
var themeC = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-c.scss");
var themeD = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-d.scss");
var themeE = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-e.scss");
var themeF = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-f.scss");
var themeG = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-g.scss");
var themeH = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-h.scss");
var themeI = __webpack_require__("../../../../../src/app/shared/styles/themes/theme-i.scss");
var ThemesService = (function () {
    function ThemesService() {
        this.defaultTheme = 'I';
        this.createStyle();
        this.setTheme(this.defaultTheme);
    }
    ThemesService.prototype.createStyle = function () {
        var head = document.head || document.getElementsByTagName('head')[0];
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    };
    ThemesService.prototype.setTheme = function (name) {
        switch (name) {
            case 'A':
                this.injectStylesheet(themeA);
                break;
            case 'B':
                this.injectStylesheet(themeB);
                break;
            case 'C':
                this.injectStylesheet(themeC);
                break;
            case 'D':
                this.injectStylesheet(themeD);
                break;
            case 'E':
                this.injectStylesheet(themeE);
                break;
            case 'F':
                this.injectStylesheet(themeF);
                break;
            case 'G':
                this.injectStylesheet(themeG);
                break;
            case 'H':
                this.injectStylesheet(themeH);
                break;
            case 'I':
                this.injectStylesheet(themeI);
                break;
        }
    };
    ThemesService.prototype.injectStylesheet = function (css) {
        this.styleTag.innerHTML = css;
    };
    ThemesService.prototype.getDefaultTheme = function () {
        return this.defaultTheme;
    };
    return ThemesService;
}());
ThemesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ThemesService);

//# sourceMappingURL=themes.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/translator/translator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../_@ngx-translate_core@6.0.1@@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatorService = (function () {
    function TranslatorService(translate) {
        this.translate = translate;
        this.defaultLanguage = 'en';
        this.availablelangs = [
            { code: 'en', text: 'English' },
            { code: 'es_AR', text: 'Spanish' }
        ];
        if (!translate.getDefaultLang())
            translate.setDefaultLang(this.defaultLanguage);
        this.useLanguage();
    }
    TranslatorService.prototype.useLanguage = function (lang) {
        if (lang === void 0) { lang = null; }
        this.translate.use(lang || this.translate.getDefaultLang());
    };
    TranslatorService.prototype.getAvailableLanguages = function () {
        return this.availablelangs;
    };
    return TranslatorService;
}());
TranslatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], TranslatorService);

var _a;
//# sourceMappingURL=translator.service.js.map

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<span>&copy; {{settings.app.year}} - {{ settings.app.name }}</span>"

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(settings) {
        this.settings = settings;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[app-footer]',
        template: __webpack_require__("../../../../../src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\r\n<nav class=\"navbar topnavbar\" role=\"navigation\">\r\n    <!-- START navbar header-->\r\n    <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#/\">\r\n            <div class=\"brand-logo\">\r\n                <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"App Logo\" />\r\n            </div>\r\n            <div class=\"brand-logo-collapsed\">\r\n                <img class=\"img-responsive\" src=\"assets/img/logo-single.png\" alt=\"App Logo\" />\r\n            </div>\r\n        </a>\r\n    </div>\r\n    <!-- END navbar header-->\r\n    <!-- START Nav wrapper-->\r\n    <div class=\"nav-wrapper\">\r\n        <!-- START Left navbar-->\r\n        <ul class=\"nav navbar-nav\">\r\n          <!--New Define collapse lef sidebar-->\r\n          <li>\r\n            <a>\r\n              <em class=\"fa fa-navicon\"></em>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n            <a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\r\n              <em class=\"fa fa-navicon\"></em>\r\n            </a>\r\n            <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\r\n            <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\r\n              <em class=\"fa fa-navicon\"></em>\r\n            </a>\r\n          </li>\r\n          <!-- START User avatar toggle-->\r\n            <li>\r\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n                <a (click)=\"toggleUserBlock($event)\">\r\n                    <em class=\"icon-user\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- END User avatar toggle-->\r\n            <!-- START lock screen-->\r\n            <!--<li>-->\r\n                <!--<a  title=\"Lock screen\" [routerLink]=\"'/lock'\">-->\r\n                    <!--<em class=\"icon-lock\"></em>-->\r\n                <!--</a>-->\r\n            <!--</li>-->\r\n            <!-- END lock screen-->\r\n        </ul>\r\n        <!-- END Left navbar-->\r\n        <!-- START Right Navbar-->\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <!-- Search icon-->\r\n            <li>\r\n                <a (click)=\"openNavSearch($event)\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- Fullscreen (only desktops)-->\r\n            <li class=\"visible-lg\">\r\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\r\n                    <em class=\"fa fa-expand\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- START Alert menu-->\r\n            <li class=\"dropdown dropdown-list\" dropdown>\r\n                <a dropdownToggle>\r\n                    <em class=\"icon-bell\"></em>\r\n                    <div class=\"label label-danger\">11</div>\r\n                </a>\r\n                <!-- START Dropdown menu-->\r\n                <ul *dropdownMenu class=\"dropdown-menu animated fadeInDown\">\r\n                    <li>\r\n                        <!-- START list group-->\r\n                        <div class=\"list-group\">\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-twitter fa-2x text-info\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New followers</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>1 new follower</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-envelope fa-2x text-warning\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New e-mails</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>You have 10 new emails</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-tasks fa-2x text-success\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">Pending Tasks</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>11 pending task</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- last list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <small translate=\"topbar.notification.MORE\">More notifications</small>\r\n                                <span class=\"label label-danger pull-right\">14</span>\r\n                            </a>\r\n                        </div>\r\n                        <!-- END list group-->\r\n                    </li>\r\n                </ul>\r\n                <!-- END Dropdown menu-->\r\n            </li>\r\n            <!-- END Alert menu-->\r\n            <!-- START Offsidebar button-->\r\n            <li>\r\n                <a (click)=\"toggleOffsidebar()\">\r\n                    <em class=\"icon-exit\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- END Offsidebar menu-->\r\n        </ul>\r\n        <!-- END Right Navbar-->\r\n    </div>\r\n    <!-- END Nav wrapper-->\r\n\r\n    <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch>\r\n\r\n</nav>\r\n<!-- END Top Navbar-->\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_userblock_userblock_service__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var screenfull = __webpack_require__("../../../../_screenfull@3.2.0@screenfull/dist/screenfull.js");
var browser = __webpack_require__("../../../../_jquery.browser@0.1.0@jquery.browser/dist/jquery.browser.js");



var HeaderComponent = (function () {
    function HeaderComponent(menu, userblockService, settings) {
        this.menu = menu;
        this.userblockService = userblockService;
        this.settings = settings;
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isNavSearchVisible = false;
        if (browser.msie) {
            this.fsbutton.nativeElement.style.display = 'none';
        }
    };
    HeaderComponent.prototype.toggleUserBlock = function (event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    };
    HeaderComponent.prototype.openNavSearch = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    };
    HeaderComponent.prototype.setNavSearchVisible = function (stat) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    };
    HeaderComponent.prototype.getNavSearchVisible = function () {
        return this.isNavSearchVisible;
    };
    HeaderComponent.prototype.toggleOffsidebar = function () {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    };
    HeaderComponent.prototype.toggleCollapsedSideabar = function () {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    };
    HeaderComponent.prototype.isCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    HeaderComponent.prototype.toggleFullScreen = function (event) {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        var el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fsbutton'),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "fsbutton", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sidebar_userblock_userblock_service__["a" /* UserblockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidebar_userblock_userblock_service__["a" /* UserblockService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/navsearch/navsearch.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\r\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\r\n    <div class=\"form-group has-feedback\">\r\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER' | translate}}\" />\r\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\r\n    </div>\r\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\r\n</form>\r\n<!-- END Search form-->\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/header/navsearch/navsearch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/navsearch/navsearch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavsearchComponent = (function () {
    function NavsearchComponent(elem) {
        this.elem = elem;
        this.onclose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document)
            .on('keyup', function (event) {
            if (event.keyCode === 27) {
                _this.closeNavSearch();
            }
        })
            .on('click', function (event) {
            if (!$.contains(_this.elem.nativeElement, event.target)) {
                _this.closeNavSearch();
            }
        });
    };
    NavsearchComponent.prototype.closeNavSearch = function () {
        this.visible = false;
        this.onclose.emit();
    };
    NavsearchComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes['visible'].currentValue)
        if (changes['visible'].currentValue === true) {
            this.elem.nativeElement.querySelector('input').focus();
        }
    };
    NavsearchComponent.prototype.handleForm = function () {
        console.log('Form submit: ' + this.term);
    };
    return NavsearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NavsearchComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavsearchComponent.prototype, "onclose", void 0);
NavsearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navsearch',
        template: __webpack_require__("../../../../../src/app/layout/header/navsearch/navsearch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/navsearch/navsearch.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavsearchComponent);

var _a;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <!-- top navbar-->\r\n    <app-header class=\"topnavbar-wrapper\"></app-header>\r\n    <!-- sidebar-->\r\n    <app-sidebar class=\"aside\"></app-sidebar>\r\n    <!-- offsidebar-->\r\n    <app-offsidebar class=\"offsidebar\"></app-offsidebar>\r\n    <!-- Main section-->\r\n    <section>\r\n        <!-- Page content-->\r\n        <div class=\"content-wrapper\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </section>\r\n    <!-- Page footer-->\r\n    <footer app-footer></footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/layout.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__ = __webpack_require__("../../../../../src/app/layout/header/navsearch/navsearch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__ = __webpack_require__("../../../../../src/app/layout/offsidebar/offsidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_userblock_userblock_service__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__sidebar_userblock_userblock_service__["a" /* UserblockService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__["a" /* UserblockComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__["a" /* OffsidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__["a" /* UserblockComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__["a" /* OffsidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */]
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/offsidebar/offsidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\r\n    <tab>\r\n        <ng-template tabHeading>\r\n            <em class=\"icon-equalizer fa-lg\"></em>\r\n        </ng-template>\r\n        <h3 class=\"text-center text-thin\" [innerHTML]=\"'offsidebar.setting.SETTINGS' | translate\"></h3>\r\n        <div class=\"p\">\r\n            <h4 class=\"text-muted text-thin\">Themes</h4>\r\n            <div class=\"table-grid mb\">\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"A\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-info\"></span>\r\n                            <span class=\"color bg-info-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"B\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-green\"></span>\r\n                            <span class=\"color bg-green-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"C\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-purple\"></span>\r\n                            <span class=\"color bg-purple-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"D\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-danger\"></span>\r\n                            <span class=\"color bg-danger-light\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-white\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"table-grid mb\">\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"E\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-info-dark\"></span>\r\n                            <span class=\"color bg-info\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"F\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-green-dark\"></span>\r\n                            <span class=\"color bg-green\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"G\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-purple-dark\"></span>\r\n                            <span class=\"color bg-purple\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"H\" />\r\n                            <span class=\"icon-check\"></span>\r\n                            <span class=\"split\">\r\n                  <span class=\"color bg-danger-dark\"></span>\r\n                            <span class=\"color bg-danger\"></span>\r\n                            </span>\r\n                            <span class=\"color bg-gray-dark\"></span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p\">\r\n            <h4 class=\"text-muted text-thin\">Layout</h4>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Fixed</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFixed\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Boxed</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isBoxed\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <!--\r\n    <div class=\"clearfix\">\r\n      <p class=\"pull-left\">RTL</p>\r\n      <div class=\"pull-right\">\r\n         <label class=\"switch\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"layoutRTL\"/>\r\n            <span></span>\r\n         </label>\r\n      </div>\r\n    </div>\r\n    -->\r\n        </div>\r\n        <div class=\"p\" *ngIf=\"!settings.layout.horizontal\">\r\n            <h4 class=\"text-muted text-thin\">Aside</h4>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Collapsed</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsed\" [disabled]=\"settings.layout.isCollapsedText\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Collapsed Text</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsedText\" [disabled]=\"settings.layout.isCollapsed\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Float</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFloat\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Hover</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideHover\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"clearfix\">\r\n                <p class=\"pull-left\">Show Scrollbar</p>\r\n                <div class=\"pull-right\">\r\n                    <label class=\"switch\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideScrollbar\" />\r\n                        <span></span>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p\">\r\n            <h4 class=\"text-muted text-thin\">Language</h4>\r\n            <select class=\"form-control\" [ngModel]=\"selectedLanguage\" (ngModelChange)=\"setLang($event)\">\r\n                <option [value]=\"lang.code\" *ngFor=\"let lang of getLangs()\">{{lang.text}}</option>\r\n            </select>\r\n        </div>\r\n    </tab>\r\n    <tab>\r\n        <ng-template tabHeading>\r\n            <em class=\"icon-user fa-lg\"></em>\r\n        </ng-template>\r\n        <h3 class=\"text-center text-thin\">Connections</h3>\r\n        <ul class=\"nav\">\r\n            <!-- START list title-->\r\n            <li class=\"p\">\r\n                <small class=\"text-muted\">ONLINE</small>\r\n            </li>\r\n            <!-- END list title-->\r\n            <li>\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-success circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/05.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Juan Sims</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designeer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-success circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/06.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Maureen Jenkins</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designeer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-danger circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/07.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Billie Dunn</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designeer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-warning circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/08.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Tomothy Roberts</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n            </li>\r\n            <!-- START list title-->\r\n            <li class=\"p\">\r\n                <small class=\"text-muted\">OFFLINE</small>\r\n            </li>\r\n            <!-- END list title-->\r\n            <li>\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/09.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Lawrence Robinson</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Developer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n                <!-- START User status-->\r\n                <a href=\"#\" class=\"media-box p mt0\">\r\n                    <span class=\"pull-right\">\r\n                                 <span class=\"circle circle-lg\"></span>\r\n                    </span>\r\n                    <span class=\"pull-left\">\r\n                                 <!-- Contact avatar-->\r\n                                 <img src=\"assets/img/user/10.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\r\n                              </span>\r\n                    <!-- Contact info-->\r\n                    <span class=\"media-box-body\">\r\n                                 <span class=\"media-box-heading\">\r\n                                    <strong>Tyrone Owens</strong>\r\n                                    <br>\r\n                                    <small class=\"text-muted\">Designer</small>\r\n                                 </span>\r\n                    </span>\r\n                </a>\r\n                <!-- END User status-->\r\n            </li>\r\n            <li>\r\n                <div class=\"p-lg text-center\">\r\n                    <!-- Optional link to list more users-->\r\n                    <a href=\"#\" title=\"See more contacts\" class=\"btn btn-purple btn-sm\">\r\n                        <strong>Load more..</strong>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <!-- Extra items-->\r\n        <div class=\"p\">\r\n            <p>\r\n                <small class=\"text-muted\">Tasks completion</small>\r\n            </p>\r\n            <div class=\"progress progress-xs m0\">\r\n                <div role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-success progress-80\">\r\n                    <span class=\"sr-only\">80% Complete</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p\">\r\n            <p>\r\n                <small class=\"text-muted\">Upload quota</small>\r\n            </p>\r\n            <div class=\"progress progress-xs m0\">\r\n                <div role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-warning progress-40\">\r\n                    <span class=\"sr-only\">40% Complete</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </tab>\r\n</tabset>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/offsidebar/offsidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/offsidebar/offsidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__ = __webpack_require__("../../../../../src/app/core/themes/themes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__ = __webpack_require__("../../../../../src/app/core/translator/translator.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffsidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffsidebarComponent = (function () {
    function OffsidebarComponent(settings, themes, translator) {
        this.settings = settings;
        this.themes = themes;
        this.translator = translator;
        this.currentTheme = themes.getDefaultTheme();
        this.selectedLanguage = this.getLangs()[0].code;
    }
    OffsidebarComponent.prototype.ngOnInit = function () { };
    OffsidebarComponent.prototype.setTheme = function () {
        this.themes.setTheme(this.currentTheme);
    };
    OffsidebarComponent.prototype.getLangs = function () {
        return this.translator.getAvailableLanguages();
    };
    OffsidebarComponent.prototype.setLang = function (value) {
        this.translator.useLanguage(value);
    };
    return OffsidebarComponent;
}());
OffsidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-offsidebar',
        template: __webpack_require__("../../../../../src/app/layout/offsidebar/offsidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/offsidebar/offsidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__["a" /* TranslatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__["a" /* TranslatorService */]) === "function" && _c || Object])
], OffsidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=offsidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\r\n<div class=\"aside-inner\">\r\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\r\n\r\n        <!-- START sidebar nav-->\r\n        <ul class=\"nav\">\r\n\r\n            <!-- START user info-->\r\n            <li class=\"has-user-block\">\r\n                <app-userblock></app-userblock>\r\n            </li>\r\n            <!-- END user info-->\r\n\r\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\r\n                <!-- menu heading -->\r\n                <span *ngIf=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\r\n                <!-- external links -->\r\n                <a *ngIf=\"!item.heading && !item.submenu && item.elink\" [attr.target]=\"item.target\" [attr.href]=\"item.elink\" title=\"{{item.text}}\">\r\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                    <span>{{(item.translate | translate) || item.text}}</span>\r\n                </a>\r\n                <!-- single menu item -->\r\n                <a *ngIf=\"!item.heading && !item.submenu && !item.elink\" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\"\r\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                    <span>{{(item.translate | translate) || item.text}}</span>\r\n                </a>\r\n                <!-- has submenu -->\r\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\"\r\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                        <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                        <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                        <span>{{(item.translate | translate) || item.text}}</span>\r\n                </a>\r\n                <!-- SUBLEVEL -->\r\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\r\n                    <!--<li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>-->\r\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\r\n                        <!-- sublevel: external links -->\r\n                        <a *ngIf=\"!subitem.heading && !subitem.submenu && subitem.elink\" [attr.target]=\"subitem.target\" [attr.href]=\"subitem.elink\" title=\"{{subitem.text}}\">\r\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\r\n                        </a>\r\n                        <!-- sublevel: single menu item  -->\r\n                        <a *ngIf=\"!subitem.submenu && !subitem.elink\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\r\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\r\n                        </a>\r\n                        <!-- sublevel: has submenu -->\r\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\"\r\n                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                                <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                                <span>{{(subitem.translate | translate) || subitem.text}}</span>\r\n                        </a>\r\n                        <!-- SUBLEVEL 2 -->\r\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\r\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\r\n                                <!-- sublevel 2: single menu item  -->\r\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\r\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\r\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\r\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\r\n                                </a>\r\n                                <!-- sublevel2: has submenu -->\r\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\"\r\n                                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                        <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\r\n                                        <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\r\n                                        <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\r\n                                </a>\r\n                                <!-- SUBLEVEL 3 -->\r\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\r\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\r\n                                        <!-- sublevel 2: single menu item  -->\r\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\r\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\r\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\r\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\r\n                                        </a>\r\n                                        <!-- sublevel3: has submenu -->\r\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\"\r\n                                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                                <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\r\n                                                <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\r\n                                                <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\r\n                                        </a>\r\n                                        <!-- SUBLEVEL 4 -->\r\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\r\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\r\n                                                <!-- sublevel 2: single menu item  -->\r\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\r\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\r\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\r\n                                                    <span>{{(subitem4.translate | translate) || subitem4.text}}</span>\r\n                                                </a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            <li>\r\n                        </ul>\r\n                    <li>\r\n                </ul>\r\n            </li>\r\n\r\n        </ul>\r\n        <!-- END sidebar nav-->\r\n\r\n    </nav>\r\n</div>\r\n<!-- END Sidebar (left)-->\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__ = __webpack_require__("../../../../../src/app/core/settings/settings.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(menu, settings, injector) {
        this.menu = menu;
        this.settings = settings;
        this.injector = injector;
        this.menuItems = menu.getMenu();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]);
        this.router.events.subscribe(function (val) {
            // close any submenu opened when route changes
            _this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
        });
    };
    SidebarComponent.prototype.toggleSubmenuClick = function (event) {
        var _this = this;
        if (!this.isSidebarCollapsed() && !this.isSidebarCollapsedText() && !this.isEnabledHover()) {
            event.preventDefault();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul_1, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a').first();
            }
            ul_1 = anchor.next();
            // hide other submenus
            var parentNav_1 = ul_1.parents('.sidebar-subnav');
            $('.sidebar-subnav').each(function (idx, el) {
                var $el = $(el);
                // if element is not a parent or self ul
                if (!$el.is(parentNav_1) && !$el.is(ul_1)) {
                    _this.closeMenu($el);
                }
            });
            // abort if not UL to process
            if (!ul_1.length) {
                return;
            }
            // any child menu should start closed
            ul_1.find('.sidebar-subnav').each(function (idx, el) {
                _this.closeMenu($(el));
            });
            // toggle UL height
            if (parseInt(ul_1.height(), 0)) {
                this.closeMenu(ul_1);
            }
            else {
                // expand menu
                ul_1.on('transitionend', function () {
                    ul_1.height('auto').off('transitionend');
                }).height(ul_1[0].scrollHeight);
                // add class to manage animation
                ul_1.addClass('opening');
            }
        }
    };
    // Close menu collapsing height
    SidebarComponent.prototype.closeMenu = function (elem) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    };
    SidebarComponent.prototype.toggleSubmenuHover = function (event) {
        var self = this;
        if (this.isSidebarCollapsed() || this.isSidebarCollapsedText() || this.isEnabledHover()) {
            event.preventDefault();
            this.removeFloatingNav();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul = void 0, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a');
            }
            ul = anchor.next();
            if (!ul.length) {
                return; // if not submenu return
            }
            var $aside = $('.aside');
            var $asideInner = $aside.children('.aside-inner'); // for top offset calculation
            var $sidebar = $asideInner.children('.sidebar');
            var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
            var itemTop = ((anchor.parent().position().top) + mar) - $sidebar.scrollTop();
            var floatingNav_1 = ul.clone().appendTo($aside);
            var vwHeight = $(window).height();
            // let itemTop = anchor.position().top || anchor.offset().top;
            floatingNav_1
                .removeClass('opening') // necesary for demo if switched between normal//collapsed mode
                .addClass('nav-floating')
                .css({
                position: this.settings.layout.isFixed ? 'fixed' : 'absolute',
                top: itemTop,
                bottom: (floatingNav_1.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });
            floatingNav_1
                .on('mouseleave', function () { floatingNav_1.remove(); })
                .find('a').on('click', function (e) {
                e.preventDefault(); // prevents page reload on click
                // get the exact route path to navigate
                self.router.navigate([$(this).attr('route')]);
            });
            this.listenForExternalClicks();
        }
    };
    SidebarComponent.prototype.listenForExternalClicks = function () {
        var _this = this;
        var $doc = $(document).on('click.sidebar', function (e) {
            if (!$(e.target).parents('.aside').length) {
                _this.removeFloatingNav();
                $doc.off('click.sidebar');
            }
        });
    };
    SidebarComponent.prototype.removeFloatingNav = function () {
        $('.nav-floating').remove();
    };
    SidebarComponent.prototype.isSidebarCollapsed = function () {
        return this.settings.layout.isCollapsed;
    };
    SidebarComponent.prototype.isSidebarCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    SidebarComponent.prototype.isEnabledHover = function () {
        return this.settings.layout.asideHover;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"item user-block\" *ngIf=\"userBlockIsVisible()\">\r\n    <!-- User picture-->\r\n    <div class=\"user-block-picture\">\r\n        <div class=\"user-block-status\">\r\n            <img class=\"img-thumbnail img-circle\" [src]=\"user.picture\" alt=\"Avatar\" />\r\n            <div class=\"circle circle-success circle-lg\"></div>\r\n        </div>\r\n    </div>\r\n    <!-- Name and Job-->\r\n    <div class=\"user-block-info\">\r\n        <span class=\"user-block-name\">{{ 'sidebar.WELCOME' | translate }}  John</span>\r\n        <span class=\"user-block-role\">Programmer</span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userblock_service__ = __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserblockComponent = (function () {
    function UserblockComponent(userblockService) {
        this.userblockService = userblockService;
        this.user = {
            picture: 'assets/img/user/01.jpg'
        };
    }
    UserblockComponent.prototype.ngOnInit = function () {
    };
    UserblockComponent.prototype.userBlockIsVisible = function () {
        return this.userblockService.getVisibility();
    };
    return UserblockComponent;
}());
UserblockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userblock',
        template: __webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/sidebar/userblock/userblock.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */]) === "function" && _a || Object])
], UserblockComponent);

var _a;
//# sourceMappingURL=userblock.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/sidebar/userblock/userblock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserblockService = (function () {
    function UserblockService() {
        // initially visible
        this.userBlockVisible = false;
    }
    UserblockService.prototype.getVisibility = function () {
        return this.userBlockVisible;
    };
    UserblockService.prototype.setVisibility = function (stat) {
        if (stat === void 0) { stat = true; }
        this.userBlockVisible = stat;
    };
    UserblockService.prototype.toggleVisibility = function () {
        this.userBlockVisible = !this.userBlockVisible;
    };
    return UserblockService;
}());
UserblockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserblockService);

//# sourceMappingURL=userblock.service.js.map

/***/ }),

/***/ "../../../../../src/app/plugins/socket/socket.io.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,u=r.id,h=r.path,f=p[u]&&h in p[u].nsps,l=e.forceNew||e["force new connection"]||!1===e.multiplex||f;return l?(c("ignoring socket cache for %s",s),n=a(s,e)):(p[u]||(c("new io instance for %s",s),p[u]=a(s,e)),n=p[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),s=n(7),a=n(13),c=n(3)("socket.io-client");t.exports=e=r;var p=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(13),e.Socket=n(37)},function(t,e,n){(function(e){"use strict";function r(t,n){var r=t;n=n||e.location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof n?n.protocol+"//"+t:"https://"+t),i("parse %s",t),r=o(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var s=r.host.indexOf(":")!==-1,a=s?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+a+":"+r.port,r.href=r.protocol+"://"+a+(n&&n.port===r.port?"":":"+r.port),r}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r}).call(e,function(){return this}())},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function p(){try{return window.localStorage}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:p(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function p(){}var u,h,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,o=r-(p||r);t.diff=o,t.prev=p,t.curr=r,p=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=e.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;a++;var o=e.formatters[r];if("function"==typeof o){var s=i[a];n=o.call(t,s),i.splice(a,1),a--}return n}),e.formatArgs.call(t,i);var c=n.log||e.log||console.log.bind(console);c.apply(t,i)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),"function"==typeof e.init&&e.init(n),n}function i(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"==typeof t?t:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(t=n[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=n(6),e.names=[],e.skips=[],e.formatters={};var p},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*u;case"days":case"day":case"d":return n*p;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=p?Math.round(t/p)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,p,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;return e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data&&(n+=JSON.stringify(t.data)),h("encoded %j as %s",t,n),n}function i(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function s(){this.reconstructor=null}function a(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return u();if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),h("decoded %s as %j",t,r),r}function c(t,e){try{t.data=JSON.parse(e)}catch(n){return u()}return t}function p(t){this.reconPack=t,this.buffers=[]}function u(){return{type:e.ERROR,data:"parser error"}}var h=n(3)("socket.io-parser"),f=n(8),l=n(9),d=n(11),y=n(12);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=s,r.prototype.encode=function(t,n){if(t.type!==e.EVENT&&t.type!==e.ACK||!l(t.data)||(t.type=t.type===e.EVENT?e.BINARY_EVENT:e.BINARY_ACK),h("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)i(t,n);else{var r=o(t);n([r])}},f(s.prototype),s.prototype.add=function(t){var n;if("string"==typeof t)n=a(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new p(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},p.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},p.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){(function(e){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var n=0,i=t.length;n<i;n++)if(r(t[n]))return!0;return!1}if("function"==typeof e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||"function"==typeof e.ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)&&r(t[c]))return!0;return!1}var o=n(10),i=Object.prototype.toString,s="function"==typeof e.Blob||"[object BlobConstructor]"===i.call(e.Blob),a="function"==typeof e.File||"[object FileConstructor]"===i.call(e.File);t.exports=r}).call(e,function(){return this}())},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){(function(t){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(10),s=n(12),a=Object.prototype.toString,c="function"==typeof t.Blob||"[object BlobConstructor]"===a.call(t.Blob),p="function"==typeof t.File||"[object FileConstructor]"===a.call(t.File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,u){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){r++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}}).call(e,function(){return this}())},function(t,e){(function(e){function n(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=n}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(14),s=n(37),a=n(8),c=n(7),p=n(39),u=n(40),h=n(3)("socket.io-client:manager"),f=n(36),l=n(41),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(h("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;h("opening %s",this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var o=p(n,"open",function(){r.onopen(),t&&t()}),s=p(n,"error",function(e){if(h("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h("connect attempt will timeout after %d",a);var c=setTimeout(function(){h("connect attempt timed out after %d",a),o.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},r.prototype.onopen=function(){h("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",u(this,"ondata"))),this.subs.push(p(t,"ping",u(this,"onping"))),this.subs.push(p(t,"pong",u(this,"onpong"))),this.subs.push(p(t,"error",u(this,"onerror"))),this.subs.push(p(t,"close",u(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){h("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){h("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){h("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){h("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){h("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)h("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();h("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(h("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(15),t.exports.parser=n(22)},function(t,e,n){(function(e){function r(t,n){if(!(this instanceof r))return new r(t,n);n=n||{},t&&"object"==typeof t&&(n=t,t=null),t?(t=u(t),n.hostname=t.host,n.secure="https"===t.protocol||"wss"===t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=u(n.host).host),this.secure=null!=n.secure?n.secure:e.location&&"https:"===location.protocol,n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.agent=n.agent||!1,this.hostname=n.hostname||(e.location?location.hostname:"localhost"),this.port=n.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=n.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==n.upgrade,this.path=(n.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!n.forceJSONP,this.jsonp=!1!==n.jsonp,this.forceBase64=!!n.forceBase64,this.enablesXDR=!!n.enablesXDR,this.timestampParam=n.timestampParam||"t",this.timestampRequests=n.timestampRequests,this.transports=n.transports||["polling","websocket"],this.transportOptions=n.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=n.policyPort||843,this.rememberUpgrade=n.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=n.onlyBinaryUpgrades,this.perMessageDeflate=!1!==n.perMessageDeflate&&(n.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=n.pfx||null,this.key=n.key||null,this.passphrase=n.passphrase||null,this.cert=n.cert||null,this.ca=n.ca||null,this.ciphers=n.ciphers||null,this.rejectUnauthorized=void 0===n.rejectUnauthorized||n.rejectUnauthorized,this.forceNode=!!n.forceNode;var o="object"==typeof e&&e;o.global===o&&(n.extraHeaders&&Object.keys(n.extraHeaders).length>0&&(this.extraHeaders=n.extraHeaders),n.localAddress&&(this.localAddress=n.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(16),s=n(8),a=n(3)("engine.io-client:socket"),c=n(36),p=n(22),u=n(2),h=n(30);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=p.protocol,r.Socket=r,r.Transport=n(21),r.transports=n(16),r.parser=n(22),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),u.send([{type:"ping",data:"probe"}]),u.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",u),!u)return;r.priorWebsocketSuccess="websocket"===u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),p(),f.setTransport(u),u.send([{type:"upgrade"}]),f.emit("upgrade",u),u=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=u.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,p(),u.close(),u=null)}function o(e){var r=new Error("probe error: "+e);r.transport=u.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){u&&t.name!==u.name&&(a('"%s" works - aborting "%s"',t.name,u.name),n())}function p(){u.removeListener("open",e),u.removeListener("error",o),u.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,u.once("open",e),u.once("error",o),u.once("close",i),this.once("close",s),this.once("upgrading",c),u.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}}).call(e,function(){return this}())},function(t,e,n){(function(t){function r(e){var n,r=!1,a=!1,c=!1!==e.jsonp;if(t.location){var p="https:"===location.protocol,u=location.port;u||(u=p?443:80),r=e.hostname!==location.hostname||u!==e.port,a=e.secure!==p}if(e.xdomain=r,e.xscheme=a,n=new o(e),"open"in n&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=n(17),i=n(19),s=n(33),a=n(34);e.polling=r,e.websocket=a}).call(e,function(){return this}())},function(t,e,n){(function(e){var r=n(18);t.exports=function(t){var n=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!n||r))return new XMLHttpRequest}catch(s){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(s){}if(!n)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP");
}catch(s){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){(function(e){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,e.location){var n="https:"===location.protocol,r=location.port;r||(r=n?443:80),this.xd=t.hostname!==e.location.hostname||r!==t.port,this.xs=t.secure!==n}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(17),c=n(20),p=n(8),u=n(31),h=n(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var n=this.xhr=new a(t),r=this;try{h("xhr open %s: %s",this.method,this.uri),n.open(this.method,this.uri,this.async);try{if(this.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&n.setRequestHeader(o,this.extraHeaders[o])}}catch(s){}if("POST"===this.method)try{this.isBinary?n.setRequestHeader("Content-type","application/octet-stream"):n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(s){}try{n.setRequestHeader("Accept","*/*")}catch(s){}"withCredentials"in n&&(n.withCredentials=!0),this.requestTimeout&&(n.timeout=this.requestTimeout),this.hasXDR()?(n.onload=function(){r.onLoad()},n.onerror=function(){r.onError(n.responseText)}):n.onreadystatechange=function(){if(2===n.readyState){var t;try{t=n.getResponseHeader("Content-Type")}catch(e){}"application/octet-stream"===t&&(n.responseType="arraybuffer")}4===n.readyState&&(200===n.status||1223===n.status?r.onLoad():setTimeout(function(){r.onError(n.status)},0))},h("xhr data %s",this.data),n.send(this.data)}catch(s){return void setTimeout(function(){r.onError(s)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(n){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(21),i=n(30),s=n(22),a=n(31),c=n(32),p=n(3)("engine.io-client:polling");t.exports=r;var u=function(){var t=n(17),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){p("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(p("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){p("pre-pause polling complete"),--r||e()})),this.writable||(p("we are currently writing - waiting to pause"),r++,this.once("drain",function(){p("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;p("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){p("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(p("transport open - closing"),t()):(p("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(22),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){(function(t){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,u=n(23),h=n(9),f=n(24),l=n(25),d=n(26);t&&t.ArrayBuffer&&(p=n(28));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:"error",data:"parser error"},k=n(29);e.encodePacket=function(e,n,i,a){"function"==typeof n&&(a=n,n=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,n,a);if(k&&c instanceof t.Blob)return s(e,n,a);if(c&&c.base64)return r(e,a);var p=v[e.type];return void 0!==e.data&&(p+=i?d.encode(String(e.data),{strict:!1}):String(e.data)),a(""+p)},e.encodeBase64Packet=function(n,r){var o="b"+e.packets[n.type];if(k&&n.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];r(o+t)},i.readAsDataURL(n.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(n.data))}catch(a){for(var c=new Uint8Array(n.data),p=new Array(c.length),u=0;u<c.length;u++)p[u]=c[u];s=String.fromCharCode.apply(null,p)}return o+=t.btoa(s),r(o)},e.decodePacket=function(t,n,r){if(void 0===t)return w;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===n&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!p)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=p.decode(t.substr(1));return"blob"===e&&k&&(r=new k([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?k&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(w,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var u=t.charAt(c);if(":"===u){if(""===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&&w.data===o.data)return r(w,0,1);var h=r(o,c+i,p);if(!1===h)return}c+=i,a=""}else a+=u}return""!==a?r(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new k(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return r(w,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(h){var l=new Uint8Array(u);u="";for(var p=0;p<l.length;p++)u+=String.fromCharCode(l[p])}i.push(u),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e,n){var r;(function(t,o){!function(i){function s(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function a(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=w(e>>>10&1023|55296),e=56320|1023&e),o+=w(e);return o}function c(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function p(t,e){return w(t>>e&63|128)}function u(t,e){if(0==(4294967168&t))return w(t);var n="";return 0==(4294965248&t)?n=w(t>>6&31|192):0==(4294901760&t)?(c(t,e)||(t=65533),n=w(t>>12&15|224),n+=p(t,6)):0==(4292870144&t)&&(n=w(t>>18&7|240),n+=p(t,12),n+=p(t,6)),n+=w(63&t|128)}function h(t,e){e=e||{};for(var n,r=!1!==e.strict,o=s(t),i=o.length,a=-1,c="";++a<i;)n=o[a],c+=u(n,r);return c}function f(){if(b>=v)throw Error("Invalid byte index");var t=255&g[b];if(b++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(t){var e,n,r,o,i;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&g[b],b++,0==(128&e))return e;if(192==(224&e)){if(n=f(),i=(31&e)<<6|n,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=f(),r=f(),i=(15&e)<<12|n<<6|r,i>=2048)return c(i,t)?i:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=f(),r=f(),o=f(),i=(7&e)<<18|n<<12|r<<6|o,i>=65536&&i<=1114111))return i;throw Error("Invalid UTF-8 detected")}function d(t,e){e=e||{};var n=!1!==e.strict;g=s(t),v=g.length,b=0;for(var r,o=[];(r=l(n))!==!1;)o.push(r);return a(o)}var y="object"==typeof e&&e,m=("object"==typeof t&&t&&t.exports==y&&t,"object"==typeof o&&o);m.global!==m&&m.window!==m||(i=m);var g,v,b,w=String.fromCharCode,k={version:"2.1.2",encode:h,decode:d};r=function(){return k}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(27)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[p++]=r<<2|o>>4,h[p++]=(15&o)<<4|i>>2,h[p++]=(3&i)<<6|63&s;return u}}()},function(t,e){(function(e){function n(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.buffer instanceof ArrayBuffer){var r=n.buffer;if(n.byteLength!==r.byteLength){var o=new Uint8Array(n.byteLength);o.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=o.buffer}t[e]=r}}}function r(t,e){e=e||{};var r=new i;n(t);for(var o=0;o<t.length;o++)r.append(t[o]);return e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return n(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?r:void 0}()}).call(e,function(){return this}())},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(u=0;u<t.length;u++)e=e*a+c[t.charAt(u)];return e}function o(){var t=n(+new Date);return t!==i?(p=0,i=t):t+"."+n(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,u=0;u<a;u++)c[s[u]]=u;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var n=this;a.push(function(t){n.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var i=n(20),s=n(31);t.exports=o;var a,c=/\n/g,p=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),u=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=u,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(p,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){(function(e){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=h&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=o),i.call(this,t)}var o,i=n(21),s=n(22),a=n(30),c=n(31),p=n(32),u=n(3)("engine.io-client:websocket"),h=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=n(35)}catch(f){}var l=h;l||"undefined"!=typeof window||(l=o),t.exports=r,c(r,i),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function n(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,r.supportsBinary,function(i){if(!r.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),r.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<r.perMessageDeflate.threshold&&(s.compress=!1)}}try{r.usingBrowserWebSocket?r.ws.send(i):r.ws.send(i,s)}catch(c){u("websocket closed before onclose event")}--o||n()})}(t[i])},r.prototype.onClose=function(){i.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=p()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){"use strict";function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(7),s=n(8),a=n(38),c=n(39),p=n(40),u=n(3)("socket.io-client:socket"),h=n(30);t.exports=e=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},l=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return l.apply(this,arguments),this;var e=a(arguments),n={type:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;u("sending connect packet with query %s",t),this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?l.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);u("sending ack %j",r),e.packet({type:i.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)l.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){"use strict";function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});


/***/ }),

/***/ "../../../../../src/app/routes/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/routes/auth/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
];
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n  <div class=\"login-title\">\r\n    <h1>消息服务</h1>\r\n  </div>\r\n  <div class=\"login-form\">\r\n    <div class=\"block-center\">\r\n      <!-- START panel-->\r\n      <div class=\"panel panel-dark panel-flat\">\r\n        <div class=\"panel-heading text-center\">\r\n          <a href=\"#\">\r\n            <img class=\"block-center img-rounded\" src=\"assets/img/logo.png\" alt=\"Image\" />\r\n          </a>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <p class=\"text-center pv\">SIGN IN TO CONTINUE.</p>\r\n          <form class=\"form-validate mb-lg\" role=\"form\" name=\"loginForm\" novalidate=\"\">\r\n            <div class=\"form-group has-feedback\">\r\n              <input class=\"form-control\" id=\"exampleInputEmail1\" type=\"email\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"username\" />\r\n              <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\r\n              <!--<span class=\"text-danger\" >This field is required</span>-->\r\n            </div>\r\n            <div class=\"form-group has-feedback\">\r\n              <input class=\"form-control\" id=\"exampleInputPassword1\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" />\r\n              <span class=\"fa fa-lock form-control-feedback text-muted\"></span>\r\n              <!--<span class=\"text-danger\" >This field is required</span>-->\r\n            </div>\r\n            <div class=\"clearfix\">\r\n              <div class=\"checkbox c-checkbox pull-left mt0\">\r\n                <label>\r\n                  <input type=\"checkbox\" value=\"\" name=\"account_remember\"/>\r\n                  <span class=\"fa fa-check\"></span>记住我</label>\r\n              </div>\r\n              <div class=\"pull-right\"><a class=\"text-muted\" [routerLink]=\"'/recover'\">忘记密码?</a>\r\n              </div>\r\n            </div>\r\n            <button class=\"btn btn-block btn-primary mt-lg\" type=\"submit\" (click)=\"logining()\">登陆</button>\r\n          </form>\r\n          <!-- <div class=\"alert alert-danger text-center\" ></div> -->\r\n          <p class=\"pt-lg text-center\">注册账号</p>\r\n        </div>\r\n      </div>\r\n      <!-- END panel-->\r\n      <div class=\"p-lg text-center\">\r\n        <span>&copy;</span>\r\n        <span>{{ '2018/1/11'}}</span>\r\n        <span>-</span>\r\n        <span>{{ '1.0.0'}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/auth/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  height: 100%;\n  width: 100%;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/loginBG.jpg") + ");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  position: relative; }\n  .login .login-title {\n    position: absolute;\n    left: 5%;\n    top: 13%; }\n    .login .login-title h1 {\n      font-size: 55px;\n      color: #FFFFFF;\n      color: white; }\n  .login .login-form {\n    position: absolute;\n    right: 8%;\n    top: 10%;\n    width: 20%;\n    height: 80%;\n    background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_injectable_ApiServer__ = __webpack_require__("../../../../../src/app/shared/injectable/ApiServer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_router, _ApiServer) {
        this._router = _router;
        this.apiServer = _ApiServer;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logining = function () {
        if (this.username) {
            window.sessionStorage.setItem('username', this.username);
            this._router.navigate(['index/message2']);
        }
        else {
            alert('请输入用户名');
        }
        // this.apiServer.login({
        //   username: 'admin',
        //   password: '123456',
        //   terminal_id: 1
        // }).subscribe(
        //     (data) => {
        //       console.log(data);
        //     },
        //     (err) => {
        //       console.log(err);
        //     }
        // );
        // this._router.navigateByUrl('index/remote-tally/job-queue');
        // if (token) {
        //   this.localStorage.token = token;
        //   this._router.navigateByUrl('index/remote-tally/job-queue');
        // }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/routes/auth/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/auth/login/login.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__shared_injectable_ApiServer__["a" /* ApiServer */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_injectable_ApiServer__["a" /* ApiServer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_injectable_ApiServer__["a" /* ApiServer */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var HeadingMain = {
    text: '导航菜单',
    heading: true
};
var Dashboard = {
    text: '仪表盘',
    link: 'dashboard',
    icon: 'icon-speedometer'
};
var Messagehub = {
    text: '消息服务',
    link: 'message2',
    icon: 'icon-speedometer'
};
var SessionLog = {
    text: '会话',
    link: 'sessionLog',
    icon: 'icon-speedometer'
};
var VesselManagement = {
    text: '船舶管理',
    icon: 'icon-grid',
    submenu: [
        {
            text: '泊位计划',
            link: 'index/vessel-management/berth-plan'
        },
        {
            text: '船舶明细',
            link: 'index/vessel-management/vessel-detail'
        }
    ]
};
var RemoteTally = {
    text: '理货操作',
    link: 'index/remote-tally',
    icon: 'icon-grid',
    submenu: [
        {
            text: '作业队列',
            link: 'index/remote-tally/job-queue'
        },
        {
            text: '岸桥监控',
            link: 'index/remote-tally/crane-monitoring'
        }
    ]
};
var SystemManagement = {
    text: '系统管理',
    link: 'index/system-management',
    icon: 'icon-grid',
    submenu: [
        {
            text: '站点管理',
            link: 'index/system-management/site'
        },
        {
            text: '用户管理',
            link: 'index/system-management/user'
        },
        {
            text: '角色管理',
            link: 'index/system-management/role'
        },
        {
            text: '菜单管理',
            link: 'index/system-management/menu'
        },
        {
            text: '城市管理',
            link: 'index/system-management/city'
        },
        {
            text: '国家管理',
            link: 'index/system-management/country'
        },
        {
            text: '模块管理',
            link: 'index/system-management/module'
        },
        {
            text: '资源管理',
            link: 'index/system-management/resource'
        }
    ]
};
var menu = [
    Messagehub,
    SessionLog
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_translator_translator_service__ = __webpack_require__("../../../../../src/app/core/translator/translator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__("../../../../../src/app/core/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu__ = __webpack_require__("../../../../../src/app/routes/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("../../../../../src/app/routes/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__ = __webpack_require__("../../../../../src/app/routes/auth/auth.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RoutesModule = (function () {
    function RoutesModule(menuService, tr) {
        this.menuService = menuService;
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_5__menu__["a" /* menu */]);
    }
    return RoutesModule;
}());
RoutesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_module__["a" /* AuthModule */]
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_translator_translator_service__["a" /* TranslatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_translator_translator_service__["a" /* TranslatorService */]) === "function" && _b || Object])
], RoutesModule);

var _a, _b;
//# sourceMappingURL=routes.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_login_login_component__ = __webpack_require__("../../../../../src/app/routes/auth/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


// import {RegisterComponent} from './auth/register/register.component';
var routes = [
    {
        path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_0__layout_layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'message2', pathMatch: 'full' },
            { path: 'message2', loadChildren: './MessageHub2/message2.module#Message2Module' },
            { path: 'sessionLog', loadChildren: './SessionLog/session.module#SessionModule' },
        ]
    },
    // Not lazy-loaded routes
    // {path: '', redirectTo: 'login' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__auth_login_login_component__["a" /* LoginComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/serverURLInterceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerURLInterceptor; });
var ServerURLInterceptor = (function () {
    function ServerURLInterceptor() {
    }
    ServerURLInterceptor.prototype.interceptBefore = function (request) {
        // Do whatever with request: get info or edit it
        request.options.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUxMzkxMDA0OX0.iYZQ5l_AKUo8Jy7ZmI9BpmmYQT0GcU-yw87quZH9dY_ra4NBaDozK_-izfZqWxzYdO6LW393Uuy_SY8d1v7PBQ');
        return request;
    };
    ServerURLInterceptor.prototype.interceptAfter = function (response) {
        // Do whatever with response: get info or edit it
        return response;
        /*
          You can return:
            - Response: The modified response
            - Nothing: For convenience: It's just like returning the response
        */
    };
    return ServerURLInterceptor;
}());

//# sourceMappingURL=serverURLInterceptor.js.map

/***/ }),

/***/ "../../../../../src/app/service/messagehub2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_5_1_0_rxjs_Observable_js__ = __webpack_require__("../../../../_rxjs@5.1.0@rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_5_1_0_rxjs_Observable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rxjs_5_1_0_rxjs_Observable_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagehubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zhangyuyuan on 2017/11/01.
 */


var io = __webpack_require__("../../../../../src/app/plugins/socket/socket.io.js");
// import {io} from 'socket.io/lib/socket.js';
var MessagehubService = (function () {
    function MessagehubService() {
    }
    /**
     * 连接消息服务
     * @param  url 消息服务器地址
     * @param  ...param 监听函数名 二维数组
     */
    MessagehubService.prototype.connenctionMessageHub = function (url, username) {
        var _this = this;
        this.socket = io.connect(url);
        this.socket.on('connect', function () {
            _this.socket.emit('authentication', JSON.stringify(username));
            _this.socket.on('sessionList', function (data) {
                _this.sessionData = JSON.parse(data);
            });
        });
    };
    // /**
    //  * 监听函数调用
    //  * @param 函数名 funcname: CreatePool(创建池) ListenQueues(监听池队列) GetOnlineUser(获取用户) ListenPools(监听池列表)
    //  * @param 创建池 param:  池名称,池模式,队列排序字段,是否强制覆盖(true or false)
    //  */
    // public connectionInvoke(funcname: string, ...param: any[]): void {
    //   this.connection.invoke(funcname, ...param);
    // }
    // /**
    //  * 监听函数调用返回函数
    //  * @param funcname 函数名
    //  * @return Observable 对象
    //  */
    MessagehubService.prototype.connectionOn = function (funcname) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.socket.on(funcname, function (message) {
                observer.next(JSON.parse(message));
            });
        });
    };
    /**
     * connectionEmit 监听事件,监听用户跟消息
     * funcname 函数名
     * params 参数
     * @return Observable 对象数组
     */
    MessagehubService.prototype.connectionEmit = function (funcname, params) {
        if (typeof params === 'string') {
            this.socket.emit(funcname, params);
        }
        else {
            this.socket.emit(funcname, JSON.stringify(params));
        }
    };
    return MessagehubService;
}());
MessagehubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MessagehubService);

//# sourceMappingURL=messagehub2.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/system-shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__ = __webpack_require__("../../../../_rxjs@5.1.0@rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_interceptors__ = __webpack_require__("../../../../_ng2-interceptors@1.3.0-1@ng2-interceptors/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_interceptors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_interceptors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../../_@angular_http@4.3.4@@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zhangyuyuan on 2017/9/27.
 */





var SharedService = (function () {
    function SharedService(router, http) {
        this.router = router;
        this.http = http;
        this.nodes = null;
        this.params = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["URLSearchParams"]();
        this.api = 'http://10.1.1.118:8080';
    }
    SharedService.prototype.login = function (query) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.post(_this.api + '/api/authenticate', query).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前用户信息
    SharedService.prototype.getCortexUser = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/users/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前城市信息
    SharedService.prototype.getCortexCity = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/cities/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前菜单信息
    SharedService.prototype.getCortexMenu = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/menus/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前角色信息
    SharedService.prototype.getCortexRole = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/roles/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前国家信息
    SharedService.prototype.getCortexCountry = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/countries/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前站点信息
    SharedService.prototype.getCortexSite = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/sites/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前资源信息
    SharedService.prototype.getCortexResource = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/resources/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 获取当前模块信息
    SharedService.prototype.getCortexModule = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2__rxjs_5_1_0_rxjs_Observable_js__["Observable"](function (observer) {
            _this.http.get(_this.api + '/api/modules/' + id).subscribe(function (data) {
                observer.next(data);
            });
        });
    };
    // 用户，角色，站点，菜单删除函数
    SharedService.prototype.DeleteAll = function (url, id) {
        return this.http.delete(this.api + url + id).toPromise();
    };
    // 用户，角色，站点，菜单查询函数
    SharedService.prototype.QueryAll = function (url, query) {
        return this.http.get(this.api + url, query).toPromise().then(function (data) { return data.json(); });
    };
    // 用户，角色，站点，菜单更新函数
    SharedService.prototype.PutAll = function (url, query) {
        return this.http.put(this.api + url, query).toPromise().then(function (data) { return data.json(); });
    };
    // 用户，角色，站点，菜单新增函数
    SharedService.prototype.CreateAll = function (url, query) {
        return this.http.post(this.api + url, query).toPromise().then(function (data) { return data.json(); });
    };
    // 用户，角色，站点，菜单查询函数
    SharedService.prototype.KeywordQueryAll = function (url, query) {
        this.params.set('query', query || '');
        this.options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({ search: this.params });
        return this.http.get(this.api + url, this.options).toPromise().then(function (data) { return data.json(); });
    };
    // 通过站点查用户，角色，菜单
    SharedService.prototype.SiteQueryAll = function (url, id) {
        return this.http.get(this.api + '/api/sites/' + id + url).toPromise().then(function (data) { return data.json(); });
    };
    // 页面跳转
    SharedService.prototype.pageNav = function (url, data) {
        this.router.navigate([url], {
            queryParams: { index: data },
            skipLocationChange: true
        });
    };
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_interceptors__["InterceptorService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_interceptors__["InterceptorService"]) === "function" && _b || Object])
], SharedService);

var _a, _b;
//# sourceMappingURL=system-shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/colors/colors.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsService = (function () {
    function ColorsService() {
        this.APP_COLORS = {
            'primary': '#5d9cec',
            'success': '#27c24c',
            'info': '#23b7e5',
            'warning': '#ff902b',
            'danger': '#f05050',
            'inverse': '#131e26',
            'green': '#37bc9b',
            'pink': '#f532e5',
            'purple': '#7266ba',
            'dark': '#3a3f51',
            'yellow': '#fad732',
            'gray-darker': '#232735',
            'gray-dark': '#3a3f51',
            'gray': '#dde6e9',
            'gray-light': '#e4eaec',
            'gray-lighter': '#edf1f2'
        };
    }
    ColorsService.prototype.byName = function (name) {
        // console.log(name +' -> ' + this.APP_COLORS[name])
        return (this.APP_COLORS[name] || '#fff');
    };
    return ColorsService;
}());
ColorsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ColorsService);

//# sourceMappingURL=colors.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/checkall/checkall.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckallDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckallDirective = (function () {
    function CheckallDirective(el) {
        this.el = el;
        var $element = $(el.nativeElement);
        $element.on('change', function () {
            var index = $element.index() + 1, checkbox = $element.find('input[type="checkbox"]'), table = $element.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child(' + index + ') input[type="checkbox"]')
                .prop('checked', checkbox[0].checked);
        });
    }
    return CheckallDirective;
}());
CheckallDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[checkAll]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], CheckallDirective);

var _a;
//# sourceMappingURL=checkall.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/easypiechart/easypiechart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasypiechartDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasypiechartDirective = (function () {
    function EasypiechartDirective(element) {
        this.element = element;
        /**
         * default easy pie chart options
         * @type {Object}
         */
        this.defaultOptions = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.percent = this.percent || 0;
        this.options = $.extend({}, this.defaultOptions, this.options);
    }
    EasypiechartDirective.prototype.ngOnInit = function () {
        if (EasyPieChart) {
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
        }
    };
    EasypiechartDirective.prototype.ngOnChanges = function (changes) {
        if (this.pieChart && changes['percent']) {
            this.pieChart.update(this.percent);
        }
    };
    return EasypiechartDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EasypiechartDirective.prototype, "percent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EasypiechartDirective.prototype, "options", void 0);
EasypiechartDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[easypiechart]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], EasypiechartDirective);

var _a;
//# sourceMappingURL=easypiechart.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/flot/flot.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlotDirective = (function () {
    function FlotDirective(el) {
        this.el = el;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = $(this.el.nativeElement);
        if (!$.plot) {
            console.log('Flot chart no available.');
        }
        this.plot = null;
    }
    FlotDirective.prototype.ngOnInit = function () { };
    FlotDirective.prototype.ngOnChanges = function (changes) {
        if (!$.plot) {
            return;
        }
        if (changes['dataset']) {
            this.onDatasetChanged(this.dataset);
        }
        if (changes['series']) {
            this.onSerieToggled(this.series);
        }
    };
    FlotDirective.prototype.init = function () {
        var heightDefault = 220;
        this.width = this.attrWidth || '100%';
        this.height = this.height || heightDefault;
        this.element.css({
            width: this.width,
            height: this.height
        });
        var plotObj;
        if (!this.dataset || !this.options) {
            return;
        }
        plotObj = $.plot(this.el.nativeElement, this.dataset, this.options);
        if (this.ready) {
            this.ready.next({ plot: plotObj });
        }
        return plotObj;
    };
    FlotDirective.prototype.onDatasetChanged = function (dataset) {
        if (this.plot) {
            this.plot.setData(dataset);
            this.plot.setupGrid();
            return this.plot.draw();
        }
        else {
            this.plot = this.init();
            this.onSerieToggled(this.series);
            return this.plot;
        }
    };
    FlotDirective.prototype.onSerieToggled = function (series) {
        if (!this.plot || !series) {
            return;
        }
        var someData = this.plot.getData();
        for (var sName in series) {
            series[sName].forEach(toggleFor(sName));
        }
        this.plot.setData(someData);
        this.plot.draw();
        function toggleFor(sName) {
            return function (s, i) {
                if (someData[i] && someData[i][sName]) {
                    someData[i][sName].show = s;
                }
            };
        }
    };
    FlotDirective.prototype.ngOnDestroy = function () {
        if (this.plot) {
            this.plot.shutdown();
        }
    };
    return FlotDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "dataset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "attrWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FlotDirective.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "series", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "ready", void 0);
FlotDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flot]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FlotDirective);

var _a;
//# sourceMappingURL=flot.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/jqcloud/jqcloud.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JqcloudDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JqcloudDirective = (function () {
    function JqcloudDirective(element) {
        this.initialized = false; // flag to not update before plugin was initialized
        this.$elem = $(element.nativeElement);
        this.options = $.fn.jQCloud.defaults.get();
    }
    JqcloudDirective.prototype.ngOnInit = function () {
        var opts = {};
        if (this.width) {
            opts.width = this.width;
        }
        if (this.height) {
            opts.height = this.height;
        }
        if (this.steps) {
            opts.steps = this.steps;
        }
        $.extend(this.options, opts);
        this.$elem.jQCloud(this.words, opts);
        this.initialized = true;
    };
    JqcloudDirective.prototype.ngOnChanges = function (changes) {
        if (this.initialized && this.words && changes['words']) {
            this.$elem.jQCloud('update', this.words);
        }
    };
    JqcloudDirective.prototype.ngOnDestroy = function () {
        this.$elem.jQCloud('destroy');
    };
    return JqcloudDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "words", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "steps", void 0);
JqcloudDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[jqcloud]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], JqcloudDirective);

var _a;
//# sourceMappingURL=jqcloud.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/now/now.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../_moment@2.18.1@moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowDirective = (function () {
    function NowDirective(element) {
        this.element = element;
    }
    NowDirective.prototype.ngOnInit = function () {
        this.updateTime();
        this.intervalId = setInterval(this.updateTime.bind(this), 1000);
    };
    NowDirective.prototype.updateTime = function () {
        var dt = __WEBPACK_IMPORTED_MODULE_1_moment__().format(this.format);
        this.element.nativeElement.innerHTML = dt;
    };
    NowDirective.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
    };
    return NowDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NowDirective.prototype, "format", void 0);
NowDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[now]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NowDirective);

var _a;
//# sourceMappingURL=now.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/scrollable/scrollable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_jquery_slimscroll_jquery_slimscroll_js__ = __webpack_require__("../../../../_jquery-slimscroll@1.3.8@jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_jquery_slimscroll_jquery_slimscroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_jquery_slimscroll_jquery_slimscroll_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollableDirective = (function () {
    function ScrollableDirective(element) {
        this.element = element;
        this.defaultHeight = 250;
    }
    ScrollableDirective.prototype.ngOnInit = function () {
        $(this.element.nativeElement).slimScroll({
            height: (this.height || this.defaultHeight)
        });
    };
    ScrollableDirective.prototype.ngOnChanges = function () {
        $(this.element.nativeElement).slimScroll({
            height: (this.height || this.defaultHeight)
        });
    };
    return ScrollableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ScrollableDirective.prototype, "height", void 0);
ScrollableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'scrollable'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ScrollableDirective);

var _a;
//# sourceMappingURL=scrollable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/sparkline/sparkline.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(el) {
        this.el = el;
        // generate a unique resize event so we can detach later
        this.resizeEventId = 'resize.sparkline' + 1324;
        this.$element = $(el.nativeElement);
    }
    SparklineDirective.prototype.ngOnInit = function () {
        this.initSparkLine();
    };
    SparklineDirective.prototype.initSparkLine = function () {
        var _this = this;
        var options = this.sparkline, data = this.$element.data();
        if (!options) {
            options = data;
        }
        else {
            if (data) {
                options = $.extend({}, options, data);
            }
        }
        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;
        this.$element.sparkline('html', options);
        if (options.resize) {
            $(window).on(this.resizeEventId, function () {
                _this.$element.sparkline('html', options);
            });
        }
    };
    SparklineDirective.prototype.ngOnDestroy = function () {
        $(window).off(this.resizeEventId);
    };
    return SparklineDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "sparkline", void 0);
SparklineDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[sparkline]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineDirective);

var _a;
//# sourceMappingURL=sparkline.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/vectormap/vectormap.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectormapDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VectormapDirective = (function () {
    function VectormapDirective(element) {
        this.element = element;
    }
    VectormapDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.$element = $(this.element.nativeElement);
        this.$element.css('height', this.mapHeight);
        if (!this.$element.vectorMap) {
            return;
        }
        this.$element.vectorMap({
            map: this.mapName,
            backgroundColor: this.mapOptions.bgColor,
            zoomMin: 1,
            zoomMax: 8,
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    'fill': this.mapOptions.regionFill,
                    'fill-opacity': 1,
                    'stroke': 'none',
                    'stroke-width': 1.5,
                    'stroke-opacity': 1
                },
                hover: {
                    'fill-opacity': 0.8
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: {}
            },
            focusOn: { x: 0.4, y: 0.6, scale: this.mapOptions.scale },
            markerStyle: {
                initial: {
                    fill: this.mapOptions.markerColor,
                    stroke: this.mapOptions.markerColor
                }
            },
            onRegionLabelShow: function (e, el, code) {
                if (_this.seriesData && _this.seriesData[code]) {
                    el.html(el.html() + ': ' + _this.seriesData[code] + ' visitors');
                }
            },
            markers: this.markersData,
            series: {
                regions: [{
                        values: this.seriesData,
                        scale: this.mapOptions.scaleColors,
                        normalizeFunction: 'polynomial'
                    }]
            },
        });
    };
    return VectormapDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], VectormapDirective.prototype, "mapHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "mapName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "mapOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "seriesData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "markersData", void 0);
VectormapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[vectormap]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], VectormapDirective);

var _a;
//# sourceMappingURL=vectormap.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/injectable/ApiServer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../_rxjs@5.1.0@rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../../_@angular_http@4.3.4@@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Mr.yang on 2017/9/27.
 */



var ApiServer = (function () {
    function ApiServer(http) {
        this.http = http;
        this.ApiServerUrl = 'http://10.1.1.105:8080/ApiService/';
        this.OuterLinkUrl = 'http://10.1.1.105:8080/OuterLink/';
    }
    // 登陆
    ApiServer.prototype.login = function (user) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('username', user.username);
        params.set('password', user.password);
        params.set('terminal_id', user.terminal_id);
        return this.http.post('http://dev.pingfang.net/cn-xiamen-xhct/api/auth/login', params);
    };
    // 查询所有岸桥
    ApiServer.prototype.getQuayCranes = function () {
        var v = this;
        return v.http.get(v.ApiServerUrl + 'quay_cranes')
            .toPromise()
            .then(function (data) {
            return JSON.parse(data._body).data;
        });
    };
    // 提交作业
    ApiServer.prototype.submitQueue = function (queue) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        for (var key in queue) {
            // 剔除抓拍图片
            if (key === 'pictures_capture') {
                continue;
            }
            if (typeof queue[key] === 'string') {
                params.set(key, queue[key]);
            }
            else {
                params.set(key, JSON.stringify(queue[key]));
            }
        }
        return this.http.post(this.ApiServerUrl + 'job_queues', params).toPromise();
    };
    // 查询泊位计划
    ApiServer.prototype.getBerthPlans = function (time) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('date_from', time.date_form);
        params.set('date_to', time.date_to);
        return this.http.get(this.OuterLinkUrl + 'berth_plans', { search: params }).toPromise();
    };
    // 下载更新单船集装箱清单
    ApiServer.prototype.downloadContainers = function (vessel_voyage_number) {
        return this.http.get(this.ApiServerUrl + 'berth_plans/' + vessel_voyage_number + '/download_containers').toPromise();
    };
    // 查询单船所有集装箱
    ApiServer.prototype.getBerthPlansContainersList = function (vessel_voyage_number) {
        return this.http.get(this.ApiServerUrl + 'berth_plans/' + vessel_voyage_number + '/containers').toPromise();
    };
    // 查询多个岸桥下的摄像机列表
    ApiServer.prototype.getCameras = function (cranes_array) {
        var str = '?';
        for (var i = 0; i < cranes_array.length; i++) {
            str += 'cranes_array=' + cranes_array[i] + '&';
        }
        return this.http.get(this.ApiServerUrl + 'quay_cranes/cameras' + str).toPromise();
    };
    // 查询单个集装箱
    ApiServer.prototype.getContainer = function (vessel_voyage_number, container_number) {
        return this.http.get(this.ApiServerUrl + 'berth_plans/' + vessel_voyage_number + '/containers/' + container_number).toPromise();
    };
    return ApiServer;
}());
ApiServer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], ApiServer);

;
var _a;
//# sourceMappingURL=ApiServer.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipe/clock.pepe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Mr.yang on 2017/9/23.
 */

var ClockPipe = (function () {
    function ClockPipe() {
    }
    ClockPipe.prototype.transform = function (time, ntime) {
        if (!time) {
            return '00:00';
        }
        var start_time = new Date(time);
        var now_time = ntime;
        var TimeDifference = Math.floor((now_time.getTime() - start_time.getTime()) / 1000);
        var T = Math.floor(TimeDifference / 60 / 60);
        var M = Math.floor((TimeDifference / 60) % 60);
        var S = TimeDifference % 60;
        T = T < 10 ? '0' + T : T;
        M = M < 10 ? '0' + M : M;
        S = S < 10 ? '0' + S : S;
        if (T > 0) {
            return '1h+';
        }
        else {
            return M + ':' + S;
        }
    };
    return ClockPipe;
}());
ClockPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'clockPipe'
    })
], ClockPipe);

//# sourceMappingURL=clock.pepe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipe/ferry.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FerryPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Mr.yang on 2017/9/23.
 */

var FerryPipe = (function () {
    function FerryPipe() {
    }
    FerryPipe.prototype.transform = function (ferry, select) {
        if (!ferry) {
            return [];
        }
        for (var i = 0; i < ferry.length; i++) {
            var b = true;
            for (var j = 0; j < select.length; j++) {
                if (ferry[i].vessel_status === select[j]) {
                    b = false;
                }
            }
            if (b) {
                ferry.splice(i, 1);
                i--;
            }
        }
        return ferry;
    };
    return FerryPipe;
}());
FerryPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'ferryPipe'
    })
], FerryPipe);

//# sourceMappingURL=ferry.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipe/overWrite.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WritePipe = (function () {
    function WritePipe() {
    }
    WritePipe.prototype.transform = function (value) {
        return value ? '是' : '否';
    };
    return WritePipe;
}());
WritePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'writePipe'
    })
], WritePipe);

//# sourceMappingURL=overWrite.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipe/poolMode.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoolPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PoolPipe = (function () {
    function PoolPipe() {
    }
    PoolPipe.prototype.transform = function (value) {
        return value ? '公共池' : '私有池';
    };
    return PoolPipe;
}());
PoolPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'poolPipe'
    })
], PoolPipe);

//# sourceMappingURL=poolMode.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../../_@angular_common@4.3.4@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../../_@angular_forms@4.3.4@@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("../../../../_@ngx-translate_core@6.0.1@@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__ = __webpack_require__("../../../../_angular2-toaster@3.0.1@angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_buttons__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_collapse__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_pagination__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_progressbar__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_rating__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_typeahead__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/typeahead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../_ngx-bootstrap@1.6.6@ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_flot_flot_directive__ = __webpack_require__("../../../../../src/app/shared/directives/flot/flot.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_sparkline_sparkline_directive__ = __webpack_require__("../../../../../src/app/shared/directives/sparkline/sparkline.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_easypiechart_easypiechart_directive__ = __webpack_require__("../../../../../src/app/shared/directives/easypiechart/easypiechart.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__colors_colors_service__ = __webpack_require__("../../../../../src/app/shared/colors/colors.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_checkall_checkall_directive__ = __webpack_require__("../../../../../src/app/shared/directives/checkall/checkall.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_vectormap_vectormap_directive__ = __webpack_require__("../../../../../src/app/shared/directives/vectormap/vectormap.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_now_now_directive__ = __webpack_require__("../../../../../src/app/shared/directives/now/now.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_scrollable_scrollable_directive__ = __webpack_require__("../../../../../src/app/shared/directives/scrollable/scrollable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_jqcloud_jqcloud_directive__ = __webpack_require__("../../../../../src/app/shared/directives/jqcloud/jqcloud.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipe_clock_pepe__ = __webpack_require__("../../../../../src/app/shared/pipe/clock.pepe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipe_ferry_pipe__ = __webpack_require__("../../../../../src/app/shared/pipe/ferry.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipe_poolMode_pipe__ = __webpack_require__("../../../../../src/app/shared/pipe/poolMode.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipe_overWrite__ = __webpack_require__("../../../../../src/app/shared/pipe/overWrite.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































// https://angular.io/styleguide#!#04-10
var SharedModule = SharedModule_1 = (function () {
    // https://github.com/ocombe/ng2-translate/issues/209
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_datepicker__["a" /* DatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["c" /* ToasterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__colors_colors_service__["a" /* ColorsService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_21__directives_flot_flot_directive__["a" /* FlotDirective */],
            __WEBPACK_IMPORTED_MODULE_22__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
            __WEBPACK_IMPORTED_MODULE_23__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
            __WEBPACK_IMPORTED_MODULE_25__directives_checkall_checkall_directive__["a" /* CheckallDirective */],
            __WEBPACK_IMPORTED_MODULE_26__directives_vectormap_vectormap_directive__["a" /* VectormapDirective */],
            __WEBPACK_IMPORTED_MODULE_27__directives_now_now_directive__["a" /* NowDirective */],
            __WEBPACK_IMPORTED_MODULE_28__directives_scrollable_scrollable_directive__["a" /* ScrollableDirective */],
            __WEBPACK_IMPORTED_MODULE_29__directives_jqcloud_jqcloud_directive__["a" /* JqcloudDirective */],
            __WEBPACK_IMPORTED_MODULE_30__pipe_clock_pepe__["a" /* ClockPipe */],
            __WEBPACK_IMPORTED_MODULE_31__pipe_ferry_pipe__["a" /* FerryPipe */],
            __WEBPACK_IMPORTED_MODULE_32__pipe_poolMode_pipe__["a" /* PoolPipe */],
            __WEBPACK_IMPORTED_MODULE_33__pipe_overWrite__["a" /* WritePipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__["a" /* AccordionModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__["a" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_buttons__["a" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__["a" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_collapse__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_datepicker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_pagination__["a" /* PaginationModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_rating__["a" /* RatingModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_timepicker__["a" /* TimepickerModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_tooltip__["a" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["c" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_21__directives_flot_flot_directive__["a" /* FlotDirective */],
            __WEBPACK_IMPORTED_MODULE_22__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
            __WEBPACK_IMPORTED_MODULE_23__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
            __WEBPACK_IMPORTED_MODULE_25__directives_checkall_checkall_directive__["a" /* CheckallDirective */],
            __WEBPACK_IMPORTED_MODULE_26__directives_vectormap_vectormap_directive__["a" /* VectormapDirective */],
            __WEBPACK_IMPORTED_MODULE_27__directives_now_now_directive__["a" /* NowDirective */],
            __WEBPACK_IMPORTED_MODULE_28__directives_scrollable_scrollable_directive__["a" /* ScrollableDirective */],
            __WEBPACK_IMPORTED_MODULE_29__directives_jqcloud_jqcloud_directive__["a" /* JqcloudDirective */],
            __WEBPACK_IMPORTED_MODULE_30__pipe_clock_pepe__["a" /* ClockPipe */],
            __WEBPACK_IMPORTED_MODULE_31__pipe_ferry_pipe__["a" /* FerryPipe */],
            __WEBPACK_IMPORTED_MODULE_32__pipe_poolMode_pipe__["a" /* PoolPipe */],
            __WEBPACK_IMPORTED_MODULE_33__pipe_overWrite__["a" /* WritePipe */]
        ]
    })
    // https://github.com/ocombe/ng2-translate/issues/209
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-a.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #2f8fef 0%, #5ea9f3 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2F8FEF', endColorstr='#FF5EA9F3', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #2f8fef; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #2f8fef; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #0d5cab; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #2f8fef;\n    background-image: linear-gradient(to right, #2f8fef 0%, #5ea9f3 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2F8FEF', endColorstr='#FF5EA9F3', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #2f8fef;\n    background-image: linear-gradient(to right, #2f8fef 0%, #5ea9f3 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2F8FEF', endColorstr='#FF5EA9F3', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #0d5cab; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #2f8fef; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #2f8fef; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #2f8fef; }\n  .sidebar .nav > li.active {\n    border-left-color: #2f8fef; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #2f8fef; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #2f8fef; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #2f8fef;\n      background-color: #2f8fef; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-b.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #37bc9b; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #37bc9b; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #206d5a; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #37bc9b;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #37bc9b;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #206d5a; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #37bc9b; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #37bc9b; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #37bc9b; }\n  .sidebar .nav > li.active {\n    border-left-color: #37bc9b; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #37bc9b; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #37bc9b; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #37bc9b;\n      background-color: #37bc9b; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-c.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #7266ba; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #7266ba; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #443a80; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #7266ba;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #7266ba;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #443a80; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #7266ba; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #7266ba; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #7266ba; }\n  .sidebar .nav > li.active {\n    border-left-color: #7266ba; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #7266ba; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #7266ba; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #7266ba;\n      background-color: #7266ba; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-d.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #f05050; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #f05050; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #c91111; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #f05050;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #f05050;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #c91111; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #f05050; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #f05050; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #f05050; }\n  .sidebar .nav > li.active {\n    border-left-color: #f05050; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #f05050; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #f05050; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #f05050;\n      background-color: #f05050; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-e.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #1176da 0%, #2f8fef 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1176DA', endColorstr='#FF2F8FEF', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #1176da; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #1176da; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #0a437c; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #1176da;\n    background-image: linear-gradient(to right, #1176da 0%, #2f8fef 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1176DA', endColorstr='#FF2F8FEF', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #1176da;\n    background-image: linear-gradient(to right, #1176da 0%, #2f8fef 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1176DA', endColorstr='#FF2F8FEF', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #0a437c; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #1176da; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #1176da; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #1176da; }\n  .sidebar .nav > li.active {\n    border-left-color: #1176da; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #1176da; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #1176da; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #1176da;\n      background-color: #1176da; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-f.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #2b957a; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #2b957a; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #144639; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #2b957a;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #2b957a;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #144639; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #2b957a; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #2b957a; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #2b957a; }\n  .sidebar .nav > li.active {\n    border-left-color: #2b957a; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #2b957a; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #2b957a; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #2b957a;\n      background-color: #2b957a; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-g.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #564aa3; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #564aa3; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #312a5d; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #564aa3;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #564aa3;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #312a5d; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #9289ca; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #9289ca; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #9289ca; }\n  .sidebar .nav > li.active {\n    border-left-color: #9289ca; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #9289ca; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #9289ca; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #9289ca;\n      background-color: #9289ca; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-h.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #ec2121; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #ec2121; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #9a0d0d; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #ec2121;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #ec2121;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #9a0d0d; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #f05050; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #f05050; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #f05050; }\n  .sidebar .nav > li.active {\n    border-left-color: #f05050; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #f05050; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #f05050; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #f05050;\n      background-color: #f05050; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/styles/themes/theme-i.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n/* ========================================================================\r\n   Component: layout\r\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #2f4046; }\n\n/* ========================================================================\r\n   Component: top-navbar\r\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #2f8fef 0%, #5ea9f3 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2F8FEF', endColorstr='#FF5EA9F3', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #2f8fef; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #2f8fef; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #0d5cab; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #2f8fef;\n    background-image: linear-gradient(to right, #2f8fef 0%, #5ea9f3 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2F8FEF', endColorstr='#FF5EA9F3', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #2f8fef;\n    background-image: linear-gradient(to right, #2f8fef 0%, #5ea9f3 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2F8FEF', endColorstr='#FF5EA9F3', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #0d5cab; } }\n\n/* ========================================================================\r\n   Component: sidebar\r\n ========================================================================== */\n.sidebar {\n  background-color: #2f4046; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #2f8fef; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #2d3d43;\n    color: #2f8fef; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #2f8fef; }\n  .sidebar .nav > li.active {\n    border-left-color: #2f8fef; }\n\n.sidebar-subnav {\n  background-color: #2f4046; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #2f8fef; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #2f8fef; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #2f8fef;\n      background-color: #2f8fef; }\n\n/* ========================================================================\r\n   Component: offsidebar\r\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/assets/img/loginBG.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loginBG.5a9adad6587422d20a82.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    messageHub: 'http://111.231.216.235:5000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_ts__ = __webpack_require__("../../../../../src/vendor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../../_@angular_platform-browser-dynamic@4.3.4@@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
p.then(function () { window.appBootstrap && window.appBootstrap(); });
// .catch(err => console.error(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/modernizr.js":
/***/ (function(module, exports) {

/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-cssanimations-csscalc-csstransforms-csstransforms3d-csstransitions-flexboxtweener-fontface-inlinesvg-localstorage-multiplebgs-preserve3d-sessionstorage-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-websqldatabase-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var tests = [];


  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Message of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };



  // Fake some of Object.create so we can force non test1 results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();



  var classes = [];


  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test1, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test1 that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test1, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test1, or make the parent test1 a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;


  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';


  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }

  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;
/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
/* DOC
Detects if you can use the shorthand method to define multiple parts of an
element's background-position simultaniously.

eg `background-position: right 10px bottom 10px`
*/

  Modernizr.addTest('bgpositionshorthand', function() {
    var elem = createElement('a');
    var eStyle = elem.style;
    var val = 'right 10px bottom 10px';
    eStyle.cssText = 'background-position: ' + val + ';';
    return (eStyle.backgroundPosition === val);
  });


  /**
   * If the browsers follow the spec, then they would expose vendor-specific style as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following, which would be technically incorrect:
   *   elem.style.webkitBorderRadius

   * Webkit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';


  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;



  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });



  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });



  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test1 the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test1
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test1 div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return getComputedStyle(node, null).position == 'absolute';
      });
    }
    return undefined;
  }
  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  // testProps is a generic CSS / DOM property test1.

  // In testing support for a given CSS property, it's legit to test1:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test1 and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    var elems = ['modernizr', 'tspan'];
    while (!mStyle.style) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test1 has been passed in, do a set-and-check test1.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;


  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test1; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test1 for
   * @param {object} obj - An object or Element you want to use to test1 the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test1 for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test1 the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test1 if value sticks when set
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;



  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test1 (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test1
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test1 if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;

/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "https://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
/* DOC
Detects the ability to control an element's background position using css
*/

  Modernizr.addTest('bgpositionxy', function() {
    return testAllProps('backgroundPositionX', '3px', true) && testAllProps('backgroundPositionY', '5px', true);
  });

/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "https://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
/* DOC
Detects the ability to use round and space as properties for background-repeat
*/

  // Must value-test1 these
  Modernizr.addTest('bgrepeatround', testAllProps('backgroundRepeat', 'round'));
  Modernizr.addTest('bgrepeatspace', testAllProps('backgroundRepeat', 'space'));

/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/

  // Must test1 value, as this specifically tests the `cover` value
  Modernizr.addTest('bgsizecover', testAllProps('backgroundSize', 'cover'));

/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/

  Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));

/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test1, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
/* DOC
Detects whether or not elements can be animated using CSS
*/

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));


  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test1 against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : []);

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;


/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
/* DOC
Method of allowing calculated values for length units. For example:

```css
//lem {
  width: calc(100% - 3em);
}
```
*/

  Modernizr.addTest('csscalc', function() {
    var prop = 'width:';
    var value = 'calc(10px);';
    var el = createElement('a');

    el.style.cssText = prop + prefixes.join(value + prop);

    return !!el.style.length;
  });

/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransforms', function() {
    // Android < 3.0 is buggy, so we sniff and blacklist
    // http://git.io/hHzL7w
    return navigator.userAgent.indexOf('Android 2.') === -1 &&
           testAllProps('transform', 'scale(1)', true);
  });


  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test1 the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test1 requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;

/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/

  var newSyntax = 'CSS' in window && 'supports' in window.CSS;
  var oldSyntax = 'supportsCSS' in window;
  Modernizr.addTest('supports', newSyntax || oldSyntax);

/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test1 on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/

  Modernizr.addTest('csstransforms3d', function() {
    var ret = !!testAllProps('perspective', '1px', true);
    var usePrefix = Modernizr._config.usePrefixes;

    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
    //   some conditions. As a result, Webkit typically recognizes the syntax but
    //   will sometimes throw a false positive, thus we must do a more thorough check:
    if (ret && (!usePrefix || 'webkitPerspective' in docElement.style)) {
      var mq;
      var defaultStyle = '#modernizr{width:0;height:0}';
      // Use CSS Conditional Rules if available
      if (Modernizr.supports) {
        mq = '@supports (perspective: 1px)';
      } else {
        // Otherwise, Webkit allows this media query to succeed only if the feature is enabled.
        // `@media (transform-3d),(-webkit-transform-3d){ ... }`
        mq = '@media (transform-3d)';
        if (usePrefix) {
          mq += ',(-webkit-transform-3d)';
        }
      }

      mq += '{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}';

      testStyles(defaultStyle + mq, function(elem) {
        ret = elem.offsetWidth === 7 && elem.offsetHeight === 18;
      });
    }

    return ret;
  });

/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["edmellum"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/762"
  }]
}
!*/
/* DOC
Detects support for `transform-style: preserve-3d`, for getting a proper 3D perspective on elements.
*/

  Modernizr.addTest('preserve3d', testAllProps('transformStyle', 'preserve-3d'));

/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));

/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/

  Modernizr.addTest('flexboxtweener', testAllProps('flexAlign', 'end', true));

/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/

  var blacklist = (function() {
    var ua = navigator.userAgent;
    var wkvers = ua.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1);
    var webos = ua.match(/w(eb)?osbrowser/gi);
    var wppre8 = ua.match(/windows phone/gi) && ua.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
    var oldandroid = wkvers < 533 && ua.match(/android/gi);
    return webos || oldandroid || wppre8;
  }());
  if (blacklist) {
    Modernizr.addTest('fontface', false);
  } else {
    testStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
      var style = document.getElementById('smodernizr');
      var sheet = style.sheet || style.styleSheet;
      var cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
      var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
      Modernizr.addTest('fontface', bool);
    });
  }
;
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
/* DOC
Detects support for SVG in `<embed>` or `<object>` elements.
*/

  Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);


  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  var hasOwnProp;

  (function() {
    var _hasOwnProperty = ({}).hasOwnProperty;
    /* istanbul ignore else */
    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function(object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function(object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }
  })();




   // _l tracks listeners for async tests, as well as tests that execute after the initial run
  ModernizrProto._l = {};

  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberof Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */

  ModernizrProto.on = function(feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    }

    // Push this test1 on to the listener list
    this._l[feature].push(cb);

    // If it's already been resolved, trigger it on next tick
    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function() {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };

  /**
   * _trigger is the private function used to signal test1 completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberof Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   */

  ModernizrProto._trigger = function(feature, res) {
    if (!this._l[feature]) {
      return;
    }

    var cbs = this._l[feature];

    // Force async
    setTimeout(function() {
      var i, cb;
      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0);

    // Don't trigger these again
    delete this._l[feature];
  };

  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)). Just like the offical detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberof Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|object} feature - The string name of the feature detect, or an
   * object of feature detect names and test1
   * @param {function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasJquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */

  function addTest(feature, test) {

    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[ key ]);
        }
      }
    } else {

      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]];

      // Again, we don't check for parent test1 existence. Get that right, though.
      if (featureNameSplit.length == 2) {
        last = last[featureNameSplit[1]];
      }

      if (typeof last != 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test1
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      // Set the value (this is the magic, right here).
      if (featureNameSplit.length == 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already
        /* jshint -W053 */
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }

        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      }

      // Set a single class (either `feature` or `no-feature`)
      /* jshint -W041 */
      setClasses([(!!test && test != false ? '' : 'no-') + featureNameSplit.join('-')]);
      /* jshint +W041 */

      // Trigger the event
      Modernizr._trigger(feature, test);
    }

    return Modernizr; // allow chaining.
  }

  // After all the tests are run, add self to the Modernizr prototype
  Modernizr._q.push(function() {
    ModernizrProto.addTest = addTest;
  });



/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/


  // Original Async test1 by Stu Cox
  // https://gist.github.com/chriscoyier/8774501

  // Now a Sync test1 based on good results here
  // http://codepen.io/chriscoyier/pen/bADFx

  // Note http://www.w3.org/TR/SVG11/feature#Image is *supposed* to represent
  // support for the `<image>` tag in SVG, not an SVG file linked from an `<img>`
  // tag in HTML – but it’s a heuristic which works
  Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));


  /**
   * Object.prototype.toString can be used with every object and allows you to
   * get its class easily. Abstracting it off of an object prevents situations
   * where the toString property has been overridden
   *
   * @access private
   * @function toStringFn
   * @returns {function} An abstracted toString function
   */

  var toStringFn = ({}).toString;

/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
/* DOC
Detects support for clip paths in SVG (only, not on HTML content).

See [this discussion](https://github.com/Modernizr/Modernizr/issues/213) regarding applying SVG clip paths to HTML content.
*/

  Modernizr.addTest('svgclippaths', function() {
    return !!document.createElementNS &&
      /SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));
  });

/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/

  // Should fail in Safari: https://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function() {
    var result = false;
    try {
      result = 'SVGFEColorMatrixElement' in window &&
        SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
    }
    catch (e) {}
    return result;
  });

/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
/* DOC
Detects support for foreignObject tag in SVG.
*/

  Modernizr.addTest('svgforeignobject', function() {
    return !!document.createElementNS &&
      /SVGForeignObject/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')));
  });

/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
/* DOC
Detects support for inline SVG in HTML (not within XHTML).
*/

  Modernizr.addTest('inlinesvg', function() {
    var div = createElement('div');
    div.innerHTML = '<svg/>';
    return (typeof SVGRect != 'undefined' && div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  });

/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/

  // SVG SMIL animation
  Modernizr.addTest('smil', function() {
    return !!document.createElementNS &&
      /SVGAnimate/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
  });

/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/

  // In FF4, if disabled, window.localStorage should === null.

  // Normally, we could not test1 that directly and need to do a
  //   `('localStorage' in window) && ` test1 first because otherwise Firefox will
  //   throw bugzil.la/365772 if cookies are disabled

  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
  // will throw the exception:
  //   QUOTA_EXCEEDED_ERROR DOM Exception 22.
  // Peculiarly, getItem and removeItem calls do not throw.

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files

  Modernizr.addTest('localstorage', function() {
    var mod = 'modernizr';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files
  Modernizr.addTest('sessionstorage', function() {
    var mod = 'modernizr';
    try {
      sessionStorage.setItem(mod, mod);
      sessionStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/

  // Chrome incognito mode used to throw an exception when using openDatabase
  // It doesn't anymore.
  Modernizr.addTest('websqldatabase', 'openDatabase' in window);

/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/

  // Setting multiple images AND a color on the background shorthand property
  // and then querying the style.background property value for the number of
  // occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

  Modernizr.addTest('multiplebgs', function() {
    var style = createElement('a').style;
    style.cssText = 'background:url(https://),url(https://),red url(https://)';

    // If the UA supports multiple backgrounds, there should be three occurrences
    // of the string "url(" in the return value for elemStyle.background
    return (/(url\s*\(.*?){3}/).test(style.background);
  });


  // Run each test1
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);


/***/ }),

/***/ "../../../../../src/vendor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js__ = __webpack_require__("../../../../../src/modernizr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modernizr_js__);
 // 'npm run modernizr' to create this file
//# sourceMappingURL=vendor.js.map

/***/ }),

/***/ "../../../../_moment@2.18.1@moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../_moment@2.18.1@moment/locale/af.js",
	"./af.js": "../../../../_moment@2.18.1@moment/locale/af.js",
	"./ar": "../../../../_moment@2.18.1@moment/locale/ar.js",
	"./ar-dz": "../../../../_moment@2.18.1@moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../_moment@2.18.1@moment/locale/ar-dz.js",
	"./ar-kw": "../../../../_moment@2.18.1@moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../_moment@2.18.1@moment/locale/ar-kw.js",
	"./ar-ly": "../../../../_moment@2.18.1@moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../_moment@2.18.1@moment/locale/ar-ly.js",
	"./ar-ma": "../../../../_moment@2.18.1@moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../_moment@2.18.1@moment/locale/ar-ma.js",
	"./ar-sa": "../../../../_moment@2.18.1@moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../_moment@2.18.1@moment/locale/ar-sa.js",
	"./ar-tn": "../../../../_moment@2.18.1@moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../_moment@2.18.1@moment/locale/ar-tn.js",
	"./ar.js": "../../../../_moment@2.18.1@moment/locale/ar.js",
	"./az": "../../../../_moment@2.18.1@moment/locale/az.js",
	"./az.js": "../../../../_moment@2.18.1@moment/locale/az.js",
	"./be": "../../../../_moment@2.18.1@moment/locale/be.js",
	"./be.js": "../../../../_moment@2.18.1@moment/locale/be.js",
	"./bg": "../../../../_moment@2.18.1@moment/locale/bg.js",
	"./bg.js": "../../../../_moment@2.18.1@moment/locale/bg.js",
	"./bn": "../../../../_moment@2.18.1@moment/locale/bn.js",
	"./bn.js": "../../../../_moment@2.18.1@moment/locale/bn.js",
	"./bo": "../../../../_moment@2.18.1@moment/locale/bo.js",
	"./bo.js": "../../../../_moment@2.18.1@moment/locale/bo.js",
	"./br": "../../../../_moment@2.18.1@moment/locale/br.js",
	"./br.js": "../../../../_moment@2.18.1@moment/locale/br.js",
	"./bs": "../../../../_moment@2.18.1@moment/locale/bs.js",
	"./bs.js": "../../../../_moment@2.18.1@moment/locale/bs.js",
	"./ca": "../../../../_moment@2.18.1@moment/locale/ca.js",
	"./ca.js": "../../../../_moment@2.18.1@moment/locale/ca.js",
	"./cs": "../../../../_moment@2.18.1@moment/locale/cs.js",
	"./cs.js": "../../../../_moment@2.18.1@moment/locale/cs.js",
	"./cv": "../../../../_moment@2.18.1@moment/locale/cv.js",
	"./cv.js": "../../../../_moment@2.18.1@moment/locale/cv.js",
	"./cy": "../../../../_moment@2.18.1@moment/locale/cy.js",
	"./cy.js": "../../../../_moment@2.18.1@moment/locale/cy.js",
	"./da": "../../../../_moment@2.18.1@moment/locale/da.js",
	"./da.js": "../../../../_moment@2.18.1@moment/locale/da.js",
	"./de": "../../../../_moment@2.18.1@moment/locale/de.js",
	"./de-at": "../../../../_moment@2.18.1@moment/locale/de-at.js",
	"./de-at.js": "../../../../_moment@2.18.1@moment/locale/de-at.js",
	"./de-ch": "../../../../_moment@2.18.1@moment/locale/de-ch.js",
	"./de-ch.js": "../../../../_moment@2.18.1@moment/locale/de-ch.js",
	"./de.js": "../../../../_moment@2.18.1@moment/locale/de.js",
	"./dv": "../../../../_moment@2.18.1@moment/locale/dv.js",
	"./dv.js": "../../../../_moment@2.18.1@moment/locale/dv.js",
	"./el": "../../../../_moment@2.18.1@moment/locale/el.js",
	"./el.js": "../../../../_moment@2.18.1@moment/locale/el.js",
	"./en-au": "../../../../_moment@2.18.1@moment/locale/en-au.js",
	"./en-au.js": "../../../../_moment@2.18.1@moment/locale/en-au.js",
	"./en-ca": "../../../../_moment@2.18.1@moment/locale/en-ca.js",
	"./en-ca.js": "../../../../_moment@2.18.1@moment/locale/en-ca.js",
	"./en-gb": "../../../../_moment@2.18.1@moment/locale/en-gb.js",
	"./en-gb.js": "../../../../_moment@2.18.1@moment/locale/en-gb.js",
	"./en-ie": "../../../../_moment@2.18.1@moment/locale/en-ie.js",
	"./en-ie.js": "../../../../_moment@2.18.1@moment/locale/en-ie.js",
	"./en-nz": "../../../../_moment@2.18.1@moment/locale/en-nz.js",
	"./en-nz.js": "../../../../_moment@2.18.1@moment/locale/en-nz.js",
	"./eo": "../../../../_moment@2.18.1@moment/locale/eo.js",
	"./eo.js": "../../../../_moment@2.18.1@moment/locale/eo.js",
	"./es": "../../../../_moment@2.18.1@moment/locale/es.js",
	"./es-do": "../../../../_moment@2.18.1@moment/locale/es-do.js",
	"./es-do.js": "../../../../_moment@2.18.1@moment/locale/es-do.js",
	"./es.js": "../../../../_moment@2.18.1@moment/locale/es.js",
	"./et": "../../../../_moment@2.18.1@moment/locale/et.js",
	"./et.js": "../../../../_moment@2.18.1@moment/locale/et.js",
	"./eu": "../../../../_moment@2.18.1@moment/locale/eu.js",
	"./eu.js": "../../../../_moment@2.18.1@moment/locale/eu.js",
	"./fa": "../../../../_moment@2.18.1@moment/locale/fa.js",
	"./fa.js": "../../../../_moment@2.18.1@moment/locale/fa.js",
	"./fi": "../../../../_moment@2.18.1@moment/locale/fi.js",
	"./fi.js": "../../../../_moment@2.18.1@moment/locale/fi.js",
	"./fo": "../../../../_moment@2.18.1@moment/locale/fo.js",
	"./fo.js": "../../../../_moment@2.18.1@moment/locale/fo.js",
	"./fr": "../../../../_moment@2.18.1@moment/locale/fr.js",
	"./fr-ca": "../../../../_moment@2.18.1@moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../_moment@2.18.1@moment/locale/fr-ca.js",
	"./fr-ch": "../../../../_moment@2.18.1@moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../_moment@2.18.1@moment/locale/fr-ch.js",
	"./fr.js": "../../../../_moment@2.18.1@moment/locale/fr.js",
	"./fy": "../../../../_moment@2.18.1@moment/locale/fy.js",
	"./fy.js": "../../../../_moment@2.18.1@moment/locale/fy.js",
	"./gd": "../../../../_moment@2.18.1@moment/locale/gd.js",
	"./gd.js": "../../../../_moment@2.18.1@moment/locale/gd.js",
	"./gl": "../../../../_moment@2.18.1@moment/locale/gl.js",
	"./gl.js": "../../../../_moment@2.18.1@moment/locale/gl.js",
	"./gom-latn": "../../../../_moment@2.18.1@moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../_moment@2.18.1@moment/locale/gom-latn.js",
	"./he": "../../../../_moment@2.18.1@moment/locale/he.js",
	"./he.js": "../../../../_moment@2.18.1@moment/locale/he.js",
	"./hi": "../../../../_moment@2.18.1@moment/locale/hi.js",
	"./hi.js": "../../../../_moment@2.18.1@moment/locale/hi.js",
	"./hr": "../../../../_moment@2.18.1@moment/locale/hr.js",
	"./hr.js": "../../../../_moment@2.18.1@moment/locale/hr.js",
	"./hu": "../../../../_moment@2.18.1@moment/locale/hu.js",
	"./hu.js": "../../../../_moment@2.18.1@moment/locale/hu.js",
	"./hy-am": "../../../../_moment@2.18.1@moment/locale/hy-am.js",
	"./hy-am.js": "../../../../_moment@2.18.1@moment/locale/hy-am.js",
	"./id": "../../../../_moment@2.18.1@moment/locale/id.js",
	"./id.js": "../../../../_moment@2.18.1@moment/locale/id.js",
	"./is": "../../../../_moment@2.18.1@moment/locale/is.js",
	"./is.js": "../../../../_moment@2.18.1@moment/locale/is.js",
	"./it": "../../../../_moment@2.18.1@moment/locale/it.js",
	"./it.js": "../../../../_moment@2.18.1@moment/locale/it.js",
	"./ja": "../../../../_moment@2.18.1@moment/locale/ja.js",
	"./ja.js": "../../../../_moment@2.18.1@moment/locale/ja.js",
	"./jv": "../../../../_moment@2.18.1@moment/locale/jv.js",
	"./jv.js": "../../../../_moment@2.18.1@moment/locale/jv.js",
	"./ka": "../../../../_moment@2.18.1@moment/locale/ka.js",
	"./ka.js": "../../../../_moment@2.18.1@moment/locale/ka.js",
	"./kk": "../../../../_moment@2.18.1@moment/locale/kk.js",
	"./kk.js": "../../../../_moment@2.18.1@moment/locale/kk.js",
	"./km": "../../../../_moment@2.18.1@moment/locale/km.js",
	"./km.js": "../../../../_moment@2.18.1@moment/locale/km.js",
	"./kn": "../../../../_moment@2.18.1@moment/locale/kn.js",
	"./kn.js": "../../../../_moment@2.18.1@moment/locale/kn.js",
	"./ko": "../../../../_moment@2.18.1@moment/locale/ko.js",
	"./ko.js": "../../../../_moment@2.18.1@moment/locale/ko.js",
	"./ky": "../../../../_moment@2.18.1@moment/locale/ky.js",
	"./ky.js": "../../../../_moment@2.18.1@moment/locale/ky.js",
	"./lb": "../../../../_moment@2.18.1@moment/locale/lb.js",
	"./lb.js": "../../../../_moment@2.18.1@moment/locale/lb.js",
	"./lo": "../../../../_moment@2.18.1@moment/locale/lo.js",
	"./lo.js": "../../../../_moment@2.18.1@moment/locale/lo.js",
	"./lt": "../../../../_moment@2.18.1@moment/locale/lt.js",
	"./lt.js": "../../../../_moment@2.18.1@moment/locale/lt.js",
	"./lv": "../../../../_moment@2.18.1@moment/locale/lv.js",
	"./lv.js": "../../../../_moment@2.18.1@moment/locale/lv.js",
	"./me": "../../../../_moment@2.18.1@moment/locale/me.js",
	"./me.js": "../../../../_moment@2.18.1@moment/locale/me.js",
	"./mi": "../../../../_moment@2.18.1@moment/locale/mi.js",
	"./mi.js": "../../../../_moment@2.18.1@moment/locale/mi.js",
	"./mk": "../../../../_moment@2.18.1@moment/locale/mk.js",
	"./mk.js": "../../../../_moment@2.18.1@moment/locale/mk.js",
	"./ml": "../../../../_moment@2.18.1@moment/locale/ml.js",
	"./ml.js": "../../../../_moment@2.18.1@moment/locale/ml.js",
	"./mr": "../../../../_moment@2.18.1@moment/locale/mr.js",
	"./mr.js": "../../../../_moment@2.18.1@moment/locale/mr.js",
	"./ms": "../../../../_moment@2.18.1@moment/locale/ms.js",
	"./ms-my": "../../../../_moment@2.18.1@moment/locale/ms-my.js",
	"./ms-my.js": "../../../../_moment@2.18.1@moment/locale/ms-my.js",
	"./ms.js": "../../../../_moment@2.18.1@moment/locale/ms.js",
	"./my": "../../../../_moment@2.18.1@moment/locale/my.js",
	"./my.js": "../../../../_moment@2.18.1@moment/locale/my.js",
	"./nb": "../../../../_moment@2.18.1@moment/locale/nb.js",
	"./nb.js": "../../../../_moment@2.18.1@moment/locale/nb.js",
	"./ne": "../../../../_moment@2.18.1@moment/locale/ne.js",
	"./ne.js": "../../../../_moment@2.18.1@moment/locale/ne.js",
	"./nl": "../../../../_moment@2.18.1@moment/locale/nl.js",
	"./nl-be": "../../../../_moment@2.18.1@moment/locale/nl-be.js",
	"./nl-be.js": "../../../../_moment@2.18.1@moment/locale/nl-be.js",
	"./nl.js": "../../../../_moment@2.18.1@moment/locale/nl.js",
	"./nn": "../../../../_moment@2.18.1@moment/locale/nn.js",
	"./nn.js": "../../../../_moment@2.18.1@moment/locale/nn.js",
	"./pa-in": "../../../../_moment@2.18.1@moment/locale/pa-in.js",
	"./pa-in.js": "../../../../_moment@2.18.1@moment/locale/pa-in.js",
	"./pl": "../../../../_moment@2.18.1@moment/locale/pl.js",
	"./pl.js": "../../../../_moment@2.18.1@moment/locale/pl.js",
	"./pt": "../../../../_moment@2.18.1@moment/locale/pt.js",
	"./pt-br": "../../../../_moment@2.18.1@moment/locale/pt-br.js",
	"./pt-br.js": "../../../../_moment@2.18.1@moment/locale/pt-br.js",
	"./pt.js": "../../../../_moment@2.18.1@moment/locale/pt.js",
	"./ro": "../../../../_moment@2.18.1@moment/locale/ro.js",
	"./ro.js": "../../../../_moment@2.18.1@moment/locale/ro.js",
	"./ru": "../../../../_moment@2.18.1@moment/locale/ru.js",
	"./ru.js": "../../../../_moment@2.18.1@moment/locale/ru.js",
	"./sd": "../../../../_moment@2.18.1@moment/locale/sd.js",
	"./sd.js": "../../../../_moment@2.18.1@moment/locale/sd.js",
	"./se": "../../../../_moment@2.18.1@moment/locale/se.js",
	"./se.js": "../../../../_moment@2.18.1@moment/locale/se.js",
	"./si": "../../../../_moment@2.18.1@moment/locale/si.js",
	"./si.js": "../../../../_moment@2.18.1@moment/locale/si.js",
	"./sk": "../../../../_moment@2.18.1@moment/locale/sk.js",
	"./sk.js": "../../../../_moment@2.18.1@moment/locale/sk.js",
	"./sl": "../../../../_moment@2.18.1@moment/locale/sl.js",
	"./sl.js": "../../../../_moment@2.18.1@moment/locale/sl.js",
	"./sq": "../../../../_moment@2.18.1@moment/locale/sq.js",
	"./sq.js": "../../../../_moment@2.18.1@moment/locale/sq.js",
	"./sr": "../../../../_moment@2.18.1@moment/locale/sr.js",
	"./sr-cyrl": "../../../../_moment@2.18.1@moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../_moment@2.18.1@moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../_moment@2.18.1@moment/locale/sr.js",
	"./ss": "../../../../_moment@2.18.1@moment/locale/ss.js",
	"./ss.js": "../../../../_moment@2.18.1@moment/locale/ss.js",
	"./sv": "../../../../_moment@2.18.1@moment/locale/sv.js",
	"./sv.js": "../../../../_moment@2.18.1@moment/locale/sv.js",
	"./sw": "../../../../_moment@2.18.1@moment/locale/sw.js",
	"./sw.js": "../../../../_moment@2.18.1@moment/locale/sw.js",
	"./ta": "../../../../_moment@2.18.1@moment/locale/ta.js",
	"./ta.js": "../../../../_moment@2.18.1@moment/locale/ta.js",
	"./te": "../../../../_moment@2.18.1@moment/locale/te.js",
	"./te.js": "../../../../_moment@2.18.1@moment/locale/te.js",
	"./tet": "../../../../_moment@2.18.1@moment/locale/tet.js",
	"./tet.js": "../../../../_moment@2.18.1@moment/locale/tet.js",
	"./th": "../../../../_moment@2.18.1@moment/locale/th.js",
	"./th.js": "../../../../_moment@2.18.1@moment/locale/th.js",
	"./tl-ph": "../../../../_moment@2.18.1@moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../_moment@2.18.1@moment/locale/tl-ph.js",
	"./tlh": "../../../../_moment@2.18.1@moment/locale/tlh.js",
	"./tlh.js": "../../../../_moment@2.18.1@moment/locale/tlh.js",
	"./tr": "../../../../_moment@2.18.1@moment/locale/tr.js",
	"./tr.js": "../../../../_moment@2.18.1@moment/locale/tr.js",
	"./tzl": "../../../../_moment@2.18.1@moment/locale/tzl.js",
	"./tzl.js": "../../../../_moment@2.18.1@moment/locale/tzl.js",
	"./tzm": "../../../../_moment@2.18.1@moment/locale/tzm.js",
	"./tzm-latn": "../../../../_moment@2.18.1@moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../_moment@2.18.1@moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../_moment@2.18.1@moment/locale/tzm.js",
	"./uk": "../../../../_moment@2.18.1@moment/locale/uk.js",
	"./uk.js": "../../../../_moment@2.18.1@moment/locale/uk.js",
	"./ur": "../../../../_moment@2.18.1@moment/locale/ur.js",
	"./ur.js": "../../../../_moment@2.18.1@moment/locale/ur.js",
	"./uz": "../../../../_moment@2.18.1@moment/locale/uz.js",
	"./uz-latn": "../../../../_moment@2.18.1@moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../_moment@2.18.1@moment/locale/uz-latn.js",
	"./uz.js": "../../../../_moment@2.18.1@moment/locale/uz.js",
	"./vi": "../../../../_moment@2.18.1@moment/locale/vi.js",
	"./vi.js": "../../../../_moment@2.18.1@moment/locale/vi.js",
	"./x-pseudo": "../../../../_moment@2.18.1@moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../_moment@2.18.1@moment/locale/x-pseudo.js",
	"./yo": "../../../../_moment@2.18.1@moment/locale/yo.js",
	"./yo.js": "../../../../_moment@2.18.1@moment/locale/yo.js",
	"./zh-cn": "../../../../_moment@2.18.1@moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../_moment@2.18.1@moment/locale/zh-cn.js",
	"./zh-hk": "../../../../_moment@2.18.1@moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../_moment@2.18.1@moment/locale/zh-hk.js",
	"./zh-tw": "../../../../_moment@2.18.1@moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../_moment@2.18.1@moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../_moment@2.18.1@moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map