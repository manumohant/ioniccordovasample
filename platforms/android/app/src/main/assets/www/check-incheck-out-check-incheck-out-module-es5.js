function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-incheck-out-check-incheck-out-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/check-incheck-out/checkin/checkin.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/check-incheck-out/checkin/checkin.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderCheckIncheckOutCheckinCheckinComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n            <ion-button class=\"btnHome\"  (click)=\"goBack()\">\n              <!-- <i class=\"fas fa-arrow-left\"></i> &nbsp; -->\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>back\n            </ion-button>\n              <!-- <ion-menu-button></ion-menu-button> -->\n          </ion-buttons>\n      </ion-buttons>\n      <ion-title>{{'Task details'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"notesTab == false\">\n    <ion-card>\n      <ion-card-header class=\"card_desgn\">\n        <div class=\"main\">{{tasknam}}</div>\n        <!-- <div *ngIf=\"notesTab == false\"> -->\n          <div class=\"owner\" *ngIf=\"checkInDay\">{{'Checked in at'|translate}} {{checkInDay | date:\"MM-dd-yyyy hh:mm a\"}}</div>\n          <div class=\"owner\" *ngIf=\"checkoutDay\">{{'Checked out at'|translate}} {{checkoutDay | date:\"MM-dd-yyyy hh:mm a\"}}</div>\n        <!-- </div> -->\n      <!-- <span class=\"email_dt pos\" [ngStyle]=\"{'color': (details.stage =='Created') ? '#3dc2ff' : '' || (details.stage =='Completed') ? 'green' : '' || (details.stage =='Accepted') ? '#e0ac08' : ''}\">\n          {{details.stage|translate}}\n        </span> -->\n      </ion-card-header>\n\n      <ion-card-content>\n        <agm-map style=\"height:60vh\" [zoom]='19' [latitude]=\"lat\" [longitude]=\"lng\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n\n        <div class=\"btnGroup\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button class=\"btn\" [disabled]=\"enableCheckIn == false\" (click)=\"checkIn()\">&nbsp;{{'Check in'|translate}}&nbsp;</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button class=\"btn\" [disabled]=\"enableCheckOut == false\" (click)=\"break()\">&nbsp;&nbsp;&nbsp;{{'Interval'|translate}}&nbsp;&nbsp;&nbsp;&nbsp;</ion-button>              \n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button class=\"btn\" [disabled]=\"enableBreak == false\" (click)=\"checkOut()\">{{'Check out'|translate}}</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button class=\"btn\" [disabled]=\"enableComplet == false\" (click)=\"statusComplet()\">{{'Completed'|translate}}</ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n\n  <div class=\"top\" *ngIf=\"notesTab == true\">\n    <ion-item>   \n      <ion-label position=\"floating\">{{'Notes'|translate}}</ion-label>\n      <ion-textarea rows=\"4\" cols=\"20\" placeholder=\"{{'Enter notes'|translate}}\" [(ngModel)]=\"notes\" name=\"notes\"></ion-textarea>\n    </ion-item>\n    <ion-button class=\"rejc\" expand=\"full\" color=\"#00aaa0\" (click)=\"submitNotes()\">{{'Submit'|translate}}</ion-button>\n  </div>\n\n</ion-content>\n\n<!-- <ion-content>\n  <ion-grid *ngIf=\"notesTab == false\">\n  <div class=\"dayDetails\">\n    <h4>{{currentDay | date:\"MM-dd-yyyy hh:mm a\"}}</h4>\n    <p *ngIf=\"checkInDay\">{{'Checked in at'|translate}} {{checkInDay | date:\"MM-dd-yyyy hh:mm a\"}}</p>\n    <p *ngIf=\"checkoutDay\">{{'Checked out at'|translate}} {{checkoutDay | date:\"MM-dd-yyyy hh:mm a\"}}</p>\n  </div>\n  <ul class=\"breadcrumb\">\n    <li><span (click)=\"breadcrumb();\">{{'Tasks'|translate}}</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\n    <li class=\"active\">{{'Check in'|translate}} / {{'Check out'|translate}} : {{tasknam}}</li>\n  </ul>\n\n  <div class=\"btnGroup\">\n      <ion-button class=\"punchBtns\" color=\"#00aaa0\" [disabled]=\"enableCheckIn == false\" (click)=\"checkIn()\">&nbsp;{{'Check in'|translate}}&nbsp;</ion-button>\n      <ion-button class=\"punchBtns\" color=\"#00aaa0\" [disabled]=\"enableCheckOut == false\" (click)=\"checkOut()\">{{'Check out'|translate}}</ion-button>\n      <ion-button class=\"punchBtns\" *ngIf=\"type == 'TMS'\" [disabled]=\"enableBreak == false\" color=\"#00aaa0\" (click)=\"break()\">&nbsp;&nbsp;&nbsp;{{'Interval'|translate}}&nbsp;&nbsp;&nbsp;&nbsp;</ion-button>\n      <ion-button class=\"punchBtns\" color=\"#00aaa0\" *ngIf=\"type == 'TMS'\" [disabled]=\"enableComplet == false\" (click)=\"statusComplet()\">{{'Completed'|translate}}</ion-button>\n  </div>\n  <agm-map style=\"height:500px\" [zoom]='19' [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n</ion-grid>\n\n<div class=\"top\" *ngIf=\"notesTab == true\">\n  <ion-item>   \n    <ion-label position=\"floating\">{{'Notes'|translate}}</ion-label>\n    <ion-textarea rows=\"4\" cols=\"20\" placeholder=\"{{'Enter notes'|translate}}\" [(ngModel)]=\"notes\" name=\"notes\"></ion-textarea>\n  </ion-item>\n  <ion-button class=\"rejc\" expand=\"full\" color=\"#00aaa0\" (click)=\"submitNotes()\">{{'Submit'|translate}}</ion-button>\n</div>\n</ion-content> -->";
    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/Observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/Observable.js ***!
    \*********************************************************/

  /*! exports provided: Observable */

  /***/
  function node_modulesRxjsCompat_esm2015ObservableJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Observable", function () {
      return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"];
    }); //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/observable/throw.js ***!
    \*******************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddObservableThrowJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]["throw"] = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"];
    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throwError = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"]; //# sourceMappingURL=throw.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/operator/catch.js ***!
    \*****************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddOperatorCatchJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../operator/catch */
    "./node_modules/rxjs-compat/_esm2015/operator/catch.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype["catch"] = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"]; //# sourceMappingURL=catch.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
  /*!***************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
    \***************************************************************/

  /*! no exports provided */

  /***/
  function node_modulesRxjsCompat_esm2015AddOperatorMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../operator/map */
    "./node_modules/rxjs-compat/_esm2015/operator/map.js");

    rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"]; //# sourceMappingURL=map.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/operator/catch.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/operator/catch.js ***!
    \*************************************************************/

  /*! exports provided: _catch */

  /***/
  function node_modulesRxjsCompat_esm2015OperatorCatchJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_catch", function () {
      return _catch;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function _catch(selector) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(selector)(this);
    } //# sourceMappingURL=catch.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs-compat/_esm2015/operator/map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
    \***********************************************************/

  /*! exports provided: map */

  /***/
  function node_modulesRxjsCompat_esm2015OperatorMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "map", function () {
      return map;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    function map(project, thisArg) {
      return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
    } //# sourceMappingURL=map.js.map

    /***/

  },

  /***/
  "./src/app/folder/check-incheck-out/check-incheck-out-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/folder/check-incheck-out/check-incheck-out-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: CheckIncheckOutRoutingModule */

  /***/
  function srcAppFolderCheckIncheckOutCheckIncheckOutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckIncheckOutRoutingModule", function () {
      return CheckIncheckOutRoutingModule;
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


    var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./checkin/checkin.component */
    "./src/app/folder/check-incheck-out/checkin/checkin.component.ts");

    var routes = [{
      path: 'in/:id',
      component: _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_3__["CheckinComponent"]
    }];

    var CheckIncheckOutRoutingModule = function CheckIncheckOutRoutingModule() {
      _classCallCheck(this, CheckIncheckOutRoutingModule);
    };

    CheckIncheckOutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckIncheckOutRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/check-incheck-out/check-incheck-out.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/folder/check-incheck-out/check-incheck-out.module.ts ***!
    \**********************************************************************/

  /*! exports provided: createTranslateLoader, CheckIncheckOutModule */

  /***/
  function srcAppFolderCheckIncheckOutCheckIncheckOutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckIncheckOutModule", function () {
      return CheckIncheckOutModule;
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


    var _check_incheck_out_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./check-incheck-out-routing.module */
    "./src/app/folder/check-incheck-out/check-incheck-out-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./checkin/checkin.component */
    "./src/app/folder/check-incheck-out/checkin/checkin.component.ts");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var CheckIncheckOutModule = function CheckIncheckOutModule() {
      _classCallCheck(this, CheckIncheckOutModule);
    };

    CheckIncheckOutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_10__["CheckinComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _check_incheck_out_routing_module__WEBPACK_IMPORTED_MODULE_3__["CheckIncheckOutRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
        }
      })] // exports: [
      //   TranslateModule 
      // ]

    })], CheckIncheckOutModule);
    /***/
  },

  /***/
  "./src/app/folder/check-incheck-out/check-incheck-out.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/folder/check-incheck-out/check-incheck-out.service.ts ***!
    \***********************************************************************/

  /*! exports provided: CheckIncheckOutService */

  /***/
  function srcAppFolderCheckIncheckOutCheckIncheckOutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckIncheckOutService", function () {
      return CheckIncheckOutService;
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
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

    var CheckIncheckOutService = /*#__PURE__*/function () {
      function CheckIncheckOutService(http, storage, camera) {
        _classCallCheck(this, CheckIncheckOutService);

        this.http = http;
        this.storage = storage;
        this.camera = camera;
        this.photos = [];
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
          })
        };
      }

      _createClass(CheckIncheckOutService, [{
        key: "takePicture",
        value: function takePicture() {
          var _this = this;

          var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            // Add new photo to gallery
            _this.photos.unshift({
              data: 'data:image/jpeg;base64,' + imageData
            }); // Save all photos for later viewing


            _this.storage.set('photos', _this.photos);
          }, function (err) {
            // Handle error
            console.log("Gallery issue: " + err);
          });
        }
      }, {
        key: "loadSaved",
        value: function loadSaved() {
          var _this2 = this;

          this.storage.get('photos').then(function (photos) {
            _this2.photos = photos || [];
          });
        }
      }, {
        key: "sendStatus",
        value: function sendStatus(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url + 'attendance/checkinoutattendance', data, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "checkInOutStatus",
        value: function checkInOutStatus(userId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url + 'attendance/getattendancestatus' + '?userid=' + userId, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "tmsCheckIn",
        value: function tmsCheckIn(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'attendance/checkinouttask', data, this.httpOptions).map(function (Response) {
            console.log(Response);
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "handleErrors",
        value: function handleErrors(error) {
          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]["throw"](error.error.message || 'backend server error');
        }
      }]);

      return CheckIncheckOutService;
    }();

    CheckIncheckOutService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"]
      }];
    };

    CheckIncheckOutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CheckIncheckOutService);

    var Photo = function Photo() {
      _classCallCheck(this, Photo);
    };
    /***/

  },

  /***/
  "./src/app/folder/check-incheck-out/checkin/checkin.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/folder/check-incheck-out/checkin/checkin.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderCheckIncheckOutCheckinCheckinComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rejc {\n  color: white;\n  background: #006495;\n  text-align: center;\n  margin-top: 10%;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\n.nodat {\n  color: #b3a2a2 !important;\n}\n\n.mail {\n  float: right;\n  margin-right: 10px;\n  font-size: 1rem !important;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.card_desgn {\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  background-color: #fef8ed;\n  padding: 15px 10px 10px 10px;\n  left: 50%;\n  transform: translate(-50%);\n}\n\n.org {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #000000;\n  margin: 0 15px 1px 0;\n}\n\n.owner {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #818181;\n  margin: 1px 10px 0 0;\n}\n\n.pos {\n  float: right;\n}\n\n.main {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #000000;\n  margin: 0 5px 0 0;\n}\n\n.email_dt {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  margin: 0 3px 0 5px;\n}\n\nbutton {\n  border-radius: 6px;\n  margin: 5px 0 5px 15px;\n  background-color: transparent;\n}\n\n.accept {\n  font-family: Poppins;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background-color: #3382f8;\n  color: #ffffff;\n  padding: 10px 10px;\n}\n\n.rej {\n  font-family: Poppins;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background-color: transparent;\n  color: #3382f8;\n  padding: 10px 10px;\n}\n\n.btnGroup {\n  left: 50%;\n  transform: translate(-50%);\n  display: inline-block;\n  position: relative;\n  padding: 5px 2px 0 0;\n}\n\nion-card-content {\n  padding: 0 !important;\n}\n\n.btn {\n  width: 90%;\n  margin: auto;\n  left: 50%;\n  transform: translate(-50%);\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NoZWNrLWluY2hlY2stb3V0L2NoZWNraW4vRTpcXGNpdHliYXNlXFxGbHVlbnRNV01fQ0VQX3Rtcy9zcmNcXGFwcFxcZm9sZGVyXFxjaGVjay1pbmNoZWNrLW91dFxcY2hlY2tpblxcY2hlY2tpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL2NoZWNrLWluY2hlY2stb3V0L2NoZWNraW4vY2hlY2tpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNyRUY7O0FEcUlBO0VBQ0UsZUFBQTtBQ2xJRjs7QURvSUE7RUFDRSx5QkFBQTtBQ2pJRjs7QURvSUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ2pJQTs7QURtSUE7RUFDQSxtQkFBQTtBQ2hJQTs7QURrSUE7RUFHQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ2pJQTs7QURtSUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNoSUE7O0FEa0lBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDL0hBOztBRGlJQTtFQUNBLFlBQUE7QUM5SEE7O0FEZ0lBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDN0hBOztBRCtIQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FDN0hBOztBRCtIQTtFQUdFLGtCQUFBO0VBRUEsc0JBQUE7RUFFQSw2QkFBQTtBQ2hJRjs7QURtSUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2hJRjs7QURtSUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2hJRjs7QURtSUE7RUFDRSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoSUY7O0FEbUlBO0VBQ0UscUJBQUE7QUNoSUY7O0FEa0lBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQy9IRiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jaGVjay1pbmNoZWNrLW91dC9jaGVja2luL2NoZWNraW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVye1xyXG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5NSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5kYXlEZXRhaWxze1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuLy8gICBwYWRkaW5nOiAyJSAwcHg7XHJcbi8vICAgZm9udC1zaXplOiAwLjlyZW07XHJcbi8vIH1cclxuLy8gaW9uLXRpdGxle1xyXG4vLyAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vIH1cclxuLy8gLmZhLWFycm93LWxlZnR7XHJcbi8vICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxuXHJcbi8vIH1cclxuLy8gLmJ0bkdyb3Vwe1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZzoyJSAwcHg7XHJcbi8vIH1cclxuLy8gLmNvbXB7XHJcbi8vICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuLy8gICBtYXJnaW46NiUgMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYnRuR3JvdXAgPiBpb24tYnV0dG9ue1xyXG4vLyAgICAgbWFyZ2luOjIlIDQlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzMzODJmOCAhaW1wb3J0YW50O1xyXG4vLyAgICAgY29sb3I6d2hpdGU7XHJcbi8vIH1cclxuLy8gaW9uLW1lbnUtYnV0dG9ue1xyXG4vLyAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAubWVudUJ0bntcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgYm90dG9tOiAzMiU7XHJcbi8vICAgcmlnaHQ6IDMlO1xyXG4vLyAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vICAgZm9udC1zaXplOiAyM3B4O1xyXG4vLyB9XHJcblxyXG4vLyAvKiBCcmVhZGNydW1iICovXHJcbi8vIC5icmVhZGNydW1iIHtcclxuLy8gICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgbGlzdC1zdHlsZTogbm9uZTtcclxuLy8gICBiYWNrZ3JvdW5kOiMwYjc2YWE7XHJcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuLy8gICBjb2xvcjogI0ZGRjtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuLy8gLmJyZWFkY3J1bWIgbGkge1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICBjb2xvcjogI0ZGRjtcclxuLy8gfVxyXG4vLyAuYnJlYWRjcnVtYiBzcGFuIHtcclxuLy8gICBjb2xvcjogI0M3RDlFMjtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcbi8vIC5icmVhZGNydW1iIC5mYS1jaGV2cm9uLXJpZ2h0IHtcclxuLy8gICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC52aWV3LWNvbnRhaW5lciB7XHJcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gfVxyXG4ucmVqY3tcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOjEwJTtcclxufVxyXG4vLyAucHVuY2hCdG5ze1xyXG4vLyAgIHdpZHRoOiAzNXZ3O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLmdlbntcclxuLy8gICAgIGNvbG9yOndoaXRlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogNyUgMTAlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDoyMCU7XHJcbi8vIH1cclxuLy8gLnJlamN7XHJcbi8vICAgICBjb2xvcjp3aGl0ZTtcclxuLy8gICAgIGJhY2tncm91bmQ6ICMwMDY0OTU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW4tdG9wOjIwJTtcclxuLy8gfVxyXG4vLyAubWVudUJ0bntcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTogMjMlO1xyXG4vLyAgICAgcmlnaHQ6IDBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vICAgICBmb250LXNpemU6IDI5cHg7XHJcbi8vICAgfVxyXG5cclxuLy8gLy8gICAuYnRuSG9tZXtcclxuLy8gLy8gICAgIGNvbG9yOndoaXRlO1xyXG4vLyAvLyB9XHJcbi8vIGlvbi1zcGlubmVye1xyXG4vLyAgICAgbWFyZ2luOiAyMCUgNDUlO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBCcmVhZGNydW1iICovXHJcbi8vIC5icmVhZGNydW1iIHtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiMwYjc2YWE7XHJcbi8vICAgICAvLyBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgY29sb3I6ICNGRkY7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIH1cclxuLy8gICAuYnJlYWRjcnVtYiBsaSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBjb2xvcjogI0ZGRjtcclxuLy8gICB9XHJcbi8vICAgLmJyZWFkY3J1bWIgc3BhbiB7XHJcbi8vICAgICBjb2xvcjogI0M3RDlFMjtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB9XHJcbi8vICAgLmJyZWFkY3J1bWIgLmZhLWNoZXZyb24tcmlnaHQge1xyXG4vLyAgICAgY29sb3I6ICNDN0Q5RTIgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLnZpZXctY29udGFpbmVyIHtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgfVxyXG5cclxuXHJcbmlvbi1zcGlubmVye1xyXG4gIG1hcmdpbjogMjAlIDQ1JTtcclxufVxyXG4ubm9kYXQge1xyXG4gIGNvbG9yOiAjYjNhMmEyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWlse1xyXG5mbG9hdDogcmlnaHQ7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxuZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNhcmQge1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jYXJkX2Rlc2due1xyXG4vLyBoZWlnaHQ6IDkxcHg7XHJcbi8vIG1hcmdpbjogMTBweCAxNXB4O1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG5ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZWY4ZWQ7XHJcbnBhZGRpbmc6IDE1cHggMTBweCAxMHB4IDEwcHg7XHJcbmxlZnQ6IDUwJTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcbn1cclxuLm9yZyB7XHJcbmZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG5mb250LXNpemU6IDEycHg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbmxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmNvbG9yOiAjMDAwMDAwO1xyXG5tYXJnaW46IDAgMTVweCAxcHggMDtcclxufVxyXG4ub3duZXIge1xyXG5mb250LWZhbWlseTogUG9wcGlucztcclxuZm9udC1zaXplOiAxMnB4O1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG5mb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5saW5lLWhlaWdodDogbm9ybWFsO1xyXG5sZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5jb2xvcjogIzgxODE4MTtcclxubWFyZ2luOiAxcHggMTBweCAwIDA7XHJcbn1cclxuLnBvcyB7XHJcbmZsb2F0OiByaWdodDtcclxufVxyXG4ubWFpbntcclxuZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxubGluZS1oZWlnaHQ6IG5vcm1hbDtcclxubGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuY29sb3I6ICMwMDAwMDA7XHJcbm1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcbi5lbWFpbF9kdHtcclxuZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxubGluZS1oZWlnaHQ6IG5vcm1hbDtcclxubGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuLy8gY29sb3I6ICNmZmE1MDA7XHJcbm1hcmdpbjogMCAzcHggMCA1cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIC8vIHdpZHRoOiAxMDBweDtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIC8vIGJvcmRlcjogc29saWQgMnB4ICMzMzgyZjg7XHJcbiAgbWFyZ2luOiA1cHggMCA1cHggMTVweDtcclxuICAvLyBjb2xvcjogIzMzODJmOCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8vIGZsb2F0OiByaWdodDtcclxufVxyXG4uYWNjZXB0e1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzgyZjg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG4ucmVqe1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMzM4MmY4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG5cclxuLmJ0bkdyb3Vwe1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDVweCAycHggMCAwO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSIsIi5yZWpjIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBtYXJnaW46IDIwJSA0NSU7XG59XG5cbi5ub2RhdCB7XG4gIGNvbG9yOiAjYjNhMmEyICFpbXBvcnRhbnQ7XG59XG5cbi5tYWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkX2Rlc2duIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmOGVkO1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xufVxuXG4ub3JnIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMCAxNXB4IDFweCAwO1xufVxuXG4ub3duZXIge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzgxODE4MTtcbiAgbWFyZ2luOiAxcHggMTBweCAwIDA7XG59XG5cbi5wb3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tYWluIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMCA1cHggMCAwO1xufVxuXG4uZW1haWxfZHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgM3B4IDAgNXB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogNXB4IDAgNXB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWNjZXB0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM4MmY4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4ucmVqIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzgyZjg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLmJ0bkdyb3VwIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAycHggMCAwO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/folder/check-incheck-out/checkin/checkin.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/folder/check-incheck-out/checkin/checkin.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CheckinComponent */

  /***/
  function srcAppFolderCheckIncheckOutCheckinCheckinComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckinComponent", function () {
      return CheckinComponent;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _check_incheck_out_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../check-incheck-out.service */
    "./src/app/folder/check-incheck-out/check-incheck-out.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _tms_tms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../tms/tms.service */
    "./src/app/folder/tms/tms.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var CheckinComponent = /*#__PURE__*/function () {
      function CheckinComponent(geolocation, checkSer, storage, nativeStorage, router, route, tmsSrv, alertController, nativeGeocoder, translate) {
        var _this3 = this;

        _classCallCheck(this, CheckinComponent);

        this.geolocation = geolocation;
        this.checkSer = checkSer;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.route = route;
        this.tmsSrv = tmsSrv;
        this.alertController = alertController;
        this.nativeGeocoder = nativeGeocoder;
        this.translate = translate;
        this.type = window.localStorage.getItem('AtteType');
        this.notesTab = false;
        this.taskCompletion = false; // language

        this.locStorageLang = window.localStorage.getItem('lang');

        if (this.locStorageLang == '' || this.locStorageLang == undefined || this.locStorageLang == null) {
          this.lang = 'en';
          this.translate.setDefaultLang('en');
          this.translate.use('en');
        } else {
          this.lang = this.locStorageLang;
          this.translate.use(this.lang);
        }

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };

        this.router.onSameUrlNavigation = 'reload';

        if (navigator) {
          navigator.geolocation.getCurrentPosition(function (pos) {
            _this3.lng = +pos.coords.longitude;
            _this3.lat = +pos.coords.latitude;
          });
        }

        this.nativeStorage.getItem('loginDetails').then(function (data) {
          return console.log(data);
        }, function (error) {
          return console.error(error);
        });
        this.translate.get('Confirm completion').subscribe(function (value) {
          _this3.confirm_completion = value;
        });
        this.translate.get('Complete task').subscribe(function (value) {
          _this3.complete_task = value;
        });
        this.translate.get('Ok').subscribe(function (value) {
          _this3.ok = value;
        });
        this.translate.get('Cancel').subscribe(function (value) {
          _this3.cancel = value;
        });
      }

      _createClass(CheckinComponent, [{
        key: "switchLanguage",
        value: function switchLanguage() {
          this.translate.use(this.lang);
        }
      }, {
        key: "checkIn",
        value: function checkIn() {
          var _this4 = this;

          var dte = new Date();
          var yr = dte.getFullYear();
          var mnth = dte.getMonth();
          mnth = mnth + 1; // this.checkInDay=false;

          if (mnth <= 9) {
            mnth = "0" + mnth;
          }

          var dt = dte.getDate();

          if (dt <= 9) {
            dt = "0" + dt;
          }

          var hrs = dte.getHours();

          if (hrs <= 9) {
            hrs = "0" + hrs;
          }

          var min = dte.getMinutes();

          if (min <= 9) {
            min = "0" + min;
          }

          var sec = dte.getSeconds();

          if (sec <= 9) {
            sec = "0" + sec;
          }

          this.checkInDay = yr + "-" + mnth + "-" + dt + " " + hrs + ":" + min + ":" + sec;
          this.enableCheckOut = true;
          this.enableCheckIn = false;
          this.enableBreak = true;
          this.enableComplet = false; // this.checkInDay = new Date();

          this.notesTab = true;
          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this4.address = addr;
          })["catch"](function (error) {});
          var payLoad = {
            "DateTime": this.checkInDay,
            "InOutStatus": "1",
            "TaskId": this.id,
            "Lat": this.lat,
            "Lon": this.lng,
            "address": this.address,
            "userId": window.localStorage.getItem('userId'),
            "CompanyId": window.localStorage.getItem('companyId'),
            "notes": this.notes,
            "empID": window.localStorage.getItem('empId')
          };
          return payLoad;
        }
      }, {
        key: "checkOut",
        value: function checkOut() {
          var _this5 = this;

          var dte = new Date();
          var yr = dte.getFullYear();
          var mnth = dte.getMonth();
          mnth = mnth + 1; // this.checkoutDay=false;

          if (mnth <= 9) {
            mnth = "0" + mnth;
          }

          var dt = dte.getDate();

          if (dt <= 9) {
            dt = "0" + dt;
          }

          var hrs = dte.getHours();

          if (hrs <= 9) {
            hrs = "0" + hrs;
          }

          var min = dte.getMinutes();

          if (min <= 9) {
            min = "0" + min;
          }

          var sec = dte.getSeconds();

          if (sec <= 9) {
            sec = "0" + sec;
          }

          this.checkoutDay = yr + "-" + mnth + "-" + dt + " " + hrs + ":" + min + ":" + sec;
          this.enableCheckIn = true;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = true; // this.checkoutDay = new Date();

          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this5.address = addr;
          })["catch"](function (error) {});

          if (this.type == 'TMS') {
            var payLoad = {
              "DateTime": this.checkoutDay,
              "InOutStatus": "0",
              "TaskId": this.id,
              "Lat": this.lat,
              "Lon": this.lng,
              "address": this.address,
              "empID": window.localStorage.getItem('empId'),
              "CompanyId": window.localStorage.getItem('companyId')
            };
            this.checkSer.tmsCheckIn(payLoad).subscribe(function (res) {
              _this5.enableComplet = true;
            }, function (err) {
              console.log(err);
            });
          }
        }
      }, {
        key: "break",
        value: function _break() {
          var _this6 = this;

          var dte = new Date();
          var yr = dte.getFullYear();
          var mnth = dte.getMonth();
          mnth = mnth + 1;

          if (mnth <= 9) {
            mnth = "0" + mnth;
          }

          var dt = dte.getDate();

          if (dt <= 9) {
            dt = "0" + dt;
          }

          var hrs = dte.getHours();

          if (hrs <= 9) {
            hrs = "0" + hrs;
          }

          var min = dte.getMinutes();

          if (min <= 9) {
            min = "0" + min;
          }

          var sec = dte.getSeconds();

          if (sec <= 9) {
            sec = "0" + sec;
          }

          this.breakDay = yr + "-" + mnth + "-" + dt + " " + hrs + ":" + min + ":" + sec;
          this.enableCheckIn = true;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = false; // this.breakDay = new Date();

          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this6.address = addr;
          })["catch"](function (error) {});
          var payLoad = {
            "DateTime": this.breakDay,
            "InOutStatus": "2",
            "TaskId": this.id,
            "Lat": this.lat,
            "Lon": this.lng,
            "address": this.address,
            "empID": window.localStorage.getItem('empId'),
            "CompanyId": window.localStorage.getItem('companyId')
          };
          this.checkSer.tmsCheckIn(payLoad).subscribe(function (res) {}, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "completed",
        value: function completed() {
          var _this7 = this;

          var dte = new Date();
          var yr = dte.getFullYear();
          var mnth = dte.getMonth();
          mnth = mnth + 1; // this.checkInDay=false;

          if (mnth <= 9) {
            mnth = "0" + mnth;
          }

          var dt = dte.getDate();

          if (dt <= 9) {
            dt = "0" + dt;
          }

          var hrs = dte.getHours();

          if (hrs <= 9) {
            hrs = "0" + hrs;
          }

          var min = dte.getMinutes();

          if (min <= 9) {
            min = "0" + min;
          }

          var sec = dte.getSeconds();

          if (sec <= 9) {
            sec = "0" + sec;
          }

          this.checkInDay = yr + "-" + mnth + "-" + dt + " " + hrs + ":" + min + ":" + sec;
          this.enableCheckIn = false;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = true; // this.checkInDay = new Date();

          this.notesTab = true;
          this.taskCompletion = true;
          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this7.address = addr;
          })["catch"](function (error) {});
          var payLoad = {
            "DateTime": this.checkInDay,
            "InOutStatus": "3",
            "TaskId": this.id,
            "Lat": this.lat,
            "Lon": this.lng,
            "address": this.address,
            "userId": window.localStorage.getItem('userId'),
            "CompanyId": window.localStorage.getItem('companyId'),
            "empID": window.localStorage.getItem('empId'),
            "notes": this.notes
          };
          return payLoad;
        }
      }, {
        key: "statusComplet",
        value: function statusComplet() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            var dte, yr, mnth, dt, hrs, min, sec, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    dte = new Date();
                    yr = dte.getFullYear();
                    mnth = dte.getMonth();
                    mnth = mnth + 1;

                    if (mnth <= 9) {
                      mnth = "0" + mnth;
                    }

                    dt = dte.getDate();

                    if (dt <= 9) {
                      dt = "0" + dt;
                    }

                    hrs = dte.getHours();

                    if (hrs <= 9) {
                      hrs = "0" + hrs;
                    }

                    min = dte.getMinutes();

                    if (min <= 9) {
                      min = "0" + min;
                    }

                    sec = dte.getSeconds();

                    if (sec <= 9) {
                      sec = "0" + sec;
                    }

                    this.checkInDay = yr + "-" + mnth + "-" + dt + " " + hrs + ":" + min + ":" + sec;
                    _context.next = 16;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: this.confirm_completion,
                      message: this.complete_task,
                      buttons: [{
                        text: this.ok,
                        handler: function handler() {
                          _this8.tmsSrv.updateEndTaskStatus(_this8.id, 'Completed', _this8.checkInDay).subscribe(function (res) {
                            _this8.completed();
                          });
                        }
                      }, {
                        text: this.cancel,
                        role: 'cancel'
                      }]
                    });

                  case 16:
                    alert = _context.sent;
                    _context.next = 19;
                    return alert.present();

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submitNotes",
        value: function submitNotes() {
          var payload;

          if (this.enableComplet) {
            payload = this.completed();
            this.notes;
            this.checkSer.tmsCheckIn(payload).subscribe(function (res) {}, function (err) {
              console.log(err);
            });
            this.router.navigateByUrl('/folder/tms/mytask');
            this.notesTab = false;
          } else {
            payload = this.checkIn();
            this.notesTab = false;
            this.notes;
            this.checkSer.tmsCheckIn(payload).subscribe(function (res) {}, function (err) {
              console.log(err);
            });
          }
        }
      }, {
        key: "breadcrumb",
        value: function breadcrumb() {
          this.router.navigateByUrl('/folder/tms/mytask');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          var dte = new Date();
          var yr = dte.getFullYear();
          var mnth = dte.getMonth();
          mnth = mnth + 1;

          if (mnth <= 9) {
            mnth = "0" + mnth;
          }

          var dt = dte.getDate();

          if (dt <= 9) {
            dt = "0" + dt;
          }

          var hrs = dte.getHours();

          if (hrs <= 9) {
            hrs = "0" + hrs;
          }

          var min = dte.getMinutes();

          if (min <= 9) {
            min = "0" + min;
          }

          var sec = dte.getSeconds();

          if (sec <= 9) {
            sec = "0" + sec;
          }

          this.currentDay = yr + "-" + mnth + "-" + dt + " " + hrs + ":" + min + ":" + sec;
          this.enableCheckIn = true;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = false;
          this.id = this.route.snapshot.params.id; // this.currentDay = new Date();

          this.empId = window.localStorage.getItem('empId');

          if (this.type == 'TMS') {
            this.tmsSrv.taskDes(this.id).subscribe(function (res) {
              _this9.tasknam = res['data'].taskName;
              _this9.startingAt = res['data'].start_date;
              _this9.endingAt = res['data'].finish_date;
              _this9.startingAt = new Date(_this9.startingAt);
              _this9.endingAt = new Date(_this9.endingAt);
            }); // if((this.currentDay >= this.startingAt) || (this.currentDay <= this.endingAt)){

            this.tmsSrv.lastTaskStatus(this.id).subscribe(function (res) {
              if (res['data'].inOutStatus == 1) {
                _this9.enableCheckOut = true;
                _this9.enableCheckIn = false;
                _this9.enableBreak = true;
                _this9.enableComplet = false;
                _this9.checkInDay = res['data'].dateTime;
              } else if (res['data'].inOutStatus == 0) {
                _this9.enableCheckIn = true;
                _this9.enableCheckOut = false;
                _this9.enableBreak = false;
                _this9.enableComplet = true;
                _this9.checkoutDay = res['data'].dateTime;
              } else if (res['data'].inOutStatus == 2) {
                _this9.enableCheckIn = true;
                _this9.enableCheckOut = false;
                _this9.enableBreak = false;
                _this9.enableComplet = false;
              } else if (res['data'].inOutStatus == 3) {
                _this9.enableCheckIn = false;
                _this9.enableCheckOut = false;
                _this9.enableBreak = false;
                _this9.enableComplet = false;
              }
            }, function (err) {
              console.log(err);
            }); // }else{
            //   this.enableCheckIn = false;
            //   this.enableCheckOut = false;
            //   this.enableBreak = false;
            //   this.enableComplet = false;
            //   alert("Checkin Not allowed");
            // }
          }
        }
      }, {
        key: "getUserPosition",
        value: function getUserPosition() {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.options = {
              maximumAge: 3000,
              enableHighAccuracy: true
            };

            _this10.geolocation.getCurrentPosition(_this10.options).then(function (pos) {
              _this10.currentPos = pos;
              var location = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
                time: new Date()
              };
              resolve(pos);
            }, function (err) {
              console.log("error : " + err.message);
              reject(err.message);
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigateByUrl('/folder/tms/mytask');
        }
      }]);

      return CheckinComponent;
    }();

    CheckinComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _check_incheck_out_service__WEBPACK_IMPORTED_MODULE_3__["CheckIncheckOutService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _tms_tms_service__WEBPACK_IMPORTED_MODULE_7__["TmsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }];
    };

    CheckinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./checkin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/check-incheck-out/checkin/checkin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./checkin.component.scss */
      "./src/app/folder/check-incheck-out/checkin/checkin.component.scss"))["default"]]
    })], CheckinComponent);
    /***/
  }
}]);
//# sourceMappingURL=check-incheck-out-check-incheck-out-module-es5.js.map