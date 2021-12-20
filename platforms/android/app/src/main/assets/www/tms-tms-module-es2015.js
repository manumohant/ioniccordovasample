(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tms-tms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolBar\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>  \r\n    <ion-title>{{'Tasks'|translate}}</ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n    <ion-button slot=\"end\" class=\"btnHome\" (click)=\"goToLoc('All')\">\r\n      <ion-icon name=\"compass-sharp\" ios=\"compass-outline\" md=\"compass-sharp\"></ion-icon>\r\n    </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\r\n  <!-- <ion-item>\r\n    <ion-label>Language</ion-label>\r\n    <ion-select [(ngModel)]=\"lang\" (ngModelChange)=\"switchLanguage()\">\r\n      <ion-select-option value=\"en\">English</ion-select-option>\r\n      <ion-select-option value=\"cn\">Chinese</ion-select-option>\r\n    </ion-select>\r\n  </ion-item> -->\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=5>\r\n          <ion-item class=\"primary1\">\r\n              <ion-label position=\"floating\" class=\"lbl\">{{'Start date'|translate}}</ion-label>\r\n              <ion-datetime displayFormat=\"MM-DD-YYYY\" [(ngModel)]=\"firstDay\"  value=\"firstDay\" name=\"firstDate\" ngDefaultControl></ion-datetime>\r\n          </ion-item>         \r\n      </ion-col>\r\n      <ion-col size=5>\r\n          <ion-item class=\"primary1\">\r\n              <ion-label position=\"floating\" class=\"lbl\">{{'End date'|translate}}</ion-label>\r\n              <ion-datetime displayFormat=\"MM-DD-YYYY\" [(ngModel)]=\"lastDay\"  value=\"lastDay\" name=\"lastDay\"  ngDefaultControl></ion-datetime>\r\n          </ion-item>          \r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n      <ion-button size=\"small\" type=\"button\" class=\"gen\" color=\"#00aaa0\" (click)=\"goToLi('All')\">\r\n        <ion-icon name=\"search-outline\" class=\"search\"></ion-icon>\r\n      </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"cur\" [style.background]=\"'#f0f6ff'\" [style.color]=\"'#3382f8'\" (click)=\"goToLi('Created')\">\r\n          <!-- Assign: {{taskList.length}} -->\r\n          <div class=\"cnt\">{{assignedCount}}</div>\r\n          <div class=\"txts\">{{'Assigned'|translate}}</div>\r\n        </ion-col>\r\n        <ion-col class=\"cur\" [style.background]=\"'#edfff8'\" [style.color]=\"'#00b71c'\" (click)=\"goToLi('Completed')\">\r\n          <div class=\"cnt\">{{completCount}}</div>\r\n          <div class=\"txts\">{{'Completed'|translate}}</div>\r\n        </ion-col>                \r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"cur\" [style.background]=\"'#fef8ed'\" [style.color]=\"'#ffa500'\" (click)=\"goToLi('Accepted')\">\r\n          <div class=\"cnt\">{{accepCount}}</div>\r\n          <div class=\"txts\">{{'Accepted'|translate}}</div>\r\n        </ion-col>\r\n        <ion-col class=\"cur\" [style.background]=\"'#fdeeed'\" [style.color]=\"'#e50e00'\" (click)=\"goToLi('Rejected')\">\r\n          <div class=\"cnt\">{{rejectCount}}</div>\r\n          <div class=\"txts\">{{'Rejected'|translate}}</div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"cur\" [style.background]=\"'#f5f5f5'\" [style.color]=\"'#000000'\" (click)=\"goToLi('Reopen')\">\r\n          <div class=\"cnt\">{{reOpenCount}}</div>\r\n          <div class=\"txts\">{{'Reopen'|translate}}</div>\r\n        </ion-col>\r\n        <ion-col class=\"cur\" [style.background]=\"'#e6f8ff'\" [style.color]=\"'#22a7e0'\" (click)=\"goToLi('All')\">\r\n          <div class=\"cnt\">{{totalCount}}</div>\r\n          <div class=\"txts\">{{'Total'|translate}}</div>\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <ion-list>  \r\n    <ion-item *ngFor=\"let l of taskList | slice:0:slice\">          \r\n      <ion-row class=\"entireRow\" (click)=\"goToDes(l.id, l.stage, l.taskName)\">\r\n        <ion-col size=\"3\">\r\n            <p class=\"des\">{{l.startDate | date:\"MM-dd-yyyy\"}}</p>                    \r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n            <!-- <p class=\"taskName\">{{l.project}}</p> -->\r\n            <p class=\"taskName\">{{l.taskName}}</p>\r\n            <p class=\"des\">{{l.startDate | date: \"shortTime\" }} - {{l.endDate | date: \"shortTime\"}}</p>\r\n            <p class=\"des\">{{l.shiftid|translate}}</p>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <p class=\"des\" [ngStyle]=\"{'color': (l.stage =='Created') ? '#0a7fcf' : '' || (l.stage =='Completed') ? '#5fb543' : '' || (l.stage =='Accepted') ? '#eaa200' : '' || (l.stage =='Rejected') ? '#eb445a' : '' || (l.stage =='Reopen') ? '#9d9fa6' : ''}\"> {{l.stage|translate}}</p>\r\n          <p class=\"des\">{{l.address1}}</p>\r\n          <p class=\"des\">{{l.address2}}</p>\r\n          <p class=\"des\">{{l.city}}-{{l.zipcode}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n    <ion-item class=\"nodat\" *ngIf=\"nodat == true\"><h6>{{'No Tasks'|translate}}</h6></ion-item>\r\n  </ion-list>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data…\"></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar  class=\"toolBar\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-buttons slot=\"start\">\r\n              <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n      </ion-buttons>\r\n    <ion-title>New Task</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Project</ion-label>\r\n    <ion-select [(ngModel)]=\"selectedProject\" required=\"true\">\r\n      <ion-select-option *ngFor=\"let project of projects\" [value]=\"project.id\">{{ project.name }}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Task Name</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"taskName\" name=\"taskName\" (ionBlur)=\"checkTaskName()\" required=\"true\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Task Description</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"taskDescription\" name=\"taskDescription\" required=\"true\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Expected Start Date</ion-label>\r\n     <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"startDate\" name=\"title\" required=\"true\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Expected End Date</ion-label>\r\n     <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"endDate\" name=\"title\" required=\"true\"></ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Expected Duration(Hrs)</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"duration\" name=\"title\" required=\"true\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>\r\n    <ion-label position=\"floating\">Priority</ion-label>\r\n    <ion-select [(ngModel)]=\"priority\">\r\n      <ion-select-option value=\"0\">Low</ion-select-option>\r\n      <ion-select-option value=\"1\">Medium</ion-select-option>\r\n      <ion-select-option value=\"2\">High</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Address</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"address\" name=\"address\" (ionChange)=\"getAdd($event)\" required=\"true\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"createTask()\">CREATE</ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar class=\"toolBar\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-buttons slot=\"start\">\r\n            </ion-buttons>\r\n            <ion-button class=\"btnHome\"  (click)=\"goBack()\">\r\n              <!-- <i class=\"fas fa-arrow-left\"></i> &nbsp; -->\r\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>back\r\n            </ion-button>\r\n        </ion-buttons>\r\n      <ion-title>{{'Task details'|translate}}</ion-title>\r\n        <!-- <ion-icon name=\"ellipsis-vertical\" *ngIf=\" details && details.stage == 'Created'\" class=\"menuBtn\"></ion-icon> -->\r\n        <!-- [style.color]=\"'white'\" -->\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!-- <ul class=\"breadcrumb\">\r\n  <li><span (click)=\"breadcrumb();\">{{'Tasks'|translate}}</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\r\n  <li class=\"active\">{{'Task details'|translate}}</li>\r\n</ul> -->\r\n<!-- <ion-content>\r\n  <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\r\n  <ion-grid *ngIf=\"details && resonTab == false\">\r\n    <ion-row class=\"tabHead\">\r\n      <ion-col>{{'Project'|translate}} : </ion-col> <ion-col>{{details.project}}</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"tabHead\">\r\n      <ion-col>{{'Date'|translate}} : </ion-col> <ion-col>{{details.start_date | date:\"MM-dd-yyyy\"}}</ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"tabHead\">\r\n      <ion-col>{{'Shift'|translate}} : </ion-col> <ion-col>{{details.shiftid | translate}}</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"tabHead\">\r\n      <ion-col>{{'Scheduled time'|translate}} : </ion-col> <ion-col>{{details.start_date | date: \"shortTime\"}} - {{details.finish_date | date: \"shortTime\"}}</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"tabHead\">\r\n      <ion-col>{{'Status'|translate}} : </ion-col> <ion-col [ngStyle]=\"{'color': (details.stage =='Created') ? '#3dc2ff' : '' || (details.stage =='Completed') ? 'green' : '' || (details.stage =='Accepted') ? '#e0ac08' : ''}\">{{details.stage|translate}}</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"tabHead\">\r\n      <ion-col>{{'Priority'|translate}} : </ion-col> <ion-col [ngStyle]=\"{'color': (details.priority =='Medium' || details.priority =='medium') ? '#ffc409' : '' || (details.priority =='Low' || details.priority =='low') ? '#28ba62' : '' || (details.priority =='High' || details.priority =='high') ? '#ff0000' : ''}\">{{details.priority|translate}}</ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"tabHead\" *ngIf=\"details.stage=='Completed'\">\r\n        <ion-col>{{'Completed date'|translate}} : </ion-col> <ion-col>{{details.finish_date | date:\"MM-dd-yyyy\"}}</ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"tabHead\">\r\n      <ion-col>{{'Address'|translate}} : </ion-col> \r\n      <ion-col>\r\n        {{details.address1}}<br/>\r\n        {{details.address2}}<br/>\r\n        {{details.city}}-{{details.zipcode}}<br/>\r\n        {{details.state}}\r\n        {{details.Country}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"details.stage == 'Created' || details.stage == 'Reopen'\">\r\n      <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"accept()\">{{'Accept'|translate}}</ion-button>\r\n      <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"rej()\" >{{'Reject'|translate}}</ion-button>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content> -->\r\n\r\n<ion-content>\r\n  <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\r\n  <ion-grid *ngIf=\"details && resonTab == false\">\r\n    <ion-card>\r\n      <ion-card-header class=\"card_desgn\">\r\n        <div class=\"main\">{{details.taskName}}</div>\r\n        <span class=\"owner\">{{details.project}}</span>\r\n        <span class=\"email_dt pos\" [ngStyle]=\"{'color': (details.stage =='Created') ? '#3382f8' : '' || (details.stage =='Completed') ? '#00b71c' : '' || (details.stage =='Accepted') ? '#ffa500' : ''}\">\r\n          {{details.stage|translate}}\r\n        </span>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"owner\">{{'Date'|translate}}</div>\r\n            <span class=\"org\">{{details.start_date | date:\"MM-dd-yyyy\"}}</span>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"owner\">{{'Scheduled time'|translate}}</div>\r\n            <span class=\"org\">{{details.start_date | date: \"shortTime\"}} - {{details.finish_date | date: \"shortTime\"}}</span>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"owner\">{{'Priority'|translate}}</div>\r\n            <span class=\"org\" [ngStyle]=\"{'color': (details.priority =='Medium' || details.priority =='medium') ? '#ffc409' : '' || (details.priority =='Low' || details.priority =='low') ? '#28ba62' : '' || (details.priority =='High' || details.priority =='high') ? '#ff0000' : ''}\">{{details.priority|translate}}</span>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div class=\"owner\">{{'Tasks Location'|translate}}</div>\r\n            <span class=\"org\">{{details.loc_name}}</span>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <div class=\"owner\">{{'Address'|translate}}</div>\r\n            <span class=\"org\">\r\n              {{details.address1}}&nbsp;\r\n              {{details.address2}}&nbsp;\r\n              {{details.city}}&nbsp;{{details.zipcode}}&nbsp;\r\n              {{details.state}}\r\n              {{details.Country}}\r\n            </span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-row class=\"ryt\">\r\n      <ion-col size=\"12\">\r\n        <div *ngIf=\"details.stage == 'Created' || details.stage == 'Reopen'\"> \r\n          <button ion-button class=\"bottom-button rej\" (click)=\"rej()\">\r\n            {{'Reject'|translate}}\r\n          </button> \r\n          <button ion-button class=\"bottom-button accept\" (click)=\"accept()\">\r\n            {{'Accept'|translate}}\r\n          </button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <h2 class=\"nodat\" *ngIf=\"nodat == true\">No Data</h2>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar  class=\"toolBar\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'Tasks Location'|translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ul class=\"breadcrumb\">\r\n    <li><span (click)=\"breadcrumb();\">{{'Tasks'|translate}}</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\r\n    <li class=\"active\">{{'Tasks Location'|translate}}</li>\r\n  </ul>\r\n  <ion-grid [style.padding]=\"'0'\">\r\n    <ion-row>\r\n      <ion-col  [style.background]=\"'#0a7fcf'\" (click)=\"goToLi('Created')\">\r\n        {{'Assigned'|translate}} :{{assignedCount}}\r\n      </ion-col>\r\n      <ion-col [style.background]=\"'#eaa200'\" (click)=\"goToLi('Accepted')\">\r\n        {{'Accepted'|translate}}: {{accepCount}}\r\n      </ion-col>\r\n      \r\n      <ion-col [style.background]=\"'#9d9fa6'\" (click)=\"goToLi('ReOpen')\">\r\n        {{'Reopen'|translate}}: {{reOpenCount}}\r\n      </ion-col>      \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid [style.padding]=\"'0'\">\r\n    <ion-row  *ngIf=\"taskList\">\r\n        <ion-col [style.background]=\"'#5fb543'\" (click)=\"goToLi('Completed')\">\r\n          {{'Completed'|translate}}: {{completCount}}\r\n        </ion-col>\r\n        <ion-col [style.background]=\"'#eb445a'\" (click)=\"goToLi('Rejected')\">\r\n          {{'Rejected'|translate}}: {{rejectCount}}\r\n        </ion-col>\r\n\r\n        <ion-col [style.background]=\"'#577590'\" (click)=\"goToLi('All')\">\r\n          {{'Total'|translate}}: {{taskList.length}}\r\n        </ion-col>\r\n    </ion-row>\r\n  </ion-grid> \r\n\r\n  <agm-map style=\"height:500px\" [zoom]='11' [latitude]=\"lat\" [longitude]=\"lon\" [usePanning]=\"true\">   \r\n    <agm-marker *ngFor=\"let d of details\" (markerClick)=\"clickedMarker(infowindow)\" [latitude]=\"d.lat\" [longitude]=\"d.lon\" [iconUrl]=\"{'url': (d.stage == 'Created')?'assets/icon/marker_blue.png':'' || (d.stage == 'Accepted')?'assets/icon/marker_orange.png':'' || (d.stage == 'Completed')?'assets/icon/marker_green.png':'' || (d.stage == 'ReOpen')?'assets/icon/marker_grey.png':''|| (d.stage == 'Rejected')?'assets/icon/marker_red.png':''}\">\r\n      <agm-info-window #infowindow>\r\n        <b>{{d.taskname}}</b><br/>{{d.description}}<br/>\r\n        {{d.address}}\r\n      </agm-info-window>\r\n    </agm-marker>\r\n  </agm-map>\r\n  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/folder/tms/my-task/my-task.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/folder/tms/my-task/my-task.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".entireRow {\n  width: 100%;\n}\n\n.taskName {\n  font-weight: 600;\n  text-transform: capitalize;\n  font-size: 0.9rem;\n  margin: 5px 0px;\n  color: #55565b !important;\n}\n\n.btnHome {\n  color: #fff;\n}\n\n.des {\n  color: #848d95;\n  margin: 5px 0px;\n  font-size: 0.9rem;\n}\n\n.stage {\n  font-size: 0.9rem;\n  margin: 5px 0px;\n  vertical-align: middle;\n}\n\n.gen {\n  width: 51px;\n  height: 45px;\n  border-radius: 6px;\n  background-color: #fff9ea;\n  margin-top: 0.5rem;\n  color: #3382f8;\n}\n\nion-button {\n  --box-shadow:none;\n}\n\n.search {\n  margin: 0 1.7px 1.7px 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #3382f8;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\nh5 {\n  color: #55565b !important;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 1rem;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.cur {\n  width: 160px;\n  height: 90px;\n  margin: 10px 10px;\n  padding: 16px 6px 21px;\n  border-radius: 10px;\n}\n\n.cnt {\n  width: 100%;\n  height: 39px;\n  font-family: Poppins;\n  font-size: 28px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.84px;\n  text-align: center;\n}\n\n.txts {\n  width: 100%;\n  height: 15px;\n  font-family: Poppins;\n  font-size: 10px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.nodat {\n  color: #b3a2a2 !important;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n\nion-icon {\n  font-size: 1.2rem;\n  margin-right: 6px;\n}\n\n.primary1 {\n  --border-color: var(--ion-color-primary, #3382f8);\n}\n\n.lbl {\n  --color: var(--ion-item-color, var(--ion-text-color, #818181));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy9teS10YXNrL0M6XFxVc2Vyc1xcbWFudW1cXERvd25sb2Fkc1xcZmx1ZW50Y2VwVE1TLW1hc3RlclxcZmx1ZW50Y2VwVE1TL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcbXktdGFza1xcbXktdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy9teS10YXNrL215LXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0FDRkY7O0FES0E7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0FDTkY7O0FEUUE7RUFHRSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUkY7O0FEVUE7RUFDSSxlQUFBO0FDUEo7O0FEU0E7RUFDRSx5QkFBQTtBQ05GOztBRFNBLGVBQUE7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNQSjs7QURTRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ05KOztBRFFFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRE9FO0VBS0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNSSjs7QURXRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlFO0VBQ0UseUJBQUE7QUNUSjs7QURXRTtFQUNFLHlCQUFBO0FDUko7O0FEVUU7RUFDRSxnQkFBQTtBQ1BKOztBRFNFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFVFO0VBQ0UsaURBQUE7QUNQSjs7QURTRTtFQUNFLDhEQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvdG1zL215LXRhc2svbXktdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnRpcmVSb3d7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRhc2tOYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBjb2xvcjogIzU1NTY1YiAhaW1wb3J0YW50O1xyXG59XHJcbi5idG5Ib21lIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4vLyAuZ2Vue1xyXG4vLyAgIGNvbG9yOmJsYWNrO1xyXG4vLyAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbi8vICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4vLyB9XHJcblxyXG4uZGVze1xyXG4gICAgY29sb3I6ICM4NDhkOTU7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4uc3RhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICAvLyBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG59XHJcbi5nZW57XHJcbiAgLy8gY29sb3I6YmxhY2s7XHJcbiAgLy8gYmFja2dyb3VuZDogI2RkZDtcclxuICB3aWR0aDogNTFweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgLy8gbWFyZ2luOiAyOXB4IDIwcHggNDNweCAyMi41cHg7XHJcbiAgLy8gcGFkZGluZzogMTVweCAxNy4zcHggMTQuNHB4IDE4LjJweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjllYTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgY29sb3I6ICMzMzgyZjg7XHJcbiAgLy8gYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgLy8gd2lkdGg6IDEzLjhweDtcclxuICAvLyBoZWlnaHQ6IDEzLjhweDtcclxuICBtYXJnaW46IDAgMS43cHggMS43cHggMDtcclxuICAvLyBib3JkZXI6IHNvbGlkIDEuNXB4ICMzMzgyZjg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzMzODJmODtcclxufVxyXG5pb24tc3Bpbm5lcntcclxuICAgIG1hcmdpbjogMjAlIDQ1JTtcclxufVxyXG5oNSB7XHJcbiAgY29sb3I6ICM1NTU2NWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQnJlYWRjcnVtYiAqL1xyXG4uYnJlYWRjcnVtYiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDojMGI3NmFhO1xyXG4gICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIHNwYW4ge1xyXG4gICAgY29sb3I6ICNDN0Q5RTI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jdXIge1xyXG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICAvLyBtYXJnaW46IDEwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDE2cHggNnB4IDIxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2VkZmZmODtcclxuICB9XHJcbiAgLmNudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIC8vIG1hcmdpbjogMCAyMnB4IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC44NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudHh0cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIC8vIG1hcmdpbjogMzZweCAwIDA7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gY29sb3I6ICMzMzgyZjg7XHJcbiAgfVxyXG4gIC5ub2RhdCB7XHJcbiAgICBjb2xvcjogI2IzYTJhMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XHJcbiAgICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudmlldy1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgLy8gLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKTtcclxuXHJcbiAgLnByaW1hcnkxIHtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzMzODJmOCk7XHJcbiAgfVxyXG4gIC5sYmx7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICM4MTgxODEpKTtcclxuICB9IiwiLmVudGlyZVJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza05hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgY29sb3I6ICM1NTU2NWIgIWltcG9ydGFudDtcbn1cblxuLmJ0bkhvbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRlcyB7XG4gIGNvbG9yOiAjODQ4ZDk1O1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uc3RhZ2Uge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZ2VuIHtcbiAgd2lkdGg6IDUxcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWVhO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGNvbG9yOiAjMzM4MmY4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW46IDAgMS43cHggMS43cHggMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMzM4MmY4O1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIG1hcmdpbjogMjAlIDQ1JTtcbn1cblxuaDUge1xuICBjb2xvcjogIzU1NTY1YiAhaW1wb3J0YW50O1xufVxuXG4vKiBCcmVhZGNydW1iICovXG4uYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzBiNzZhYTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNGRkY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYnJlYWRjcnVtYiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5icmVhZGNydW1iIHNwYW4ge1xuICBjb2xvcjogI0M3RDlFMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDE2cHggNnB4IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC44NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50eHRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9kYXQge1xuICBjb2xvcjogI2IzYTJhMiAhaW1wb3J0YW50O1xufVxuXG4uYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XG4gIGNvbG9yOiAjQzdEOUUyICFpbXBvcnRhbnQ7XG59XG5cbi52aWV3LWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ucHJpbWFyeTEge1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzMzgyZjgpO1xufVxuXG4ubGJsIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjODE4MTgxKSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/folder/tms/my-task/my-task.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/folder/tms/my-task/my-task.component.ts ***!
  \*********************************************************/
/*! exports provided: MyTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTaskComponent", function() { return MyTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tms.service */ "./src/app/folder/tms/tms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let MyTaskComponent = class MyTaskComponent {
    constructor(tmsServ, router, platform, splashScreen, statusBar, _location, alertController, translate) {
        this.tmsServ = tmsServ;
        this.router = router;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this._location = _location;
        this.alertController = alertController;
        this.translate = translate;
        this.accepCount = 0;
        this.reOpenCount = 0;
        this.completCount = 0;
        this.rejectCount = 0;
        this.assignedCount = 0;
        this.totalCount = 0;
        this.showSpinner = true;
        this.nodat = false;
        this.firstDay = new Date().toISOString();
        this.slice = 7;
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
        let date = new Date();
        this.firstDay = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)).format('YYYY-MM-DD');
        this.lastDay = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(date.getFullYear(), date.getMonth(), date.getDate())).format('YYYY-MM-DD');
    }
    ngOnInit() {
        this.accepCount = 0;
        this.reOpenCount = 0;
        this.completCount = 0;
        this.rejectCount = 0;
        this.assignedCount = 0;
        this.totalCount = 0;
        this.currentDay = new Date();
        this.nodat = false;
        this.router.navigateByUrl('/folder/tms/mytask', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/folder/tms/mytask']);
        });
        this.userId = window.localStorage.getItem('userId');
        // to get current date
        // let tDay:string = new Date().toISOString();
        let startDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.firstDay).format('YYYY-MM-DD');
        let endDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.lastDay).format('YYYY-MM-DD');
        this.tmsServ.getTaskList(this.userId, startDate, endDate).subscribe(res => {
            this.taskList = res['data'];
            this.totalCount = this.taskList.length;
            this.showSpinner = false;
            res['data'].map(val => {
                if (val.stage == "Created")
                    this.assignedCount++;
                if (val.stage == "Completed")
                    this.completCount++;
                if (val.stage == "Accepted")
                    this.accepCount++;
                if (val.stage == "Reopen")
                    this.reOpenCount++;
                if (val.stage == "Rejected")
                    this.rejectCount++;
            });
            if (this.taskList.length == 0) {
                this.nodat = true;
                this.showSpinner = false;
            }
        });
    }
    switchLanguage() {
        window.localStorage.setItem('lang', this.lang);
        this.translate.use(this.lang);
    }
    goToDes(tid, status, name) {
        if (status == 'Accepted') {
            this.router.navigateByUrl('/folder/punch/in/' + tid);
        }
        else {
            this.router.navigateByUrl('/folder/tms/taskDes/' + tid);
        }
    }
    goToLoc(status) {
        this.router.navigateByUrl('/folder/tms/taskloc/' + status);
    }
    goToLi(status) {
        this.accepCount = 0;
        this.reOpenCount = 0;
        this.completCount = 0;
        this.rejectCount = 0;
        this.assignedCount = 0;
        this.totalCount = 0;
        this.currentDay = new Date();
        this.nodat = false;
        let startDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.firstDay).format('YYYY-MM-DD');
        let endDate = moment__WEBPACK_IMPORTED_MODULE_9__(this.lastDay).format('YYYY-MM-DD');
        this.tmsServ.getTaskList(this.userId, startDate, endDate).subscribe(res => {
            this.taskList = res['data'];
            this.totalCount = this.taskList.length;
            this.showSpinner = false;
            res['data'].map(val => {
                if (val.stage == "Created")
                    this.assignedCount++;
                if (val.stage == "Completed")
                    this.completCount++;
                if (val.stage == "Accepted")
                    this.accepCount++;
                if (val.stage == "Reopen")
                    this.reOpenCount++;
                if (val.stage == "Rejected")
                    this.rejectCount++;
            });
            if (status == 'All') {
                this.taskList = res['data'];
                if (this.taskList.length == 0) {
                    this.nodat = true;
                }
                else
                    this.nodat = false;
            }
            else {
                this.taskList = this.taskList.filter(tasklist => tasklist.stage == status);
                if (this.taskList.length == 0) {
                    this.nodat = true;
                }
                else
                    this.nodat = false;
            }
            // console.log(this.taskList);    
        });
    }
    doInfinite(infiniteScrollEvent) {
        setTimeout(() => {
            this.slice += 5;
            infiniteScrollEvent.target.complete();
        }, 500);
    }
};
MyTaskComponent.ctorParameters = () => [
    { type: _tms_service__WEBPACK_IMPORTED_MODULE_2__["TmsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
];
MyTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-task',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-task.component.scss */ "./src/app/folder/tms/my-task/my-task.component.scss")).default]
    })
], MyTaskComponent);



