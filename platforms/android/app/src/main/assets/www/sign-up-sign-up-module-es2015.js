(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/about/about.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/about/about.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n      </ion-buttons>\n    <ion-title>{{'About'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"abt_container\">\n  <div class=\"logo\">\n      <img src=\"./assets/img/info.gif\" alt=\"\"  width=\"50%\">\n      <h4>FluentMTMCB 1.0</h4>\n    <p>{{'About text1'|translate}}</p>\n    <p>{{'About text2'|translate}}</p>\n  </div>\n  <ion-button class=\"comp algnBtn\" href=\"https://fluentsoft.com/aboutus.html\">{{'Learn more'|translate}}</ion-button>   \n  <!-- <ion-button color=\"#006495\" class=\"comp\"  href=\"https://fluentsoft.com/aboutus.html\" expand=\"full\">{{'Learn more'|translate}}</ion-button> -->\n</div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<div class=\"login\">\n    <img src=\"./assets/img/info.gif\" alt=\"\" class=\"logo\" width=\"50%\">\n    <!-- <br/><img src=\"./assets/img/tms.png\" alt=\"\" class=\"logo1\" width=\"40%\"> -->\n\n    <ion-item>\n        <ion-label position=\"floating\">{{'Username'|translate}}</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"name\" name=\"username\"></ion-input>\n    </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">{{'Password'|translate}}</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"pass\" name=\"password\"></ion-input>\n      </ion-item>\n      <div [style.color]=\"'red'\">{{errMsg}}</div>\n      <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n\n      <ion-button color=\"#006495\" class=\"comp\" expand=\"full\" (click)=\"login()\">{{'Login'|translate}}</ion-button>\n      <h6 (click)=\"register()\">{{'Not registered'|translate}} {{'Start here'|translate}}</h6>\n\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/register/register.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/register/register.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-button class=\"btnHome\" (click)=\"arrow()\">\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\n          </ion-button>\n      </ion-buttons>\n    <ion-title>{{'Register'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  <div class=\"login\">\n      <img src=\"./assets/img/info.gif\" alt=\"\"  width=\"30%\">\n      <ion-item>\n          <ion-label position=\"floating\">{{'Employee ID'|translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"empid\" name=\"empid\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">{{'Site ID'|translate}}</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"siteid\" name=\"siteid\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">{{'Username'|translate}}</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"userid\" name=\"userid\"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label position=\"floating\">{{'Password'|translate}}</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"pass\" name=\"pass\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">{{'Confirm password'|translate}}</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"confirm_pass\" name=\"confirm_pass\"></ion-input>\n      </ion-item>\n      <div [style.color]=\"'red'\">{{errMsg}}</div>\n      <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n      <ion-button color=\"#006495\" class=\"comp\" expand=\"full\" (click)=\"register()\">{{'Register'|translate}}</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/termsconditions/termsconditions.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/termsconditions/termsconditions.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"toolBar\">\n      <!-- <ion-buttons slot=\"start\"> -->\n          <!-- <ion-menu-button></ion-menu-button> -->\n          <!-- <ion-button class=\"btnHome\"  (click)=\"goBack()\"> -->\n            <!-- <i class=\"fas fa-arrow-left\"></i> &nbsp; -->\n            <!-- <ion-icon name=\"chevron-back-outline\"></ion-icon>back -->\n          <!-- </ion-button> -->\n          <ion-title class=\"mainhdng\">Terms and Conditions</ion-title>\n      <!-- </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <h2 class=\"mainhdng fntcolor\">Terms and Conditions</h2> -->\n  <div class=\"terms-container\">\n    <p [style.text-indent]=\"'20px'\">\n    Dear User, we strongly recommend you acquaint yourself carefully with Terms and Conditions (“Terms” or “Agreement”) before using the services, provided by FluentERP. By signing in into Online or Mobile versions of the service you agree that FluentERP will store your credentials in the database on the server. We will not share your private and confidential information with any other third persons or third-party services. You agree to respect the services and follow the Terms and Conditions, prepared by FluentERP. Additional Agreement can be applied for services and products that will be launched in future, so for your best experience, it is important to become familiar with all of these Terms of Conditions.\n    </p>\n    <p>\n    By using FluentERP services and products, you signify that you unconditionally agree and accept to be legally bound by these Terms.\n    </p>\n    <p>\n    These Terms and Conditions constitutes an agreement between end user (you) and FluentERP governing your use of the Service. This version of Agreement supersedes any prior agreements between you and FluentERP.\n    </p>\n    <p>\n    Agreeing to signing in to use this version means you are agreeing to follow the Terms and Conditions that are written below. The Services provided by FluentERP on this mobile app include services that help you manage your business. Such as products and inventory management, leads and opportunities management, contacts management, sales and purchase orders, invoices and payments management, accounting and human resource management and so on. All new features that are added in future on FluentERP functionality or new kind of services provided by FluentERP will be the subject of these Terms. The newest version of the Terms and Conditions always will be placed here.\n    </p>\n    <p>\n    In the case of any violation of this Agreement FluentERP reserves the right to suspend or terminate your account or license.\n    </p>\n    <p>\n    In addition, FluentERP may not provide the access to the Services if you are FluentERP’s competitor. Also, we may not give you the access to our services and products for purposes of monitoring their availability, performance or functionality, or for any other benchmarking, testing or other competitive purposes.\n    </p>\n    <p>\n    Before you become the user of FluentERP services and products you must carefully read, unconditionally agree and accept all of these Terms and Conditions. It is your obligation to check them for updates from time to time\n    </p>\n    <p>\n    Only these Terms and Conditions are applicable to FluentERP. Any other forms of Terms or conditions made to you by its employees or representatives are not applicable to FluentERP.\n    If you don’t agree with these Terms and Conditions then you have no right to use FluentERP services and products.\n    </p>\n\n    <strong>Definitions</strong>\n    <p>\n    “Agreement” – these Terms and Conditions.\n    </p>\n    <p>\n    “Confidential Information” – all kind information shared between you and FluentERP, in any writing, verbal or electronic forms. It does not include information which is, or becomes, publicly available other than through unauthorized disclosure by the other party.\n    </p>\n    <p>\n    “Customization” – a process of developing software that is specially designed for some specific organization or business needs.\n    </p>\n    <p>\n    “Data” – any kind of information that you have inputted with or without your credentials into this website.\n    </p>\n    <p>\n    “FluentERP” – means the name of software, products or services provided on this website.\n    </p>\n    <p>\n    “Intellectual Property Right” – any patent, trademark, service mark, copyright, moral right, right in a design, know-how and any other intellectual or industrial property rights, anywhere in the world whether or not registered.\n    </p>\n    <p>\n    “On demand” – at any time when the user requires it. In the case of FluentERP means hosting the software on clients side and customization by FluentERP developers.\n    </p>\n    <p>\n    “SaaS” – Software as a Service. It is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted.\n    </p>\n    <p>\n    “Services” – all kind of services related and not limited to customer relationship, human resources, inventory and product, accounting, sales and purchases, orders, invoices payments management and their configurations provided by FluentERP\n    </p>\n    <p>\n    “Software” – all human readable, machine operable and all other forms of the software which comprise the Services and incorporating all forms of any modifications made to it by FluentERP from time to time.\n    </p>\n    <p>\n    “Terms” – these Terms and Conditions.\n    </p>\n    <p>\n    “User” – a person who uses services provided by FluentERP.\n    </p>\n    <p>\n    “Website” – internet site at the domain https://www.fluentsoft.com or any other site that is operated by FluentERP.\n    </p>\n    <p>\n    “You” – you, the person who use our services, products or software on our website or by using mobile applications.\n    </p>\n    <strong>\n    Changes to these Terms and Conditions\n    </strong>\n    <p [style.text-indent]=\"'20px'\">\n    FluentERP reserves the right to update and change these Terms by posting updates and changes of modified version at any time. FluentERP will make every effort to notify you about these changes in Terms via email or notifications on the website. You continue use of these Terms and Conditions after the update. You are advised to check the Terms of Service occasionally for any updates or changes that may impact you. Any new software or services provided by FluentERP that enhance, expand or enlarge existing Services will be the subject of these Terms. These Terms and Conditions can be changed in future. It is your obligation to ensure that you have read, understood and agree to the current version of Terms that are available on the website. Please review these Terms and Conditions periodically for changes.\n    </p>\n    <strong>\n    End user license agreement\n    </strong>\n    <p [style.text-indent]=\"'20px'\">\n    FluentERP grants you the right to access and use the Services provided on website thru this mobile application. This right is non-exclusive, non-transferable, and limited by and subject to this Agreement. \n    </p>\n    <strong>\n    General Obligations\n    </strong>\n    <p [style.text-indent]=\"'20px'\">\n    You are allowed to use the Services provided here only for your own and lawful business needs, according to these Terms and any notice sent by FluentERP or condition posted on the website. You have the right to use these Services and website on behalf of others or to provide services to others only if you are authorized to do that. Those persons should comply and accept all Terms of this Agreement if they granted you to use FluentERP Services.\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    Access: \n    </p>\n    <p>\n    It is your obligation to keep confidential and secure all logins and passwords that are required to access the Services. If you found any unauthorized use of your credentials or any other attack for Services security then you must notify FluentERP, and you will be provided with new password or login. You must take all necessary actions to maintain the security of accounts that you use.\n    </p>\n    <p>\n    Accessing and using these Services, you must:\n    </p>\n    <ul [style.list-style]=\"'none'\" style=\"padding:0px\">\n    <li>\n    1) not try to break the security of FluentERP Services and software, computing networks or systems, or the third party networks where are hosted FluentERP Services;\n    </li>\n    <li>\n    2) not use the Services provided to you by FluentERP in any way that can damage the proper stable work of Services, systems, software or website;\n    </li>\n    <li>\n    3) not use any services, software to or other programming tools to weaken the ability of any other user to use the Services or website;\n    </li>\n    <li>\n    4) not misuse the Services in a manner that exceeds reasonable usage;\n    </li>\n    <li>\n    5) not use the Services in a malicious, fraudulent or unlawful manner;\n    </li>\n    <li>\n    6) not try to get unauthorized access to any data other than that to what you have been given access or to the system where are hosted FluentERP Services;\n    </li>\n    <li>\n    7) not upload any files or input any kind of information into the Website that can damage the software, networks, systems or devices;\n    </li>\n    <li>\n    8) not upload any material or data protected by copyright or commercial know-how which you don’t have the right to use;\n    </li>\n    <li>\n    9) not upload any offensive data or images related to racism, fascism, pornography, religion and so on;\n    </li>\n    <li>\n    10) not try to disassemble or decompile any computer software used to deliver the Services by FluentERP, hack into the computer networks and systems.\n    </li>\n    </ul>\n    <p [style.font-style]=\"'italic'\">\n    Usage Limitations:\n    </p>\n    <p>\n    Usage of FluentERP Services may be subject to limitations. It can include\n    </p>\n    <p>\n    Usage of FluentERP Services may be subject to limitations. It can include number of proceeded orders, number of requests made via FluentERP’s API, number of users etc. Any kind of limitations may be varied by FluentERP. Your obligation is to check these Terms and Conditions periodically for the new version.\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    FluentERP Mobile App: \n    </p>\n    <p>\n    Use of the mobile app (FluentERP mobile application for Android or iOS operating systems) is an additional access tool for users to conveniently use all or partial functionality available on the website from mobile devices. If you don’t accept these Terms and Conditions then you must stop using the App and, if necessary, delete it from your device(s).\n    </p>\n    <strong>\n    Confidentiality and Privacy\n    </strong>\n    <p [style.font-style]=\"'italic'\">\n    Confidentiality:\n    </p>\n    <p>\n    Each party of this Agreement shall preserve the confidentiality of all confidential information of the other, obtained in connection with these Terms. Neither party may, without the prior written consent of the other, disclose or make any confidential information available to any person, or use the same for its own benefit, other than as contemplated by these Terms. The provisions of previous clause shall not apply to any information which:\n    </p>\n    <p>\n    <li>\n    is or becomes public other than by a breach of this clause;\n    </li>\n    <li>\n    is received from a third party who lawfully acquired it and who is under no obligation restricting its disclosure;\n    </li>\n    <li>\n    is in the possession of the receiving party without restriction in relation to disclosure before the date of receipt from the disclosing party; or\n    </li>\n    <li>\n    is independently developed without access to the Confidential Information.\n    </li>\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    Privacy:\n    </p>\n    <p>\n    FluentERP maintains industry standard for privacy policy that sets out the parties’ obligations in respect of personal information. You should carefully read that policy. When you accept and agree to these Terms and Conditions then you have also accept and agree to the Privacy Policy.\n    </p>\n    <strong>\n    Intellectual Property\n    </strong> \n    <p [style.font-style]=\"'italic'\">\n    General:\n    </p> \n    <p>\n    The website and any documentation or user guides related to the Services remain the property of FluentERP.\n    </p>  \n    <p [style.font-style]=\"'italic'\">\n    Ownership of Data:\n    </p>   \n    <p>\n    The data, entered by you on FluentERP services, remain your own property. You grant FluentERP a license to use, copy, transmit, store, and back-up your information and data for the purposes of enabling you to access and use the Services and for any other purpose related to provision of Services to you.\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    Backup of data:\n    </p>\n    <p>\n    You must maintain copies of all data inputted into the Service. FluentERP will do its best to prevent data loss, including periodically data back-up, but does not guarantee that there will be no loss of data. FluentERP excludes responsibility for any possible loss of data no matter how it was caused.\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    Third-party integrations and your data:\n    </p>\n    <p>\n    FluentERP will not be responsible for any disclosure, changes or loss of your data resulting from any such access by third-party application providers.\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    Accuracy of Data:\n    </p>\n    <p>\n    When you input any data onto the website you agree and acknowledge that you are responsible for ensuring the accuracy of such data. FluentERP is under no obligation to ensure that your data on the website is an accurate representation of your actual business data. We strongly recommend to perform a periodical review of your actual stocks and products.\n    </p>\n    <strong>\n    Warranties and Acknowledgements\n    </strong>\n    <p [style.font-style]=\"'italic'\">\n    Acknowledgement:\n    </p>\n    <p>\n    To use the Services and the website you must be authorized to access the information and to input the data into the website, including any information or data input into the website by any person you have authorized to use FluentERP Services. You  must be also authorized to access the processed information and data that was made available to you through your use of the website and the services.\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    No Warranties:\n    </p>\n    <p>\n    FluentERP does not give any warranty about the Services and that they will meet your specific requirements, business needs or that they will be suitable for any particular purpose. To avoid doubt, all implied conditions or warranties are excluded in so far as is permitted by law, including warranties of merchantability, fitness for purpose, title and non-infringement.\n    </p>\n    <strong>\n    Limitation of Liability\n    </strong> \n    <p [style.text-indent]=\"'20px'\">\n    FluentERP excludes all liability and responsibility to you (or any other person) in contract, tort (including negligence), or otherwise, for any loss (including loss of information, data, profits and savings) or damage resulting, directly or indirectly, from any use of, or reliance on, the Services or website. If you are not satisfied with the Service, you must terminate these Terms and Conditions and stop using FluentERP services.\n    </p>      \n    <strong>\n    Termination\n    </strong>   \n    <p [style.text-indent]=\"'20px'\">\n    FluentERP reserves the right to terminate your usage of Services in the following cases:\n    <li>\n    You breach any of these Terms and Conditions;\n    </li>\n    <li>\n    You terminate this Agreement and your use of the Services and the website.\n    </li>\n    </p> \n     \n    <strong>\n    Help and Support</strong>\n    <p [style.font-style]=\"'italic'\">\n    Technical issues:\n    </p>\n    <p>\n    If you still need some technical assistance, please check the support provided online by FluentERP on the website or emailing us at info@Fluenterp.com. Also you can use online chat facing some troubles with Services. FluentERP will do its best to address all queries and requests for assistance received through the website or via email as soon as possible, but does not guarantee you support instantly.\n    </p>\n    <p [style.font-style]=\"'italic'\">\n    Service availability:\n    </p>\n    <p>\n    FluentERP makes all efforts to make the Services available 24/7.\n    </p>\n    <p>\n    It is possible that the Services or website may be unavailable temporarily for scheduled maintenance, upgrade or other required technical activities. If for any reason FluentERP has to suspend the Services for longer periods than FluentERP would normally expect, FluentERP will publish in advance details of such activity on the website.\n    </p>\n    <strong>\n    Other\n    </strong>\n    <p [style.text-indent]=\"'20px'\">\n    These Terms, together with the FluentERP Privacy Policy, supersede all prior agreements between you and FluentERP relating to the Services provided to you by FluentERP.Any claims will be considered only if they were made in writing before by each parties. Neither party will be liable for any delay or failure in performance of its obligations under these Terms if the delay or failure is due to any cause outside its reasonable control. This clause does not apply to any obligation to pay money. You may not assign or transfer any rights to any other person without FluentERP’s prior written consent.\n    </p>\n    <p>\n    If any part or provision of these Terms is not correct or in conflict with the law, that part or provision is replaced with a provision which, as far as possible, accomplishes the original purpose of that part or provision. The remainder of this Agreement will be binding on the parties.\n    </p>\n    <p>\n    Any notice given under these Terms by either party to the other must be in writing by email and will be deemed to have been given on transmission unless an electronic error message is received by the sender. Notices to FluentERP must be sent to info@Fluenterp.com or to any other email address notified by email to you by FluentERP. Notices to you will be sent to the email address which you provided when setting up your access to the Service.\n    </p>\n    <p>\n    A person who is not a party to these Terms has no right to benefit under or to enforce any term of these Terms.\n    </p>\n    <p>\n    Thank you for taking the time spent to read and the efforts to understand our Terms and Conditions.\n    </p>\n    <ion-button class=\"comp algnBtn\" (click)=\"termsAccepted()\">Accept & Continue</ion-button>\n  </div>\n  <!-- <ion-button color=\"#006495\" class=\"comp\" expand=\"full\" (click)=\"termsAccepted()\">Accept and Continue</ion-button> -->\n</ion-content>");

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/Observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/Observable.js ***!
  \*********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/observable/throw.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throwError = rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"];
//# sourceMappingURL=throw.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/catch.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/catch */ "./node_modules/rxjs-compat/_esm2015/operator/catch.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/add/operator/map.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm2015/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/catch.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/catch.js ***!
  \*************************************************************/
/*! exports provided: _catch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_catch", function() { return _catch; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function _catch(selector) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(selector)(this);
}
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm2015/operator/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm2015/operator/map.js ***!
  \***********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/folder/sign-up/about/about.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/folder/sign-up/about/about.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".abt_container {\n  margin: 19px 32px 19px 33px;\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.79;\n  letter-spacing: normal;\n  text-align: left;\n  color: #818181;\n}\n\n.logo {\n  text-align: center;\n}\n\n.comp {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background: #3382f8;\n  color: #ffffff;\n  box-shadow: 2px 2px 22px 4px #5f95f7;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%);\n  text-transform: capitalize;\n}\n\n.algnBtn {\n  width: 50%;\n  position: fixed;\n  bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvYWJvdXQvRTpcXGNpdHliYXNlXFxGbHVlbnRNV01fQ0VQX3Rtcy9zcmNcXGFwcFxcZm9sZGVyXFxzaWduLXVwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9zaWduLXVwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0UsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUkY7O0FEVUU7RUFDSSxrQkFBQTtBQ1BOOztBRFVFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDUEo7O0FEVUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9zaWduLXVwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNvbXB7XHJcbi8vICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuLy8gICBtYXJnaW46MjAlIDBweDtcclxuLy8gfVxyXG5cclxuLy8gLmxvZ297XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi5hYnRfY29udGFpbmVyIHtcclxuICBtYXJnaW46IDE5cHggMzJweCAxOXB4IDMzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc5O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzgxODE4MTtcclxufVxyXG4gIC5sb2dve1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29tcHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzM4MmY4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDIycHggNHB4ICM1Zjk1Zjc7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAuYWxnbkJ0bntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgfVxyXG4iLCIuYWJ0X2NvbnRhaW5lciB7XG4gIG1hcmdpbjogMTlweCAzMnB4IDE5cHggMzNweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzk7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODE4MTgxO1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbXAge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzMzgyZjg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDIycHggNHB4ICM1Zjk1Zjc7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hbGduQnRuIHtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/folder/sign-up/about/about.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/folder/sign-up/about/about.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



let AboutComponent = class AboutComponent {
    constructor(translate) {
        this.translate = translate;
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
    }
    ngOnInit() { }
};
AboutComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/about/about.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.scss */ "./src/app/folder/sign-up/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/folder/sign-up/login/login.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/folder/sign-up/login/login.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".comp {\n  background: #006495;\n  margin-top: 10%;\n}\n\n.login {\n  text-align: center;\n}\n\n.logo {\n  margin: 20% 0 0 0;\n}\n\n.logo1 {\n  margin: 0 0 15% 0;\n}\n\nh6 {\n  font-size: 14px;\n  color: #006495;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvbG9naW4vRTpcXGNpdHliYXNlXFxGbHVlbnRNV01fQ0VQX3Rtcy9zcmNcXGFwcFxcZm9sZGVyXFxzaWduLXVwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9zaWduLXVwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9zaWduLXVwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xyXG4gICAgbWFyZ2luLXRvcDoxMCU7XHJcbiAgfVxyXG4ubG9naW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ297XHJcbiAgICBtYXJnaW46IDIwJSAwIDAgMDtcclxufVxyXG4ubG9nbzF7XHJcbiAgICBtYXJnaW46IDAgMCAxNSUgMDtcclxufVxyXG5oNntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDA2NDk1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLmNvbXAge1xuICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW46IDIwJSAwIDAgMDtcbn1cblxuLmxvZ28xIHtcbiAgbWFyZ2luOiAwIDAgMTUlIDA7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwNjQ5NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/sign-up/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/folder/sign-up/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up.service */ "./src/app/folder/sign-up/sign-up.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "./node_modules/@ionic-native/uid/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let LoginComponent = class LoginComponent {
    constructor(router, loginSer, storage, nativeStorage, uniqueDeviceID, uid, androidPermissions, translate) {
        this.router = router;
        this.loginSer = loginSer;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.uniqueDeviceID = uniqueDeviceID;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.translate = translate;
        this.showSpinner = false;
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
        this.translate.get('Permission granted').subscribe(value => { this.permGrant = value; });
        this.translate.get('Login failed').subscribe(value => { this.loginFailed = value; });
        this.translate.get('Invalid credentials').subscribe(value => { this.invalidCred = value; });
        //Check Permission on App Start
        this.getPermission();
    }
    getID_UID(type) {
        return this.uid.UUID;
    }
    getPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
            if (res.hasPermission) {
                this.uniqueID = this.getID_UID("UUID");
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
                    if (res.hasPermission) {
                        alert(this.permGrant);
                    }
                }).catch(error => {
                    alert("Error! " + error);
                });
            }
        }).catch(error => {
            alert("Error! " + error);
        });
    }
    ngOnInit() {
    }
    login() {
        this.showSpinner = true;
        let loginData = {
            UserName: this.name,
            Password: this.pass,
            UUID: this.uniqueID
        };
        this.loginSer.login(loginData).subscribe(res => {
            if (res['data']) {
                this.showSpinner = false;
            }
            this.storage.set('ion_did_login', false);
            window.localStorage.setItem('loginDetails', res['data']);
            window.localStorage.setItem('userId', res['data'].userid);
            window.localStorage.setItem('AtteType', res['data'].type);
            window.localStorage.setItem('empId', res['data'].user2employee);
            window.localStorage.setItem('siteId', res['data'].siteid);
            window.localStorage.setItem('user2employee', res['data'].user2employee);
            window.localStorage.setItem('name', res['data'].fname);
            window.localStorage.setItem('companyId', res['data'].employee2company);
            window.localStorage.setItem('dept', res['data'].dept);
            window.localStorage.setItem('token', res['data'].token);
            window.localStorage.setItem('terms', res['data'].tcflag);
            if (res['data'] == 'Login failed') {
                this.errMsg = this.loginFailed;
                this.showSpinner = false;
            }
            else if ((res['data'].userid != undefined || res['data'].userid != null || res['data'].userid != 'undefined' || res['data'].userid != 'null' || res['data'].userid != '') && (window.localStorage.getItem('AtteType') == 'TMS')) {
                if (res['data'].tcflag == 1) {
                    this.router.navigateByUrl('/folder/tms/mytask');
                }
                else {
                    this.router.navigateByUrl('/folder/signUp/terms');
                }
            }
            else {
                this.errMsg = this.invalidCred;
                this.showSpinner = false;
            }
        }, error => {
            this.showSpinner = false;
            this.errMsg = (error.error.data);
        });
    }
    register() {
        this.router.navigate(['/folder/signUp/register']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignUpService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_8__["UniqueDeviceID"] },
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_7__["Uid"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_6__["AndroidPermissions"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/folder/sign-up/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/folder/sign-up/register/register.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/folder/sign-up/register/register.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnHome {\n  color: white;\n}\n\n.comp {\n  background: #006495;\n  margin-top: 8%;\n}\n\n.login {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvcmVnaXN0ZXIvRTpcXGNpdHliYXNlXFxGbHVlbnRNV01fQ0VQX3Rtcy9zcmNcXGFwcFxcZm9sZGVyXFxzaWduLXVwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9zaWduLXVwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuSG9tZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uY29tcHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDY0OTU7XHJcbiAgICBtYXJnaW4tdG9wOjglO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2lue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmJ0bkhvbWUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb21wIHtcbiAgYmFja2dyb3VuZDogIzAwNjQ5NTtcbiAgbWFyZ2luLXRvcDogOCU7XG59XG5cbi5sb2dpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/sign-up/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/folder/sign-up/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-up.service */ "./src/app/folder/sign-up/sign-up.service.ts");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "./node_modules/@ionic-native/uid/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










let RegisterComponent = class RegisterComponent {
    constructor(router, loginSer, storage, nativeStorage, uniqueDeviceID, uid, androidPermissions, translate) {
        this.router = router;
        this.loginSer = loginSer;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.uniqueDeviceID = uniqueDeviceID;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.translate = translate;
        this.showSpinner = false;
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
        this.translate.get('Permission granted').subscribe(value => { this.permGrant = value; });
        this.translate.get('User exists').subscribe(value => { this.userExist = value; });
        this.translate.get('UUID exists').subscribe(value => { this.uuidExist = value; });
        this.translate.get('Employee exists').subscribe(value => { this.empExist = value; });
        this.translate.get('Password mismatch').subscribe(value => { this.pwdMismatch = value; });
        //Check Permission on App Start
        this.getPermission();
    }
    getID_UID(type) {
        return this.uid.UUID;
    }
    getPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
            if (res.hasPermission) {
                this.uniqueID = this.getID_UID("UUID");
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
                    if (res.hasPermission) {
                        alert(this.permGrant);
                    }
                }).catch(error => {
                    alert("Error! " + error);
                });
            }
        }).catch(error => {
            alert("Error! " + error);
        });
    }
    ngOnInit() { }
    arrow() {
        this.router.navigate(['/folder/signUp/login']);
    }
    register() {
        this.showSpinner = true;
        if (this.uniqueID == '' || this.uniqueID == null) {
            this.getPermission();
        }
        else if (this.pass == this.confirm_pass) {
            let registerData = {
                EmpID: this.empid,
                SiteID: this.siteid,
                UserName: this.userid,
                Password: this.pass,
                AtteType: 'TMS',
                UniqueID: this.uniqueID
            };
            this.loginSer.register(registerData).subscribe(res => {
                if (res['data'] == "User exists") {
                    this.errMsg = this.userExist;
                    this.showSpinner = false;
                }
                else if (res['data'] == "UUID exists") {
                    this.errMsg = this.uuidExist;
                    this.showSpinner = false;
                }
                else if (res['data'] == "Employee doesn't exist") {
                    this.errMsg = this.empExist;
                    this.showSpinner = false;
                }
                else if (res['data'] == "User Registration Successful") {
                    this.router.navigateByUrl('/folder/signUp/login');
                }
            }, error => {
                this.showSpinner = false;
                this.errMsg = (error.error.data);
            });
        }
        else {
            this.errMsg = this.pwdMismatch;
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _sign_up_service__WEBPACK_IMPORTED_MODULE_5__["SignUpService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__["UniqueDeviceID"] },
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_7__["Uid"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_8__["AndroidPermissions"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/folder/sign-up/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/folder/sign-up/sign-up-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder/sign-up/sign-up-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SignUpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRoutingModule", function() { return SignUpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/folder/sign-up/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/folder/sign-up/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/folder/sign-up/register/register.component.ts");
/* harmony import */ var _termsconditions_termsconditions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termsconditions/termsconditions.component */ "./src/app/folder/sign-up/termsconditions/termsconditions.component.ts");







const routes = [
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'terms',
        component: _termsconditions_termsconditions_component__WEBPACK_IMPORTED_MODULE_6__["TermsconditionsComponent"]
    }
];
let SignUpRoutingModule = class SignUpRoutingModule {
};
SignUpRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignUpRoutingModule);



/***/ }),

