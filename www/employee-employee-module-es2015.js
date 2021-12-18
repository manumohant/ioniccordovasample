(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/addavailability/addavailability.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/addavailability/addavailability.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\" class=\"btnHome\">\n         <ion-button class=\"btnHome\" (click)=\"goBack()\">\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\n          </ion-button>\n      </ion-buttons>\n    <ion-title>Add Availability</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">Customer</ion-label>\n    <ion-select [(ngModel)]=\"customer_recnum\" (ngModelChange)=\"location(customer_recnum)\">\n      <ion-select-option *ngFor=\"let cust of customersList\" value=\"{{cust.recnum}}\">{{cust.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">Category</ion-label>\n    <ion-select [(ngModel)]=\"category_type\">\n      <ion-select-option *ngFor=\"let category of categoryList\" value=\"{{category.recnum}}\">{{category.type}} ({{category.category_name}})</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">Skill</ion-label>\n    <ion-select [(ngModel)]=\"cust_skill\">\n      <ion-select-option *ngFor=\"let skill of skillsList\" value=\"{{skill.id}}\">{{skill.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"loc\">\n    <ion-label position=\"floating\" class=\"fntcolor\">Location</ion-label>\n    <ion-select [(ngModel)]=\"cust_locn\">\n      <ion-select-option *ngFor=\"let loc of locationList\" value=\"{{loc.id}}\">{{loc.name}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">From</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"frm_dt\" name=\"frm_dt\" required></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">To</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"to_dt\" name=\"to_dt\" required></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">Start Time</ion-label>\n    <ion-datetime display-format=\"HH:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"start_time\"  name=\"start_time\" required></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">End Time</ion-label>\n    <ion-datetime display-format=\"HH:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"end_time\"  name=\"end_time\" required></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\" class=\"fntcolor\">Status</ion-label>\n    <ion-select [(ngModel)]=\"status\">\n      <ion-select-option value=\"Available\">Available</ion-select-option>\n      <ion-select-option value=\"Unavailable\">Unavailable</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"addAvaialability()\">Submit</ion-button>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/availability/availability.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/availability/availability.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n      </ion-buttons>\n    <ion-title>{{'Availability'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n      <!-- Move back one screen of the slides -->\n      <ion-col size=\"2\">\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"back()\" class=\"iconBtn\">\n          <ion-icon name=\"chevron-back-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n   \n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <h2 class=\"pos\">{{ viewTitle }}</h2>\n      </ion-col>\n   \n      <!-- Move forward one screen of the slides -->\n      <ion-col size=\"2\">\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"next()\" class=\"iconBtn\">\n          <ion-icon name=\"chevron-forward-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <calendar\n    [eventSource]=\"eventSource\"\n    [calendarMode]=\"calendar.mode\"\n    [currentDate]=\"calendar.currentDate\"\n    (onEventSelected)=\"onEventSelected($event)\"\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\n    (onTimeSelected)=\"onTimeSelected($event)\"\n    (click)=\"addAvailability(calendar.currentDate)\"\n    id=\"cal\"\n    >\n    </calendar>\n    <br/>\n    <ion-button color=\"primary\" (click)=\"onSubmit()\" class=\"avlbl\">\n      {{'Add unavailable'|translate}}\n    </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/employee/addavailability/addavailability.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/folder/employee/addavailability/addavailability.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnHome {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2FkZGF2YWlsYWJpbGl0eS9FOlxcY2l0eWJhc2VcXEZsdWVudE1XTV9DRVBfdG1zL3NyY1xcYXBwXFxmb2xkZXJcXGVtcGxveWVlXFxhZGRhdmFpbGFiaWxpdHlcXGFkZGF2YWlsYWJpbGl0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2FkZGF2YWlsYWJpbGl0eS9hZGRhdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvZW1wbG95ZWUvYWRkYXZhaWxhYmlsaXR5L2FkZGF2YWlsYWJpbGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5Ib21le1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfSIsIi5idG5Ib21lIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/employee/addavailability/addavailability.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/employee/addavailability/addavailability.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddavailabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddavailabilityComponent", function() { return AddavailabilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _emp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../emp.service */ "./src/app/folder/employee/emp.service.ts");




let AddavailabilityComponent = class AddavailabilityComponent {
    constructor(router, emp) {
        this.router = router;
        this.emp = emp;
        this.nodat = false;
        this.loc = false;
        this.userId = window.localStorage.getItem('userId');
        this.emprecnum = window.localStorage.getItem('user2employee');
        this.siteId = window.localStorage.getItem('siteId');
        this.customers();
        this.category();
        this.skills();
    }
    ngOnInit() { }
    goBack() {
        this.router.navigateByUrl('/folder/emp');
    }
    customers() {
        this.emp.getCustomer().subscribe(res => {
            // console.log(res['data']);
            this.customersList = res['data'];
            this.totalCount = this.customersList.length;
            this.showSpinner = false;
            if (this.customersList.length == 0) {
                this.nodat = true;
                this.showSpinner = false;
            }
        });
    }
    location(customer_recnum) {
        this.loc = true;
        this.emp.getCustLocation(customer_recnum).subscribe(res => {
            // console.log(res['data']);
            this.locationList = res['data'];
            this.totalCount = this.locationList.length;
            this.showSpinner = false;
            if (this.locationList.length == 0) {
                this.nodat = true;
                this.showSpinner = false;
            }
        });
    }
    skills() {
        this.emp.getCustSkills().subscribe(res => {
            // console.log(res['data']);
            this.skillsList = res['data'];
            this.totalCount = this.skillsList.length;
            this.showSpinner = false;
            if (this.skillsList.length == 0) {
                this.nodat = true;
                this.showSpinner = false;
            }
        });
    }
    category() {
        this.emp.getCategories().subscribe(res => {
            // console.log(res['data']);
            this.categoryList = res['data'];
            this.totalCount = this.categoryList.length;
            this.showSpinner = false;
            if (this.categoryList.length == 0) {
                this.nodat = true;
                this.showSpinner = false;
            }
        });
    }
    addAvaialability() {
        let payload = {
            userID: this.userId,
            empid: this.emprecnum,
            clientid: this.customer_recnum,
            link2category: this.category_type,
            skillsetid: this.cust_skill,
            clientlocationid: this.cust_locn,
            fromdate: this.frm_dt,
            todate: this.to_dt,
            strtTime: this.start_time,
            endTime: this.end_time,
            status: this.status,
            siteid: this.siteId
        };
        console.log(payload);
        this.emp.addAvailabilty(payload).subscribe(res => {
            console.log(res['data']);
        }, error => {
            this.errTitle = 'Error!';
            this.errMsg = (error);
        });
    }
};
AddavailabilityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _emp_service__WEBPACK_IMPORTED_MODULE_3__["EmpService"] }
];
AddavailabilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addavailability',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addavailability.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/addavailability/addavailability.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addavailability.component.scss */ "./src/app/folder/employee/addavailability/addavailability.component.scss")).default]
    })
], AddavailabilityComponent);