/***/ }),

/***/ "./src/app/folder/tms/newtask/newtask.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/folder/tms/newtask/newtask.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gen {\n  color: black;\n  background: #ddd;\n  text-align: center;\n  margin: 5% 35%;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy9uZXd0YXNrL0M6XFxVc2Vyc1xcbWFudW1cXERvd25sb2Fkc1xcZmx1ZW50Y2VwVE1TLW1hc3RlclxcZmx1ZW50Y2VwVE1TL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcbmV3dGFza1xcbmV3dGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy9uZXd0YXNrL25ld3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQSx1RUFBQTs7QUFDQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3Rtcy9uZXd0YXNrL25ld3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2Vue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1JSAzNSU7XHJcbn1cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufSIsIi5nZW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1JSAzNSU7XG59XG5cbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/tms/newtask/newtask.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/folder/tms/newtask/newtask.component.ts ***!
  \*********************************************************/
/*! exports provided: NewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewtaskComponent", function() { return NewtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tms.service */ "./src/app/folder/tms/tms.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let NewtaskComponent = class NewtaskComponent {
    constructor(tmsServ, nativeGeocoder, router, alertController) {
        this.tmsServ = tmsServ;
        this.nativeGeocoder = nativeGeocoder;
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.empId = window.localStorage.getItem('empId');
        this.companyid = window.localStorage.getItem('companyId');
        // to get Companies
        this.tmsServ.getCompanies().subscribe(res => {
            this.companies = res['data'];
        }, err => {
            // this.errMsg = err;
        });
        // to get all the task names
        this.tmsServ.getTaskname().subscribe(response => {
            this.taskNameExisting = response['data'];
        }, err => {
            // this.errMsg = err;
        });
        this.getProject();
    }
    getProject() {
        this.tmsServ.getProject(this.companyid).subscribe(res => {
            this.projects = res['data'];
        }, err => {
            // this.errMsg = err;
        });
    }
    checkTaskName() {
        this.taskNameExisting.map((val) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.taskName == val.taskname) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Existing Task',
                    message: 'Task name already exists, change the task name.',
                    buttons: ['OK']
                });
                yield alert.present();
            }
        }));
    }
    getAdd(event) {
        this.address = event.detail.value;
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(this.address, options)
            .then((result) => {
            this.lat = result[0].latitude;
            this.lon = result[0].longitude;
        })
            .catch((error) => console.log(error));
    }
    createTask() {
        let payload = {
            projectid: this.selectedProject,
            taskname: this.taskName,
            description: this.taskDescription,
            expectedstartdate: this.startDate,
            expectedenddate: this.endDate,
            expectedhours: this.duration,
            status: 1,
            priority: this.priority,
            address: this.address,
            lat: this.lat,
            lon: this.lon,
            empid: this.empId
        };
        this.tmsServ.createTask(payload).subscribe(res => {
            this.router.navigateByUrl('/folder/tms/mytask');
        }, err => {
            console.log(err);
        });
    }
};
NewtaskComponent.ctorParameters = () => [
    { type: _tms_service__WEBPACK_IMPORTED_MODULE_2__["TmsService"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
NewtaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newtask',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newtask.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newtask.component.scss */ "./src/app/folder/tms/newtask/newtask.component.scss")).default]
    })
], NewtaskComponent);



