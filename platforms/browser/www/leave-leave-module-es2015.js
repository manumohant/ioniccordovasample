(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-leave-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/leave/leave-summary/leave-summary.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/leave/leave-summary/leave-summary.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar  class=\"toolBar\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'Leaves'|translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content> \r\n  <ion-row>\r\n    <!-- Move back one screen of the slides -->\r\n    <ion-col size=\"2\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"back()\" class=\"iconBtn\">\r\n        <ion-icon name=\"chevron-back-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n \r\n    <ion-col size=\"8\" class=\"ion-text-center\">\r\n      <h2 class=\"pos\">{{ viewTitle }}</h2>\r\n    </ion-col>\r\n \r\n    <!-- Move forward one screen of the slides -->\r\n    <ion-col size=\"2\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"next()\" class=\"iconBtn\">\r\n        <ion-icon name=\"chevron-forward-outline\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n \r\n  <calendar\r\n    [eventSource]=\"eventSource\"\r\n    [calendarMode]=\"calendar.mode\"\r\n    [currentDate]=\"calendar.currentDate\"\r\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\r\n    (onTimeSelected)=\"onTimeSelected($event)\"\r\n    (onEventSelected)=\"onEventSelected($event)\"\r\n    (click)=\"applyLeave(calendar.currentDate)\"    \r\n    id=\"cal\"\r\n  >\r\n  </calendar> \r\n<br/>\r\n  <ion-button color=\"primary\" (click)=\"onSubmit()\" class=\"leavBtn\">\r\n    {{'Apply leave'|translate}}\r\n  </ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/leave/leave-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/leave/leave-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LeaveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveRoutingModule", function() { return LeaveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-summary/leave-summary.component */ "./src/app/folder/leave/leave-summary/leave-summary.component.ts");




const routes = [
    {
        path: 'lea',
        component: _leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_3__["LeaveSummaryComponent"]
    }
];
let LeaveRoutingModule = class LeaveRoutingModule {
};
LeaveRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LeaveRoutingModule);



/***/ }),

/***/ "./src/app/folder/leave/leave-summary/leave-summary.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/folder/leave/leave-summary/leave-summary.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnHome {\n  color: white;\n  margin-right: 1rem;\n  font-size: 1.5rem;\n}\n\n.pos {\n  margin-top: 8px;\n}\n\n.leavBtn {\n  float: right;\n  margin-right: 1rem;\n}\n\n.iconBtn {\n  background-color: #eaf2fe;\n}\n\n:host ::ng-deep .monthview-container {\n  height: auto !important;\n}\n\n:host ::ng-deep .event-detail-container {\n  display: none;\n}\n\n.avl {\n  color: var(--ion-color-danger) !important;\n  font-size: 0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2xlYXZlL2xlYXZlLXN1bW1hcnkvQzpcXFVzZXJzXFxtYW51bVxcRG93bmxvYWRzXFxmbHVlbnRjZXBUTVMtbWFzdGVyXFxmbHVlbnRjZXBUTVMvc3JjXFxhcHBcXGZvbGRlclxcbGVhdmVcXGxlYXZlLXN1bW1hcnlcXGxlYXZlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9sZWF2ZS9sZWF2ZS1zdW1tYXJ5L2xlYXZlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREFJO0VBQ0ksdUJBQUE7QUNHUjs7QURBSTtFQUNJLGFBQUE7QUNFUjs7QURDQTtFQUNFLHlDQUFBO0VBQ0EsNEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9sZWF2ZS9sZWF2ZS1zdW1tYXJ5L2xlYXZlLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuSG9tZXtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLnBvcyB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5sZWF2QnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5pY29uQnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWYyZmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgICAubW9udGh2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiBcclxuICAgIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5hdmwge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XHJcbn0iLCIuYnRuSG9tZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnBvcyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmxlYXZCdG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmljb25CdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFmMmZlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vbnRodmlldy1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjVyZW0gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/leave/leave-summary/leave-summary.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/folder/leave/leave-summary/leave-summary.component.ts ***!
  \***********************************************************************/