/***/ }),

/***/ "./src/app/folder/employee/availability/availability.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/folder/employee/availability/availability.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnHome {\n  color: white;\n}\n\n.avlbl {\n  float: right;\n  margin-right: 1rem;\n}\n\n.iconsize {\n  text-align: center;\n  font-size: 1.5rem;\n  margin: auto;\n}\n\n.pos {\n  margin-top: 8px;\n}\n\n.iconBtn {\n  background-color: #eaf2fe;\n}\n\n.algn {\n  margin-left: 0.8rem;\n}\n\n:host ::ng-deep .monthview-container {\n  height: auto !important;\n}\n\n:host ::ng-deep .event-detail-container {\n  display: none;\n}\n\n.avl {\n  color: var(--ion-color-danger) !important;\n  font-size: 0.5rem !important;\n}\n\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: white !important;\n  color: black !important;\n}\n\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-success) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2F2YWlsYWJpbGl0eS9FOlxcY2l0eWJhc2VcXEZsdWVudE1XTV9DRVBfdG1zL3NyY1xcYXBwXFxmb2xkZXJcXGVtcGxveWVlXFxhdmFpbGFiaWxpdHlcXGF2YWlsYWJpbGl0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2F2YWlsYWJpbGl0eS9hdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDRSx5QkFBQTtBQ0tGOztBREZBO0VBQ0UsbUJBQUE7QUNLRjs7QURGSTtFQUNNLHVCQUFBO0FDS1Y7O0FESE07RUFDSSxhQUFBO0FDS1Y7O0FEYUU7RUFDRSx5Q0FBQTtFQUNBLDRCQUFBO0FDVko7O0FEYUk7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDVk47O0FEYUk7RUFDRSxxREFBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2F2YWlsYWJpbGl0eS9hdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuSG9tZXtcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uYXZsYmwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuLmljb25zaXple1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnBvcyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLmljb25CdG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZjJmZTtcclxufVxyXG5cclxuLmFsZ257XHJcbiAgbWFyZ2luLWxlZnQ6MC44cmVtO1xyXG59XHJcbiAgOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgIC5tb250aHZpZXctY29udGFpbmVyIHtcclxuICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5ldmVudC1kZXRhaWwtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4vLyBJbmRpY2F0b3IgZm9yIGV2ZW50c1xyXG5cclxuICAvLyAuaW5kaWNhdG9yLWNvbnRhaW5lciB7XHJcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAvLyAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbiAgLy8gfVxyXG4gICBcclxuICAvLyAuZXZlbnQtaW5kaWNhdG9yIHtcclxuICAvLyAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIC8vICAgd2lkdGg6IDVweDtcclxuICAvLyAgIGhlaWdodDogNXB4O1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC8vICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAvLyB9XHJcbiAgLmF2bCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCB7XHJcbiAgICAubW9udGh2aWV3LXByaW1hcnktd2l0aC1ldmVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5tb250aHZpZXctc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgIFxyXG4gIC8vIC53aXRoLWV2ZW50IHtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIC8vICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAvLyB9IiwiLmJ0bkhvbWUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hdmxibCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaWNvbnNpemUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wb3Mge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5pY29uQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZjJmZTtcbn1cblxuLmFsZ24ge1xuICBtYXJnaW4tbGVmdDogMC44cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vbnRodmlldy1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb250aHZpZXctcHJpbWFyeS13aXRoLWV2ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1vbnRodmlldy1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/employee/availability/availability.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/employee/availability/availability.component.ts ***!
  \************************************************************************/
