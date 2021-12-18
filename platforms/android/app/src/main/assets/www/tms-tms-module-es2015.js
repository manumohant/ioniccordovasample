(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tms-tms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"toolBar\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>  \n    <ion-title>{{'Tasks'|translate}}</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n    <ion-button slot=\"end\" class=\"btnHome\" (click)=\"goToLoc('All')\">\n      <ion-icon name=\"compass-sharp\" ios=\"compass-outline\" md=\"compass-sharp\"></ion-icon>\n    </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n  <!-- <ion-item>\n    <ion-label>Language</ion-label>\n    <ion-select [(ngModel)]=\"lang\" (ngModelChange)=\"switchLanguage()\">\n      <ion-select-option value=\"en\">English</ion-select-option>\n      <ion-select-option value=\"cn\">Chinese</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=5>\n          <ion-item class=\"primary1\">\n              <ion-label position=\"floating\" class=\"lbl\">{{'Start date'|translate}}</ion-label>\n              <ion-datetime displayFormat=\"MM-DD-YYYY\" [(ngModel)]=\"firstDay\"  value=\"firstDay\" name=\"firstDate\" ngDefaultControl></ion-datetime>\n          </ion-item>         \n      </ion-col>\n      <ion-col size=5>\n          <ion-item class=\"primary1\">\n              <ion-label position=\"floating\" class=\"lbl\">{{'End date'|translate}}</ion-label>\n              <ion-datetime displayFormat=\"MM-DD-YYYY\" [(ngModel)]=\"lastDay\"  value=\"lastDay\" name=\"lastDay\"  ngDefaultControl></ion-datetime>\n          </ion-item>          \n      </ion-col>\n      <ion-col size=\"2\">\n      <ion-button size=\"small\" type=\"button\" class=\"gen\" color=\"#00aaa0\" (click)=\"goToLi('All')\">\n        <ion-icon name=\"search-outline\" class=\"search\"></ion-icon>\n      </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n      <ion-row>\n        <ion-col class=\"cur\" [style.background]=\"'#f0f6ff'\" [style.color]=\"'#3382f8'\" (click)=\"goToLi('Created')\">\n          <!-- Assign: {{taskList.length}} -->\n          <div class=\"cnt\">{{assignedCount}}</div>\n          <div class=\"txts\">{{'Assigned'|translate}}</div>\n        </ion-col>\n        <ion-col class=\"cur\" [style.background]=\"'#edfff8'\" [style.color]=\"'#00b71c'\" (click)=\"goToLi('Completed')\">\n          <div class=\"cnt\">{{completCount}}</div>\n          <div class=\"txts\">{{'Completed'|translate}}</div>\n        </ion-col>                \n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"cur\" [style.background]=\"'#fef8ed'\" [style.color]=\"'#ffa500'\" (click)=\"goToLi('Accepted')\">\n          <div class=\"cnt\">{{accepCount}}</div>\n          <div class=\"txts\">{{'Accepted'|translate}}</div>\n        </ion-col>\n        <ion-col class=\"cur\" [style.background]=\"'#fdeeed'\" [style.color]=\"'#e50e00'\" (click)=\"goToLi('Rejected')\">\n          <div class=\"cnt\">{{rejectCount}}</div>\n          <div class=\"txts\">{{'Rejected'|translate}}</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"cur\" [style.background]=\"'#f5f5f5'\" [style.color]=\"'#000000'\" (click)=\"goToLi('Reopen')\">\n          <div class=\"cnt\">{{reOpenCount}}</div>\n          <div class=\"txts\">{{'Reopen'|translate}}</div>\n        </ion-col>\n        <ion-col class=\"cur\" [style.background]=\"'#e6f8ff'\" [style.color]=\"'#22a7e0'\" (click)=\"goToLi('All')\">\n          <div class=\"cnt\">{{totalCount}}</div>\n          <div class=\"txts\">{{'Total'|translate}}</div>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-list>  \n    <ion-item *ngFor=\"let l of taskList | slice:0:slice\">          \n      <ion-row class=\"entireRow\" (click)=\"goToDes(l.id, l.stage, l.taskName)\">\n        <ion-col size=\"3\">\n            <p class=\"des\">{{l.startDate | date:\"MM-dd-yyyy\"}}</p>                    \n        </ion-col>\n        <ion-col size=\"5\">\n            <!-- <p class=\"taskName\">{{l.project}}</p> -->\n            <p class=\"taskName\">{{l.taskName}}</p>\n            <p class=\"des\">{{l.startDate | date: \"shortTime\" }} - {{l.endDate | date: \"shortTime\"}}</p>\n            <p class=\"des\">{{l.shiftid|translate}}</p>\n        </ion-col>\n        <ion-col size=\"4\">\n          <p class=\"des\" [ngStyle]=\"{'color': (l.stage =='Created') ? '#0a7fcf' : '' || (l.stage =='Completed') ? '#5fb543' : '' || (l.stage =='Accepted') ? '#eaa200' : '' || (l.stage =='Rejected') ? '#eb445a' : '' || (l.stage =='Reopen') ? '#9d9fa6' : ''}\"> {{l.stage|translate}}</p>\n          <p class=\"des\">{{l.address1}}</p>\n          <p class=\"des\">{{l.address2}}</p>\n          <p class=\"des\">{{l.city}}-{{l.zipcode}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item class=\"nodat\" *ngIf=\"nodat == true\"><h6>{{'No Tasks'|translate}}</h6></ion-item>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data…\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n      </ion-buttons>\n    <ion-title>New Task</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Project</ion-label>\n    <ion-select [(ngModel)]=\"selectedProject\" required=\"true\">\n      <ion-select-option *ngFor=\"let project of projects\" [value]=\"project.id\">{{ project.name }}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Task Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"taskName\" name=\"taskName\" (ionBlur)=\"checkTaskName()\" required=\"true\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Task Description</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"taskDescription\" name=\"taskDescription\" required=\"true\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Expected Start Date</ion-label>\n     <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"startDate\" name=\"title\" required=\"true\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Expected End Date</ion-label>\n     <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"endDate\" name=\"title\" required=\"true\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Expected Duration(Hrs)</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"duration\" name=\"title\" required=\"true\"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">Priority</ion-label>\n    <ion-select [(ngModel)]=\"priority\">\n      <ion-select-option value=\"0\">Low</ion-select-option>\n      <ion-select-option value=\"1\">Medium</ion-select-option>\n      <ion-select-option value=\"2\">High</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Address</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"address\" name=\"address\" (ionChange)=\"getAdd($event)\" required=\"true\"></ion-input>\n  </ion-item>\n\n  <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"createTask()\">CREATE</ion-button>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"toolBar\">\n        <ion-buttons slot=\"start\">\n            <ion-buttons slot=\"start\">\n            </ion-buttons>\n            <ion-button class=\"btnHome\"  (click)=\"goBack()\">\n              <!-- <i class=\"fas fa-arrow-left\"></i> &nbsp; -->\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>back\n            </ion-button>\n        </ion-buttons>\n      <ion-title>{{'Task details'|translate}}</ion-title>\n        <!-- <ion-icon name=\"ellipsis-vertical\" *ngIf=\" details && details.stage == 'Created'\" class=\"menuBtn\"></ion-icon> -->\n        <!-- [style.color]=\"'white'\" -->\n    </ion-toolbar>\n</ion-header>\n<!-- <ul class=\"breadcrumb\">\n  <li><span (click)=\"breadcrumb();\">{{'Tasks'|translate}}</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\n  <li class=\"active\">{{'Task details'|translate}}</li>\n</ul> -->\n<!-- <ion-content>\n  <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n  <ion-grid *ngIf=\"details && resonTab == false\">\n    <ion-row class=\"tabHead\">\n      <ion-col>{{'Project'|translate}} : </ion-col> <ion-col>{{details.project}}</ion-col>\n    </ion-row>\n\n    <ion-row class=\"tabHead\">\n      <ion-col>{{'Date'|translate}} : </ion-col> <ion-col>{{details.start_date | date:\"MM-dd-yyyy\"}}</ion-col>\n    </ion-row>\n    \n    <ion-row class=\"tabHead\">\n      <ion-col>{{'Shift'|translate}} : </ion-col> <ion-col>{{details.shiftid | translate}}</ion-col>\n    </ion-row>\n\n    <ion-row class=\"tabHead\">\n      <ion-col>{{'Scheduled time'|translate}} : </ion-col> <ion-col>{{details.start_date | date: \"shortTime\"}} - {{details.finish_date | date: \"shortTime\"}}</ion-col>\n    </ion-row>\n\n    <ion-row class=\"tabHead\">\n      <ion-col>{{'Status'|translate}} : </ion-col> <ion-col [ngStyle]=\"{'color': (details.stage =='Created') ? '#3dc2ff' : '' || (details.stage =='Completed') ? 'green' : '' || (details.stage =='Accepted') ? '#e0ac08' : ''}\">{{details.stage|translate}}</ion-col>\n    </ion-row>\n\n    <ion-row class=\"tabHead\">\n      <ion-col>{{'Priority'|translate}} : </ion-col> <ion-col [ngStyle]=\"{'color': (details.priority =='Medium' || details.priority =='medium') ? '#ffc409' : '' || (details.priority =='Low' || details.priority =='low') ? '#28ba62' : '' || (details.priority =='High' || details.priority =='high') ? '#ff0000' : ''}\">{{details.priority|translate}}</ion-col>\n    </ion-row>\n\n    <ion-row class=\"tabHead\" *ngIf=\"details.stage=='Completed'\">\n        <ion-col>{{'Completed date'|translate}} : </ion-col> <ion-col>{{details.finish_date | date:\"MM-dd-yyyy\"}}</ion-col>\n    </ion-row>\n    <ion-row class=\"tabHead\">\n      <ion-col>{{'Address'|translate}} : </ion-col> \n      <ion-col>\n        {{details.address1}}<br/>\n        {{details.address2}}<br/>\n        {{details.city}}-{{details.zipcode}}<br/>\n        {{details.state}}\n        {{details.Country}}\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"details.stage == 'Created' || details.stage == 'Reopen'\">\n      <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"accept()\">{{'Accept'|translate}}</ion-button>\n      <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"rej()\" >{{'Reject'|translate}}</ion-button>\n    </div>\n  </ion-grid>\n</ion-content> -->\n\n<ion-content>\n  <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n  <ion-grid *ngIf=\"details && resonTab == false\">\n    <ion-card>\n      <ion-card-header class=\"card_desgn\">\n        <div class=\"main\">{{details.taskName}}</div>\n        <span class=\"owner\">{{details.project}}</span>\n        <span class=\"email_dt pos\" [ngStyle]=\"{'color': (details.stage =='Created') ? '#3382f8' : '' || (details.stage =='Completed') ? '#00b71c' : '' || (details.stage =='Accepted') ? '#ffa500' : ''}\">\n          {{details.stage|translate}}\n        </span>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <div class=\"owner\">{{'Date'|translate}}</div>\n            <span class=\"org\">{{details.start_date | date:\"MM-dd-yyyy\"}}</span>\n          </ion-col>\n          <ion-col>\n            <div class=\"owner\">{{'Scheduled time'|translate}}</div>\n            <span class=\"org\">{{details.start_date | date: \"shortTime\"}} - {{details.finish_date | date: \"shortTime\"}}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <div class=\"owner\">{{'Priority'|translate}}</div>\n            <span class=\"org\" [ngStyle]=\"{'color': (details.priority =='Medium' || details.priority =='medium') ? '#ffc409' : '' || (details.priority =='Low' || details.priority =='low') ? '#28ba62' : '' || (details.priority =='High' || details.priority =='high') ? '#ff0000' : ''}\">{{details.priority|translate}}</span>\n          </ion-col>\n\n          <ion-col>\n            <div class=\"owner\">{{'Tasks Location'|translate}}</div>\n            <span class=\"org\">{{details.loc_name}}</span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"8\">\n            <div class=\"owner\">{{'Address'|translate}}</div>\n            <span class=\"org\">\n              {{details.address1}}&nbsp;\n              {{details.address2}}&nbsp;\n              {{details.city}}&nbsp;{{details.zipcode}}&nbsp;\n              {{details.state}}\n              {{details.Country}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-row class=\"ryt\">\n      <ion-col size=\"12\">\n        <div *ngIf=\"details.stage == 'Created' || details.stage == 'Reopen'\"> \n          <button ion-button class=\"bottom-button rej\" (click)=\"rej()\">\n            {{'Reject'|translate}}\n          </button> \n          <button ion-button class=\"bottom-button accept\" (click)=\"accept()\">\n            {{'Accept'|translate}}\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h2 class=\"nodat\" *ngIf=\"nodat == true\">No Data</h2>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'Tasks Location'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ul class=\"breadcrumb\">\n    <li><span (click)=\"breadcrumb();\">{{'Tasks'|translate}}</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\n    <li class=\"active\">{{'Tasks Location'|translate}}</li>\n  </ul>\n  <ion-grid [style.padding]=\"'0'\">\n    <ion-row>\n      <ion-col  [style.background]=\"'#0a7fcf'\" (click)=\"goToLi('Created')\">\n        {{'Assigned'|translate}} :{{assignedCount}}\n      </ion-col>\n      <ion-col [style.background]=\"'#eaa200'\" (click)=\"goToLi('Accepted')\">\n        {{'Accepted'|translate}}: {{accepCount}}\n      </ion-col>\n      \n      <ion-col [style.background]=\"'#9d9fa6'\" (click)=\"goToLi('ReOpen')\">\n        {{'Reopen'|translate}}: {{reOpenCount}}\n      </ion-col>      \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid [style.padding]=\"'0'\">\n    <ion-row  *ngIf=\"taskList\">\n        <ion-col [style.background]=\"'#5fb543'\" (click)=\"goToLi('Completed')\">\n          {{'Completed'|translate}}: {{completCount}}\n        </ion-col>\n        <ion-col [style.background]=\"'#eb445a'\" (click)=\"goToLi('Rejected')\">\n          {{'Rejected'|translate}}: {{rejectCount}}\n        </ion-col>\n\n        <ion-col [style.background]=\"'#577590'\" (click)=\"goToLi('All')\">\n          {{'Total'|translate}}: {{taskList.length}}\n        </ion-col>\n    </ion-row>\n  </ion-grid> \n\n  <agm-map style=\"height:500px\" [zoom]='11' [latitude]=\"lat\" [longitude]=\"lon\" [usePanning]=\"true\">   \n    <agm-marker *ngFor=\"let d of details\" (markerClick)=\"clickedMarker(infowindow)\" [latitude]=\"d.lat\" [longitude]=\"d.lon\" [iconUrl]=\"{'url': (d.stage == 'Created')?'assets/icon/marker_blue.png':'' || (d.stage == 'Accepted')?'assets/icon/marker_orange.png':'' || (d.stage == 'Completed')?'assets/icon/marker_green.png':'' || (d.stage == 'ReOpen')?'assets/icon/marker_grey.png':''|| (d.stage == 'Rejected')?'assets/icon/marker_red.png':''}\">\n      <agm-info-window #infowindow>\n        <b>{{d.taskname}}</b><br/>{{d.description}}<br/>\n        {{d.address}}\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/folder/tms/my-task/my-task.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/folder/tms/my-task/my-task.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".entireRow {\n  width: 100%;\n}\n\n.taskName {\n  font-weight: 600;\n  text-transform: capitalize;\n  font-size: 0.9rem;\n  margin: 5px 0px;\n  color: #55565b !important;\n}\n\n.btnHome {\n  color: #fff;\n}\n\n.des {\n  color: #848d95;\n  margin: 5px 0px;\n  font-size: 0.9rem;\n}\n\n.stage {\n  font-size: 0.9rem;\n  margin: 5px 0px;\n  vertical-align: middle;\n}\n\n.gen {\n  width: 51px;\n  height: 45px;\n  border-radius: 6px;\n  background-color: #fff9ea;\n  margin-top: 0.5rem;\n  color: #3382f8;\n}\n\nion-button {\n  --box-shadow:none;\n}\n\n.search {\n  margin: 0 1.7px 1.7px 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #3382f8;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\nh5 {\n  color: #55565b !important;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 1rem;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.cur {\n  width: 160px;\n  height: 90px;\n  margin: 10px 10px;\n  padding: 16px 6px 21px;\n  border-radius: 10px;\n}\n\n.cnt {\n  width: 100%;\n  height: 39px;\n  font-family: Poppins;\n  font-size: 28px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 0.84px;\n  text-align: center;\n}\n\n.txts {\n  width: 100%;\n  height: 15px;\n  font-family: Poppins;\n  font-size: 10px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.nodat {\n  color: #b3a2a2 !important;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n\nion-icon {\n  font-size: 1.2rem;\n  margin-right: 6px;\n}\n\n.primary1 {\n  --border-color: var(--ion-color-primary, #3382f8);\n}\n\n.lbl {\n  --color: var(--ion-item-color, var(--ion-text-color, #818181));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy9teS10YXNrL0U6XFxjaXR5YmFzZVxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcdG1zXFxteS10YXNrXFxteS10YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb2xkZXIvdG1zL215LXRhc2svbXktdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBREtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBRUEsc0JBQUE7QUNGRjs7QURLQTtFQUdFLFdBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7QUNORjs7QURRQTtFQUdFLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNSRjs7QURVQTtFQUNJLGVBQUE7QUNQSjs7QURTQTtFQUNFLHlCQUFBO0FDTkY7O0FEU0EsZUFBQTs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFNFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDTko7O0FEUUU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDTEo7O0FET0U7RUFLRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURXRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEWUU7RUFDRSx5QkFBQTtBQ1RKOztBRFdFO0VBQ0UseUJBQUE7QUNSSjs7QURVRTtFQUNFLGdCQUFBO0FDUEo7O0FEU0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDTko7O0FEVUU7RUFDRSxpREFBQTtBQ1BKOztBRFNFO0VBQ0UsOERBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci90bXMvbXktdGFzay9teS10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVudGlyZVJvd3tcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGFza05hbWV7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIGNvbG9yOiAjNTU1NjViICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bkhvbWUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi8vIC5nZW57XHJcbi8vICAgY29sb3I6YmxhY2s7XHJcbi8vICAgYmFja2dyb3VuZDogI2RkZDtcclxuLy8gICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbi8vIH1cclxuXHJcbi5kZXN7XHJcbiAgICBjb2xvcjogIzg0OGQ5NTtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi5zdGFnZSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG4gIC8vIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbn1cclxuLmdlbntcclxuICAvLyBjb2xvcjpibGFjaztcclxuICAvLyBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIHdpZHRoOiA1MXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICAvLyBtYXJnaW46IDI5cHggMjBweCA0M3B4IDIyLjVweDtcclxuICAvLyBwYWRkaW5nOiAxNXB4IDE3LjNweCAxNC40cHggMTguMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWVhO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBjb2xvcjogIzMzODJmODtcclxuICAvLyBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAtLWJveC1zaGFkb3c6bm9uZTtcclxufVxyXG4uc2VhcmNoIHtcclxuICAvLyB3aWR0aDogMTMuOHB4O1xyXG4gIC8vIGhlaWdodDogMTMuOHB4O1xyXG4gIG1hcmdpbjogMCAxLjdweCAxLjdweCAwO1xyXG4gIC8vIGJvcmRlcjogc29saWQgMS41cHggIzMzODJmODtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMzM4MmY4O1xyXG59XHJcbmlvbi1zcGlubmVye1xyXG4gICAgbWFyZ2luOiAyMCUgNDUlO1xyXG59XHJcbmg1IHtcclxuICBjb2xvcjogIzU1NTY1YiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBCcmVhZGNydW1iICovXHJcbi5icmVhZGNydW1iIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiMwYjc2YWE7XHJcbiAgICAvLyBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIgc3BhbiB7XHJcbiAgICBjb2xvcjogI0M3RDlFMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmN1ciB7XHJcbiAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgIC8vIG1hcmdpbjogMTBweDtcclxuICAgIC8vIGhlaWdodDogOTBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogMTZweCA2cHggMjFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmZmY4O1xyXG4gIH1cclxuICAuY250IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgLy8gbWFyZ2luOiAwIDIycHggMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjg0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50eHRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgLy8gbWFyZ2luOiAzNnB4IDAgMDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBjb2xvcjogIzMzODJmODtcclxuICB9XHJcbiAgLm5vZGF0IHtcclxuICAgIGNvbG9yOiAjYjNhMmEyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIC5mYS1jaGV2cm9uLXJpZ2h0IHtcclxuICAgIGNvbG9yOiAjQzdEOUUyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC52aWV3LWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuICAvLyAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCByZ2JhKDAsIDAsIDAsIDAuMTMpKSkpO1xyXG5cclxuICAucHJpbWFyeTEge1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzM4MmY4KTtcclxuICB9XHJcbiAgLmxibHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1pdGVtLWNvbG9yLCB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzgxODE4MSkpO1xyXG4gIH0iLCIuZW50aXJlUm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBjb2xvcjogIzU1NTY1YiAhaW1wb3J0YW50O1xufVxuXG4uYnRuSG9tZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZGVzIHtcbiAgY29sb3I6ICM4NDhkOTU7XG4gIG1hcmdpbjogNXB4IDBweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zdGFnZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5nZW4ge1xuICB3aWR0aDogNTFweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY5ZWE7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgY29sb3I6ICMzMzgyZjg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbjogMCAxLjdweCAxLjdweCAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMzMzgyZjg7XG59XG5cbmlvbi1zcGlubmVyIHtcbiAgbWFyZ2luOiAyMCUgNDUlO1xufVxuXG5oNSB7XG4gIGNvbG9yOiAjNTU1NjViICFpbXBvcnRhbnQ7XG59XG5cbi8qIEJyZWFkY3J1bWIgKi9cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMGI3NmFhO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI0ZGRjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5icmVhZGNydW1iIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmJyZWFkY3J1bWIgc3BhbiB7XG4gIGNvbG9yOiAjQzdEOUUyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1ciB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBtYXJnaW46IDEwcHggMTBweDtcbiAgcGFkZGluZzogMTZweCA2cHggMjFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM5cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAwLjg0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnR4dHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub2RhdCB7XG4gIGNvbG9yOiAjYjNhMmEyICFpbXBvcnRhbnQ7XG59XG5cbi5icmVhZGNydW1iIC5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgY29sb3I6ICNDN0Q5RTIgIWltcG9ydGFudDtcbn1cblxuLnZpZXctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5wcmltYXJ5MSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzMzODJmOCk7XG59XG5cbi5sYmwge1xuICAtLWNvbG9yOiB2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICM4MTgxODEpKTtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".gen {\n  color: black;\n  background: #ddd;\n  text-align: center;\n  margin: 5% 35%;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy9uZXd0YXNrL0U6XFxjaXR5YmFzZVxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcdG1zXFxuZXd0YXNrXFxuZXd0YXNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb2xkZXIvdG1zL25ld3Rhc2svbmV3dGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBLHVFQUFBOztBQUNBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvdG1zL25ld3Rhc2svbmV3dGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW57XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDUlIDM1JTtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59IiwiLmdlbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUlIDM1JTtcbn1cblxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTVlNWU1O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-spinner {\n  margin: 20% 45%;\n}\n\n.nodat {\n  color: #b3a2a2 !important;\n}\n\n.mail {\n  float: right;\n  margin-right: 10px;\n  font-size: 1rem !important;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.card_desgn {\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  background-color: #fef8ed;\n  padding: 15px 10px 10px 10px;\n}\n\n.org {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #000000;\n  margin: 0 15px 1px 0;\n}\n\n.owner {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #818181;\n  margin: 1px 10px 0 0;\n}\n\n.pos {\n  float: right;\n}\n\n.main {\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #000000;\n  margin: 0 5px 0 0;\n}\n\n.email_dt {\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  margin: 0 3px 0 5px;\n}\n\nbutton {\n  width: 100px;\n  border-radius: 6px;\n  margin: 5px 10px 5px 10px;\n  background-color: transparent;\n}\n\n.accept {\n  font-family: Poppins;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background-color: #3382f8;\n  color: #ffffff;\n  padding: 10px 10px;\n}\n\n.rej {\n  font-family: Poppins;\n  font-size: 13px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  background-color: transparent;\n  color: #3382f8;\n  padding: 10px 10px;\n}\n\n.ryt {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrLWRlc2NyaXB0aW9uL0U6XFxjaXR5YmFzZVxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcdG1zXFx0YXNrLWRlc2NyaXB0aW9uXFx0YXNrLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb2xkZXIvdG1zL3Rhc2stZGVzY3JpcHRpb24vdGFzay1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5REE7RUFDRSxlQUFBO0FDeERGOztBRDBEQTtFQUNFLHlCQUFBO0FDdkRGOztBRDBEQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDdkRBOztBRHlEQTtFQUNBLG1CQUFBO0FDdERBOztBRHdEQTtFQUdBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDdkRBOztBRHlEQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ3REQTs7QUR3REE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNyREE7O0FEdURBO0VBQ0EsWUFBQTtBQ3BEQTs7QURzREE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNuREE7O0FEcURBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7QUNuREE7O0FEcURBO0VBQ0UsWUFBQTtFQUVBLGtCQUFBO0VBRUEseUJBQUE7RUFFQSw2QkFBQTtBQ3JERjs7QUR3REE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3JERjs7QUR3REE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3JERjs7QUR1REE7RUFDRSxZQUFBO0FDcERGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrLWRlc2NyaXB0aW9uL3Rhc2stZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZ2Vue1xyXG4vLyAgICAgY29sb3I6d2hpdGU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luOiA3JSAxMCU7XHJcbi8vICAgICBtYXJnaW4tdG9wOjIwJTtcclxuLy8gfVxyXG4vLyAucmVqY3tcclxuLy8gICAgIGNvbG9yOndoaXRlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIG1hcmdpbi10b3A6MjAlO1xyXG4vLyB9XHJcbi8vIC5tZW51QnRue1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAyMyU7XHJcbi8vICAgICByaWdodDogMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjlweDtcclxuLy8gICB9XHJcblxyXG4vLyAvLyAgIC5idG5Ib21le1xyXG4vLyAvLyAgICAgY29sb3I6d2hpdGU7XHJcbi8vIC8vIH1cclxuLy8gaW9uLXNwaW5uZXJ7XHJcbi8vICAgICBtYXJnaW46IDIwJSA0NSU7XHJcbi8vIH1cclxuXHJcbi8vIC8qIEJyZWFkY3J1bWIgKi9cclxuLy8gLmJyZWFkY3J1bWIge1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuLy8gICAgIGJhY2tncm91bmQ6IzBiNzZhYTtcclxuLy8gICAgIC8vIGhlaWdodDogNDBweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbi8vICAgICBjb2xvcjogI0ZGRjtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgfVxyXG4vLyAgIC5icmVhZGNydW1iIGxpIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIGNvbG9yOiAjRkZGO1xyXG4vLyAgIH1cclxuLy8gICAuYnJlYWRjcnVtYiBzcGFuIHtcclxuLy8gICAgIGNvbG9yOiAjQzdEOUUyO1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIH1cclxuLy8gICAuYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XHJcbi8vICAgICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gICAudmlldy1jb250YWluZXIge1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICB9XHJcblxyXG5cclxuaW9uLXNwaW5uZXJ7XHJcbiAgbWFyZ2luOiAyMCUgNDUlO1xyXG59XHJcbi5ub2RhdCB7XHJcbiAgY29sb3I6ICNiM2EyYTIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haWx7XHJcbmZsb2F0OiByaWdodDtcclxubWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5mb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5pb24tY2FyZCB7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhcmRfZGVzZ257XHJcbi8vIGhlaWdodDogOTFweDtcclxuLy8gbWFyZ2luOiAxMHB4IDE1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbmJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZlZjhlZDtcclxucGFkZGluZzogMTVweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4ub3JnIHtcclxuZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxuZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxubGluZS1oZWlnaHQ6IG5vcm1hbDtcclxubGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuY29sb3I6ICMwMDAwMDA7XHJcbm1hcmdpbjogMCAxNXB4IDFweCAwO1xyXG59XHJcbi5vd25lciB7XHJcbmZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG5mb250LXNpemU6IDEycHg7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbmxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmNvbG9yOiAjODE4MTgxO1xyXG5tYXJnaW46IDFweCAxMHB4IDAgMDtcclxufVxyXG4ucG9zIHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5tYWlue1xyXG5mb250LWZhbWlseTogUG9wcGlucztcclxuZm9udC1zaXplOiAxNHB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5saW5lLWhlaWdodDogbm9ybWFsO1xyXG5sZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG5jb2xvcjogIzAwMDAwMDtcclxubWFyZ2luOiAwIDVweCAwIDA7XHJcbn1cclxuLmVtYWlsX2R0e1xyXG5mb250LWZhbWlseTogUG9wcGlucztcclxuZm9udC1zaXplOiAxMnB4O1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5saW5lLWhlaWdodDogbm9ybWFsO1xyXG5sZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG50ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyBjb2xvcjogI2ZmYTUwMDtcclxubWFyZ2luOiAwIDNweCAwIDVweDtcclxufVxyXG5idXR0b257XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIC8vIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLy8gYm9yZGVyOiBzb2xpZCAycHggIzMzODJmODtcclxuICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gIC8vIGNvbG9yOiAjMzM4MmY4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5hY2NlcHR7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzODJmODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5yZWp7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMzMzgyZjg7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5yeXR7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59IiwiaW9uLXNwaW5uZXIge1xuICBtYXJnaW46IDIwJSA0NSU7XG59XG5cbi5ub2RhdCB7XG4gIGNvbG9yOiAjYjNhMmEyICFpbXBvcnRhbnQ7XG59XG5cbi5tYWlsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkX2Rlc2duIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmOGVkO1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4ub3JnIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMCAxNXB4IDFweCAwO1xufVxuXG4ub3duZXIge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzgxODE4MTtcbiAgbWFyZ2luOiAxcHggMTBweCAwIDA7XG59XG5cbi5wb3Mge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tYWluIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogMCA1cHggMCAwO1xufVxuXG4uZW1haWxfZHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgM3B4IDAgNXB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5hY2NlcHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzgyZjg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5cbi5yZWoge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzMzODJmODtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuXG4ucnl0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  color: white;\n  margin: 1px 2px;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\nagm-info-window {\n  padding: 2px !important;\n}\n\n.menuBtn {\n  position: absolute;\n  bottom: 23%;\n  right: 0px;\n  background: none;\n  font-size: 29px;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 14px;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrbG9jYXRpb25zL0U6XFxjaXR5YmFzZVxcRmx1ZW50TVdNX0NFUF90bXMvc3JjXFxhcHBcXGZvbGRlclxcdG1zXFx0YXNrbG9jYXRpb25zXFx0YXNrbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb2xkZXIvdG1zL3Rhc2tsb2NhdGlvbnMvdGFza2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDQyx1QkFBQTtBQ0NEOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBLGVBQUE7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNFSjs7QURBRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBREZFO0VBQ0UseUJBQUE7QUNLSjs7QURIRTtFQUNJLGdCQUFBO0FDTU4iLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvdG1zL3Rhc2tsb2NhdGlvbnMvdGFza2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2x7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgbWFyZ2luOjFweCAycHg7XHJcbn1cclxuXHJcbmlvbi1zcGlubmVye1xyXG4gIG1hcmdpbjogMjAlIDQ1JTtcclxufVxyXG5cclxuYWdtLWluZm8td2luZG93e1xyXG4gcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1lbnVCdG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIzJTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gIH1cclxuLyogQnJlYWRjcnVtYiAqL1xyXG4uYnJlYWRjcnVtYiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDojMGI3NmFhO1xyXG4gICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIHNwYW4ge1xyXG4gICAgY29sb3I6ICNDN0Q5RTI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIC5mYS1jaGV2cm9uLXJpZ2h0IHtcclxuICAgIGNvbG9yOiAjQzdEOUUyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC52aWV3LWNvbnRhaW5lciB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfSIsImlvbi1jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMXB4IDJweDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBtYXJnaW46IDIwJSA0NSU7XG59XG5cbmFnbS1pbmZvLXdpbmRvdyB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ubWVudUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyMyU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjlweDtcbn1cblxuLyogQnJlYWRjcnVtYiAqL1xuLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwYjc2YWE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjRkZGO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJyZWFkY3J1bWIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYnJlYWRjcnVtYiBzcGFuIHtcbiAgY29sb3I6ICNDN0Q5RTI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XG4gIGNvbG9yOiAjQzdEOUUyICFpbXBvcnRhbnQ7XG59XG5cbi52aWV3LWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

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