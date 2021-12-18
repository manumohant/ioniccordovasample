(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-report-attendance-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/attendance-report/generate-report/generate-report.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/attendance-report/generate-report/generate-report.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <!-- <ion-button class=\"btnHome\" [routerLink]=\"'/settings'\">\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\n          </ion-button> -->\n      </ion-buttons>\n    <ion-title>Attendance Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n          <ion-item>\n              <ion-label position=\"floating\">Start Date</ion-label>\n              <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"firstDay\"  value=\"firstDay\" name=\"firstDate\" ngDefaultControl></ion-datetime>\n          </ion-item>\n         \n      </ion-col>\n      <ion-col>\n          <ion-item>\n              <ion-label position=\"floating\">End Date</ion-label>\n              <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"lastDay\"  value=\"lastDay\" name=\"lastDay\"  ngDefaultControl></ion-datetime>\n          </ion-item>          \n      </ion-col>\n      <ion-col>\n      <ion-button type=\"button\" class=\"gen\" color=\"#00aaa0\" (click)=\"getReport()\">GENERATE</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"tabHead\">Total Spent: &nbsp; {{totalSpent}}</div>\n\n  <ion-grid>\n\n      <ion-row class=\"tabHead\">\n        <ion-col>Date</ion-col> <ion-col>Time</ion-col> <ion-col>Status</ion-col> <ion-col>Spent</ion-col>\n      </ion-row>\n\n      <ion-row *ngFor=\"let ar of report | slice:0:slice\">\n          <ion-col>\n            {{ar.date | date}}\n          </ion-col>\n          <ion-col>\n            {{ar.time}}\n          </ion-col>\n          <ion-col>\n            {{ar.checkInOutString}}\n          </ion-col>\n          <ion-col>\n              {{ar.spent}}\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data…\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/folder/attendance-report/attendance-report-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/attendance-report/attendance-report-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AttendanceReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportRoutingModule", function() { return AttendanceReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _generate_report_generate_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-report/generate-report.component */ "./src/app/folder/attendance-report/generate-report/generate-report.component.ts");




const routes = [
    {
        path: 'rep',
        component: _generate_report_generate_report_component__WEBPACK_IMPORTED_MODULE_3__["GenerateReportComponent"]
    }
];
let AttendanceReportRoutingModule = class AttendanceReportRoutingModule {
};
AttendanceReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AttendanceReportRoutingModule);



/***/ }),

/***/ "./src/app/folder/attendance-report/attendance-report.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/attendance-report/attendance-report.module.ts ***!
  \**********************************************************************/
/*! exports provided: AttendanceReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportModule", function() { return AttendanceReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _attendance_report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-report-routing.module */ "./src/app/folder/attendance-report/attendance-report-routing.module.ts");
/* harmony import */ var _generate_report_generate_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generate-report/generate-report.component */ "./src/app/folder/attendance-report/generate-report/generate-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let AttendanceReportModule = class AttendanceReportModule {
};
AttendanceReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_generate_report_generate_report_component__WEBPACK_IMPORTED_MODULE_4__["GenerateReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _attendance_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["AttendanceReportRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ]
    })
], AttendanceReportModule);



/***/ }),

/***/ "./src/app/folder/attendance-report/attendance-report.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/folder/attendance-report/attendance-report.service.ts ***!
  \***********************************************************************/
/*! exports provided: AttendanceReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceReportService", function() { return AttendanceReportService; });
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










let AttendanceReportService = class AttendanceReportService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            })
        };
    }
    attenReport(empId, firstDay, lastDay) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url + 'attendance/gettimespentinoffice/' + empId + '/' + firstDay + '/' + lastDay + '/all', this.httpOptions)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    handleErrors(error) {
        console.log(error.error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.error.message || 'backend server error');
    }
};
AttendanceReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
AttendanceReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AttendanceReportService);



/***/ }),

/***/ "./src/app/folder/attendance-report/generate-report/generate-report.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/folder/attendance-report/generate-report/generate-report.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  color: white !important;\n}\n\n.gen {\n  color: black;\n  background: #ddd;\n}\n\n.tabHead {\n  background: #006495;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2F0dGVuZGFuY2UtcmVwb3J0L2dlbmVyYXRlLXJlcG9ydC9FOlxcQ0VQXFxGbHVlbnRNV01fQ0VQX3Rtcy9zcmNcXGFwcFxcZm9sZGVyXFxhdHRlbmRhbmNlLXJlcG9ydFxcZ2VuZXJhdGUtcmVwb3J0XFxnZW5lcmF0ZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9hdHRlbmRhbmNlLXJlcG9ydC9nZW5lcmF0ZS1yZXBvcnQvZ2VuZXJhdGUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURHRTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdFO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvYXR0ZW5kYW5jZS1yZXBvcnQvZ2VuZXJhdGUtcmVwb3J0L2dlbmVyYXRlLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuXHJcbiAgLmdlbntcclxuICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgfVxyXG5cclxuICAudGFiSGVhZHtcclxuICAgICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgfSIsImlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZ2VuIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4udGFiSGVhZCB7XG4gIGJhY2tncm91bmQ6ICMwMDY0OTU7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/attendance-report/generate-report/generate-report.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/folder/attendance-report/generate-report/generate-report.component.ts ***!
  \***************************************************************************************/
/*! exports provided: GenerateReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateReportComponent", function() { return GenerateReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _attendance_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attendance-report.service */ "./src/app/folder/attendance-report/attendance-report.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let GenerateReportComponent = class GenerateReportComponent {
    constructor(repSer, storage) {
        this.repSer = repSer;
        this.storage = storage;
        this.slice = 15;
    }
    //   ionViewWillEnter() {
    //     this.storage.get('loginDetails').then(detai => {
    //       console.log(detai.details.empId);
    //       this.empId = detai.details.empId
    //     });
    // }
    ngOnInit() {
        let date = new Date();
        this.firstDay = moment__WEBPACK_IMPORTED_MODULE_3__(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD');
        this.lastDay = moment__WEBPACK_IMPORTED_MODULE_3__(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD');
        this.getReport();
    }
    getReport() {
        this.empId = window.localStorage.getItem('empId');
        let startDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.firstDay).format('YYYY-MM-DD');
        let endDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.lastDay).format('YYYY-MM-DD');
        this.repSer.attenReport(this.empId, startDate, endDate).subscribe(res => {
            this.report = res['data'];
            this.totalSpent = this.report[this.report.length - 1].entireWorkDuration;
        }, err => {
            this.errMsg = err;
        });
    }
    doInfinite(infiniteScrollEvent) {
        setTimeout(() => {
            this.slice += 5;
            infiniteScrollEvent.target.complete();
        }, 500);
    }
};
GenerateReportComponent.ctorParameters = () => [
    { type: _attendance_report_service__WEBPACK_IMPORTED_MODULE_2__["AttendanceReportService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
GenerateReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generate-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generate-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/attendance-report/generate-report/generate-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./generate-report.component.scss */ "./src/app/folder/attendance-report/generate-report/generate-report.component.scss")).default]
    })
], GenerateReportComponent);



/***/ })

}]);
//# sourceMappingURL=attendance-report-attendance-report-module-es2015.js.map