/*! exports provided: AvailabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailabilityComponent", function() { return AvailabilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emp_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../emp.service */ "./src/app/folder/employee/emp.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let AvailabilityComponent = class AvailabilityComponent {
    constructor(router, route, alertCtrl, emp, translate, locale) {
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.emp = emp;
        this.translate = translate;
        this.locale = locale;
        this.events = [];
        this.eventSource = [];
        this.dbEventSource = [];
        this.allocationSource = [];
        this.unavailabilitySource = [];
        this.availability = false;
        this.consecutiveDay = false;
        this.allocationStatus = true;
        this.remSelectedDt = false;
        this.remBackendSelDt = false;
        this.remFrmSrcArr = false;
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        this.event = {
            title: '',
            desc: '',
            startTime: null,
            endTime: '',
            allDay: true
        };
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
        this.userId = window.localStorage.getItem('userId');
        this.emprecnum = window.localStorage.getItem('user2employee');
        this.siteId = window.localStorage.getItem('siteId');
    }
    ngOnInit() {
        this.unavailabilitySource = [];
        let date = new Date();
        this.firstDay = moment__WEBPACK_IMPORTED_MODULE_6__(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD');
        this.lastDay = moment__WEBPACK_IMPORTED_MODULE_6__(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD');
        this.getEmpAvail();
        this.getAllocations();
        // language
        this.translate.get('Availability').subscribe(value => {
            // value is our translated string
            this.availabilityTitle = value;
        });
        this.translate.get('Unavailable on').subscribe(value => { this.unavailableOn = value; });
        this.translate.get('Make available').subscribe(value => { this.makeAvlbl = value; });
        this.translate.get('Not Allowed').subscribe(value => { this.NALbl = value; });
        this.translate.get('Enter time').subscribe(value => { this.enterTime = value; });
        this.translate.get('Cancel').subscribe(value => { this.cancelLbl = value; });
        this.translate.get('Ok').subscribe(value => { this.okLbl = value; });
        this.translate.get('From').subscribe(value => { this.fromLbl = value; });
        this.translate.get('To').subscribe(value => { this.toLbl = value; });
        this.translate.get('Greater than today').subscribe(value => { this.NAmsg = value; });
        this.translate.get('Confirm').subscribe(value => { this.confirmLbl = value; });
        this.translate.get('NALeave').subscribe(value => { this.consecutiveMsg = value; });
        this.translate.get('Make unavailable').subscribe(value => { this.makeUnavlbl = value; });
        this.translate.get('Cannot make Unavailable').subscribe(value => { this.cannotMakeUnavlbl = value; });
        this.translate.get('Allocated task').subscribe(value => { this.allocatedTask = value; });
    }
    getAllocations() {
        this.allocationSource = [];
        this.emp.getAllocations().subscribe(res => {
            if (res['data']) {
                this.allocationsList = res['data'];
                let len = res['data'].length;
                for (let i = 0; i < len; i++) {
                    this.allocationSource.push({
                        scheduleid: res['data'][i].scheduleid,
                        reqid: res['data'][i].reqid,
                        startTime: new Date(res['data'][i].date),
                        shift: res['data'][i].shift,
                        taskid: res['data'][i].taskrecnum,
                        taskstatus: res['data'][i].taskstatus,
                        taskstage: res['data'][i].taskstage,
                    });
                }
            }
        });
    }
    getEmpAvail() {
        this.events = [];
        this.emp.getEmpAvailability().subscribe(res => {
            if (res['data']) {
                this.unavailabilityList = res['data'];
                let len = res['data'].length;
                for (let i = 0; i < len; i++) {
                    if (res['data'][i].status == 3) {
                        this.events.push({
                            title: res['data'][i].status,
                            startTime: new Date(res['data'][i].fromdate),
                            endTime: new Date(res['data'][i].todate),
                            allDay: true,
                            leaveid: res['data'][i].leaveid,
                            status: res['data'][i].status
                        });
                    }
                }
                this.eventSource = this.events;
                this.dbEventSource = this.events;
                this.myCal.loadEvents();
            }
        }, err => {
            // console.log(err);
        });
    }
    next() {
        this.myCal.slideNext();
        this.getEmpAvail();
    }
    back() {
        this.myCal.slidePrev();
        this.getEmpAvail();
    }
    // Selected date range and hence title changed
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
            if (this.availability == true && this.event.startTime >= this.currDt) {
                // To remove from local array
                if ((this.availability == true)) {
                    for (let i = 0; i < this.unavailabilitySource.length; i++) {
                        let newDt = this.unavailabilitySource[i].date.toDateString();
                        let selDt = this.event.startTime.toDateString();
                        if (newDt === selDt) {
                            let removed = this.unavailabilitySource.splice(i, 1);
                            this.availability = false;
                            this.remSelectedDt = true;
                            this.remFrmSrcArr = true;
                            this.myCal.loadEvents();
                        }
                    }
                }
                // End of local array removal
                // To remove from main array
                if (this.remFrmSrcArr) {
                    // to remove from main src array which is for insert purpose
                    for (let i = 0; i < this.eventSource.length; i++) {
                        let newDt = this.eventSource[i].startTime.toDateString();
                        let selDt = this.event.startTime.toDateString();
                        if ((newDt === selDt) && (this.eventSource[i].title == 1)) {
                            let removed = this.eventSource.splice(i, 1);
                            this.remSelectedDt = true;
                            this.remFrmSrcArr = true;
                            this.myCal.loadEvents();
                        }
                    }
                }
                // End of main array
                // To Remove Existing Unavailablity(In DB) and making Available  && (this.consecutiveDay==false)
                if ((this.availability == true) && (this.remSelectedDt == false)) {
                    for (let i = 0; i < this.dbEventSource.length; i++) {
                        let newDt = this.dbEventSource[i].startTime.toDateString();
                        let selDt = this.event.startTime.toDateString();
                        if (newDt === selDt) {
                            if ((this.dbEventSource[i].status == 3)) {
                                let d = this.dbEventSource[i].startTime.getDate();
                                let m = this.dbEventSource[i].startTime.getMonth() + 1;
                                let y = this.dbEventSource[i].startTime.getFullYear();
                                let fullDt = '' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
                                let alert = yield this.alertCtrl.create({
                                    header: this.availabilityTitle,
                                    subHeader: this.unavailableOn,
                                    message: fullDt,
                                    buttons: [{
                                            text: this.okLbl,
                                            role: 'cancel',
                                            handler: () => {
                                                // console.log('Cancelled');
                                            }
                                        },
                                        {
                                            text: this.makeAvlbl,
                                            handler: data => {
                                                this.emp.updateAvailabilty(this.dbEventSource[i].leaveid).subscribe(res => {
                                                    if (res['data'] == 'Success') {
                                                        this.getEmpAvail();
                                                    }
                                                }, err => {
                                                    console.log(err);
                                                });
                                                this.availability = false;
                                            }
                                        }
                                    ]
                                });
                                alert.present();
                            }
                        }
                    }
                }
                // End of Making Available
                // Check if any allocations are made && (this.consecutiveDay==false)
                if (this.availability == true) {
                    for (let i = 0; i < this.allocationSource.length; i++) {
                        let newDt = this.allocationSource[i].startTime.toDateString();
                        let selDt = this.event.startTime.toDateString();
                        if (newDt === selDt) {
                            if (this.allocationSource[i].taskstage == 'Accepted') {
                                this.availability = false;
                                this.allocationStatus = true;
                                let alert = yield this.alertCtrl.create({
                                    header: this.NALbl,
                                    message: this.cannotMakeUnavlbl,
                                    buttons: [
                                        {
                                            text: this.okLbl,
                                            role: 'cancel',
                                            handler: () => {
                                                this.allocationStatus = true;
                                                this.unavailabilitySource.splice(this.unavailabilitySource.length, 1);
                                                this.eventSource.splice(this.eventSource.length, 1);
                                                this.myCal.loadEvents();
                                            }
                                        }
                                    ]
                                });
                                alert.present();
                            }
                            else {
                                let d = this.allocationSource[i].startTime.getDate();
                                let m = this.allocationSource[i].startTime.getMonth() + 1;
                                let y = this.allocationSource[i].startTime.getFullYear();
                                let fullDt = '' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
                                let alert = yield this.alertCtrl.create({
                                    header: this.confirmLbl,
                                    subHeader: this.allocatedTask,
                                    message: fullDt,
                                    buttons: [
                                        {
                                            text: this.cancelLbl,
                                            role: 'cancel',
                                            handler: () => {
                                                this.availability = false;
                                                this.allocationStatus = false;
                                                this.unavailabilitySource.splice(this.unavailabilitySource.length - 1, 1);
                                                this.eventSource.splice(this.eventSource.length - 1, 1);
                                                this.myCal.loadEvents();
                                            }
                                        },
                                        {
                                            text: this.confirmLbl,
                                            handler: data => {
                                                let schedules = {
                                                    userID: this.userId,
                                                    scheduleid: this.allocationSource[i].scheduleid,
                                                    reqid: this.allocationSource[i].reqid
                                                };
                                                this.emp.deAllocateEmp(schedules).subscribe(res => {
                                                    if (res['data'] == 'success') {
                                                        this.availability = true;
                                                        this.allocationStatus = true;
                                                    }
                                                }, err => {
                                                    // console.log(err)
                                                });
                                            }
                                        }
                                    ]
                                });
                                alert.present();
                            }
                        }
                        else {
                            this.allocationStatus = true;
                        }
                    }
                }
                // end of Allocation check
                // To push into the array for insertion purpose
                if ((this.availability == true) && (this.allocationStatus == true)) {
                    let dt = this.event.startTime.toISOString();
                    let endDt = this.event.startTime;
                    endDt = new Date(endDt);
                    let nwdt = endDt.setDate(endDt.getDate());
                    let todt = new Date(nwdt).toISOString();
                    let dt_str = this.event.startTime.toDateString();
                    this.events.push({
                        title: 1,
                        startTime: new Date(this.event.startTime),
                        endTime: new Date(this.event.startTime),
                        allDay: true,
                        leaveid: null,
                        status: 3
                    });
                    let payload = {
                        userID: this.userId,
                        empid: this.emprecnum,
                        fromdate: dt,
                        todate: todt,
                        status: 3,
                        date: this.event.startTime,
                        siteid: this.siteId
                    };
                    this.unavailabilitySource.push(payload);
                    this.eventSource = this.events;
                    this.availability = false;
                    this.myCal.loadEvents();
                }
                // End of array push
            }
            else {
                if (this.availability == true) {
                    // if previous day selected
                    const alert = yield this.alertCtrl.create({
                        header: this.NALbl,
                        message: this.NAmsg,
                        buttons: [this.okLbl],
                    });
                    alert.present();
                }
            }
        });
    }
    addAvailability(currentdt) {
        this.currDt = currentdt;
        this.availability = true;
        this.consecutiveDay = false;
        this.allocationStatus = true;
        this.remSelectedDt = false;
        this.remBackendSelDt = false;
        this.remFrmSrcArr = false;
    }
    onSubmit() {
        for (let i = 0; i < this.unavailabilitySource.length; i++) {
            this.emp.addAvailabilty(this.unavailabilitySource[i]).subscribe(res => {
                if (res['data'] == "Success") {
                    this.getEmpAvail();
                }
            }, err => {
                console.log(err);
            });
        }
        this.myCal.loadEvents();
        this.unavailabilitySource = [];
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.startTime, 'medium', 'en-US');
            let end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.endTime, 'medium', 'en-US');
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
AvailabilityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _emp_service__WEBPACK_IMPORTED_MODULE_7__["EmpService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"])
], AvailabilityComponent.prototype, "myCal", void 0);
AvailabilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-availability',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./availability.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/availability/availability.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./availability.component.scss */ "./src/app/folder/employee/availability/availability.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"]))
], AvailabilityComponent);