/***/ "./src/app/folder/sign-up/sign-up.module.ts":
/*!**************************************************!*\
  !*** ./src/app/folder/sign-up/sign-up.module.ts ***!
  \**************************************************/
/*! exports provided: createTranslateLoader, SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/folder/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/folder/sign-up/about/about.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/folder/sign-up/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/folder/sign-up/register/register.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _termsconditions_termsconditions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./termsconditions/termsconditions.component */ "./src/app/folder/sign-up/termsconditions/termsconditions.component.ts");













function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let SignUpModule = class SignUpModule {
};
SignUpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
            _termsconditions_termsconditions_component__WEBPACK_IMPORTED_MODULE_12__["TermsconditionsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignUpRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                }
            })
        ]
    })
], SignUpModule);



/***/ }),

/***/ "./src/app/folder/sign-up/sign-up.service.ts":
/*!***************************************************!*\
  !*** ./src/app/folder/sign-up/sign-up.service.ts ***!
  \***************************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm2015/add/observable/throw.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let SignUpService = class SignUpService {
    constructor(http) {
        this.http = http;
    }
    login(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'auth/login', data)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    termsConditions(userId, terms) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'auth/updateTc/' + userId + '/' + terms)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    register(data) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].urlPHP + 'auth/register', data)
            .map(Response => { return Response; }).catch(this.handleErrors);
    }
    handleErrors(error) {
        console.log(error.error.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.error.message || 'backend server error');
    }
};
SignUpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SignUpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SignUpService);



/***/ }),