/*! exports provided: LeaveSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveSummaryComponent", function() { return LeaveSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../leave.service */ "./src/app/folder/leave/leave.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let LeaveSummaryComponent = class LeaveSummaryComponent {
    constructor(sqlite, leavSer, alertCtrl, translate, locale) {
        this.sqlite = sqlite;
        this.leavSer = leavSer;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.locale = locale;
        this.enableRequest = false;
        this.leaveRequest = false;
        this.leaveApplied = false;
        // consecutiveLeave:boolean=false;
        this.remFrmSrcArr = false;
        this.events = [];
        this.eventSource = [];
        this.leaveSource = [];
        this.dbEventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
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
        }
        else {
            this.lang = this.locStorageLang;
            this.translate.use(this.lang);
        }
        this.emprecnum = window.localStorage.getItem('user2employee');
    }
    ngOnInit() {
        this.leaveSource = [];
        let date = new Date();
        this.firstDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD');
        this.lastDay = moment__WEBPACK_IMPORTED_MODULE_4__(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD');
        // language
        this.translate.get('Not Allowed').subscribe(value => { this.NALbl = value; });
        this.translate.get('NALeave').subscribe(value => { this.NAmsg = value; });
        this.translate.get('Cancel').subscribe(value => { this.cancelLbl = value; });
        this.translate.get('Ok').subscribe(value => { this.okLbl = value; });
        this.translate.get('From').subscribe(value => { this.fromLbl = value; });
        this.translate.get('To').subscribe(value => { this.toLbl = value; });
        this.translate.get('Cancel Leave').subscribe(value => { this.cancelLeave = value; });
        this.translate.get('Cancel Msg').subscribe(value => { this.cancelMsg = value; });
        this.translate.get('Not Allowed').subscribe(value => { this.NAprevdt = value; });
        this.translate.get('Greater than today').subscribe(value => { this.greaterDayMsg = value; });
        this.getLeaves();
    }
    getLeaves() {
        this.events = [];
        this.dbEventSource = [];
        this.empId = window.localStorage.getItem('user2employee');
        let fDay = moment__WEBPACK_IMPORTED_MODULE_4__(this.firstDay).format('YYYY-MM-DD');
        let lDay = moment__WEBPACK_IMPORTED_MODULE_4__(this.lastDay).format('YYYY-MM-DD');
        this.leavSer.leaves(this.empId, fDay, lDay).subscribe(res => {
            if (res['data']) {
                let len = res['data'].length;
                for (let i = 0; i < len; i++) {
                    if (res['data'][i].status == 1 || res['data'][i].status == 0) {
                        this.events.push({
                            title: res['data'][i].status,
                            startTime: new Date(res['data'][i].fromdate),
                            endTime: new Date(res['data'][i].todate),
                            allDay: true,
                            leaveid: res['data'][i].id,
                            status: res['data'][i].status
                        });
                    }
                }
                this.dbEventSource = this.events;
                this.eventSource = this.events;
                this.myCal.loadEvents();
            }
        }, err => {
            console.log(err);
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.modalReady = true;
        }, 0);
    }
    // Change current month/week/day
    next() {
        this.myCal.slideNext();
        this.getLeaves();
    }
    back() {
        this.myCal.slidePrev();
        this.getLeaves();
    }
    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onTimeSelected(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.event.startTime = new Date(ev.selectedTime);
            let dt = this.event.startTime.toISOString();
            let endDt = this.event.startTime;
            endDt = new Date(endDt);
            let nwdt = endDt.setDate(endDt.getDate());
            let todt = new Date(nwdt).toISOString();
            let dt_str = this.event.startTime.toDateString();
            if (this.leaveRequest == true && this.event.startTime >= this.currDt) {
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
                for (let i = 0; i < this.leaveSource.length; i++) {
                    let newDt = this.leaveSource[i].date.toDateString();
                    let selDt = this.event.startTime.toDateString();
                    if (newDt === selDt) {
                        var removed = this.leaveSource.splice(i, 1);
                        this.remSelectedDt = true;
                        this.remFrmSrcArr = true;
                        this.myCal.loadEvents();
                    }
                }
                if (this.remFrmSrcArr) {
                    // to remove from main src array which is for insert purpose
                    for (let i = 0; i < this.eventSource.length; i++) {
                        let newDt = this.eventSource[i].startTime.toDateString();
                        let selDt = this.event.startTime.toDateString();
                        if ((newDt === selDt) && (this.eventSource[i].title == 12)) {
                            let removed = this.eventSource.splice(i, 1);
                            this.remSelectedDt = true;
                            this.remFrmSrcArr = true;
                            this.myCal.loadEvents();
                        }
                    }
                }
                // end of selected array
                // to remove from dbEventsource(leaves list from backend)
                for (let i = 0; i < this.dbEventSource.length; i++) {
                    let newDt = this.dbEventSource[i].startTime.toDateString();
                    let selDt = this.event.startTime.toDateString();
                    if (newDt === selDt) {
                        if ((this.dbEventSource[i].status == 0) && (this.remBackendSelDt == false)) {
                            let alert = yield this.alertCtrl.create({
                                header: this.cancelLeave,
                                subHeader: this.cancelMsg,
                                message: this.dbEventSource[i].startTime.toDateString(),
                                buttons: [
                                    {
                                        text: this.okLbl,
                                        role: 'cancel',
                                        handler: () => {
                                        }
                                    },
                                    {
                                        text: this.cancelLeave,
                                        handler: data => {
                                            this.leavSer.updateLeave(this.dbEventSource[i].leaveid).subscribe(res => {
                                                if (res['data'] == 'Success') {
                                                    this.getLeaves();
                                                }
                                            }, err => {
                                                // console.log(err)
                                            });
                                            this.leaveRequest = false;
                                        }
                                    }
                                ]
                            });
                            alert.present();
                        }
                        this.remBackendSelDt = true;
                    }
                }
                // && !this.consecutiveLeave
                if (!this.remSelectedDt && (this.remBackendSelDt == false)) {
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
                }
                // console.log(this.leaveSource);
            }
            else {
                if (this.leaveRequest == true) {
                    const alert = yield this.alertCtrl.create({
                        header: this.NAprevdt,
                        message: this.greaterDayMsg,
                        buttons: [this.okLbl],
                    });
                    alert.present();
                }
            }
        });
    }
    onSubmit() {
        for (let i = 0; i < this.leaveSource.length; i++) {
            this.leavSer.applyLeave(this.leaveSource[i]).subscribe(res => {
                if (res['data'] == "requested") {
                    this.getLeaves();
                }
            }, err => {
                console.log(err);
            });
        }
        this.myCal.loadEvents();
        this.leaveSource = [];
    }
    applyLeave(currentDt) {
        this.leaveRequest = true;
        this.leaveApplied = false;
        this.currDt = currentDt;
        this.remSelectedDt = false;
        // this.consecutiveLeave=false;
        this.remBackendSelDt = false;
        this.remFrmSrcArr = false;
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Use Angular date pipe for conversion
            let start = new Date(event.startTime);
            let end = new Date(event.endTime);
            const alert = yield this.alertCtrl.create({
                header: event.title,
                subHeader: event.desc,
                message: this.fromLbl + ': ' + start + '<br><br>' + this.toLbl + ': ' + end,
                buttons: [this.okLbl],
            });
            alert.present();
        });
    }
};
LeaveSummaryComponent.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__["SQLite"] },
    { type: _leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"])
], LeaveSummaryComponent.prototype, "myCal", void 0);
LeaveSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-summary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./leave-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/leave/leave-summary/leave-summary.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./leave-summary.component.scss */ "./src/app/folder/leave/leave-summary/leave-summary.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))
], LeaveSummaryComponent);