/***/ }),

/***/ "./src/app/folder/employee/emp.service.ts":
/*!************************************************!*\
  !*** ./src/app/folder/employee/emp.service.ts ***!
  \************************************************/
/*! exports provided: EmpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpService", function() { return EmpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");










let EmpService = class EmpService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.userId = window.localStorage.getItem('userId');
        this.emprecnum = window.localStorage.getItem('user2employee');
    }
    getCustomer() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/customer/' + this.userId)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    getCustLocation(customer_recnum) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/location/' + this.userId + '/' + customer_recnum)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    getCustSkills() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/skills/' + this.userId + '/' + this.emprecnum)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    getCategories() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/categorys/' + this.userId)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    getAllocations() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'srs/getAllocationlist4user/' + this.userId + '/' + this.emprecnum)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    deAllocateEmp(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'srs/Deallocate', data)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    getEmpAvailability() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/EmpUnavailSummary/' + this.userId + '/' + this.emprecnum)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    addAvailabilty(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/insertEmpunAvailtoleave', data)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    updateAvailabilty(leaveid) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/updateUnavailEmp/' + this.userId + '/' + leaveid)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    handleErrors(error) {
        console.log(error.error.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.error.message || 'backend server error');
    }
};
EmpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
];
EmpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EmpService);



/***/ }),