/***/ }),

/***/ "./src/app/folder/tms/task-description/task-description.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/folder/tms/task-description/task-description.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-spinner {\n  margin: 20% 45%;\n}\n\n.nodat {\n  color: #b3a2a2 !important;\n}\n\n.mail {\n  float: right;\n  margin-right: 10px;\n  font-size: 1rem !important;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.card_desgn {\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  background-color: #fef8ed;\n  padding: 15px 10px 10px 10px;\n}\n\n.org {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #000000;\n  margin: 0 15px 1px 0;\n}\n\n.owner {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #818181;\n  margin: 1px 10px 0 0;\n}\n\n.pos {\n  float: right;\n}\n\n.main {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #000000;\n  margin: 0 5px 0 0;\n}\n\n.email_dt {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  margin: 0 3px 0 5px;\n}\n\nbutton {\n  width: 100px;\n  border-radius: 6px;\n  margin: 5px 10px 5px 10px;\n  background-color: transparent;\n}\n\n.accept {\n  font-family: Poppins;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background-color: #3382f8;\n  color: #ffffff;\n  padding: 10px 10px;\n}\n\n.rej {\n  font-family: Poppins;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background-color: transparent;\n  color: #3382f8;\n  padding: 10px 10px;\n}\n\n.ryt {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrLWRlc2NyaXB0aW9uL0M6XFxVc2Vyc1xcbWFudW1cXERvd25sb2Fkc1xcZmx1ZW50Y2VwVE1TLW1hc3RlclxcZmx1ZW50Y2VwVE1TL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcdGFzay1kZXNjcmlwdGlvblxcdGFzay1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrLWRlc2NyaXB0aW9uL3Rhc2stZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURBO0VBQ0UsZUFBQTtBQ3hERjs7QUQwREE7RUFDRSx5QkFBQTtBQ3ZERjs7QUQwREE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ3ZEQTs7QUR5REE7RUFDQSxtQkFBQTtBQ3REQTs7QUR3REE7RUFHQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtBQ3ZEQTs7QUR5REE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUN0REE7O0FEd0RBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDckRBOztBRHVEQTtFQUNBLFlBQUE7QUNwREE7O0FEc0RBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDbkRBOztBRHFEQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FDbkRBOztBRHFEQTtFQUNFLFlBQUE7RUFFQSxrQkFBQTtFQUVBLHlCQUFBO0VBRUEsNkJBQUE7QUNyREY7O0FEd0RBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNyREY7O0FEd0RBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNyREY7O0FEdURBO0VBQ0UsWUFBQTtBQ3BERiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci90bXMvdGFzay1kZXNjcmlwdGlvbi90YXNrLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmdlbntcclxuLy8gICAgIGNvbG9yOndoaXRlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbjogNyUgMTAlO1xyXG4vLyAgICAgbWFyZ2luLXRvcDoyMCU7XHJcbi8vIH1cclxuLy8gLnJlamN7XHJcbi8vICAgICBjb2xvcjp3aGl0ZTtcclxuLy8gICAgIGJhY2tncm91bmQ6ICMwMDY0OTU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBtYXJnaW4tdG9wOjIwJTtcclxuLy8gfVxyXG4vLyAubWVudUJ0bntcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTogMjMlO1xyXG4vLyAgICAgcmlnaHQ6IDBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vICAgICBmb250LXNpemU6IDI5cHg7XHJcbi8vICAgfVxyXG5cclxuLy8gLy8gICAuYnRuSG9tZXtcclxuLy8gLy8gICAgIGNvbG9yOndoaXRlO1xyXG4vLyAvLyB9XHJcbi8vIGlvbi1zcGlubmVye1xyXG4vLyAgICAgbWFyZ2luOiAyMCUgNDUlO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBCcmVhZGNydW1iICovXHJcbi8vIC5icmVhZGNydW1iIHtcclxuLy8gICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiMwYjc2YWE7XHJcbi8vICAgICAvLyBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgY29sb3I6ICNGRkY7XHJcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgIH1cclxuLy8gICAuYnJlYWRjcnVtYiBsaSB7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICBjb2xvcjogI0ZGRjtcclxuLy8gICB9XHJcbi8vICAgLmJyZWFkY3J1bWIgc3BhbiB7XHJcbi8vICAgICBjb2xvcjogI0M3RDlFMjtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB9XHJcbi8vICAgLmJyZWFkY3J1bWIgLmZhLWNoZXZyb24tcmlnaHQge1xyXG4vLyAgICAgY29sb3I6ICNDN0Q5RTIgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLnZpZXctY29udGFpbmVyIHtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgfVxyXG5cclxuXHJcbmlvbi1zcGlubmVye1xyXG4gIG1hcmdpbjogMjAlIDQ1JTtcclxufVxyXG4ubm9kYXQge1xyXG4gIGNvbG9yOiAjYjNhMmEyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWlse1xyXG5mbG9hdDogcmlnaHQ7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxuZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNhcmQge1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jYXJkX2Rlc2due1xyXG4vLyBoZWlnaHQ6IDkxcHg7XHJcbi8vIG1hcmdpbjogMTBweCAxNXB4O1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG5ib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmZWY4ZWQ7XHJcbnBhZGRpbmc6IDE1cHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuLm9yZyB7XHJcbmZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG5mb250LXNpemU6IDEycHg7XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbmxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmNvbG9yOiAjMDAwMDAwO1xyXG5tYXJnaW46IDAgMTVweCAxcHggMDtcclxufVxyXG4ub3duZXIge1xyXG5mb250LWZhbWlseTogUG9wcGlucztcclxuZm9udC1zaXplOiAxMnB4O1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG5mb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5saW5lLWhlaWdodDogbm9ybWFsO1xyXG5sZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5jb2xvcjogIzgxODE4MTtcclxubWFyZ2luOiAxcHggMTBweCAwIDA7XHJcbn1cclxuLnBvcyB7XHJcbmZsb2F0OiByaWdodDtcclxufVxyXG4ubWFpbntcclxuZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxubGluZS1oZWlnaHQ6IG5vcm1hbDtcclxubGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuY29sb3I6ICMwMDAwMDA7XHJcbm1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcbi5lbWFpbF9kdHtcclxuZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxubGluZS1oZWlnaHQ6IG5vcm1hbDtcclxubGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuLy8gY29sb3I6ICNmZmE1MDA7XHJcbm1hcmdpbjogMCAzcHggMCA1cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIC8vIGJvcmRlcjogc29saWQgMnB4ICMzMzgyZjg7XHJcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcclxuICAvLyBjb2xvcjogIzMzODJmOCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8vIGZsb2F0OiByaWdodDtcclxufVxyXG4uYWNjZXB0e1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzgyZjg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcblxyXG4ucmVqe1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMzM4MmY4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4ucnl0e1xyXG4gIGZsb2F0OiByaWdodDtcclxufSIsImlvbi1zcGlubmVyIHtcbiAgbWFyZ2luOiAyMCUgNDUlO1xufVxuXG4ubm9kYXQge1xuICBjb2xvcjogI2IzYTJhMiAhaW1wb3J0YW50O1xufVxuXG4ubWFpbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FyZF9kZXNnbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjhlZDtcbiAgcGFkZGluZzogMTVweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLm9yZyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46IDAgMTVweCAxcHggMDtcbn1cblxuLm93bmVyIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIG1hcmdpbjogMXB4IDEwcHggMCAwO1xufVxuXG4ucG9zIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWFpbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46IDAgNXB4IDAgMDtcbn1cblxuLmVtYWlsX2R0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIDNweCAwIDVweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWNjZXB0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM4MmY4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4ucmVqIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzgyZjg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLnJ5dCB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/tms/task-description/task-description.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/folder/tms/task-description/task-description.component.ts ***!
  \***************************************************************************/
