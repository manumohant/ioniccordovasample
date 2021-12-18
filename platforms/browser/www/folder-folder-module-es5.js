function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <!-- <ion-button class=\"btnHome\" [routerLink]=\"'/settings'\">\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\n          </ion-button> -->\n      </ion-buttons>\n    <ion-title *ngIf=\"type == 'AMS'\">Attendance</ion-title>\n    <ion-title *ngIf=\"type == 'TMS'\">{{tasknam}}</ion-title>\n\n    <!-- <ion-icon name=\"image\" *ngIf=\"type == 'TMS' && taskCompletion == true\"  class=\"menuBtn\" (click)=\"checkSer.takePicture()\"  [style.color]=\"'white'\"></ion-icon> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid *ngIf=\"notesTab == false\">\n  <div class=\"dayDetails\">\n    <h4>{{currentDay | date:'medium'}}</h4>\n    <p *ngIf=\"checkInDay\">Checked In @ {{checkInDay | date:'medium'}}</p>\n    <!-- <p>Alloted Time Limit is 4 Hr 5 Min</p> -->\n    <p *ngIf=\"checkoutDay\">Checked Out @ {{checkoutDay | date:'medium'}}</p>\n\n    <!-- <p>You Spent 0 Days 0:0:9</p> -->\n  </div>\n  <ul class=\"breadcrumb\">\n    <li><span (click)=\"breadcrumb();\">Tasks</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\n    <li class=\"active\">Check IN/OUT for {{tasknam}}</li>\n  </ul>\n\n  <div class=\"btnGroup\">\n      <ion-button color=\"#00aaa0\" [disabled]=\"enableCheckIn == false\" (click)=\"checkIn()\">&nbsp;CHECK IN&nbsp;</ion-button>\n      <ion-button color=\"#00aaa0\" [disabled]=\"enableCheckOut == false\" (click)=\"checkOut()\">CHECK OUT</ion-button>\n     \n      <ion-button *ngIf=\"type == 'TMS'\" [disabled]=\"enableBreak == false\" color=\"#00aaa0\" (click)=\"break()\">&nbsp;&nbsp;&nbsp;BREAK&nbsp;&nbsp;&nbsp;&nbsp;</ion-button>\n\n      <ion-button color=\"#00aaa0\" *ngIf=\"type == 'TMS'\" [disabled]=\"enableComplet == false\" (click)=\"statusComplet()\">Completed</ion-button>\n\n  </div>\n  <agm-map style=\"height:500px\" [zoom]='19' [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  <!-- <ion-button color=\"#006495\" class=\"comp\" expand=\"full\">MARK AS COMPLETED</ion-button> -->\n</ion-grid>\n\n<div class=\"top\" *ngIf=\"notesTab == true\">\n  <ion-item>\n    <!-- <ion-grid>\n      <ion-row>\n      <ion-col col-6 *ngFor=\"let photo of checkSer.photos\">\n          <img [src]=\"photo.data\" />\n          </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    \n    <ion-label position=\"floating\">Notes</ion-label>\n    <!-- <ion-input type=\"number\" [(ngModel)]=\"duration\" name=\"title\" required=\"true\"></ion-input> -->\n    <ion-textarea rows=\"4\" cols=\"20\" placeholder=\"Enter any notes here...\" [(ngModel)]=\"notes\" name=\"notes\"></ion-textarea>\n  </ion-item>\n  <ion-button class=\"rejc\" expand=\"full\" color=\"#00aaa0\" (click)=\"submitNotes()\">Submit</ion-button>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <strong class=\"capitalize\">{{ folder }}</strong>\n    <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n  </div>\n</ion-content>\n";
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


            _this.storage.set('photos', _this.photos); // alert(JSON.stringify(this.photos));

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
          //  alert(JSON.stringify(data));
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


    __webpack_exports__["default"] = "ion-header {\n  --ion-background-color: #006495 !important;\n}\n\n.dayDetails {\n  color: white;\n  text-align: center;\n  background: #006495;\n  padding: 2% 0px;\n  font-size: 0.9rem;\n}\n\nion-title {\n  color: white !important;\n  text-transform: capitalize;\n}\n\n.fa-arrow-left {\n  color: white !important;\n}\n\n.btnGroup {\n  text-align: center;\n  padding: 2% 0px;\n}\n\n.comp {\n  background: #006495;\n  margin: 6% 0px;\n}\n\n.btnGroup > ion-button {\n  margin: 2% 4%;\n  background: #00aaa0 !important;\n  color: white;\n}\n\nion-menu-button {\n  color: white !important;\n}\n\n.menuBtn {\n  position: absolute;\n  bottom: 32%;\n  right: 3%;\n  background: none;\n  font-size: 23px;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 14px;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n\n.rejc {\n  color: white;\n  background: #006495;\n  text-align: center;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NoZWNrLWluY2hlY2stb3V0L2NoZWNraW4vRTpcXENFUFxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcY2hlY2staW5jaGVjay1vdXRcXGNoZWNraW5cXGNoZWNraW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9jaGVjay1pbmNoZWNrLW91dC9jaGVja2luL2NoZWNraW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQ0FBQTtBQ0NKOztBRENFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBRTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUNHSjs7QURERTtFQUNFLHVCQUFBO0FDSUo7O0FEREU7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNJTjs7QURGRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREZFO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0tOOztBREhFO0VBQ0UsdUJBQUE7QUNNSjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNNSjs7QURGQSxlQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUdFLHlCQUFBO0FDS0Y7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvY2hlY2staW5jaGVjay1vdXQvY2hlY2tpbi9jaGVja2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDY0OTUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRheURldGFpbHN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xyXG4gICAgcGFkZGluZzogMiUgMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIGlvbi10aXRsZXtcclxuICAgIGNvbG9yOndoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgLmZhLWFycm93LWxlZnR7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiAgLmJ0bkdyb3Vwe1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6MiUgMHB4O1xyXG4gIH1cclxuICAuY29tcHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDY0OTU7XHJcbiAgICBtYXJnaW46NiUgMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bkdyb3VwID4gaW9uLWJ1dHRvbntcclxuICAgICAgbWFyZ2luOjIlIDQlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDBhYWEwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBpb24tbWVudS1idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tZW51QnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMiU7XHJcbiAgICByaWdodDogMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH1cclxuXHJcblxyXG4vKiBCcmVhZGNydW1iICovXHJcbi5icmVhZGNydW1iIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiMwYjc2YWE7XHJcbiAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5icmVhZGNydW1iIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmJyZWFkY3J1bWIgc3BhbiB7XHJcbiAgY29sb3I6ICNDN0Q5RTI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XHJcbiAgLy8gcGFkZGluZzogMCAxMHB4O1xyXG4gIC8vIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4vLyAgICAgdWwge1xyXG4vLyAgICAgICBtYXJnaW4tbGVmdDogLTMwJTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi52aWV3LWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnJlamN7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDoxMCU7XHJcbn0iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5NSAhaW1wb3J0YW50O1xufVxuXG4uZGF5RGV0YWlscyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xuICBwYWRkaW5nOiAyJSAwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5mYS1hcnJvdy1sZWZ0IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idG5Hcm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMiUgMHB4O1xufVxuXG4uY29tcCB7XG4gIGJhY2tncm91bmQ6ICMwMDY0OTU7XG4gIG1hcmdpbjogNiUgMHB4O1xufVxuXG4uYnRuR3JvdXAgPiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAyJSA0JTtcbiAgYmFja2dyb3VuZDogIzAwYWFhMCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubWVudUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzMiU7XG4gIHJpZ2h0OiAzJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4vKiBCcmVhZGNydW1iICovXG4uYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzBiNzZhYTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNGRkY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnJlYWRjcnVtYiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5icmVhZGNydW1iIHNwYW4ge1xuICBjb2xvcjogI0M3RDlFMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5icmVhZGNydW1iIC5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgY29sb3I6ICNDN0Q5RTIgIWltcG9ydGFudDtcbn1cblxuLnZpZXctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJlamMge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMDY0OTU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */";
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

    var CheckinComponent = /*#__PURE__*/function () {
      function CheckinComponent(geolocation, checkSer, storage, nativeStorage, router, route, tmsSrv, alertController, nativeGeocoder) {
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
        this.type = window.localStorage.getItem('AtteType');
        this.notesTab = false;
        this.taskCompletion = false;

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
      } //    ionViewDidEnter() {
      //     this.storage.get('loginDetails').then(detai => {
      //       console.log(detai);
      //       this.empId = detai.details.empId;
      //       console.log(this.empId)
      //     });
      // }


      _createClass(CheckinComponent, [{
        key: "checkIn",
        value: function checkIn() {
          var _this4 = this;

          this.enableCheckOut = true;
          this.enableCheckIn = false;
          this.enableBreak = true;
          this.enableComplet = false;
          this.checkInDay = new Date();
          this.notesTab = true; // ******************************************************************************************************
          // alert("Address :"+ this.lat+ "and " + this.lng);

          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            // console.log(result)
            // alert("reverse geocode");
            // alert(JSON.stringify(result));
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this4.address = addr; // alert(JSON.stringify(addr));
            // return addr;      
            // this.address = "";
            // var responseAddress = [];
            // for (let [key, value] of Object.entries(result[0])) {
            //   if (value.length > 0)
            //     responseAddress.push(value);
            // }
            // // alert(responseAddress);
            // responseAddress.pop();
            // responseAddress.reverse();
            // for (let value of responseAddress) {                                                                   
            //   this.address += value + ", ";
            // }
            // this.address = this.address.slice(0, -2);
          })["catch"](function (error) {// alert("error");
            // this.address = "Address Not Available!";
          }); // ******************************************************************************************************

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
          }; // alert(JSON.stringify(payLoad));

          return payLoad;
        }
      }, {
        key: "checkOut",
        value: function checkOut() {
          var _this5 = this;

          this.enableCheckIn = true;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = true;
          this.checkoutDay = new Date(); // ******************************************************************************************************
          // alert("Address :"+ this.lat+ "and " + this.lng);

          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            // console.log(result)
            // alert("reverse geocode");
            // alert(JSON.stringify(result));
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this5.address = addr; // alert(JSON.stringify(addr));
            // return addr;      
            // this.address = "";
            // var responseAddress = [];
            // for (let [key, value] of Object.entries(result[0])) {
            //   if (value.length > 0)
            //     responseAddress.push(value);
            // }
            // // alert(responseAddress);
            // responseAddress.pop();
            // responseAddress.reverse();
            // for (let value of responseAddress) {                                                                   
            //   this.address += value + ", ";
            // }
            // this.address = this.address.slice(0, -2);
          })["catch"](function (error) {// alert("error");
            // this.address = "Address Not Available!";
          }); // ******************************************************************************************************

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
              // console.log(res);
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

          this.enableCheckIn = true;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = false;
          this.breakDay = new Date(); // ******************************************************************************************************
          // alert("Address :"+ this.lat+ "and " + this.lng);

          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            // console.log(result)
            // alert("reverse geocode");
            // alert(JSON.stringify(result));
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this6.address = addr; // alert(JSON.stringify(addr));
            // return addr;      
            // this.address = "";
            // var responseAddress = [];
            // for (let [key, value] of Object.entries(result[0])) {
            //   if (value.length > 0)
            //     responseAddress.push(value);
            // }
            // // alert(responseAddress);
            // responseAddress.pop();
            // responseAddress.reverse();
            // for (let value of responseAddress) {                                                                   
            //   this.address += value + ", ";
            // }
            // this.address = this.address.slice(0, -2);
          })["catch"](function (error) {// alert("error");
            // this.address = "Address Not Available!";
          }); // ******************************************************************************************************

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
          this.checkSer.tmsCheckIn(payLoad).subscribe(function (res) {// console.log(res)
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "completed",
        value: function completed() {
          var _this7 = this;

          this.enableCheckIn = false;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = true;
          this.checkInDay = new Date();
          this.notesTab = true;
          this.taskCompletion = true; // ******************************************************************************************************
          // alert("Address :"+ this.lat+ "and " + this.lng);

          var addr;
          var goptions = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.reverseGeocode(this.lat, this.lng, goptions).then(function (result) {
            // console.log(result)
            // alert("reverse geocode");
            // alert(JSON.stringify(result));
            addr = {
              "address1": result[0]['subThoroughfare'] + ", " + result[0]['thoroughfare'],
              "address2": result[0]['subLocality'] + ", " + result[0]['locality'],
              "city": result[0]['subAdministrativeArea'],
              "state": result[0]['administrativeArea'],
              "zipcode": result[0]['postalCode'],
              "country": result[0]['countryName']
            };
            _this7.address = addr; // alert(JSON.stringify(addr));
            // return addr;      
            // this.address = "";
            // var responseAddress = [];
            // for (let [key, value] of Object.entries(result[0])) {
            //   if (value.length > 0)
            //     responseAddress.push(value);
            // }
            // // alert(responseAddress);
            // responseAddress.pop();
            // responseAddress.reverse();
            // for (let value of responseAddress) {                                                                   
            //   this.address += value + ", ";
            // }
            // this.address = this.address.slice(0, -2);
          })["catch"](function (error) {// alert("error");
            // this.address = "Address Not Available!";
          }); // ******************************************************************************************************

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

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirm Completion',
                      message: 'Are you sure want to Complete the task?',
                      buttons: [{
                        text: "OK",
                        handler: function handler() {
                          _this8.tmsSrv.updateTaskStatus(_this8.id, 'Completed').subscribe(function (res) {
                            // console.log(res);
                            _this8.completed(); // this.router.navigateByUrl('/folder/tms/mytask');

                          });
                        }
                      }, {
                        text: "Cancel",
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
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
            this.checkSer.tmsCheckIn(payload).subscribe(function (res) {// console.log(res);
            }, function (err) {
              console.log(err);
            });
            this.router.navigateByUrl('/folder/tms/mytask');
            this.notesTab = false;
          } else {
            payload = this.checkIn();
            this.notesTab = false;
            this.notes;
            this.checkSer.tmsCheckIn(payload).subscribe(function (res) {// console.log(res)
            }, function (err) {
              console.log(err);
            });
          } // alert(JSON.stringify(payload));  

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

          this.enableCheckIn = true;
          this.enableCheckOut = false;
          this.enableBreak = false;
          this.enableComplet = false;
          this.id = this.route.snapshot.params.id;
          this.currentDay = new Date();
          this.empId = window.localStorage.getItem('empId');

          if (this.type == 'TMS') {
            this.tmsSrv.taskDes(this.id).subscribe(function (res) {
              // console.log(res['data'].taskName);
              _this9.tasknam = res['data'].taskName;
            });
            this.tmsSrv.lastTaskStatus(this.id).subscribe(function (res) {
              // console.log(res['data']);
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
            });
          }

          if (this.type == 'AMS') {
            this.checkSer.checkInOutStatus(this.empId).subscribe(function (res) {
              if (res['data'].inOutStatus == 1) {
                _this9.enableCheckOut = true;
                _this9.enableCheckIn = false;
                _this9.checkInDay = res['data'].dateTime;
              } else if (res['data'].inOutStatus == 0) {
                _this9.enableCheckIn = true;
                _this9.enableCheckOut = false;
                _this9.checkoutDay = res['data'].dateTime;
              }
            }, function (err) {
              console.log(err);
            });
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
              }; // console.log('loc', location);

              resolve(pos);
            }, function (err) {
              console.log("error : " + err.message);
              reject(err.message);
            });
          });
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
  },

  /***/
  "./src/app/folder/folder-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/folder/folder-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FolderPageRoutingModule */

  /***/
  function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
      return FolderPageRoutingModule;
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


    var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");
    /* harmony import */


    var _providers_check_tutorial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../providers/check-tutorial.service */
    "./src/app/providers/check-tutorial.service.ts");

    var routes = [{
      path: '',
      component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }, {
      path: 'punch',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | check-incheck-out-check-incheck-out-module */
        "check-incheck-out-check-incheck-out-module").then(__webpack_require__.bind(null,
        /*! ./check-incheck-out/check-incheck-out.module */
        "./src/app/folder/check-incheck-out/check-incheck-out.module.ts")).then(function (m) {
          return m.CheckIncheckOutModule;
        });
      }
    }, {
      path: 'attendanceRep',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | attendance-report-attendance-report-module */
        [__webpack_require__.e("default~attendance-report-attendance-report-module~leave-leave-module"), __webpack_require__.e("attendance-report-attendance-report-module")]).then(__webpack_require__.bind(null,
        /*! ./attendance-report/attendance-report.module */
        "./src/app/folder/attendance-report/attendance-report.module.ts")).then(function (m) {
          return m.AttendanceReportModule;
        });
      }
    }, {
      path: 'leave',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | leave-leave-module */
        [__webpack_require__.e("default~attendance-report-attendance-report-module~leave-leave-module"), __webpack_require__.e("leave-leave-module")]).then(__webpack_require__.bind(null,
        /*! ./leave/leave.module */
        "./src/app/folder/leave/leave.module.ts")).then(function (m) {
          return m.LeaveModule;
        });
      }
    }, {
      path: 'signUp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sign-up-sign-up-module */
        "sign-up-sign-up-module").then(__webpack_require__.bind(null,
        /*! ./sign-up/sign-up.module */
        "./src/app/folder/sign-up/sign-up.module.ts")).then(function (m) {
          return m.SignUpModule;
        });
      },
      canLoad: [_providers_check_tutorial_service__WEBPACK_IMPORTED_MODULE_4__["CheckTutorial"]]
    }, {
      path: 'tms',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tms-tms-module */
        "tms-tms-module").then(__webpack_require__.bind(null,
        /*! ./tms/tms.module */
        "./src/app/folder/tms/tms.module.ts")).then(function (m) {
          return m.TmsModule;
        });
      }
    }];

    var FolderPageRoutingModule = function FolderPageRoutingModule() {
      _classCallCheck(this, FolderPageRoutingModule);
    };

    FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FolderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.module.ts ***!
    \*****************************************/

  /*! exports provided: FolderPageModule */

  /***/
  function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
      return FolderPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./folder-routing.module */
    "./src/app/folder/folder-routing.module.ts");
    /* harmony import */


    var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./folder.page */
    "./src/app/folder/folder.page.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _check_incheck_out_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./check-incheck-out/checkin/checkin.component */
    "./src/app/folder/check-incheck-out/checkin/checkin.component.ts");

    var FolderPageModule = function FolderPageModule() {
      _classCallCheck(this, FolderPageModule);
    };

    FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"]],
      declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"], _check_incheck_out_checkin_checkin_component__WEBPACK_IMPORTED_MODULE_8__["CheckinComponent"]]
    })], FolderPageModule);
    /***/
  },

  /***/
  "./src/app/folder/folder.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/folder/folder.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL0U6XFxDRVBcXEZsdWVudE1XTV9DRVBfdG1zL3NyY1xcYXBwXFxmb2xkZXJcXGZvbGRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/folder/folder.page.ts":
  /*!***************************************!*\
    !*** ./src/app/folder/folder.page.ts ***!
    \***************************************/

  /*! exports provided: FolderPage */

  /***/
  function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
      return FolderPage;
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

    var FolderPage = /*#__PURE__*/function () {
      function FolderPage(activatedRoute) {
        _classCallCheck(this, FolderPage);

        this.activatedRoute = activatedRoute;
      }

      _createClass(FolderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.folder = this.activatedRoute.snapshot.paramMap.get('id');
        }
      }]);

      return FolderPage;
    }();

    FolderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-folder',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./folder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./folder.page.scss */
      "./src/app/folder/folder.page.scss"))["default"]]
    })], FolderPage);
    /***/
  },

  /***/
  "./src/app/folder/tms/tms.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/folder/tms/tms.service.ts ***!
    \*******************************************/

  /*! exports provided: TmsService */

  /***/
  function srcAppFolderTmsTmsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TmsService", function () {
      return TmsService;
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

    var TmsService = /*#__PURE__*/function () {
      function TmsService(http, storage) {
        _classCallCheck(this, TmsService);

        this.http = http;
        this.storage = storage;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.localStorage.getItem('token')
          })
        };
      } //  getTaskList(userId){
      //    return this.http.get(environment.url + 'task/getmytasks' + '?userid=' + userId, this.httpOptions)
      //    .map(Response =>
      //     {return Response}).catch(this.handleErrors);
      //  }


      _createClass(TmsService, [{
        key: "getTaskList",
        value: function getTaskList(userId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/getmytasks/' + userId, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "taskDes",
        value: function taskDes(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/gettaskdetails/' + id, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "taskLoc",
        value: function taskLoc(id, status) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/get_tasks/' + id + '/' + status).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "updateTaskStatus",
        value: function updateTaskStatus(id, status) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/updatetaskstatus/' + id + '/' + status, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "lastTaskStatus",
        value: function lastTaskStatus(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/laststatus/' + id, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "timeSpent",
        value: function timeSpent(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/gettimespentintask/' + id, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getCompanies",
        value: function getCompanies() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/get_companies', this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getTaskname",
        value: function getTaskname() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/checkTaskname', this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "getProject",
        value: function getProject(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/get_projects/' + id, this.httpOptions).map(function (Response) {
            return Response;
          })["catch"](this.handleErrors);
        }
      }, {
        key: "createTask",
        value: function createTask(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'task/create_task', data, this.httpOptions).map(function (Response) {
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

      return TmsService;
    }();

    TmsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"]
      }];
    };

    TmsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TmsService);
    /***/
  },

  /***/
  "./src/app/providers/check-tutorial.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/providers/check-tutorial.service.ts ***!
    \*****************************************************/

  /*! exports provided: CheckTutorial */

  /***/
  function srcAppProvidersCheckTutorialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckTutorial", function () {
      return CheckTutorial;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var CheckTutorial = /*#__PURE__*/function () {
      function CheckTutorial(storage, router) {
        _classCallCheck(this, CheckTutorial);

        this.storage = storage;
        this.router = router;
      }

      _createClass(CheckTutorial, [{
        key: "canLoad",
        value: function canLoad() {
          var _this11 = this;

          return this.storage.get('ion_did_login').then(function (res) {
            // console.log(res)
            if (res) {
              _this11.router.navigate(['/folder/punch/in/' + window.localStorage.getItem('userId')]);

              return false;
            } else {
              return true;
            }
          });
        }
      }]);

      return CheckTutorial;
    }();

    CheckTutorial.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CheckTutorial = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CheckTutorial);
    /***/
  }
}]);
//# sourceMappingURL=folder-folder-module-es5.js.map