/***/ "./src/app/folder/employee/employee-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/employee/employee-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addavailability/addavailability.component */ "./src/app/folder/employee/addavailability/addavailability.component.ts");
/* harmony import */ var _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./availability/availability.component */ "./src/app/folder/employee/availability/availability.component.ts");





const routes = [
    {
        path: '',
        component: _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__["AvailabilityComponent"]
    },
    {
        path: '',
        component: _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__["AvailabilityComponent"]
    },
    {
        path: 'addavail',
        component: _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_3__["AddavailabilityComponent"]
    }
];
let EmployeeRoutingModule = class EmployeeRoutingModule {
};
EmployeeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployeeRoutingModule);



/***/ }),

/***/ "./src/app/folder/employee/employee.module.ts":
/*!****************************************************!*\
  !*** ./src/app/folder/employee/employee.module.ts ***!
  \****************************************************/
/*! exports provided: createTranslateLoader, EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/folder/employee/employee-routing.module.ts");
/* harmony import */ var _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./availability/availability.component */ "./src/app/folder/employee/availability/availability.component.ts");
/* harmony import */ var _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addavailability/addavailability.component */ "./src/app/folder/employee/addavailability/addavailability.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");












// import localezh from '@angular/common/locales/zh-Hans';
// registerLocaleData(localezh);
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_availability_availability_component__WEBPACK_IMPORTED_MODULE_4__["AvailabilityComponent"], _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_5__["AddavailabilityComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__["NgCalendarModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                }
            })
        ],
        providers: [
        // { provide: LOCALE_ID, useValue: 'zh-Hans' }
        ]
    })
], EmployeeModule);



/***/ })

}]);
//# sourceMappingURL=employee-employee-module-es2015.js.map