/*! exports provided: TaskDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDescriptionComponent", function() { return TaskDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tms.service */ "./src/app/folder/tms/tms.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






let TaskDescriptionComponent = class TaskDescriptionComponent {
    constructor(route, tmsSrv, router, nativeGeocoder, translate) {
        this.route = route;
        this.tmsSrv = tmsSrv;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
        this.translate = translate;
        this.resonTab = false;
        this.showSpinner = true;
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
        this.translate.get('Address NA').subscribe(value => { this.addressNA = value; });
    }
    ngOnInit() {
        this.currentDay = new Date();
        this.id = this.route.snapshot.params.id;
        this.tmsSrv.taskDes(this.id).subscribe(res => {
            this.startingAt = res['data'].start_date;
            this.endingAt = res['data'].finish_date;
            this.startingAt = new Date(this.startingAt);
            this.endingAt = new Date(this.endingAt);
            this.details = res['data'];
            let goptions = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(this.details.lat, this.details.lon, goptions)
                .then((result) => {
                this.address = "";
                var responseAddress = [];
                for (let [key, value] of Object.entries(result[0])) {
                    if (value.length > 0)
                        responseAddress.push(value);
                }
                responseAddress.pop();
                responseAddress.reverse();
                for (let value of responseAddress) {
                    this.address += value + ", ";
                }
                this.address = this.address.slice(0, -2);
            })
                .catch((error) => {
                this.address = this.addressNA;
            });
            if (this.details)
                this.showSpinner = false;
        });
        this.tmsSrv.timeSpent(this.id).subscribe(res => { });
    }
    rej() {
        this.resonTab = false;
        this.tmsSrv.updateTaskStatus(this.id, 'Rejected').subscribe(res => {
            // console.log(res);
            this.details.statusString = res['data'].statusString;
            this.router.navigateByUrl('/folder/tms/mytask');
        });
    }
    breadcrumb() {
        this.router.navigateByUrl('/folder/tms/mytask');
    }
    accept() {
        this.tmsSrv.updateTaskStatus(this.id, 'Accepted').subscribe(res => {
            // console.log(res);
            this.router.navigateByUrl('/folder/punch/in/' + res['data'].task_id);
        });
        // this.router.navigateByUrl('/folder/punch/in/' + this.id);
    }
    goBack() {
        this.router.navigateByUrl('/folder/tms/mytask');
    }
};
TaskDescriptionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _tms_service__WEBPACK_IMPORTED_MODULE_3__["TmsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
TaskDescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-description',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./task-description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./task-description.component.scss */ "./src/app/folder/tms/task-description/task-description.component.scss")).default]
    })
], TaskDescriptionComponent);