/***/ }),

/***/ "./src/app/folder/leave/leave.module.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/leave/leave.module.ts ***!
  \**********************************************/
/*! exports provided: createTranslateLoader, LeaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveModule", function() { return LeaveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leave-routing.module */ "./src/app/folder/leave/leave-routing.module.ts");
/* harmony import */ var _leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leave-summary/leave-summary.component */ "./src/app/folder/leave/leave-summary/leave-summary.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");











// import localeZh from '@angular/common/locales/zh-Hans';
// registerLocaleData(localeZh);
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let LeaveModule = class LeaveModule {
};
LeaveModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_leave_summary_leave_summary_component__WEBPACK_IMPORTED_MODULE_4__["LeaveSummaryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _leave_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeaveRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                }
            })
        ],
        providers: [
        // { 
        // provide: LOCALE_ID, 
        // useValue: 'zh-Hans' 
        // }
        ]
    })
], LeaveModule);



/***/ }),

/***/ "./src/app/folder/leave/leave.service.ts":
/*!***********************************************!*\
  !*** ./src/app/folder/leave/leave.service.ts ***!
  \***********************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");










let LeaveService = class LeaveService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.userId = window.localStorage.getItem('userId');
        this.emprecnum = window.localStorage.getItem('user2employee');
    }
    leaveSummary(userId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url + 'attendance/getmyleaverequests' + '?userid=' + userId, this.httpOptions)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    applyLeave(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'attendance/applyleave', data, this.httpOptions)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    updateLeave(leaveid) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'employee/updateLeave/' + this.userId + '/' + leaveid, this.httpOptions)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    leaves(empId, firstDay, lastDay) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'attendance/get_leaves/' + empId + '/' + firstDay + '/' + lastDay, this.httpOptions)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    handleErrors(error) {
        console.log(error.error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.error.message || 'backend server error');
    }
};
LeaveService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
LeaveService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LeaveService);



/***/ })

}]);
//# sourceMappingURL=leave-leave-module-es2015.js.map