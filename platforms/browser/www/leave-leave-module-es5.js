function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-leave-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/leave/leave-summary/leave-summary.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/leave/leave-summary/leave-summary.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderLeaveLeaveSummaryLeaveSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\" *ngIf=\"enableRequest == false\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          \n          <ion-button class=\"btnHome\" *ngIf=\"enableRequest == true\" (click)=\"goBack()\">\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\n          </ion-button>\n      </ion-buttons>\n    <ion-title *ngIf=\"enableRequest == false\">Leaves</ion-title>\n    <ion-title *ngIf=\"enableRequest == true\">Request Leave</ion-title>\n\n    <ion-buttons class=\"req\" slot=\"end\" (click)=\"leaveRequest()\">\n      REQUEST\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"enableRequest == false\">\n    <ion-row>\n      <ion-col size=\"4\">\n          <ion-item>\n              <ion-label position=\"floating\">Start Date</ion-label>\n              <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"firstDay\"  value=\"firstDay\" name=\"firstDate\" ngDefaultControl></ion-datetime>\n          </ion-item>         \n      </ion-col>\n      <ion-col size=\"4\">\n          <ion-item>\n              <ion-label position=\"floating\">End Date</ion-label>\n              <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"lastDay\"  value=\"lastDay\" name=\"lastDay\"  ngDefaultControl></ion-datetime>\n          </ion-item>          \n      </ion-col>\n      <ion-col size=\"4\">\n      <ion-button type=\"button\" class=\"gene\" color=\"#00aaa0\" (click)=\"getLeaves()\">GENERATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    <ion-list *ngIf=\"enableRequest == false\">\n\n        <ion-item *ngFor=\"let l of leaveList | slice:0:slice\">\n          <ion-label> \n            <h5>{{l.reason}}</h5>\n            <h6>{{l.fromdate | date }} - {{l.todate | date }}</h6>\n          </ion-label>\n          <h6  [ngStyle]=\"{'color': (l.status == 0 ) ? '#eb445a' : ''}\" *ngIf=\"l.status == 0\"> Rejected</h6>\n          <h6 [ngStyle]=\"{'color': (l.status == 1 ) ? '#50c8ff' : ''}\" *ngIf=\"l.status == 1\">Active</h6>\n          <h6 [ngStyle]=\"{'color': (l.status == 2 ) ? '#28ba62' : ''}\" *ngIf=\"l.status == 2\">Approved</h6>\n\n        </ion-item>\n\n      </ion-list>\n\n  <div class=\"top\" *ngIf=\"enableRequest == true\">\n      <ion-item>\n        <ion-label>Start Date</ion-label>\n        <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"startDate\" name=\"title\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>End Date</ion-label>\n        <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"endDate\" name=\"title\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Reason</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"reason\" name=\"title\"></ion-input>\n      </ion-item>\n\n      <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"generate()\">GENERATE</ion-button>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data…\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/folder/leave/leave-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/folder/leave/leave-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: LeaveRoutingModule */

  /***/
  function srcAppFolderLeaveLeaveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveRoutingModule", function () {
      return LeaveRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./leave-summary/leave-summary.component */
    "./src/app/folder/leave/leave-summary/leave-summary.component.ts");

    var routes = [{
      path: 'lea',
      component: _leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_3__["LeaveSummaryComponent"]
    }];

    var LeaveRoutingModule = function LeaveRoutingModule() {
      _classCallCheck(this, LeaveRoutingModule);
    };

    LeaveRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LeaveRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/leave/leave-summary/leave-summary.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/folder/leave/leave-summary/leave-summary.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderLeaveLeaveSummaryLeaveSummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".req {\n  color: white;\n}\n\n.gen {\n  color: black;\n  background: #ddd;\n  text-align: center;\n  margin: 20% 30%;\n}\n\n.gene {\n  color: black;\n  background: #ddd;\n  font-size: small !important;\n}\n\n.top {\n  padding: 4% 1%;\n}\n\n.btnHome {\n  color: white;\n}\n\nion-datetime {\n  font-size: small !important;\n}\n\nion-button {\n  font-size: small !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2xlYXZlL2xlYXZlLXN1bW1hcnkvRTpcXENFUFxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcbGVhdmVcXGxlYXZlLXN1bW1hcnlcXGxlYXZlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9sZWF2ZS9sZWF2ZS1zdW1tYXJ5L2xlYXZlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7RUFDRSwyQkFBQTtBQ0tGOztBREhBO0VBQ0EsMkJBQUE7QUNNQSIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9sZWF2ZS9sZWF2ZS1zdW1tYXJ5L2xlYXZlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmdlbntcclxuICBjb2xvcjpibGFjaztcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwJSAzMCU7XHJcbn1cclxuLmdlbmV7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7ICAgXHJcbn1cclxuLnRvcHtcclxuICBwYWRkaW5nOiA0JSAxJTtcclxufVxyXG4uYnRuSG9tZXtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG5pb24tZGF0ZXRpbWV7XHJcbiAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG5mb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7ICAgXHJcbn0iLCIucmVxIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZ2VuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjAlIDMwJTtcbn1cblxuLmdlbmUge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcbn1cblxuLnRvcCB7XG4gIHBhZGRpbmc6IDQlIDElO1xufVxuXG4uYnRuSG9tZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/folder/leave/leave-summary/leave-summary.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/folder/leave/leave-summary/leave-summary.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LeaveSummaryComponent */

  /***/
  function srcAppFolderLeaveLeaveSummaryLeaveSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveSummaryComponent", function () {
      return LeaveSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../leave.service */
    "./src/app/folder/leave/leave.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var LeaveSummaryComponent = /*#__PURE__*/function () {
      function LeaveSummaryComponent(sqlite, leavSer) {
        _classCallCheck(this, LeaveSummaryComponent);

        this.sqlite = sqlite;
        this.leavSer = leavSer;
        this.enableRequest = false;
        this.slice = 15;
      }

      _createClass(LeaveSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var date = new Date();
          this.firstDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD');
          this.lastDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD');
          this.getLeaves();
        }
      }, {
        key: "getLeaves",
        value: function getLeaves() {
          var _this = this;

          this.empId = window.localStorage.getItem('empId');
          var firstDay = moment__WEBPACK_IMPORTED_MODULE_4__(this.firstDay).format('YYYY-MM-DD');
          var lastDay = moment__WEBPACK_IMPORTED_MODULE_4__(this.lastDay).format('YYYY-MM-DD');
          this.leavSer.leaves(this.empId, firstDay, lastDay).subscribe(function (res) {
            _this.leaveList = res['data']; // this.totalSpent = this.report[this.report.length-1].entireWorkDuration
          }, function (err) {// this.errMsg = err;
          });
        } // this.leavSer.leaveSummary(this.empId).subscribe(res=>{
        //   this.leaveList = res['data']
        // }, err=>{
        // })
        // }

      }, {
        key: "leaveRequest",
        value: function leaveRequest() {
          this.enableRequest = true;
        }
      }, {
        key: "generate",
        value: function generate() {
          var _this2 = this;

          this.enableRequest = false;
          var payload = {
            FromDate: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).format('YYYY-MM-DD'),
            ToDate: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).format('YYYY-MM-DD'),
            Reason: this.reason,
            EmpId: window.localStorage.getItem('empId'),
            Status: 1
          };
          this.leavSer.applyLeave(payload).subscribe(function (res) {
            // console.log(res['data']);
            if (res['data']) {
              _this2.leavSer.leaveSummary(_this2.empId).subscribe(function (res) {
                _this2.leaveList = res['data'];
              }, function (err) {
                console.log(err);
              });
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.enableRequest = false;
        }
      }, {
        key: "doInfinite",
        value: function doInfinite(infiniteScrollEvent) {
          var _this3 = this;

          setTimeout(function () {
            _this3.slice += 5;
            infiniteScrollEvent.target.complete();
          }, 500);
        }
      }]);

      return LeaveSummaryComponent;
    }();

    LeaveSummaryComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]
      }, {
        type: _leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"]
      }];
    };

    LeaveSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leave-summary',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./leave-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/leave/leave-summary/leave-summary.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./leave-summary.component.scss */
      "./src/app/folder/leave/leave-summary/leave-summary.component.scss"))["default"]]
    })], LeaveSummaryComponent);
    /***/
  },

  /***/
  "./src/app/folder/leave/leave.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/folder/leave/leave.module.ts ***!
    \**********************************************/

  /*! exports provided: LeaveModule */

  /***/
  function srcAppFolderLeaveLeaveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveModule", function () {
      return LeaveModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./leave-routing.module */
    "./src/app/folder/leave/leave-routing.module.ts");
    /* harmony import */


    var _leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./leave-summary/leave-summary.component */
    "./src/app/folder/leave/leave-summary/leave-summary.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LeaveModule = function LeaveModule() {
      _classCallCheck(this, LeaveModule);
    };

    LeaveModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_4__["LeaveSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeaveRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], LeaveModule);
    /***/
  },

  /***/
  "./src/app/folder/leave/leave.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/folder/leave/leave.service.ts ***!
    \***********************************************/

  /*! exports provided: LeaveService */

  /***/
  function srcAppFolderLeaveLeaveServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaveService", function () {
      return LeaveService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/add/operator/catch */
    "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
    /* harmony import */


    var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/add/observable/throw */
    "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var LeaveService = /*#__PURE__*/function () {
      function LeaveService(http, storage) {
        _classCallCheck(this, LeaveService);

        this.http = http;
        this.storage = storage;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
          })
        };
      }

      _createClass(LeaveService, [{
        key: "leaveSummary",
        value: function leaveSummary(userId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url + 'attendance/getmyleaverequests' + '?userid=' + userId, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "applyLeave",
        value: function applyLeave(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'attendance/applyleave', data, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "leaves",
        value: function leaves(empId, firstDay, lastDay) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'attendance/get_leaves/' + empId + '/' + firstDay + '/' + lastDay, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "handleErrors",
        value: function handleErrors(error) {
          console.log(error.error.message);
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](error.error.message || 'backend server error');
        }
      }]);

      return LeaveService;
    }();

    LeaveService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }];
    };

    LeaveService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LeaveService);
    /***/
  }
}]);
//# sourceMappingURL=leave-leave-module-es5.js.map