/***/ }),

/***/ "./src/app/folder/tms/tasklocations/tasklocations.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/folder/tms/tasklocations/tasklocations.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  color: white;\n  margin: 1px 2px;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\nagm-info-window {\n  padding: 2px !important;\n}\n\n.menuBtn {\n  position: absolute;\n  bottom: 23%;\n  right: 0px;\n  background: none;\n  font-size: 29px;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 14px;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrbG9jYXRpb25zL0M6XFxVc2Vyc1xcbWFudW1cXERvd25sb2Fkc1xcZmx1ZW50Y2VwVE1TLW1hc3RlclxcZmx1ZW50Y2VwVE1TL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcdGFza2xvY2F0aW9uc1xcdGFza2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrbG9jYXRpb25zL3Rhc2tsb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0MsdUJBQUE7QUNDRDs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQSxlQUFBOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGRTtFQUNFLHlCQUFBO0FDS0o7O0FESEU7RUFDSSxnQkFBQTtBQ01OIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrbG9jYXRpb25zL3Rhc2tsb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29se1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIG1hcmdpbjoxcHggMnB4O1xyXG59XHJcblxyXG5pb24tc3Bpbm5lcntcclxuICBtYXJnaW46IDIwJSA0NSU7XHJcbn1cclxuXHJcbmFnbS1pbmZvLXdpbmRvd3tcclxuIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tZW51QnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMyU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICB9XHJcbi8qIEJyZWFkY3J1bWIgKi9cclxuLmJyZWFkY3J1bWIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IzBiNzZhYTtcclxuICAgIC8vIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiBzcGFuIHtcclxuICAgIGNvbG9yOiAjQzdEOUUyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XHJcbiAgICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudmlldy1jb250YWluZXIge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH0iLCJpb24tY29sIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDFweCAycHg7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgbWFyZ2luOiAyMCUgNDUlO1xufVxuXG5hZ20taW5mby13aW5kb3cge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn1cblxuLm1lbnVCdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjMlO1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDI5cHg7XG59XG5cbi8qIEJyZWFkY3J1bWIgKi9cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMGI3NmFhO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI0ZGRjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5icmVhZGNydW1iIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmJyZWFkY3J1bWIgc3BhbiB7XG4gIGNvbG9yOiAjQzdEOUUyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJyZWFkY3J1bWIgLmZhLWNoZXZyb24tcmlnaHQge1xuICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xufVxuXG4udmlldy1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/tms/tasklocations/tasklocations.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/folder/tms/tasklocations/tasklocations.component.ts ***!
  \*********************************************************************/
