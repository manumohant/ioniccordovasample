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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'Leaves'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  <ion-row>\n    <!-- Move back one screen of the slides -->\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"back()\" class=\"iconBtn\">\n        <ion-icon name=\"chevron-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n \n    <ion-col size=\"8\" class=\"ion-text-center\">\n      <h2 class=\"pos\">{{ viewTitle }}</h2>\n    </ion-col>\n \n    <!-- Move forward one screen of the slides -->\n    <ion-col size=\"2\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"next()\" class=\"iconBtn\">\n        <ion-icon name=\"chevron-forward-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n \n  <calendar\n    [eventSource]=\"eventSource\"\n    [calendarMode]=\"calendar.mode\"\n    [currentDate]=\"calendar.currentDate\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onTimeSelected)=\"onTimeSelected($event)\"\n    (onEventSelected)=\"onEventSelected($event)\"\n    (click)=\"applyLeave(calendar.currentDate)\"    \n    id=\"cal\"\n  >\n  </calendar> \n<br/>\n  <ion-button color=\"primary\" (click)=\"onSubmit()\" class=\"leavBtn\">\n    {{'Apply leave'|translate}}\n  </ion-button>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ".btnHome {\n  color: white;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n\n.pos {\n  margin-top: 8px;\n}\n\n.leavBtn {\n  float: right;\n  margin-right: 1rem;\n}\n\n.iconBtn {\n  background-color: #eaf2fe;\n}\n\n:host ::ng-deep .monthview-container {\n  height: auto !important;\n}\n\n:host ::ng-deep .event-detail-container {\n  display: none;\n}\n\n.avl {\n  color: var(--ion-color-danger) !important;\n  font-size: 0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2xlYXZlL2xlYXZlLXN1bW1hcnkvRTpcXGNpdHliYXNlXFxGbHVlbnRNV01fQ0VQX3Rtcy9zcmNcXGFwcFxcZm9sZGVyXFxsZWF2ZVxcbGVhdmUtc3VtbWFyeVxcbGVhdmUtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL2xlYXZlL2xlYXZlLXN1bW1hcnkvbGVhdmUtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QUREQTtFQUNFLHlCQUFBO0FDSUY7O0FEQUk7RUFDSSx1QkFBQTtBQ0dSOztBREFJO0VBQ0ksYUFBQTtBQ0VSOztBRENBO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2xlYXZlL2xlYXZlLXN1bW1hcnkvbGVhdmUtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5Ib21le1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4ucG9zIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmxlYXZCdG4ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuLmljb25CdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZjJmZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIC5tb250aHZpZXctY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuIFxyXG4gICAgLmV2ZW50LWRldGFpbC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLmF2bCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjVyZW0gIWltcG9ydGFudDtcclxufSIsIi5idG5Ib21lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucG9zIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubGVhdkJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaWNvbkJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWYyZmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubW9udGh2aWV3LWNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF2bCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */";
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LeaveSummaryComponent = /*#__PURE__*/function () {
      function LeaveSummaryComponent(sqlite, leavSer, alertCtrl, translate, locale) {
        _classCallCheck(this, LeaveSummaryComponent);

        this.sqlite = sqlite;
        this.leavSer = leavSer;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.locale = locale;
        this.enableRequest = false;
        this.leaveRequest = false;
        this.leaveApplied = false; // consecutiveLeave:boolean=false;

        this.remFrmSrcArr = false;
        this.events = [];
        this.eventSource = [];
        this.leaveSource = [];
        this.dbEventSource = [];
        this.calendar = {
          mode: 'month',
          currentDate: new Date()
        };
        this.event = {
          title: 'Leave Applied',
          startTime: null,
          endTime: '',
          allDay: true
        };
        this.modalReady = false;
        this.remSelectedDt = false;
        this.remBackendSelDt = false;
        this.siteId = window.localStorage.getItem('siteId');
        this.locStorageLang = window.localStorage.getItem('lang');

        if (this.locStorageLang == '' || this.locStorageLang == undefined || this.locStorageLang == null) {
          this.lang = 'en';
          this.translate.setDefaultLang('en');
          this.translate.use('en');
        } else {
          this.lang = this.locStorageLang;
          this.translate.use(this.lang);
        }

        this.emprecnum = window.localStorage.getItem('user2employee');
      }

      _createClass(LeaveSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.leaveSource = [];
          var date = new Date();
          this.firstDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD');
          this.lastDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD'); // language

          this.translate.get('Not Allowed').subscribe(function (value) {
            _this.NALbl = value;
          });
          this.translate.get('NALeave').subscribe(function (value) {
            _this.NAmsg = value;
          });
          this.translate.get('Cancel').subscribe(function (value) {
            _this.cancelLbl = value;
          });
          this.translate.get('Ok').subscribe(function (value) {
            _this.okLbl = value;
          });
          this.translate.get('From').subscribe(function (value) {
            _this.fromLbl = value;
          });
          this.translate.get('To').subscribe(function (value) {
            _this.toLbl = value;
          });
          this.translate.get('Cancel Leave').subscribe(function (value) {
            _this.cancelLeave = value;
          });
          this.translate.get('Cancel Msg').subscribe(function (value) {
            _this.cancelMsg = value;
          });
          this.translate.get('Not Allowed').subscribe(function (value) {
            _this.NAprevdt = value;
          });
          this.translate.get('Greater than today').subscribe(function (value) {
            _this.greaterDayMsg = value;
          });
          this.getLeaves();
        }
      }, {
        key: "getLeaves",
        value: function getLeaves() {
          var _this2 = this;

          this.events = [];
          this.dbEventSource = [];
          this.empId = window.localStorage.getItem('user2employee');
          var fDay = moment__WEBPACK_IMPORTED_MODULE_4__(this.firstDay).format('YYYY-MM-DD');
          var lDay = moment__WEBPACK_IMPORTED_MODULE_4__(this.lastDay).format('YYYY-MM-DD');
          this.leavSer.leaves(this.empId, fDay, lDay).subscribe(function (res) {
            if (res['data']) {
              var len = res['data'].length;

              for (var i = 0; i < len; i++) {
                if (res['data'][i].status == 1 || res['data'][i].status == 0) {
                  _this2.events.push({
                    title: res['data'][i].status,
                    startTime: new Date(res['data'][i].fromdate),
                    endTime: new Date(res['data'][i].todate),
                    allDay: true,
                    leaveid: res['data'][i].id,
                    status: res['data'][i].status
                  });
                }
              }

              _this2.dbEventSource = _this2.events;
              _this2.eventSource = _this2.events;

              _this2.myCal.loadEvents();
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          setTimeout(function () {
            _this3.modalReady = true;
          }, 0);
        } // Change current month/week/day

      }, {
        key: "next",
        value: function next() {
          this.myCal.slideNext();
          this.getLeaves();
        }
      }, {
        key: "back",
        value: function back() {
          this.myCal.slidePrev();
          this.getLeaves();
        } // Selected date reange and hence title changed

      }, {
        key: "onViewTitleChanged",
        value: function onViewTitleChanged(title) {
          this.viewTitle = title;
        }
      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var dt, endDt, nwdt, todt, dt_str, i, newDt, selDt, removed, _i, _newDt, _selDt, _removed, _loop, _i2, alert;

            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.event.startTime = new Date(ev.selectedTime);
                    dt = this.event.startTime.toISOString();
                    endDt = this.event.startTime;
                    endDt = new Date(endDt);
                    nwdt = endDt.setDate(endDt.getDate());
                    todt = new Date(nwdt).toISOString();
                    dt_str = this.event.startTime.toDateString();

                    if (!(this.leaveRequest == true && this.event.startTime >= this.currDt)) {
                      _context2.next = 20;
                      break;
                    }

                    //To avoid applying leaves on consecutive days.
                    // for(let i=0; i<this.eventSource.length; i++){
                    //   let d1 = moment(this.eventSource[i].startTime.toLocaleDateString());
                    //   let d2 = moment(this.event.startTime.toLocaleDateString());
                    //   let diffDays = d2.diff(d1, 'days');
                    //   if((diffDays == 1 || diffDays == -1) && this.consecutiveLeave==false){
                    //     this.consecutiveLeave=true;
                    //     let alert = await this.alertCtrl.create({
                    //       header: this.NALbl,
                    //       message: this.NAmsg,
                    //       buttons: [
                    //         {
                    //           text: this.okLbl,
                    //           role: 'cancel',
                    //           handler: () => {
                    //             this.leaveRequest=false;
                    //           }
                    //         }
                    //       ]
                    //     });
                    //     alert.present();
                    //   }
                    // }
                    //end of consecutive day leaves
                    // to remove from source array which is for insert purpose
                    for (i = 0; i < this.leaveSource.length; i++) {
                      newDt = this.leaveSource[i].date.toDateString();
                      selDt = this.event.startTime.toDateString();

                      if (newDt === selDt) {
                        removed = this.leaveSource.splice(i, 1);
                        this.remSelectedDt = true;
                        this.remFrmSrcArr = true;
                        this.myCal.loadEvents();
                      }
                    }

                    if (this.remFrmSrcArr) {
                      // to remove from main src array which is for insert purpose
                      for (_i = 0; _i < this.eventSource.length; _i++) {
                        _newDt = this.eventSource[_i].startTime.toDateString();
                        _selDt = this.event.startTime.toDateString();

                        if (_newDt === _selDt && this.eventSource[_i].title == 12) {
                          _removed = this.eventSource.splice(_i, 1);
                          this.remSelectedDt = true;
                          this.remFrmSrcArr = true;
                          this.myCal.loadEvents();
                        }
                      }
                    } // end of selected array
                    // to remove from dbEventsource(leaves list from backend)


                    _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(_i2) {
                      var newDt, selDt, alert;
                      return regeneratorRuntime.wrap(function _loop$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              newDt = _this4.dbEventSource[_i2].startTime.toDateString();
                              selDt = _this4.event.startTime.toDateString();

                              if (!(newDt === selDt)) {
                                _context.next = 9;
                                break;
                              }

                              if (!(_this4.dbEventSource[_i2].status == 0 && _this4.remBackendSelDt == false)) {
                                _context.next = 8;
                                break;
                              }

                              _context.next = 6;
                              return _this4.alertCtrl.create({
                                header: _this4.cancelLeave,
                                subHeader: _this4.cancelMsg,
                                message: _this4.dbEventSource[_i2].startTime.toDateString(),
                                buttons: [{
                                  text: _this4.okLbl,
                                  role: 'cancel',
                                  handler: function handler() {}
                                }, {
                                  text: _this4.cancelLeave,
                                  handler: function handler(data) {
                                    _this4.leavSer.updateLeave(_this4.dbEventSource[_i2].leaveid).subscribe(function (res) {
                                      if (res['data'] == 'Success') {
                                        _this4.getLeaves();
                                      }
                                    }, function (err) {// console.log(err)
                                    });

                                    _this4.leaveRequest = false;
                                  }
                                }]
                              });

                            case 6:
                              alert = _context.sent;
                              alert.present();

                            case 8:
                              _this4.remBackendSelDt = true;

                            case 9:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _loop);
                    });
                    _i2 = 0;

                  case 12:
                    if (!(_i2 < this.dbEventSource.length)) {
                      _context2.next = 17;
                      break;
                    }

                    return _context2.delegateYield(_loop(_i2), "t0", 14);

                  case 14:
                    _i2++;
                    _context2.next = 12;
                    break;

                  case 17:
                    // && !this.consecutiveLeave
                    if (!this.remSelectedDt && this.remBackendSelDt == false) {
                      this.events.push({
                        title: 12,
                        startTime: new Date(this.event.startTime),
                        endTime: new Date(this.event.startTime),
                        allDay: true,
                        leaveid: null,
                        status: 0
                      });
                      this.leaveData = {
                        EmpId: this.emprecnum,
                        FromDate: dt,
                        ToDate: todt,
                        Status: 0,
                        date: this.event.startTime,
                        siteid: this.siteId
                      };
                      this.leaveSource.push(this.leaveData);
                      this.eventSource = this.events;
                      this.leaveRequest = false;
                      this.myCal.loadEvents();
                    } // console.log(this.leaveSource);


                    _context2.next = 25;
                    break;

                  case 20:
                    if (!(this.leaveRequest == true)) {
                      _context2.next = 25;
                      break;
                    }

                    _context2.next = 23;
                    return this.alertCtrl.create({
                      header: this.NAprevdt,
                      message: this.greaterDayMsg,
                      buttons: [this.okLbl]
                    });

                  case 23:
                    alert = _context2.sent;
                    alert.present();

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          for (var i = 0; i < this.leaveSource.length; i++) {
            this.leavSer.applyLeave(this.leaveSource[i]).subscribe(function (res) {
              if (res['data'] == "requested") {
                _this5.getLeaves();
              }
            }, function (err) {
              console.log(err);
            });
          }

          this.myCal.loadEvents();
          this.leaveSource = [];
        }
      }, {
        key: "applyLeave",
        value: function applyLeave(currentDt) {
          this.leaveRequest = true;
          this.leaveApplied = false;
          this.currDt = currentDt;
          this.remSelectedDt = false; // this.consecutiveLeave=false;

          this.remBackendSelDt = false;
          this.remFrmSrcArr = false;
        } // Calendar event was clicked

      }, {
        key: "onEventSelected",
        value: function onEventSelected(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var start, end, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // Use Angular date pipe for conversion
                    start = new Date(event.startTime);
                    end = new Date(event.endTime);
                    _context3.next = 4;
                    return this.alertCtrl.create({
                      header: event.title,
                      subHeader: event.desc,
                      message: this.fromLbl + ': ' + start + '<br><br>' + this.toLbl + ': ' + end,
                      buttons: [this.okLbl]
                    });

                  case 4:
                    alert = _context3.sent;
                    alert.present();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LeaveSummaryComponent;
    }();

    LeaveSummaryComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"]
      }, {
        type: _leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"])], LeaveSummaryComponent.prototype, "myCal", void 0);
    LeaveSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leave-summary',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./leave-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/leave/leave-summary/leave-summary.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./leave-summary.component.scss */
      "./src/app/folder/leave/leave-summary/leave-summary.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))], LeaveSummaryComponent);
    /***/
  },

  /***/
  "./src/app/folder/leave/leave.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/folder/leave/leave.module.ts ***!
    \**********************************************/

  /*! exports provided: createTranslateLoader, LeaveModule */

  /***/
  function srcAppFolderLeaveLeaveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
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
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import localeZh from '@angular/common/locales/zh-Hans';
    // registerLocaleData(localeZh);


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var LeaveModule = function LeaveModule() {
      _classCallCheck(this, LeaveModule);
    };

    LeaveModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_4__["LeaveSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeaveRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
        }
      })],
      providers: [// { 
        // provide: LOCALE_ID, 
        // useValue: 'zh-Hans' 
        // }
      ]
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
        this.userId = window.localStorage.getItem('userId');
        this.emprecnum = window.localStorage.getItem('user2employee');
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
        key: "updateLeave",
        value: function updateLeave(leaveid) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'employee/updateLeave/' + this.userId + '/' + leaveid, this.httpOptions).map(function (Response) {
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