/***/ "./src/app/folder/sign-up/termsconditions/termsconditions.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/folder/sign-up/termsconditions/termsconditions.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainhdng {\n  text-align: center;\n}\n\n.terms-container {\n  margin: 25px 35px 45px 30px;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.79;\n  letter-spacing: normal;\n  text-align: left;\n  color: #818181;\n  text-align: justify;\n  overflow-y: auto;\n}\n\n.comp {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background: #3382f8;\n  color: #ffffff;\n  box-shadow: 2px 2px 22px 4px #5f95f7;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%);\n  text-transform: capitalize;\n}\n\n.algnBtn {\n  width: 50%;\n  position: fixed;\n  bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvdGVybXNjb25kaXRpb25zL0U6XFxjaXR5YmFzZVxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcc2lnbi11cFxcdGVybXNjb25kaXRpb25zXFx0ZXJtc2NvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZvbGRlci9zaWduLXVwL3Rlcm1zY29uZGl0aW9ucy90ZXJtc2NvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBO0VBU0ksa0JBQUE7QUM3Qko7O0FEa0NBO0VBQ0ksMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtBQ2hDSjs7QURrQ0E7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNoQ0o7O0FEbUNFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDaENKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3NpZ24tdXAvdGVybXNjb25kaXRpb25zL3Rlcm1zY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5tYWluaGRuZ3tcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuLy8gfVxyXG4vLyAuZm50Y29sb3J7XHJcbi8vICAgICBjb2xvcjogIzA2NDI2MCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC50ZXJtcy1jb250YWluZXJ7XHJcbi8vICAgICBtYXJnaW46IGF1dG87XHJcbi8vICAgICBtYXJnaW46IDAgMTVweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIG1heC1oZWlnaHQ6IDc4dmg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4vLyAgICAgLy8gbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4vLyAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuLy8gfVxyXG4vLyAuY29tcHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICMwMDY0OTU7XHJcbi8vICAgICBtYXJnaW4tdG9wOjJ2aDtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbi8vICAgfVxyXG4ubWFpbmhkbmd7XHJcbiAgICAvLyBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIC8vIC8vIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAvLyBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIC8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAxLjc5O1xyXG4gICAgLy8gbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIC8vIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgIC8vIGNvbG9yOiAjMDY0MjYwO1xyXG59XHJcblxyXG4udGVybXMtY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAyNXB4IDM1cHggNDVweCAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43OTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICAvLyBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLmNvbXB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzMzODJmODtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAzcHggMTZweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDIycHggNHB4ICM1Zjk1Zjc7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG5cclxuICAuYWxnbkJ0bntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgfSIsIi5tYWluaGRuZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRlcm1zLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjVweCAzNXB4IDQ1cHggMzBweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzk7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODE4MTgxO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY29tcCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzMzODJmODtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMjJweCA0cHggIzVmOTVmNztcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFsZ25CdG4ge1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/sign-up/termsconditions/termsconditions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/folder/sign-up/termsconditions/termsconditions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TermsconditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsconditionsComponent", function() { return TermsconditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-up.service */ "./src/app/folder/sign-up/sign-up.service.ts");





let TermsconditionsComponent = class TermsconditionsComponent {
    constructor(alertController, router, loginSer) {
        this.alertController = alertController;
        this.router = router;
        this.loginSer = loginSer;
        this.showSpinner = false;
        this.userId = window.localStorage.getItem('userId');
    }
    ngOnInit() { }
    termsAccepted() {
        this.terms = 1;
        this.loginSer.termsConditions(this.userId, this.terms).subscribe(res => {
            if (res['data'] == 1) {
                window.localStorage.setItem('terms', '1');
            }
        }, error => {
            this.showSpinner = false;
            this.errTitle = 'Error!';
            this.errMsg = (error);
            this.showAlert(this.errTitle, this.errMsg);
        });
        this.router.navigateByUrl('/folder/tms/mytask');
    }
    showAlert(title, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alertDanger',
                header: title,
                message: msg,
                buttons: ['OK'],
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
};
TermsconditionsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"] }
];
TermsconditionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-termsconditions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./termsconditions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/sign-up/termsconditions/termsconditions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./termsconditions.component.scss */ "./src/app/folder/sign-up/termsconditions/termsconditions.component.scss")).default]
    })
], TermsconditionsComponent);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map