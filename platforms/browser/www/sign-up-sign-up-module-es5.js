function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/about/about.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/about/about.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderSignUpAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar  class=\"toolBar\">\n        <ion-buttons slot=\"start\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <!-- <ion-button class=\"btnHome\" [routerLink]=\"'/settings'\">\n              <i class=\"fas fa-arrow-left\"></i> &nbsp;\n            </ion-button> -->\n        </ion-buttons>\n      <ion-title>About</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <!-- <ul class=\"breadcrumb\">\n    <li class=\"active\">About</li>\n  </ul> -->\n  <ion-content>\n    <div class=\"logo\">\n        <img src=\"./assets/img/info.gif\" alt=\"\"  width=\"50%\">\n        <h4>FluentMWM_CEP_TMS 1.0</h4>\n      <p>FluentMWM makes your work easier.</p>\n      <p>This App is connected with Fluent CEP solution.</p>\n    </div>\n      \n   \n    <ion-button color=\"#006495\" class=\"comp\"  href=\"https://fluentsoft.com/aboutus.html\" expand=\"full\">LEARN MORE</ion-button>\n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderSignUpLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n<div class=\"login\">\n    <img src=\"./assets/img/info.gif\" alt=\"\" class=\"logo\" width=\"50%\">\n    <br/><img src=\"./assets/img/tms.png\" alt=\"\" class=\"logo1\" width=\"40%\">\n\n    <ion-item>\n        <ion-label position=\"floating\">User Name</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"name\" name=\"username\"></ion-input>\n    </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"pass\" name=\"password\"></ion-input>\n      </ion-item>\n      <div [style.color]=\"'red'\">{{errMsg}}</div>\n      <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n\n      <ion-button color=\"#006495\" class=\"comp\" expand=\"full\" (click)=\"login()\">Login</ion-button>\n      <h6 (click)=\"register()\">Not Registered? Start here.</h6>\n\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/register/register.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/register/register.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderSignUpRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar  class=\"toolBar\">\n        <ion-buttons slot=\"start\">\n            \n            <ion-button class=\"btnHome\" (click)=\"arrow()\">\n              <i class=\"fas fa-arrow-left\"></i> &nbsp;\n            </ion-button>\n        </ion-buttons>\n      <ion-title>Register</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n  \n<div class=\"login\">\n    <img src=\"./assets/img/info.gif\" alt=\"\"  width=\"30%\">\n\n    <ion-item>\n        <ion-label>Select</ion-label>\n        <ion-select>\n          <ion-select-option value=\"ams\">AMS</ion-select-option>\n          <ion-select-option value=\"tms\">TMS</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\">User Name</ion-label>\n        <ion-input></ion-input>\n    </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Email ID</ion-label>\n          <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label position=\"floating\">Phone Number</ion-label>\n          <ion-input></ion-input>\n      </ion-item>\n\n      <ion-button color=\"#006495\" class=\"comp\" expand=\"full\">Register</ion-button>\n</div>\n\n  \n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/folder/sign-up/about/about.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/folder/sign-up/about/about.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderSignUpAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comp {\n  background: #006495;\n  margin: 20% 0px;\n}\n\n.logo {\n  text-align: center;\n}\n\n/* Breadcrumb */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvYWJvdXQvRTpcXENFUFxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcc2lnbi11cFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb2xkZXIvc2lnbi11cC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBQ0ksa0JBQUE7QUNDTjs7QURFRSxlQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDY0OTU7XHJcbiAgICBtYXJnaW46MjAlIDBweDtcclxuICB9XHJcblxyXG4gIC5sb2dve1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAvKiBCcmVhZGNydW1iICovXHJcbi8vIC5icmVhZGNydW1iIHtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiMwYjc2YWE7XHJcbi8vICAgICAvLyBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgY29sb3I6ICNGRkY7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIH1cclxuLy8gICAuYnJlYWRjcnVtYiBsaSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBjb2xvcjogI0ZGRjtcclxuLy8gICB9XHJcbi8vICAgLmJyZWFkY3J1bWIgc3BhbiB7XHJcbi8vICAgICBjb2xvcjogI0M3RDlFMjtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB9XHJcbi8vICAgLmJyZWFkY3J1bWIgLmZhLWNoZXZyb24tcmlnaHQge1xyXG4vLyAgICAgLy8gcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgLy8gZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgY29sb3I6ICNDN0Q5RTIgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbiAgXHJcbiAgLy8gICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAvLyAgICAgdWwge1xyXG4gIC8vICAgICAgIG1hcmdpbi1sZWZ0OiAtMzAlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbi8vICAgLnZpZXctY29udGFpbmVyIHtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgfSIsIi5jb21wIHtcbiAgYmFja2dyb3VuZDogIzAwNjQ5NTtcbiAgbWFyZ2luOiAyMCUgMHB4O1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQnJlYWRjcnVtYiAqLyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/folder/sign-up/about/about.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/folder/sign-up/about/about.component.ts ***!
    \*********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppFolderSignUpAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/about/about.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/folder/sign-up/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/folder/sign-up/login/login.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/folder/sign-up/login/login.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderSignUpLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".comp {\n  background: #006495;\n  margin-top: 10%;\n}\n\n.login {\n  text-align: center;\n}\n\n.logo {\n  margin: 20% 0 0 0;\n}\n\n.logo1 {\n  margin: 0 0 15% 0;\n}\n\nh6 {\n  font-size: 14px;\n  color: #006495;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvbG9naW4vRTpcXENFUFxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcc2lnbi11cFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb2xkZXIvc2lnbi11cC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvc2lnbi11cC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21we1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuICAgIG1hcmdpbi10b3A6MTAlO1xyXG4gIH1cclxuLmxvZ2lue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dve1xyXG4gICAgbWFyZ2luOiAyMCUgMCAwIDA7XHJcbn1cclxuLmxvZ28xe1xyXG4gICAgbWFyZ2luOiAwIDAgMTUlIDA7XHJcbn1cclxuaDZ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwNjQ5NTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5jb21wIHtcbiAgYmFja2dyb3VuZDogIzAwNjQ5NTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ubG9naW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luOiAyMCUgMCAwIDA7XG59XG5cbi5sb2dvMSB7XG4gIG1hcmdpbjogMCAwIDE1JSAwO1xufVxuXG5oNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDY0OTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/folder/sign-up/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/folder/sign-up/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppFolderSignUpLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sign-up.service */
    "./src/app/folder/sign-up/sign-up.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, loginSer, storage, nativeStorage) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginSer = loginSer;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.showSpinner = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          // this.router.navigateByUrl('/folder/tms/mytask');
          this.showSpinner = true;
          var loginData = {
            UserName: this.name,
            Password: this.pass
          };
          this.loginSer.login(loginData).subscribe(function (res) {
            if (res['data']) {
              _this.showSpinner = false; // console.log(res['data']);
            }

            _this.storage.set('ion_did_login', false); // window.localStorage.setItem('token', res['data'].token)


            window.localStorage.setItem('loginDetails', res['data']); // window.localStorage.setItem('userId', res['data'].details.employee.name)

            window.localStorage.setItem('userId', res['data'].userid);
            window.localStorage.setItem('AtteType', res['data'].type);
            window.localStorage.setItem('empId', res['data'].user2employee);
            window.localStorage.setItem('siteId', res['data'].siteid); // window.localStorage.setItem('user2employee',res['data'].user2employee);

            window.localStorage.setItem('companyId', res['data'].employee2company);
            window.localStorage.setItem('dept', res['data'].dept); // if(res['data'] && (window.localStorage.getItem('AtteType') == 'AMS')){   // comment this 3 line when buiding apk for Tms
            //   this.router.navigateByUrl('/folder/punch/in/' + window.localStorage.getItem('AtteType'));
            // }else{ this.errMsg = 'Invalid Credentials'}

            if (res['data'] && window.localStorage.getItem('AtteType') == 'TMS') {
              // comment this 3 line when buiding apk for ams
              _this.router.navigateByUrl('/folder/tms/mytask');
            } else {
              _this.errMsg = 'Invalid Credentials';
            }
          }, function (error) {
            _this.showSpinner = false;
            _this.errMsg = error.error.data;
          });
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['/folder/signUp/register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignUpService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/folder/sign-up/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/folder/sign-up/register/register.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/folder/sign-up/register/register.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderSignUpRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btnHome {\n  color: white;\n}\n\n.comp {\n  background: #006495;\n  margin-top: 8%;\n}\n\n.login {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvcmVnaXN0ZXIvRTpcXENFUFxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcc2lnbi11cFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb2xkZXIvc2lnbi11cC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9zaWduLXVwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkhvbWV7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmNvbXB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xyXG4gICAgbWFyZ2luLXRvcDo4JTtcclxuICB9XHJcblxyXG4gIC5sb2dpbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5idG5Ib21lIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29tcCB7XG4gIGJhY2tncm91bmQ6ICMwMDY0OTU7XG4gIG1hcmdpbi10b3A6IDglO1xufVxuXG4ubG9naW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/folder/sign-up/register/register.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/folder/sign-up/register/register.component.ts ***!
    \***************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppFolderSignUpRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "arrow",
        value: function arrow() {
          this.router.navigate(['/folder/signUp/login']);
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/register/register.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/folder/sign-up/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/folder/sign-up/sign-up-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/folder/sign-up/sign-up-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: SignUpRoutingModule */

  /***/
  function srcAppFolderSignUpSignUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpRoutingModule", function () {
      return SignUpRoutingModule;
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


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/folder/sign-up/about/about.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/folder/sign-up/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/folder/sign-up/register/register.component.ts");

    var routes = [{
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }];

    var SignUpRoutingModule = function SignUpRoutingModule() {
      _classCallCheck(this, SignUpRoutingModule);
    };

    SignUpRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignUpRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/sign-up/sign-up.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/folder/sign-up/sign-up.module.ts ***!
    \**************************************************/

  /*! exports provided: SignUpModule */

  /***/
  function srcAppFolderSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpModule", function () {
      return SignUpModule;
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


    var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up-routing.module */
    "./src/app/folder/sign-up/sign-up-routing.module.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/folder/sign-up/about/about.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/folder/sign-up/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/folder/sign-up/register/register.component.ts");

    var SignUpModule = function SignUpModule() {
      _classCallCheck(this, SignUpModule);
    };

    SignUpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignUpRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
    })], SignUpModule);
    /***/
  },

  /***/
  "./src/app/folder/sign-up/sign-up.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/folder/sign-up/sign-up.service.ts ***!
    \***************************************************/

  /*! exports provided: SignUpService */

  /***/
  function srcAppFolderSignUpSignUpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpService", function () {
      return SignUpService;
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

    var SignUpService = /*#__PURE__*/function () {
      // token: string;
      // httpOptions: { headers: HttpHeaders; };
      function SignUpService(http) {
        _classCallCheck(this, SignUpService);

        this.http = http; // this.httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json',
        //     'Authorization': 'Bearer ' + <string>localStorage.getItem('token')
        //   })
        // };
      }

      _createClass(SignUpService, [{
        key: "login",
        value: function login(data) {
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'auth/login', data).map(function (Response) {
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

      return SignUpService;
    }();

    SignUpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SignUpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SignUpService);
    /***/
  }
}]);
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map