/*! exports provided: TasklocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklocationsComponent", function() { return TasklocationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _tms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tms.service */ "./src/app/folder/tms/tms.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");







let TasklocationsComponent = class TasklocationsComponent {
    constructor(geolocation, nativeGeocoder, router, route, nativeStorage, tmsSrv) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.router = router;
        this.route = route;
        this.nativeStorage = nativeStorage;
        this.tmsSrv = tmsSrv;
        this.accepCount = 0;
        this.reOpenCount = 0;
        this.completCount = 0;
        this.rejectCount = 0;
        this.assignedCount = 0;
        this.showSpinner = true;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.onSameUrlNavigation = 'reload';
        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lon = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
            });
        }
        this.nativeStorage.getItem('loginDetails').then(data => console.log(data), error => console.error(error));
    }
    ngOnInit() {
        this.userId = window.localStorage.getItem('userId');
        this.tmsSrv.getMyTasksList(this.userId).subscribe(res => {
            this.taskList = res['data'];
            this.showSpinner = false;
            res['data'].map(val => {
                if (val.stage == "Created") {
                    this.assignedCount++;
                }
                if (val.stage == "Completed")
                    this.completCount++;
                if (val.stage == "Accepted")
                    this.accepCount++;
                if (val.stage == "Reopen")
                    this.reOpenCount++;
                if (val.stage == "Rejected")
                    this.rejectCount++;
                if ((val.lat != 0 || val.lat != '') && (this.lat == undefined))
                    this.lat = Number(val.lat);
                if ((val.lon != 0 || val.lon != '') && (this.lon == undefined))
                    this.lon = Number(val.lon);
            });
        });
        var i = 0;
        this.empId = window.localStorage.getItem('userId');
        this.status = this.route.snapshot.params.status;
        this.tmsSrv.taskLoc(this.empId, this.status).subscribe(res => {
            this.details = res['data'];
            let goptions = {
                useLocale: true,
                maxResults: 5
            };
            res['data'].map((val, index) => {
                this.nativeGeocoder.forwardGeocode(val.address, goptions)
                    .then((result) => {
                    val.lat = result[0].latitude;
                    val.lon = result[0].longitude;
                    if ((val.lat != 0 || val.lat != '') && (this.lat == undefined))
                        this.lat = Number(val.lat);
                    if ((val.lon != 0 || val.lon != '') && (this.lon == undefined))
                        this.lon = Number(val.lon);
                    this.lat = result[0].latitude;
                    this.lon = result[0].longitude;
                })
                    .catch((error) => {
                    val.lat = 0;
                    val.lon = 0;
                    console.log(error);
                });
            });
            if (this.details)
                this.showSpinner = false;
        });
    }
    clickedMarker(infowindow) {
        if (this.previous) {
            this.previous.close();
        }
        this.previous = infowindow;
    }
    breadcrumb() {
        this.router.navigateByUrl('/folder/tms/mytask');
    }
    getUserPosition() {
        return new Promise((resolve, reject) => {
            this.options = {
                maximumAge: 3000,
                enableHighAccuracy: true
            };
            this.geolocation.getCurrentPosition(this.options).then((pos) => {
                this.currentPos = pos;
                const location = {
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                    time: new Date(),
                };
                resolve(pos);
            }, (err) => {
                console.log("error : " + err.message);
                reject(err.message);
            });
        });
    }
    goToLi(status) {
        this.router.navigateByUrl('/folder/tms/taskloc/' + status);
    }
};
TasklocationsComponent.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _tms_service__WEBPACK_IMPORTED_MODULE_5__["TmsService"] }
];
TasklocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasklocations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tasklocations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tasklocations.component.scss */ "./src/app/folder/tms/tasklocations/tasklocations.component.scss")).default]
    })
], TasklocationsComponent);



