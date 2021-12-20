function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/addavailability/addavailability.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/addavailability/addavailability.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderEmployeeAddavailabilityAddavailabilityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar  class=\"toolBar\">\r\n      <ion-buttons slot=\"start\" class=\"btnHome\">\r\n         <ion-button class=\"btnHome\" (click)=\"goBack()\">\r\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\r\n          </ion-button>\r\n      </ion-buttons>\r\n    <ion-title>Add Availability</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">Customer</ion-label>\r\n    <ion-select [(ngModel)]=\"customer_recnum\" (ngModelChange)=\"location(customer_recnum)\">\r\n      <ion-select-option *ngFor=\"let cust of customersList\" value=\"{{cust.recnum}}\">{{cust.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">Category</ion-label>\r\n    <ion-select [(ngModel)]=\"category_type\">\r\n      <ion-select-option *ngFor=\"let category of categoryList\" value=\"{{category.recnum}}\">{{category.type}} ({{category.category_name}})</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">Skill</ion-label>\r\n    <ion-select [(ngModel)]=\"cust_skill\">\r\n      <ion-select-option *ngFor=\"let skill of skillsList\" value=\"{{skill.id}}\">{{skill.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"loc\">\r\n    <ion-label position=\"floating\" class=\"fntcolor\">Location</ion-label>\r\n    <ion-select [(ngModel)]=\"cust_locn\">\r\n      <ion-select-option *ngFor=\"let loc of locationList\" value=\"{{loc.id}}\">{{loc.name}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">From</ion-label>\r\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"frm_dt\" name=\"frm_dt\" required></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">To</ion-label>\r\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"to_dt\" name=\"to_dt\" required></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">Start Time</ion-label>\r\n    <ion-datetime display-format=\"HH:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"start_time\"  name=\"start_time\" required></ion-datetime>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">End Time</ion-label>\r\n    <ion-datetime display-format=\"HH:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"end_time\"  name=\"end_time\" required></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\" class=\"fntcolor\">Status</ion-label>\r\n    <ion-select [(ngModel)]=\"status\">\r\n      <ion-select-option value=\"Available\">Available</ion-select-option>\r\n      <ion-select-option value=\"Unavailable\">Unavailable</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"addAvaialability()\">Submit</ion-button>\r\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/availability/availability.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/availability/availability.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderEmployeeAvailabilityAvailabilityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolBar\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-buttons slot=\"start\">\r\n              <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n      </ion-buttons>\r\n    <ion-title>{{'Availability'|translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-row>\r\n      <!-- Move back one screen of the slides -->\r\n      <ion-col size=\"2\">\r\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"back()\" class=\"iconBtn\">\r\n          <ion-icon name=\"chevron-back-outline\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n   \r\n      <ion-col size=\"8\" class=\"ion-text-center\">\r\n        <h2 class=\"pos\">{{ viewTitle }}</h2>\r\n      </ion-col>\r\n   \r\n      <!-- Move forward one screen of the slides -->\r\n      <ion-col size=\"2\">\r\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"next()\" class=\"iconBtn\">\r\n          <ion-icon name=\"chevron-forward-outline\" slot=\"icon-only\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <calendar\r\n    [eventSource]=\"eventSource\"\r\n    [calendarMode]=\"calendar.mode\"\r\n    [currentDate]=\"calendar.currentDate\"\r\n    (onEventSelected)=\"onEventSelected($event)\"\r\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\r\n    (onTimeSelected)=\"onTimeSelected($event)\"\r\n    (click)=\"addAvailability(calendar.currentDate)\"\r\n    id=\"cal\"\r\n    >\r\n    </calendar>\r\n    <br/>\r\n    <ion-button color=\"primary\" (click)=\"onSubmit()\" class=\"avlbl\">\r\n      {{'Add unavailable'|translate}}\r\n    </ion-button>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/folder/employee/addavailability/addavailability.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/folder/employee/addavailability/addavailability.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderEmployeeAddavailabilityAddavailabilityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnHome {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2FkZGF2YWlsYWJpbGl0eS9DOlxcVXNlcnNcXG1hbnVtXFxEb3dubG9hZHNcXGZsdWVudGNlcFRNUy1tYXN0ZXJcXGZsdWVudGNlcFRNUy9zcmNcXGFwcFxcZm9sZGVyXFxlbXBsb3llZVxcYWRkYXZhaWxhYmlsaXR5XFxhZGRhdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9lbXBsb3llZS9hZGRhdmFpbGFiaWxpdHkvYWRkYXZhaWxhYmlsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2FkZGF2YWlsYWJpbGl0eS9hZGRhdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuSG9tZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH0iLCIuYnRuSG9tZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/folder/employee/addavailability/addavailability.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/folder/employee/addavailability/addavailability.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AddavailabilityComponent */

  /***/
  function srcAppFolderEmployeeAddavailabilityAddavailabilityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddavailabilityComponent", function () {
      return AddavailabilityComponent;
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


    var _emp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../emp.service */
    "./src/app/folder/employee/emp.service.ts");

    var AddavailabilityComponent = /*#__PURE__*/function () {
      function AddavailabilityComponent(router, emp) {
        _classCallCheck(this, AddavailabilityComponent);

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

      _createClass(AddavailabilityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigateByUrl('/folder/emp');
        }
      }, {
        key: "customers",
        value: function customers() {
          var _this = this;

          this.emp.getCustomer().subscribe(function (res) {
            // console.log(res['data']);
            _this.customersList = res['data'];
            _this.totalCount = _this.customersList.length;
            _this.showSpinner = false;

            if (_this.customersList.length == 0) {
              _this.nodat = true;
              _this.showSpinner = false;
            }
          });
        }
      }, {
        key: "location",
        value: function location(customer_recnum) {
          var _this2 = this;

          this.loc = true;
          this.emp.getCustLocation(customer_recnum).subscribe(function (res) {
            // console.log(res['data']);
            _this2.locationList = res['data'];
            _this2.totalCount = _this2.locationList.length;
            _this2.showSpinner = false;

            if (_this2.locationList.length == 0) {
              _this2.nodat = true;
              _this2.showSpinner = false;
            }
          });
        }
      }, {
        key: "skills",
        value: function skills() {
          var _this3 = this;

          this.emp.getCustSkills().subscribe(function (res) {
            // console.log(res['data']);
            _this3.skillsList = res['data'];
            _this3.totalCount = _this3.skillsList.length;
            _this3.showSpinner = false;

            if (_this3.skillsList.length == 0) {
              _this3.nodat = true;
              _this3.showSpinner = false;
            }
          });
        }
      }, {
        key: "category",
        value: function category() {
          var _this4 = this;

          this.emp.getCategories().subscribe(function (res) {
            // console.log(res['data']);
            _this4.categoryList = res['data'];
            _this4.totalCount = _this4.categoryList.length;
            _this4.showSpinner = false;

            if (_this4.categoryList.length == 0) {
              _this4.nodat = true;
              _this4.showSpinner = false;
            }
          });
        }
      }, {
        key: "addAvaialability",
        value: function addAvaialability() {
          var _this5 = this;

          var payload = {
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
          this.emp.addAvailabilty(payload).subscribe(function (res) {
            console.log(res['data']);
          }, function (error) {
            _this5.errTitle = 'Error!';
            _this5.errMsg = error;
          });
        }
      }]);

      return AddavailabilityComponent;
    }();

    AddavailabilityComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _emp_service__WEBPACK_IMPORTED_MODULE_3__["EmpService"]
      }];
    };

    AddavailabilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addavailability',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addavailability.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/addavailability/addavailability.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addavailability.component.scss */
      "./src/app/folder/employee/addavailability/addavailability.component.scss"))["default"]]
    })], AddavailabilityComponent);
    /***/
  },

  /***/
  "./src/app/folder/employee/availability/availability.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/folder/employee/availability/availability.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderEmployeeAvailabilityAvailabilityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnHome {\n  color: white;\n}\n\n.avlbl {\n  float: right;\n  margin-right: 1rem;\n}\n\n.iconsize {\n  text-align: center;\n  font-size: 1.5rem;\n  margin: auto;\n}\n\n.pos {\n  margin-top: 8px;\n}\n\n.iconBtn {\n  background-color: #eaf2fe;\n}\n\n.algn {\n  margin-left: 0.8rem;\n}\n\n:host ::ng-deep .monthview-container {\n  height: auto !important;\n}\n\n:host ::ng-deep .event-detail-container {\n  display: none;\n}\n\n.avl {\n  color: var(--ion-color-danger) !important;\n  font-size: 0.5rem !important;\n}\n\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: white !important;\n  color: black !important;\n}\n\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-success) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2VtcGxveWVlL2F2YWlsYWJpbGl0eS9DOlxcVXNlcnNcXG1hbnVtXFxEb3dubG9hZHNcXGZsdWVudGNlcFRNUy1tYXN0ZXJcXGZsdWVudGNlcFRNUy9zcmNcXGFwcFxcZm9sZGVyXFxlbXBsb3llZVxcYXZhaWxhYmlsaXR5XFxhdmFpbGFiaWxpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9lbXBsb3llZS9hdmFpbGFiaWxpdHkvYXZhaWxhYmlsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURGQTtFQUNFLG1CQUFBO0FDS0Y7O0FERkk7RUFDTSx1QkFBQTtBQ0tWOztBREhNO0VBQ0ksYUFBQTtBQ0tWOztBRGFFO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtBQ1ZKOztBRGFJO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQ1ZOOztBRGFJO0VBQ0UscURBQUE7QUNYTiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9lbXBsb3llZS9hdmFpbGFiaWxpdHkvYXZhaWxhYmlsaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkhvbWV7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmF2bGJsIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5pY29uc2l6ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5wb3Mge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5pY29uQnRue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWYyZmU7XHJcbn1cclxuXHJcbi5hbGdue1xyXG4gIG1hcmdpbi1sZWZ0OjAuOHJlbTtcclxufVxyXG4gIDpob3N0IDo6bmctZGVlcCB7XHJcbiAgICAubW9udGh2aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuLy8gSW5kaWNhdG9yIGZvciBldmVudHNcclxuXHJcbiAgLy8gLmluZGljYXRvci1jb250YWluZXIge1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgLy8gICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xyXG4gIC8vIH1cclxuICAgXHJcbiAgLy8gLmV2ZW50LWluZGljYXRvciB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAvLyAgIHdpZHRoOiA1cHg7XHJcbiAgLy8gICBoZWlnaHQ6IDVweDtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvLyAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgLy8gfVxyXG4gIC5hdmwge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcbiAgICAubW9udGh2aWV3LXNlbGVjdGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICBcclxuICAvLyAud2l0aC1ldmVudCB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLy8gfSIsIi5idG5Ib21lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYXZsYmwge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmljb25zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucG9zIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uaWNvbkJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWYyZmU7XG59XG5cbi5hbGduIHtcbiAgbWFyZ2luLWxlZnQ6IDAuOHJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb250aHZpZXctY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmV2ZW50LWRldGFpbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXZsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubW9udGh2aWV3LXByaW1hcnktd2l0aC1ldmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tb250aHZpZXctc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/folder/employee/availability/availability.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/folder/employee/availability/availability.component.ts ***!
    \************************************************************************/

  /*! exports provided: AvailabilityComponent */

  /***/
  function srcAppFolderEmployeeAvailabilityAvailabilityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvailabilityComponent", function () {
      return AvailabilityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _emp_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../emp.service */
    "./src/app/folder/employee/emp.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AvailabilityComponent = /*#__PURE__*/function () {
      function AvailabilityComponent(router, route, alertCtrl, emp, translate, locale) {
        _classCallCheck(this, AvailabilityComponent);

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
          currentDate: new Date()
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
        } else {
          this.lang = this.locStorageLang;
          this.translate.use(this.lang);
        }

        this.userId = window.localStorage.getItem('userId');
        this.emprecnum = window.localStorage.getItem('user2employee');
        this.siteId = window.localStorage.getItem('siteId');
      }

      _createClass(AvailabilityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.unavailabilitySource = [];
          var date = new Date();
          this.firstDay = moment__WEBPACK_IMPORTED_MODULE_6__(new Date(date.getFullYear(), date.getMonth(), 1)).format('YYYY-MM-DD');
          this.lastDay = moment__WEBPACK_IMPORTED_MODULE_6__(new Date(date.getFullYear(), date.getMonth() + 1, 0)).format('YYYY-MM-DD');
          this.getEmpAvail();
          this.getAllocations(); // language

          this.translate.get('Availability').subscribe(function (value) {
            // value is our translated string
            _this6.availabilityTitle = value;
          });
          this.translate.get('Unavailable on').subscribe(function (value) {
            _this6.unavailableOn = value;
          });
          this.translate.get('Make available').subscribe(function (value) {
            _this6.makeAvlbl = value;
          });
          this.translate.get('Not Allowed').subscribe(function (value) {
            _this6.NALbl = value;
          });
          this.translate.get('Enter time').subscribe(function (value) {
            _this6.enterTime = value;
          });
          this.translate.get('Cancel').subscribe(function (value) {
            _this6.cancelLbl = value;
          });
          this.translate.get('Ok').subscribe(function (value) {
            _this6.okLbl = value;
          });
          this.translate.get('From').subscribe(function (value) {
            _this6.fromLbl = value;
          });
          this.translate.get('To').subscribe(function (value) {
            _this6.toLbl = value;
          });
          this.translate.get('Greater than today').subscribe(function (value) {
            _this6.NAmsg = value;
          });
          this.translate.get('Confirm').subscribe(function (value) {
            _this6.confirmLbl = value;
          });
          this.translate.get('NALeave').subscribe(function (value) {
            _this6.consecutiveMsg = value;
          });
          this.translate.get('Make unavailable').subscribe(function (value) {
            _this6.makeUnavlbl = value;
          });
          this.translate.get('Cannot make Unavailable').subscribe(function (value) {
            _this6.cannotMakeUnavlbl = value;
          });
          this.translate.get('Allocated task').subscribe(function (value) {
            _this6.allocatedTask = value;
          });
        }
      }, {
        key: "getAllocations",
        value: function getAllocations() {
          var _this7 = this;

          this.allocationSource = [];
          this.emp.getAllocations().subscribe(function (res) {
            if (res['data']) {
              _this7.allocationsList = res['data'];
              var len = res['data'].length;

              for (var i = 0; i < len; i++) {
                _this7.allocationSource.push({
                  scheduleid: res['data'][i].scheduleid,
                  reqid: res['data'][i].reqid,
                  startTime: new Date(res['data'][i].date),
                  shift: res['data'][i].shift,
                  taskid: res['data'][i].taskrecnum,
                  taskstatus: res['data'][i].taskstatus,
                  taskstage: res['data'][i].taskstage
                });
              }
            }
          });
        }
      }, {
        key: "getEmpAvail",
        value: function getEmpAvail() {
          var _this8 = this;

          this.events = [];
          this.emp.getEmpAvailability().subscribe(function (res) {
            if (res['data']) {
              _this8.unavailabilityList = res['data'];
              var len = res['data'].length;

              for (var i = 0; i < len; i++) {
                if (res['data'][i].status == 3) {
                  _this8.events.push({
                    title: res['data'][i].status,
                    startTime: new Date(res['data'][i].fromdate),
                    endTime: new Date(res['data'][i].todate),
                    allDay: true,
                    leaveid: res['data'][i].leaveid,
                    status: res['data'][i].status
                  });
                }
              }

              _this8.eventSource = _this8.events;
              _this8.dbEventSource = _this8.events;

              _this8.myCal.loadEvents();
            }
          }, function (err) {// console.log(err);
          });
        }
      }, {
        key: "next",
        value: function next() {
          this.myCal.slideNext();
          this.getEmpAvail();
        }
      }, {
        key: "back",
        value: function back() {
          this.myCal.slidePrev();
          this.getEmpAvail();
        } // Selected date range and hence title changed

      }, {
        key: "onViewTitleChanged",
        value: function onViewTitleChanged(title) {
          this.viewTitle = title;
        }
      }, {
        key: "onTimeSelected",
        value: function onTimeSelected(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this9 = this;

            var dt, endDt, nwdt, todt, dt_str, i, newDt, selDt, removed, _i, _newDt, _selDt, _removed, _loop, _i2, _loop2, _i3, _dt, _endDt, _nwdt, _todt, _dt_str, payload, alert;

            return regeneratorRuntime.wrap(function _callee$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.event.startTime = new Date(ev.selectedTime);
                    dt = this.event.startTime.toISOString();
                    endDt = this.event.startTime;
                    endDt = new Date(endDt);
                    nwdt = endDt.setDate(endDt.getDate());
                    todt = new Date(nwdt).toISOString();
                    dt_str = this.event.startTime.toDateString();

                    if (!(this.availability == true && this.event.startTime >= this.currDt)) {
                      _context3.next = 29;
                      break;
                    }

                    // To remove from local array
                    if (this.availability == true) {
                      for (i = 0; i < this.unavailabilitySource.length; i++) {
                        newDt = this.unavailabilitySource[i].date.toDateString();
                        selDt = this.event.startTime.toDateString();

                        if (newDt === selDt) {
                          removed = this.unavailabilitySource.splice(i, 1);
                          this.availability = false;
                          this.remSelectedDt = true;
                          this.remFrmSrcArr = true;
                          this.myCal.loadEvents();
                        }
                      }
                    } // End of local array removal
                    // To remove from main array


                    if (this.remFrmSrcArr) {
                      // to remove from main src array which is for insert purpose
                      for (_i = 0; _i < this.eventSource.length; _i++) {
                        _newDt = this.eventSource[_i].startTime.toDateString();
                        _selDt = this.event.startTime.toDateString();

                        if (_newDt === _selDt && this.eventSource[_i].title == 1) {
                          _removed = this.eventSource.splice(_i, 1);
                          this.remSelectedDt = true;
                          this.remFrmSrcArr = true;
                          this.myCal.loadEvents();
                        }
                      }
                    } // End of main array
                    // To Remove Existing Unavailablity(In DB) and making Available  && (this.consecutiveDay==false)


                    if (!(this.availability == true && this.remSelectedDt == false)) {
                      _context3.next = 18;
                      break;
                    }

                    _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(_i2) {
                      var newDt, selDt, d, m, y, fullDt, alert;
                      return regeneratorRuntime.wrap(function _loop$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              newDt = _this9.dbEventSource[_i2].startTime.toDateString();
                              selDt = _this9.event.startTime.toDateString();

                              if (!(newDt === selDt)) {
                                _context.next = 12;
                                break;
                              }

                              if (!(_this9.dbEventSource[_i2].status == 3)) {
                                _context.next = 12;
                                break;
                              }

                              d = _this9.dbEventSource[_i2].startTime.getDate();
                              m = _this9.dbEventSource[_i2].startTime.getMonth() + 1;
                              y = _this9.dbEventSource[_i2].startTime.getFullYear();
                              fullDt = '' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
                              _context.next = 10;
                              return _this9.alertCtrl.create({
                                header: _this9.availabilityTitle,
                                subHeader: _this9.unavailableOn,
                                message: fullDt,
                                buttons: [{
                                  text: _this9.okLbl,
                                  role: 'cancel',
                                  handler: function handler() {// console.log('Cancelled');
                                  }
                                }, {
                                  text: _this9.makeAvlbl,
                                  handler: function handler(data) {
                                    _this9.emp.updateAvailabilty(_this9.dbEventSource[_i2].leaveid).subscribe(function (res) {
                                      if (res['data'] == 'Success') {
                                        _this9.getEmpAvail();
                                      }
                                    }, function (err) {
                                      console.log(err);
                                    });

                                    _this9.availability = false;
                                  }
                                }]
                              });

                            case 10:
                              alert = _context.sent;
                              alert.present();

                            case 12:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _loop);
                    });
                    _i2 = 0;

                  case 13:
                    if (!(_i2 < this.dbEventSource.length)) {
                      _context3.next = 18;
                      break;
                    }

                    return _context3.delegateYield(_loop(_i2), "t0", 15);

                  case 15:
                    _i2++;
                    _context3.next = 13;
                    break;

                  case 18:
                    if (!(this.availability == true)) {
                      _context3.next = 26;
                      break;
                    }

                    _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(_i3) {
                      var newDt, selDt, alert, d, m, y, fullDt, _alert;

                      return regeneratorRuntime.wrap(function _loop2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              newDt = _this9.allocationSource[_i3].startTime.toDateString();
                              selDt = _this9.event.startTime.toDateString();

                              if (!(newDt === selDt)) {
                                _context2.next = 22;
                                break;
                              }

                              if (!(_this9.allocationSource[_i3].taskstage == 'Accepted')) {
                                _context2.next = 12;
                                break;
                              }

                              _this9.availability = false;
                              _this9.allocationStatus = true;
                              _context2.next = 8;
                              return _this9.alertCtrl.create({
                                header: _this9.NALbl,
                                message: _this9.cannotMakeUnavlbl,
                                buttons: [{
                                  text: _this9.okLbl,
                                  role: 'cancel',
                                  handler: function handler() {
                                    _this9.allocationStatus = true;

                                    _this9.unavailabilitySource.splice(_this9.unavailabilitySource.length, 1);

                                    _this9.eventSource.splice(_this9.eventSource.length, 1);

                                    _this9.myCal.loadEvents();
                                  }
                                }]
                              });

                            case 8:
                              alert = _context2.sent;
                              alert.present();
                              _context2.next = 20;
                              break;

                            case 12:
                              d = _this9.allocationSource[_i3].startTime.getDate();
                              m = _this9.allocationSource[_i3].startTime.getMonth() + 1;
                              y = _this9.allocationSource[_i3].startTime.getFullYear();
                              fullDt = '' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + '-' + y;
                              _context2.next = 18;
                              return _this9.alertCtrl.create({
                                header: _this9.confirmLbl,
                                subHeader: _this9.allocatedTask,
                                message: fullDt,
                                buttons: [{
                                  text: _this9.cancelLbl,
                                  role: 'cancel',
                                  handler: function handler() {
                                    _this9.availability = false;
                                    _this9.allocationStatus = false;

                                    _this9.unavailabilitySource.splice(_this9.unavailabilitySource.length - 1, 1);

                                    _this9.eventSource.splice(_this9.eventSource.length - 1, 1);

                                    _this9.myCal.loadEvents();
                                  }
                                }, {
                                  text: _this9.confirmLbl,
                                  handler: function handler(data) {
                                    var schedules = {
                                      userID: _this9.userId,
                                      scheduleid: _this9.allocationSource[_i3].scheduleid,
                                      reqid: _this9.allocationSource[_i3].reqid
                                    };

                                    _this9.emp.deAllocateEmp(schedules).subscribe(function (res) {
                                      if (res['data'] == 'success') {
                                        _this9.availability = true;
                                        _this9.allocationStatus = true;
                                      }
                                    }, function (err) {// console.log(err)
                                    });
                                  }
                                }]
                              });

                            case 18:
                              _alert = _context2.sent;

                              _alert.present();

                            case 20:
                              _context2.next = 23;
                              break;

                            case 22:
                              _this9.allocationStatus = true;

                            case 23:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _loop2);
                    });
                    _i3 = 0;

                  case 21:
                    if (!(_i3 < this.allocationSource.length)) {
                      _context3.next = 26;
                      break;
                    }

                    return _context3.delegateYield(_loop2(_i3), "t1", 23);

                  case 23:
                    _i3++;
                    _context3.next = 21;
                    break;

                  case 26:
                    // end of Allocation check
                    // To push into the array for insertion purpose
                    if (this.availability == true && this.allocationStatus == true) {
                      _dt = this.event.startTime.toISOString();
                      _endDt = this.event.startTime;
                      _endDt = new Date(_endDt);
                      _nwdt = _endDt.setDate(_endDt.getDate());
                      _todt = new Date(_nwdt).toISOString();
                      _dt_str = this.event.startTime.toDateString();
                      this.events.push({
                        title: 1,
                        startTime: new Date(this.event.startTime),
                        endTime: new Date(this.event.startTime),
                        allDay: true,
                        leaveid: null,
                        status: 3
                      });
                      payload = {
                        userID: this.userId,
                        empid: this.emprecnum,
                        fromdate: _dt,
                        todate: _todt,
                        status: 3,
                        date: this.event.startTime,
                        siteid: this.siteId
                      };
                      this.unavailabilitySource.push(payload);
                      this.eventSource = this.events;
                      this.availability = false;
                      this.myCal.loadEvents();
                    } // End of array push


                    _context3.next = 34;
                    break;

                  case 29:
                    if (!(this.availability == true)) {
                      _context3.next = 34;
                      break;
                    }

                    _context3.next = 32;
                    return this.alertCtrl.create({
                      header: this.NALbl,
                      message: this.NAmsg,
                      buttons: [this.okLbl]
                    });

                  case 32:
                    alert = _context3.sent;
                    alert.present();

                  case 34:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addAvailability",
        value: function addAvailability(currentdt) {
          this.currDt = currentdt;
          this.availability = true;
          this.consecutiveDay = false;
          this.allocationStatus = true;
          this.remSelectedDt = false;
          this.remBackendSelDt = false;
          this.remFrmSrcArr = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          for (var i = 0; i < this.unavailabilitySource.length; i++) {
            this.emp.addAvailabilty(this.unavailabilitySource[i]).subscribe(function (res) {
              if (res['data'] == "Success") {
                _this10.getEmpAvail();
              }
            }, function (err) {
              console.log(err);
            });
          }

          this.myCal.loadEvents();
          this.unavailabilitySource = [];
        } // Calendar event was clicked

      }, {
        key: "onEventSelected",
        value: function onEventSelected(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var start, end, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.startTime, 'medium', 'en-US');
                    end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(event.endTime, 'medium', 'en-US');
                    _context4.next = 4;
                    return this.alertCtrl.create({
                      header: event.title,
                      subHeader: event.desc,
                      message: this.fromLbl + ': ' + start + '<br><br>' + this.toLbl + ': ' + end,
                      buttons: [this.okLbl]
                    });

                  case 4:
                    alert = _context4.sent;
                    alert.present();

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AvailabilityComponent;
    }();

    AvailabilityComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _emp_service__WEBPACK_IMPORTED_MODULE_7__["EmpService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(ionic2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"])], AvailabilityComponent.prototype, "myCal", void 0);
    AvailabilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-availability',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./availability.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/employee/availability/availability.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./availability.component.scss */
      "./src/app/folder/employee/availability/availability.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"]))], AvailabilityComponent);
    /***/
  },

  /***/
  "./src/app/folder/employee/emp.service.ts":
  /*!************************************************!*\
    !*** ./src/app/folder/employee/emp.service.ts ***!
    \************************************************/

  /*! exports provided: EmpService */

  /***/
  function srcAppFolderEmployeeEmpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpService", function () {
      return EmpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var EmpService = /*#__PURE__*/function () {
      function EmpService(http, storage) {
        _classCallCheck(this, EmpService);

        this.http = http;
        this.storage = storage;
        this.userId = window.localStorage.getItem('userId');
        this.emprecnum = window.localStorage.getItem('user2employee');
      }

      _createClass(EmpService, [{
        key: "getCustomer",
        value: function getCustomer() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/customer/' + this.userId).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getCustLocation",
        value: function getCustLocation(customer_recnum) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/location/' + this.userId + '/' + customer_recnum).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getCustSkills",
        value: function getCustSkills() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/skills/' + this.userId + '/' + this.emprecnum).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/categorys/' + this.userId).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getAllocations",
        value: function getAllocations() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'srs/getAllocationlist4user/' + this.userId + '/' + this.emprecnum).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "deAllocateEmp",
        value: function deAllocateEmp(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'srs/Deallocate', data).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getEmpAvailability",
        value: function getEmpAvailability() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/EmpUnavailSummary/' + this.userId + '/' + this.emprecnum).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "addAvailabilty",
        value: function addAvailabilty(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/insertEmpunAvailtoleave', data).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "updateAvailabilty",
        value: function updateAvailabilty(leaveid) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].urlPHP + 'employee/updateUnavailEmp/' + this.userId + '/' + leaveid).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "handleErrors",
        value: function handleErrors(error) {
          console.log(error.error.message);
          return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](error.error.message || 'backend server error');
        }
      }]);

      return EmpService;
    }();

    EmpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }];
    };

    EmpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], EmpService);
    /***/
  },

  /***/
  "./src/app/folder/employee/employee-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/folder/employee/employee-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: EmployeeRoutingModule */

  /***/
  function srcAppFolderEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
      return EmployeeRoutingModule;
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


    var _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addavailability/addavailability.component */
    "./src/app/folder/employee/addavailability/addavailability.component.ts");
    /* harmony import */


    var _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./availability/availability.component */
    "./src/app/folder/employee/availability/availability.component.ts");

    var routes = [{
      path: '',
      component: _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__["AvailabilityComponent"]
    }, {
      path: '',
      component: _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__["AvailabilityComponent"]
    }, {
      path: 'addavail',
      component: _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_3__["AddavailabilityComponent"]
    }];

    var EmployeeRoutingModule = function EmployeeRoutingModule() {
      _classCallCheck(this, EmployeeRoutingModule);
    };

    EmployeeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmployeeRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/employee/employee.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/folder/employee/employee.module.ts ***!
    \****************************************************/

  /*! exports provided: createTranslateLoader, EmployeeModule */

  /***/
  function srcAppFolderEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
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


    var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee-routing.module */
    "./src/app/folder/employee/employee-routing.module.ts");
    /* harmony import */


    var _availability_availability_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./availability/availability.component */
    "./src/app/folder/employee/availability/availability.component.ts");
    /* harmony import */


    var _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addavailability/addavailability.component */
    "./src/app/folder/employee/addavailability/addavailability.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic2-calendar */
    "./node_modules/ionic2-calendar/__ivy_ngcc__/fesm2015/ionic2-calendar.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // import localezh from '@angular/common/locales/zh-Hans';
    // registerLocaleData(localezh);


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_availability_availability_component__WEBPACK_IMPORTED_MODULE_4__["AvailabilityComponent"], _addavailability_addavailability_component__WEBPACK_IMPORTED_MODULE_5__["AddavailabilityComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ionic2_calendar__WEBPACK_IMPORTED_MODULE_8__["NgCalendarModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
        }
      })],
      providers: [// { provide: LOCALE_ID, useValue: 'zh-Hans' }
      ]
    })], EmployeeModule);
    /***/
  }
}]);
//# sourceMappingURL=employee-employee-module-es5.js.map