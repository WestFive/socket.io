webpackJsonp([1],{

/***/ "../../../../../src/app/routes/MessageHub2/message2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-2\">\r\n  <!-- START panel-->\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <strong>池列表</strong>\r\n      <button class=\"btn btn-danger btn-outline btn-xs pull-right\" (click)=\"ClearPools()\"><em class=\"fa fa-trash-o\"></em></button>\r\n      <button class=\"btn btn-primary btn-outline btn-xs pull-right mr-sm\" (click)=\"classicModal.show();createOrUpdate = true\"><em class=\"fa fa-plus-square-o\"></em></button>\r\n      <div class=\"modal fade\" bsModal #classicModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" >\r\n        <div class=\"modal-dialog modal-sm\">\r\n          <div class=\"modal-content\" style=\"position: absolute;top:100px\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"classicModal.hide()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <h4 class=\"modal-title\">创建池</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"form-group\">\r\n              <div style=\"display: inline-block;width: 30%\">池名称:</div><input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"池名称\" [(ngModel)]=\"poolName\" name=\"poolName\" style=\"display: inline-block;width: 70%\"/>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div style=\"display: inline-block;width: 30%\">池类型:</div>\r\n                <label class=\"switch switch-lg\">\r\n                <input type=\"checkbox\" checked=\"checked\" [(ngModel)]=\"poolMode\"/>\r\n                <span></span>\r\n              </label>\r\n                <span style=\"line-height: 50px\">{{poolMode | poolPipe}}</span>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div style=\"display: inline-block;width: 30%\">池队列排序:</div><input class=\"form-control\" id=\"sort\" type=\"text\" placeholder=\"池队列排序\" [(ngModel)]=\"queuesSortColumn\" name=\"queuesSortColumn\" style=\"display: inline-block;width: 70%\"/>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <div style=\"display: inline-block;width: 30%\">重复池覆盖:</div>\r\n                <label class=\"switch switch-lg\">\r\n                  <input type=\"checkbox\" checked=\"checked\" [(ngModel)]=\"forceOverwrite\"/>\r\n                  <span></span>\r\n                </label>\r\n                <span style=\"line-height: 50px\">{{forceOverwrite | writePipe}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"classicModal.hide()\">关闭</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"CreatePool();classicModal.hide()\">创建池</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"panel-body bt\" style=\"padding: 0\">\r\n      <div class=\"list-group\">\r\n        <a *ngFor=\"let item of node;let i = index\" class=\"list-group-item\" (click)=\"settingActive=i;ListenQueues(item.poolName, i)\" [ngClass]=\"{'active': (settingActive == i)}\"  style=\"border-radius: 0\">\r\n          <span><em class=\"fa fa-folder-open fa-xs\" [ngClass]=\"{'text-success':(item.poolMode==='public'),'text-danger':(item.poolMode==='private')}\" ></em><span>&nbsp;&nbsp;{{item.poolName}}</span></span>\r\n          <div class=\"pull-right\">\r\n            <span class=\"label bg-gray\">{{item.queues.length}}</span>\r\n            <span class=\"label bg-gray\"><em class=\"fa fa-cog\"></em></span>&nbsp;\r\n          </div>\r\n          <div class=\"mt\">\r\n            <span><em class=\"fa fa-user\"></em><span>&nbsp;&nbsp;{{item.creator}}</span></span>\r\n            <div class=\"pull-right\">\r\n              <em class=\"fa fa-clock-o\"></em>&nbsp;<span>{{item.createTime | date: 'yyyy-MM-dd'}}</span>&nbsp;\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- END panel-->\r\n  </div>\r\n\r\n  <div class=\"col-md-10\">\r\n    <!-- START panel-->\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n        <strong>池队列</strong>\r\n        <div class=\"pull-right\">\r\n        <button class=\"btn btn-primary btn-outline btn-xs\" (click)=\"showCollapse()\"><em class=\"fa fa-expand\"></em></button>\r\n        <button class=\"btn btn-primary btn-outline btn-xs\" (click)=\"hideCollapse()\"><em class=\"fa fa-compress\"></em></button>\r\n        <button class=\"btn btn-primary btn-outline btn-xs\" (click)=\"createPool.show();showPool()\"><em class=\"fa fa-plus-square-o\"></em></button>\r\n          <div class=\"modal fade\" bsModal #createPool=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\" >\r\n            <div class=\"modal-dialog modal-sm\">\r\n              <div class=\"modal-content\" style=\"position: absolute;top:100px\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"createPool.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                  <h4 class=\"modal-title\">创建队列</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div class=\"form-group\">\r\n                    <div style=\"display: inline-block;width: 30%\">(键)key:</div><input class=\"form-control\" id=\"key\" type=\"text\" placeholder=\"键\" [(ngModel)]=\"key\" name=\"key\" style=\"display: inline-block;width: 70%\"/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div style=\"display: inline-block;width: 30%\">(值)value:</div><input class=\"form-control\" id=\"value\" type=\"text\" placeholder=\"value\" [(ngModel)]=\"value\" name=\"value\" style=\"display: inline-block;width: 70%\"/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div style=\"display: inline-block;width: 30%\">创建时间:</div><input class=\"form-control\" id=\"createTime\" type=\"text\" placeholder=\"createTime\" [(ngModel)]=\"createTime\" name=\"createTime\" style=\"display: inline-block;width: 70%\" disabled/>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div style=\"display: inline-block;width: 30%\">更新时间:</div><input class=\"form-control\" id=\"updateTime\" type=\"text\" placeholder=\"updateTime\" [(ngModel)]=\"updateTime\" name=\"updateTime\" style=\"display: inline-block;width: 70%\" disabled/>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-default\" (click)=\"createPool.hide()\">关闭</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"AddQueue();createPool.hide()\">创建队列</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <button class=\"btn btn-danger btn-outline btn-xs\" (click)=\"FlushPool()\"><em class=\"fa fa-trash-o\"></em></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-body bt\">\r\n        <!--<div *ngFor=\"let item of node;let i = index\">-->\r\n          <!--<div *ngIf=\"settingActive == i\">-->\r\n            <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"8\" style=\"table-layout:fixed;\">\r\n              <thead>\r\n              <tr>\r\n                <th width=\"123\"></th>\r\n                <th>键(Key)</th>\r\n                <th style=\"width: 20%\">值(Value)</th>\r\n                <th>更新时间(UpdateTime)</th>\r\n                <th>创建时间(CreateTime)</th>\r\n                <th></th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <ng-container *ngFor=\"let item of QueuesData;let x = index\">\r\n              <tr>\r\n                <td><a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n                       href=\"{{'#collapseOne'+ x}}\"><em id=\"{{'icon'+x}}\" class=\"fa fa-chevron-right\"  (click)=\"changeIcon($event, x)\" style=\"color: #6D8A88\"></em></a></td>\r\n                <td>{{item.key}}</td>\r\n                <td style=\"text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">{{item.value}}</td>\r\n                <td>{{item.updateTime| date: 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                <td>{{item.createTime| date: 'yyyy-MM-dd HH:mm:ss'}}</td>\r\n                <td>\r\n                  <button class=\"btn btn-warning btn-outline btn-xs\" (click)=\"createPool.hide();EditorQueue(item)\"><em class=\"fa fa-pencil-square-o\"></em></button>\r\n                  <button class=\"btn btn-danger btn-outline btn-xs\" (click)=\"DeleteQueue(item.key)\"><em class=\"fa fa-trash-o\"></em></button>\r\n                </td>\r\n              </tr>\r\n              <tr id=\"{{'collapseOne'+ x}}\" class=\"panel-collapse collapse\">\r\n                <td colspan=\"6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-1 text-center\">\r\n                      <strong>值(Value)</strong>\r\n                    </div>\r\n                    <div class=\"col-md-11\"><p class=\"pt-md\" style=\"word-wrap:break-word; width:100%;\">{{item.value}}</p></div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n    <!-- END panel-->\r\n  </div>\r\n  <toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/MessageHub2/message2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../_css-loader@0.28.7@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-align {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/MessageHub2/message2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../../_@angular_common@4.3.4@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../../_@angular_http@4.3.4@@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_messagehub2_service__ = __webpack_require__("../../../../../src/app/service/messagehub2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__ = __webpack_require__("../../../../_angular2-toaster@3.0.1@angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Message2Component = (function () {
    function Message2Component(toasterService, routeData, ref, http, messagehubService, datePipe) {
        this.toasterService = toasterService;
        this.routeData = routeData;
        this.http = http;
        this.messagehubService = messagehubService;
        this.datePipe = datePipe;
        this.toasterconfig = new __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["a" /* ToasterConfig */]({
            positionClass: 'toast-bottom-right',
            showCloseButton: true
        });
        this.indexPool = -1;
        this.icons = true;
        this.logArray = [];
    }
    Message2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.messagehubService.connenctionMessageHub('http://10.1.1.117:5000', window.sessionStorage.getItem('username'));
        this.messagehubService.connectionOn('serverResponse').subscribe(function (data) {
            if (data.code === 200) {
                _this.toasterService.pop('success', data.title, data.message);
            }
            else {
                _this.toasterService.pop('error', data.title, data.message);
            }
            _this.messagehubService.connectionEmit('listenPools');
        });
        this.messagehubService.connectionOn('listenPools').subscribe(function (data) {
            console.log(data);
            _this.node = data;
            if (_this.node.length > 0) {
                if (_this.indexPool < 0 && _this.indexPool > _this.node.length) {
                    _this.indexPool = 0;
                }
                if (_this.node[_this.indexPool]) {
                    _this.QueuesData = _this.node[_this.indexPool].queues;
                }
            }
            else {
                _this.QueuesData = '';
            }
        });
    };
    ;
    Message2Component.prototype.showPool = function (data) {
        if (!data) {
            this.key = '';
            this.value = '';
            this.createTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
            this.updateTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        }
        else {
            this.key = data.key;
            this.value = data.value;
            this.createTime = data.createTime;
            this.updateTime = data.updateTime;
        }
    };
    Message2Component.prototype.CreatePool = function () {
        this.messagehubService.connectionEmit('createPool', {
            'poolName': this.poolName,
            'poolMode': this.poolMode ? 'public' : 'private',
            'queueSortColumn': this.queuesSortColumn,
            'forceOverWrite': this.forceOverwrite
        });
    };
    Message2Component.prototype.ListenQueues = function (PoolName, index) {
        console.log(PoolName);
        this.savePoolName = PoolName;
        this.indexPool = index;
        this.messagehubService.connectionEmit('pullPool', PoolName);
    };
    Message2Component.prototype.FlushPool = function () {
        this.messagehubService.connectionEmit('flushPool', this.savePoolName);
    };
    Message2Component.prototype.AddQueue = function () {
        console.log(this.key);
        console.log(this.value);
        console.log(this.createTime);
        console.log(this.updateTime);
        if (this.createOrUpdate) {
            this.messagehubService.connectionEmit('addQueue', {
                'poolName': this.savePoolName,
                'queue': {
                    'key': this.key,
                    'value': this.value,
                    'createTime': this.createTime,
                    'updateTime': this.updateTime
                }
            });
        }
        else {
            this.messagehubService.connectionEmit('updateQueue', {
                'poolName': this.savePoolName,
                'queue': {
                    'key': this.key,
                    'value': this.value,
                    'createTime': this.createTime,
                    'updateTime': this.updateTime
                }
            });
        }
    };
    Message2Component.prototype.DeleteQueue = function (key) {
        this.messagehubService.connectionEmit('deleteQueue', {
            'poolName': this.savePoolName,
            'queueKey': key
        });
    };
    Message2Component.prototype.EditorQueue = function (data) {
        this.key = data.key;
        this.value = data.value;
    };
    Message2Component.prototype.ClearPools = function () {
        this.messagehubService.connectionEmit('clearPools');
    };
    // console.log(111);
    // this.messagehubService.connectionOn('createPool').subscribe(data => {
    //   console.log(data);
    // });
    // setInterval(() => {
    //   const poolname = 'name' + Math.random() * 10;
    //   console.log(poolname);
    //   this.messagehubService.connectionEmit('createPool', {
    //     'poolName': poolname,
    //     'poolMode': 'public',
    //     'queueSortColumn': 'updateTime',
    //     'forceOverWrite': false
    //   });
    // }, 2000);
    // this.connection.invoke('ListenQueues', 'pool1');
    //
    // public PullPool(): void {
    //   this.messagehubService.connectionInvoke('PullPool', 'firstpool');
    //   // this.connection.on('PullPool', (message) => {
    //   //   console.log(JSON.parse(message));
    //   // });
    // }
    //
    // public FlushPool(): void {
    //   this.messagehubService.connectionInvoke('CreatePool', 'ceshi9', 1, 'key', true);
    //   // this.connection.on('FlushPool', (message) => {
    //   //   console.log(JSON.parse(message));
    //   // });
    // }
    //
    // public DestoryPool(): void {
    //   this.messagehubService.connectionInvoke('DestoryPool', this.savePoolName);
    //   this.messagehubService.connectionOn('DestoryPool').subscribe(message => {
    //     console.log(JSON.parse(message));
    //   });
    // }
    //
    // public GetLog(): void {
    //   this.connection.invoke('GetLog', '20171109');
    //   this.connection.on('GetLog', (message) => {
    //     this.http.get(this.messageHub + message).map(response => response.text()).subscribe((data) => {
    //       const isdata = data.split('-----End-----');
    //       isdata.pop();
    //       isdata.forEach((item) => {
    //         const isArray = item.split('-----');
    //         isArray.shift();
    //         if (isArray[1]) {
    //           isArray[1] = this.change(isArray[1], ':');
    //         }
    //         this.logArray.push(isArray);
    //       });
    //       console.log(this.logArray);
    //     });
    //   });
    // }
    //
    // public change(arry, char): any {
    //   const arr = new Array();
    //   arr[0] = arry.substring(0, arry.indexOf(char));
    //   arr[1] = arry.substring(arry.indexOf(char) + 1);
    //   return arr;
    // }
    //
    Message2Component.prototype.changeIcon = function (event, x) {
        if (event.target.className === 'fa fa-chevron-right') {
            $('#collapseOne' + x).show();
            $('#' + event.target.id).attr('class', 'fa fa-chevron-down');
        }
        else {
            $('#collapseOne' + x).hide();
            $('#' + event.target.id).attr('class', 'fa fa-chevron-right');
        }
    };
    Message2Component.prototype.showCollapse = function () {
        var length = this.QueuesData.Queues.length;
        for (var i = 0; i < length; i++) {
            $('#collapseOne' + i).show();
            $('#icon' + i).attr('class', 'fa fa-chevron-down');
        }
    };
    Message2Component.prototype.hideCollapse = function () {
        var length = this.QueuesData.Queues.length;
        for (var i = 0; i < length; i++) {
            $('#collapseOne' + i).hide();
            $('#icon' + i).attr('class', 'fa fa-chevron-right');
        }
    };
    return Message2Component;
}());
Message2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message2',
        template: __webpack_require__("../../../../../src/app/routes/MessageHub2/message2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/routes/MessageHub2/message2.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["b" /* ToasterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_messagehub2_service__["a" /* MessagehubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_messagehub2_service__["a" /* MessagehubService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]) === "function" && _f || Object])
], Message2Component);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=message2.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/MessageHub2/message2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.3.4@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.3.4@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message2_component__ = __webpack_require__("../../../../../src/app/routes/MessageHub2/message2.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message2Module", function() { return Message2Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__message2_component__["a" /* Message2Component */] },
];
var Message2Module = (function () {
    function Message2Module() {
    }
    return Message2Module;
}());
Message2Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__message2_component__["a" /* Message2Component */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], Message2Module);

//# sourceMappingURL=message2.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map