/***/ }),

/***/ "./src/app/folder/tms/tms-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/folder/tms/tms-routing.module.ts ***!
  \**************************************************/
/*! exports provided: TmsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmsRoutingModule", function() { return TmsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-task/my-task.component */ "./src/app/folder/tms/my-task/my-task.component.ts");
/* harmony import */ var _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-description/task-description.component */ "./src/app/folder/tms/task-description/task-description.component.ts");
/* harmony import */ var _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasklocations/tasklocations.component */ "./src/app/folder/tms/tasklocations/tasklocations.component.ts");
/* harmony import */ var _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newtask/newtask.component */ "./src/app/folder/tms/newtask/newtask.component.ts");







const routes = [
    {
        path: 'mytask',
        component: _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_3__["MyTaskComponent"]
    },
    {
        path: 'newtask',
        component: _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_6__["NewtaskComponent"]
    },
    {
        path: 'taskDes/:id',
        component: _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_4__["TaskDescriptionComponent"]
    },
    {
        path: 'taskloc/:status',
        component: _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_5__["TasklocationsComponent"]
    }
];
let TmsRoutingModule = class TmsRoutingModule {
};
TmsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TmsRoutingModule);



/***/ }),

/***/ "./src/app/folder/tms/tms.module.ts":
/*!******************************************!*\
  !*** ./src/app/folder/tms/tms.module.ts ***!
  \******************************************/
/*! exports provided: createTranslateLoader, TmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmsModule", function() { return TmsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tms-routing.module */ "./src/app/folder/tms/tms-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-task/my-task.component */ "./src/app/folder/tms/my-task/my-task.component.ts");
/* harmony import */ var _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-description/task-description.component */ "./src/app/folder/tms/task-description/task-description.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasklocations/tasklocations.component */ "./src/app/folder/tms/tasklocations/tasklocations.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./newtask/newtask.component */ "./src/app/folder/tms/newtask/newtask.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");














function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let TmsModule = class TmsModule {
};
TmsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_my_task_my_task_component__WEBPACK_IMPORTED_MODULE_6__["MyTaskComponent"], _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_7__["TaskDescriptionComponent"], _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_10__["TasklocationsComponent"], _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_12__["NewtaskComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tms_routing_module__WEBPACK_IMPORTED_MODULE_3__["TmsRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_11__["AgmCoreModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
                }
            })
        ]
    })
], TmsModule);



/***/ })

}]);
//# sourceMappingURL=tms-tms-module-es2015.js.map