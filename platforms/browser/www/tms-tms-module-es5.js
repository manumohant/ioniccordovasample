function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tms-tms-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderTmsMyTaskMyTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar  class=\"toolBar\">\n        <ion-buttons slot=\"start\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button></ion-menu-button>\n            </ion-buttons>            \n            <!-- <ion-button class=\"btnHome\" *ngIf=\"enableRequest == true\" (click)=\"goBack()\">\n              <i class=\"fas fa-arrow-left\"></i> &nbsp;\n            </ion-button> -->\n        </ion-buttons>\n      <ion-title>Tasks</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ul class=\"breadcrumb\">\n      <li class=\"active\">Tasks</li>\n      <span [style.float]=\"'right'\" (click)=\"goToLoc('All')\">\n        <ion-icon name=\"compass-sharp\" ios=\"compass-outline\" md=\"compass-sharp\"></ion-icon>\n      </span>\n    </ul>\n    <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n      <ion-grid>\n          <ion-row>\n            <ion-col  class=\"cur\" [style.background]=\"'#0a7fcf'\" (click)=\"goToLi('Created')\">\n              <!-- Assign: {{taskList.length}} -->\n              Assigned :{{assignedCount}}\n            </ion-col>\n            <ion-col class=\"cur\" [style.background]=\"'#eaa200'\" (click)=\"goToLi('Accepted')\">\n              Accepted: {{accepCount}}\n            </ion-col>\n            \n            <ion-col class=\"cur\" [style.background]=\"'#9d9fa6'\" (click)=\"goToLi('ReOpen')\">\n              ReOpen: {{reOpenCount}}\n            </ion-col>\n            \n          </ion-row>\n      <!-- </ion-grid>\n      <ion-grid> -->\n        <ion-row>\n            <ion-col class=\"cur\" [style.background]=\"'#5fb543'\" (click)=\"goToLi('Completed')\">\n                Completed: {{completCount}}\n            </ion-col>\n            <ion-col class=\"cur\" [style.background]=\"'#eb445a'\" (click)=\"goToLi('Rejected')\">\n                Rejected: {{rejectCount}}\n            </ion-col>\n\n            <ion-col class=\"cur\" [style.background]=\"'#577590'\" (click)=\"goToLi('All')\">\n              <!-- All: {{taskList.length}} -->\n              All: {{totalCount}}\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-list>  \n          <ion-item *ngFor=\"let l of taskList | slice:0:slice\">\n            <ion-label (click)=\"goToDes(l.id, l.stage, l.taskName)\"> \n              <h5 class=\"taskName\">{{l.project}}&nbsp;&nbsp; 👉 &nbsp;&nbsp;{{l.taskName}}</h5>\n              <h3 class=\"des\">{{l.description}}</h3>\n              <h6 class=\"des\">{{l.startDate | date }} - {{l.endDate | date }}</h6>\n            </ion-label>\n            <h6 [ngStyle]=\"{'color': (l.stage =='Created') ? '#0a7fcf' : '' || (l.stage =='Completed') ? '#5fb543' : '' || (l.stage =='Accepted') ? '#eaa200' : '' || (l.stage =='Rejected') ? '#eb445a' : '' || (l.stage =='Reopen') ? '#9d9fa6' : ''}\"> {{l.stage}}</h6>\n          </ion-item>\n          <ion-item class=\"nodat\" *ngIf=\"nodat == true\"><h6>No Tasks.</h6></ion-item>\n        </ion-list>\n  \n    <!-- <div class=\"top\" *ngIf=\"enableRequest == true\">\n        <ion-item>\n          <ion-label>Start Date</ion-label>\n          <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"startDate\" name=\"title\" placeholder=\"Start Date\"></ion-datetime>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>End Date</ion-label>\n          <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"endDate\" name=\"title\" placeholder=\"End Date\"></ion-datetime>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"floating\">Reason</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"reason\" name=\"title\"></ion-input>\n        </ion-item>\n  \n        <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"generate()\">GENERATE</ion-button>\n    </div> -->\n  \n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data…\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n  </ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderTmsNewtaskNewtaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>            \n          <!-- <ion-button class=\"btnHome\" *ngIf=\"enableRequest == true\" (click)=\"goBack()\">\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\n          </ion-button> -->\n      </ion-buttons>\n    <ion-title>New Task</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- <ion-item>\n    <ion-label position=\"floating\">Supplier</ion-label>\n    <ion-select [(ngModel)]=\"selectedCompany\" (ionChange)=\"getProject($event)\">\n      <ion-select-option *ngFor=\"let company of companies\" [value]=\"company.id\">{{ company.name }}</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label position=\"floating\">Project</ion-label>\n    <ion-select [(ngModel)]=\"selectedProject\" required=\"true\">\n      <ion-select-option *ngFor=\"let project of projects\" [value]=\"project.id\">{{ project.name }}</ion-select-option>\n      <!-- <ion-select-option value=\"15\">Project 2</ion-select-option> -->\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Task Name</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"taskName\" name=\"taskName\" (ionBlur)=\"checkTaskName()\" required=\"true\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Task Description</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"taskDescription\" name=\"taskDescription\" required=\"true\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Expected Start Date</ion-label>\n     <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"startDate\" name=\"title\" required=\"true\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Expected End Date</ion-label>\n     <ion-datetime displayFormat=\"MMMM DD YYYY\" [(ngModel)]=\"endDate\" name=\"title\" required=\"true\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Expected Duration(Hrs)</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"duration\" name=\"title\" required=\"true\"></ion-input>\n  </ion-item>\n\n  <!-- <ion-item>\n    <ion-label position=\"floating\">Status</ion-label>\n    <ion-select [(ngModel)]=\"status\">\n      <ion-select-option value=\"1\">Created</ion-select-option>\n      <ion-select-option value=\"6\">Completed</ion-select-option>\n      <ion-select-option value=\"3\">Checkin</ion-select-option>\n      <ion-select-option value=\"2\">Accepted</ion-select-option>\n      <ion-select-option value=\"8\">Rejected</ion-select-option>\n      <ion-select-option value=\"4\">Checkout</ion-select-option>\n      <ion-select-option value=\"5\">Break</ion-select-option>\n      <ion-select-option value=\"0\">Closed</ion-select-option>\n      <ion-select-option value=\"7\">Reopen</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n  <ion-item>\n    <ion-label position=\"floating\">Priority</ion-label>\n    <ion-select [(ngModel)]=\"priority\">\n      <ion-select-option value=\"0\">Low</ion-select-option>\n      <ion-select-option value=\"1\">Medium</ion-select-option>\n      <ion-select-option value=\"2\">High</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Address</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"address\" name=\"address\" (ionChange)=\"getAdd($event)\" required=\"true\"></ion-input>\n  </ion-item>\n\n  <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"createTask()\">CREATE</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderTmsTaskDescriptionTaskDescriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar  class=\"toolBar\">\n        <ion-buttons slot=\"start\">\n            <ion-buttons slot=\"start\">\n                <!-- <ion-menu-button></ion-menu-button> -->\n            </ion-buttons>\n            \n            <ion-button class=\"btnHome\"  (click)=\"goBack()\">\n              <i class=\"fas fa-arrow-left\"></i> &nbsp;\n            </ion-button>\n        </ion-buttons>\n      <ion-title *ngIf=\"details\">{{details.taskName}}</ion-title>\n\n      <!-- <button class=\"menuBtn\"> -->\n          <ion-icon name=\"ellipsis-vertical\" *ngIf=\" details && details.stage == 'Created'\" class=\"menuBtn\"   [style.color]=\"'white'\"></ion-icon>\n          <!-- <ion-icon slot=\"icon-only\" name=\"more\" ></ion-icon> -->\n      <!-- </button> -->\n      \n    </ion-toolbar>\n  </ion-header>\n  <ul class=\"breadcrumb\">\n    <li><span (click)=\"breadcrumb();\">Tasks</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\n    <li class=\"active\">Task Details</li>\n  </ul>\n  <ion-content>\n\n        <ion-spinner *ngIf=\"showSpinner == true\" color=\"secondary\" name=\"circles\"></ion-spinner>\n\n      <ion-grid *ngIf=\"details && resonTab == false\">\n\n        <ion-row class=\"tabHead\">\n          <ion-col>Project : </ion-col> <ion-col>{{details.project}}</ion-col>\n        </ion-row>\n        \n        <ion-row class=\"tabHead\">\n            <ion-col>Description : </ion-col> <ion-col>{{details.description}}</ion-col>\n        </ion-row>\n\n        <ion-row class=\"tabHead\">\n            <ion-col>Job Duration : </ion-col> <ion-col>{{details.start_date | date}} - {{details.finish_date | date}}</ion-col>\n        </ion-row>\n\n          <ion-row class=\"tabHead\">\n              <ion-col>Status : </ion-col> <ion-col [ngStyle]=\"{'color': (details.stage =='Created') ? '#3dc2ff' : '' || (details.stage =='Completed') ? 'green' : '' || (details.stage =='Accepted') ? '#e0ac08' : ''}\">{{details.stage}}</ion-col>\n          </ion-row>\n\n          <ion-row class=\"tabHead\">\n              <ion-col>Priority : </ion-col> <ion-col [ngStyle]=\"{'color': (details.priority =='Medium' || details.priority =='medium') ? '#ffc409' : '' || (details.priority =='Low' || details.priority =='low') ? '#28ba62' : '' || (details.priority =='High' || details.priority =='high') ? '#ff0000' : ''}\">{{details.priority}}</ion-col>\n          </ion-row>\n\n          <!-- <ion-row class=\"tabHead\">\n              <ion-col>Est.Time : </ion-col> <ion-col>{{details.expectedhours}} Hrs</ion-col>\n          </ion-row> -->\n\n          <ion-row class=\"tabHead\" *ngIf=\"details.stage=='Completed'\">\n              <ion-col>Completed Date : </ion-col> <ion-col>{{details.finish_date | date}}</ion-col>\n          </ion-row>\n\n          <!-- <ion-row class=\"tabHead\" *ngIf=\"details.stage=='Completed'\">\n              <ion-col>Spent Time : </ion-col> <ion-col>{{totalSpent}}</ion-col>\n          </ion-row> -->\n\n          <ion-row class=\"tabHead\">\n            <ion-col>Address : </ion-col> <ion-col>{{address}}</ion-col>\n        </ion-row>\n\n    <div *ngIf=\"details.stage == 'Created' || details.stage == 'Reopen'\">\n        <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"accept()\">Accept</ion-button>\n        <ion-button class=\"gen\" color=\"#00aaa0\" (click)=\"rej()\" >Reject</ion-button>\n    </div>\n      \n      </ion-grid>\n\n      <!-- <div class=\"top\" *ngIf=\"resonTab == true\">\n    \n          <ion-item>\n            <ion-label position=\"floating\">Reason To Reject</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"reason\" name=\"title\"></ion-input>\n          </ion-item>\n    \n          <ion-button class=\"rejc\" expand=\"full\" color=\"#00aaa0\" (click)=\"reasonToRej()\">Reject</ion-button>\n      </div> -->\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFolderTmsTasklocationsTasklocationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar  class=\"toolBar\">\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          \n          <!-- <ion-button class=\"btnHome\" *ngIf=\"enableRequest == true\" (click)=\"goBack()\">\n            <i class=\"fas fa-arrow-left\"></i> &nbsp;\n          </ion-button> -->\n      </ion-buttons>\n    <ion-title>Tasks Locations</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ul class=\"breadcrumb\">\n  <li><span (click)=\"breadcrumb();\">Tasks</span>&nbsp;<i class=\"fas fa-chevron-right\"></i>&nbsp;</li>\n  <li class=\"active\">Task Locations</li>\n</ul>\n      <ion-grid [style.padding]=\"'0'\">\n          <ion-row>\n            <ion-col  [style.background]=\"'#0a7fcf'\" (click)=\"goToLi('Created')\">\n              <!-- Assign: {{taskList.length}} -->\n              Assigned :{{assignedCount}}\n            </ion-col>\n            <ion-col [style.background]=\"'#eaa200'\" (click)=\"goToLi('Accepted')\">\n              Accepted: {{accepCount}}\n            </ion-col>\n            \n            <ion-col [style.background]=\"'#9d9fa6'\" (click)=\"goToLi('ReOpen')\">\n              ReOpen: {{reOpenCount}}\n            </ion-col>\n            \n          </ion-row>\n      </ion-grid>\n      <ion-grid [style.padding]=\"'0'\">\n        <ion-row  *ngIf=\"taskList\">\n            <ion-col [style.background]=\"'#5fb543'\" (click)=\"goToLi('Completed')\">\n                Completed: {{completCount}}\n            </ion-col>\n            <ion-col [style.background]=\"'#eb445a'\" (click)=\"goToLi('Rejected')\">\n                Rejected: {{rejectCount}}\n            </ion-col>\n\n            <ion-col [style.background]=\"'#577590'\" (click)=\"goToLi('All')\">\n              All: {{taskList.length}}\n            </ion-col>\n        </ion-row>\n      </ion-grid> \n\n  <agm-map style=\"height:500px\" [zoom]='12' [latitude]=\"lat\" [longitude]=\"lon\" [usePanning]=\"true\">   \n    <agm-marker *ngFor=\"let d of details\" (markerClick)=\"clickedMarker(infowindow)\" [latitude]=\"d.lat\" [longitude]=\"d.lon\" [iconUrl]=\"{'url': (d.stage == 'Created')?'assets/icon/marker_blue.png':'' || (d.stage == 'Accepted')?'assets/icon/marker_orange.png':'' || (d.stage == 'Completed')?'assets/icon/marker_green.png':'' || (d.stage == 'ReOpen')?'assets/icon/marker_grey.png':''|| (d.stage == 'Rejected')?'assets/icon/marker_red.png':''}\">\n      <agm-info-window #infowindow>\n        <b>{{d.taskname}}</b><br/>{{d.description}}<br/>\n        {{d.address}}\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/folder/tms/my-task/my-task.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/folder/tms/my-task/my-task.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderTmsMyTaskMyTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".taskName {\n  font-weight: 600;\n  text-transform: capitalize;\n  font-size: 0.9rem;\n  margin: 5px 0px;\n}\n\n.des {\n  color: #848d95;\n  margin: 5px 0px;\n}\n\nion-col {\n  color: white;\n  margin: 1px 2px;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\nh5 {\n  color: #55565b !important;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 14px;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.cur {\n  cursor: pointer;\n}\n\n.nodat {\n  color: #b3a2a2 !important;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n\nion-icon {\n  font-size: 18px;\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy9teS10YXNrL0U6XFxDRVBcXEZsdWVudE1XTV9DRVBfdG1zL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcbXktdGFza1xcbXktdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy9teS10YXNrL215LXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNFLHlCQUFBO0FDSUY7O0FEREEsZUFBQTs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDS0o7O0FESEU7RUFDRSxlQUFBO0FDTUo7O0FESkU7RUFDRSx5QkFBQTtBQ09KOztBRExFO0VBR0UseUJBQUE7QUNNSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci90bXMvbXktdGFzay9teS10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2tOYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLmRlc3tcclxuICAgIGNvbG9yOiAjODQ4ZDk1O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbmlvbi1jb2x7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG1hcmdpbjoxcHggMnB4O1xyXG59XHJcblxyXG5pb24tc3Bpbm5lcntcclxuICAgIG1hcmdpbjogMjAlIDQ1JTtcclxufVxyXG5oNSB7XHJcbiAgY29sb3I6ICM1NTU2NWIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQnJlYWRjcnVtYiAqL1xyXG4uYnJlYWRjcnVtYiB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDojMGI3NmFhO1xyXG4gICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIHNwYW4ge1xyXG4gICAgY29sb3I6ICNDN0Q5RTI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5jdXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubm9kYXQge1xyXG4gICAgY29sb3I6ICNiM2EyYTIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJyZWFkY3J1bWIgLmZhLWNoZXZyb24tcmlnaHQge1xyXG4gICAgLy8gcGFkZGluZzogMCAxMHB4O1xyXG4gICAgLy8gZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNDN0Q5RTIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLy8gICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAvLyAgICAgdWwge1xyXG4gIC8vICAgICAgIG1hcmdpbi1sZWZ0OiAtMzAlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLnZpZXctY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH0iLCIudGFza05hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLmRlcyB7XG4gIGNvbG9yOiAjODQ4ZDk1O1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbmlvbi1jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMXB4IDJweDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBtYXJnaW46IDIwJSA0NSU7XG59XG5cbmg1IHtcbiAgY29sb3I6ICM1NTU2NWIgIWltcG9ydGFudDtcbn1cblxuLyogQnJlYWRjcnVtYiAqL1xuLmJyZWFkY3J1bWIge1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwYjc2YWE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjRkZGO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJyZWFkY3J1bWIgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4uYnJlYWRjcnVtYiBzcGFuIHtcbiAgY29sb3I6ICNDN0Q5RTI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3VyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubm9kYXQge1xuICBjb2xvcjogI2IzYTJhMiAhaW1wb3J0YW50O1xufVxuXG4uYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XG4gIGNvbG9yOiAjQzdEOUUyICFpbXBvcnRhbnQ7XG59XG5cbi52aWV3LWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/folder/tms/my-task/my-task.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/folder/tms/my-task/my-task.component.ts ***!
    \*********************************************************/

  /*! exports provided: MyTaskComponent */

  /***/
  function srcAppFolderTmsMyTaskMyTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyTaskComponent", function () {
      return MyTaskComponent;
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


    var _tms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tms.service */
    "./src/app/folder/tms/tms.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MyTaskComponent = /*#__PURE__*/function () {
      function MyTaskComponent(tmsServ, router) {
        _classCallCheck(this, MyTaskComponent);

        this.tmsServ = tmsServ;
        this.router = router;
        this.accepCount = 0;
        this.reOpenCount = 0;
        this.completCount = 0;
        this.rejectCount = 0;
        this.assignedCount = 0;
        this.totalCount = 0;
        this.showSpinner = true;
        this.nodat = false;
        this.slice = 7;
      }

      _createClass(MyTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.nodat = false;
          this.router.navigateByUrl('/folder/tms/mytask', {
            skipLocationChange: true
          }).then(function () {
            _this.router.navigate(['/folder/tms/mytask']);
          });
          this.userId = window.localStorage.getItem('userId'); // alert(this.userId);

          this.tmsServ.getTaskList(this.userId).subscribe(function (res) {
            // console.log(res);
            _this.taskList = res['data'];
            _this.totalCount = _this.taskList.length;
            _this.showSpinner = false;
            res['data'].map(function (val) {
              if (val.stage == "Created") _this.assignedCount++;
              if (val.stage == "Completed") _this.completCount++;
              if (val.stage == "Accepted") _this.accepCount++;
              if (val.stage == "Reopen") _this.reOpenCount++;
              if (val.stage == "Rejected") _this.rejectCount++;
            });

            if (_this.taskList.length == 0) {
              _this.nodat = true;
              _this.showSpinner = false;
            }
          });
        }
      }, {
        key: "goToDes",
        value: function goToDes(tid, status, name) {
          // alert(tid)
          if (status == 'Accepted') {
            this.router.navigateByUrl('/folder/punch/in/' + tid);
          } else {
            this.router.navigateByUrl('/folder/tms/taskDes/' + tid);
          }
        }
      }, {
        key: "goToLoc",
        value: function goToLoc(status) {
          this.router.navigateByUrl('/folder/tms/taskloc/' + status);
        }
      }, {
        key: "goToLi",
        value: function goToLi(status) {
          var _this2 = this;

          this.tmsServ.getTaskList(this.userId).subscribe(function (res) {
            _this2.taskList = res['data'];

            if (status == 'All') {
              _this2.taskList = res['data'];

              if (_this2.taskList.length == 0) {
                _this2.nodat = true;
              } else _this2.nodat = false;
            } else {
              _this2.taskList = _this2.taskList.filter(function (tasklist) {
                return tasklist.stage == status;
              });

              if (_this2.taskList.length == 0) {
                _this2.nodat = true;
              } else _this2.nodat = false;
            } // console.log(this.taskList);    

          }); // this.router.navigateByUrl('/folder/tms/taskloc/' +status);    
        }
      }, {
        key: "doInfinite",
        value: function doInfinite(infiniteScrollEvent) {
          var _this3 = this;

          setTimeout(function () {
            _this3.slice += 5;
            infiniteScrollEvent.target.complete();
          }, 500);
        }
      }]);

      return MyTaskComponent;
    }();

    MyTaskComponent.ctorParameters = function () {
      return [{
        type: _tms_service__WEBPACK_IMPORTED_MODULE_2__["TmsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MyTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-task',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/my-task/my-task.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-task.component.scss */
      "./src/app/folder/tms/my-task/my-task.component.scss"))["default"]]
    })], MyTaskComponent);
    /***/
  },

  /***/
  "./src/app/folder/tms/newtask/newtask.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/folder/tms/newtask/newtask.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderTmsNewtaskNewtaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".gen {\n  color: black;\n  background: #ddd;\n  text-align: center;\n  margin: 5% 35%;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy9uZXd0YXNrL0U6XFxDRVBcXEZsdWVudE1XTV9DRVBfdG1zL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcbmV3dGFza1xcbmV3dGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy9uZXd0YXNrL25ld3Rhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQSx1RUFBQTs7QUFDQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3Rtcy9uZXd0YXNrL25ld3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2Vue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1JSAzNSU7XHJcbn1cclxuXHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufSIsIi5nZW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1JSAzNSU7XG59XG5cbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/folder/tms/newtask/newtask.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/folder/tms/newtask/newtask.component.ts ***!
    \*********************************************************/

  /*! exports provided: NewtaskComponent */

  /***/
  function srcAppFolderTmsNewtaskNewtaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewtaskComponent", function () {
      return NewtaskComponent;
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


    var _tms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tms.service */
    "./src/app/folder/tms/tms.service.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var NewtaskComponent = /*#__PURE__*/function () {
      function NewtaskComponent(tmsServ, nativeGeocoder, router, alertController) {
        _classCallCheck(this, NewtaskComponent);

        this.tmsServ = tmsServ;
        this.nativeGeocoder = nativeGeocoder;
        this.router = router;
        this.alertController = alertController;
      }

      _createClass(NewtaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.empId = window.localStorage.getItem('empId');
          this.companyid = window.localStorage.getItem('companyId'); // to get Companies

          this.tmsServ.getCompanies().subscribe(function (res) {
            _this4.companies = res['data'];
          }, function (err) {// this.errMsg = err;
          }); // to get all the task names

          this.tmsServ.getTaskname().subscribe(function (response) {
            _this4.taskNameExisting = response['data'];
          }, function (err) {// this.errMsg = err;
          });
          this.getProject();
        }
      }, {
        key: "getProject",
        value: function getProject() {
          var _this5 = this;

          // this.companyid=event.detail.value;
          this.tmsServ.getProject(this.companyid).subscribe(function (res) {
            _this5.projects = res['data']; // console.log(this.projects)
          }, function (err) {// this.errMsg = err;
          });
        }
      }, {
        key: "checkTaskName",
        value: function checkTaskName() {
          var _this6 = this;

          this.taskNameExisting.map(function (val) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.taskName == val.taskname)) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 3;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Existing Task',
                        message: 'Task name already exists, change the task name.',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "getAdd",
        value: function getAdd(event) {
          var _this7 = this;

          this.address = event.detail.value;
          var options = {
            useLocale: true,
            maxResults: 5
          };
          this.nativeGeocoder.forwardGeocode(this.address, options).then(function (result) {
            _this7.lat = result[0].latitude;
            _this7.lon = result[0].longitude; // alert(JSON.stringify(this.address +' The coordinates are latitude=' + this.lat + ' and longitude=' + this.lon))
          })["catch"](function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "createTask",
        value: function createTask() {
          var _this8 = this;

          var payload = {
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
          }; // if((this.selectedProject)(this.taskName)
          //   (this.taskDescription)
          //   (this.startDate)
          //   (this.endDate)
          //   (this.duration)
          //   (this.address)){
          // }
          // console.log(payload)
          // alert(JSON.stringify(payload));

          this.tmsServ.createTask(payload).subscribe(function (res) {
            // console.log(res['data']);
            _this8.router.navigateByUrl('/folder/tms/mytask');
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return NewtaskComponent;
    }();

    NewtaskComponent.ctorParameters = function () {
      return [{
        type: _tms_service__WEBPACK_IMPORTED_MODULE_2__["TmsService"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    NewtaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newtask',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./newtask.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/newtask/newtask.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./newtask.component.scss */
      "./src/app/folder/tms/newtask/newtask.component.scss"))["default"]]
    })], NewtaskComponent);
    /***/
  },

  /***/
  "./src/app/folder/tms/task-description/task-description.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/folder/tms/task-description/task-description.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderTmsTaskDescriptionTaskDescriptionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".gen {\n  color: white;\n  background: #006495;\n  text-align: center;\n  margin: 7% 10%;\n  margin-top: 20%;\n}\n\n.rejc {\n  color: white;\n  background: #006495;\n  text-align: center;\n  margin-top: 20%;\n}\n\n.menuBtn {\n  position: absolute;\n  bottom: 23%;\n  right: 0px;\n  background: none;\n  font-size: 29px;\n}\n\n.btnHome {\n  color: white;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 14px;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrLWRlc2NyaXB0aW9uL0U6XFxDRVBcXEZsdWVudE1XTV9DRVBfdG1zL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcdGFzay1kZXNjcmlwdGlvblxcdGFzay1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrLWRlc2NyaXB0aW9uL3Rhc2stZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBRTtFQUNFLFlBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QUREQSxlQUFBOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNJSjs7QURGRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNLSjs7QURIRTtFQUdFLHlCQUFBO0FDSUo7O0FESUU7RUFDRSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrLWRlc2NyaXB0aW9uL3Rhc2stZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2Vue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA2NDk1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA3JSAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOjIwJTtcclxufVxyXG4ucmVqY3tcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNjQ5NTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6MjAlO1xyXG59XHJcbi5tZW51QnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMyU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICB9XHJcblxyXG4gIC5idG5Ib21le1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuaW9uLXNwaW5uZXJ7XHJcbiAgICBtYXJnaW46IDIwJSA0NSU7XHJcbn1cclxuXHJcbi8qIEJyZWFkY3J1bWIgKi9cclxuLmJyZWFkY3J1bWIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IzBiNzZhYTtcclxuICAgIC8vIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiBzcGFuIHtcclxuICAgIGNvbG9yOiAjQzdEOUUyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XHJcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAvLyBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC8vICAgICB1bCB7XHJcbiAgLy8gICAgICAgbWFyZ2luLWxlZnQ6IC0zMCU7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAudmlldy1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9IiwiLmdlbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwNjQ5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDclIDEwJTtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG4ucmVqYyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwNjQ5NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5tZW51QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIzJTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAyOXB4O1xufVxuXG4uYnRuSG9tZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXNwaW5uZXIge1xuICBtYXJnaW46IDIwJSA0NSU7XG59XG5cbi8qIEJyZWFkY3J1bWIgKi9cbi5icmVhZGNydW1iIHtcbiAgcGFkZGluZzogNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMGI3NmFhO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI0ZGRjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5icmVhZGNydW1iIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLmJyZWFkY3J1bWIgc3BhbiB7XG4gIGNvbG9yOiAjQzdEOUUyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJyZWFkY3J1bWIgLmZhLWNoZXZyb24tcmlnaHQge1xuICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xufVxuXG4udmlldy1jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/folder/tms/task-description/task-description.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/folder/tms/task-description/task-description.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TaskDescriptionComponent */

  /***/
  function srcAppFolderTmsTaskDescriptionTaskDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDescriptionComponent", function () {
      return TaskDescriptionComponent;
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


    var _tms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tms.service */
    "./src/app/folder/tms/tms.service.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

    var TaskDescriptionComponent = /*#__PURE__*/function () {
      function TaskDescriptionComponent(route, tmsSrv, router, nativeGeocoder) {
        _classCallCheck(this, TaskDescriptionComponent);

        this.route = route;
        this.tmsSrv = tmsSrv;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
        this.resonTab = false;
        this.showSpinner = true;
      }

      _createClass(TaskDescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.id = this.route.snapshot.params.id;
          this.tmsSrv.taskDes(this.id).subscribe(function (res) {
            // console.log(res)
            _this9.details = res['data'];
            var goptions = {
              useLocale: true,
              maxResults: 5
            };

            _this9.nativeGeocoder.reverseGeocode(_this9.details.lat, _this9.details.lon, goptions).then(function (result) {
              // alert(JSON.stringify(result));
              _this9.address = "";
              var responseAddress = [];

              for (var _i = 0, _Object$entries = Object.entries(result[0]); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                if (value.length > 0) responseAddress.push(value);
              } // alert(responseAddress);


              responseAddress.pop();
              responseAddress.reverse();

              for (var _i2 = 0, _responseAddress = responseAddress; _i2 < _responseAddress.length; _i2++) {
                var _value = _responseAddress[_i2];
                _this9.address += _value + ", ";
              }

              _this9.address = _this9.address.slice(0, -2);
            })["catch"](function (error) {
              _this9.address = "Address Not Available!";
            });

            if (_this9.details) _this9.showSpinner = false;
          });
          this.tmsSrv.timeSpent(this.id).subscribe(function (res) {
            // console.log(res['data']);
            _this9.workDuration = res['data'];

            if (_this9.workDuration) {
              _this9.totalSpent = _this9.workDuration[_this9.workDuration.length - 1].entireWorkDuration;
            } // this.details = res['data'];

          });
        }
      }, {
        key: "rej",
        value: function rej() {
          var _this10 = this;

          this.resonTab = false;
          this.tmsSrv.updateTaskStatus(this.id, 'Rejected').subscribe(function (res) {
            // console.log(res);
            _this10.details.statusString = res['data'].statusString;

            _this10.router.navigateByUrl('/folder/tms/mytask');
          });
        }
      }, {
        key: "breadcrumb",
        value: function breadcrumb() {
          this.router.navigateByUrl('/folder/tms/mytask');
        } // reasonToRej(){
        //   this.resonTab = false;
        //   this.reason;
        //   this.tmsSrv.updateTaskStatus(this.id, 'Reject').subscribe(res=>{
        //   // console.log(res);
        //   this.details.statusString = res['data'].statusString
        //   // this.router.navigateByUrl('/folder/tms/mytask');
        //   });
        // }

      }, {
        key: "accept",
        value: function accept() {
          var _this11 = this;

          this.tmsSrv.updateTaskStatus(this.id, 'Accepted').subscribe(function (res) {
            // console.log(res);
            _this11.router.navigateByUrl('/folder/punch/in/' + res['data'].task_id);
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.router.navigateByUrl('/folder/tms/mytask');
        }
      }]);

      return TaskDescriptionComponent;
    }();

    TaskDescriptionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _tms_service__WEBPACK_IMPORTED_MODULE_3__["TmsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]
      }];
    };

    TaskDescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-description',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-description.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/task-description/task-description.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-description.component.scss */
      "./src/app/folder/tms/task-description/task-description.component.scss"))["default"]]
    })], TaskDescriptionComponent);
    /***/
  },

  /***/
  "./src/app/folder/tms/tasklocations/tasklocations.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/folder/tms/tasklocations/tasklocations.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFolderTmsTasklocationsTasklocationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-col {\n  color: white;\n  margin: 1px 2px;\n}\n\nion-spinner {\n  margin: 20% 45%;\n}\n\nagm-info-window {\n  padding: 2px !important;\n}\n\n.menuBtn {\n  position: absolute;\n  bottom: 23%;\n  right: 0px;\n  background: none;\n  font-size: 29px;\n}\n\n/* Breadcrumb */\n\n.breadcrumb {\n  padding: 5px;\n  list-style: none;\n  background: #0b76aa;\n  font-weight: normal;\n  color: #FFF;\n  overflow: hidden;\n  margin: 0;\n  font-size: 14px;\n}\n\n.breadcrumb li {\n  display: inline-block;\n  color: #FFF;\n}\n\n.breadcrumb span {\n  color: #C7D9E2;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.breadcrumb .fa-chevron-right {\n  color: #C7D9E2 !important;\n}\n\n.view-container {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrbG9jYXRpb25zL0U6XFxDRVBcXEZsdWVudE1XTV9DRVBfdG1zL3NyY1xcYXBwXFxmb2xkZXJcXHRtc1xcdGFza2xvY2F0aW9uc1xcdGFza2xvY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrbG9jYXRpb25zL3Rhc2tsb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0MsdUJBQUE7QUNDRDs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQSxlQUFBOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGRTtFQUdFLHlCQUFBO0FDR0o7O0FES0U7RUFDRSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3Rtcy90YXNrbG9jYXRpb25zL3Rhc2tsb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29se1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIG1hcmdpbjoxcHggMnB4O1xyXG59XHJcblxyXG5pb24tc3Bpbm5lcntcclxuICBtYXJnaW46IDIwJSA0NSU7XHJcbn1cclxuXHJcbmFnbS1pbmZvLXdpbmRvd3tcclxuIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tZW51QnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMyU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICB9XHJcbi8qIEJyZWFkY3J1bWIgKi9cclxuLmJyZWFkY3J1bWIge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IzBiNzZhYTtcclxuICAgIC8vIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5icmVhZGNydW1iIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiBzcGFuIHtcclxuICAgIGNvbG9yOiAjQzdEOUUyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuYnJlYWRjcnVtYiAuZmEtY2hldnJvbi1yaWdodCB7XHJcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAvLyBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI0M3RDlFMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAvLyAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC8vICAgICB1bCB7XHJcbiAgLy8gICAgICAgbWFyZ2luLWxlZnQ6IC0zMCU7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH1cclxuICAudmlldy1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9IiwiaW9uLWNvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxcHggMnB4O1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIG1hcmdpbjogMjAlIDQ1JTtcbn1cblxuYWdtLWluZm8td2luZG93IHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIzJTtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAyOXB4O1xufVxuXG4vKiBCcmVhZGNydW1iICovXG4uYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzBiNzZhYTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNGRkY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnJlYWRjcnVtYiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5icmVhZGNydW1iIHNwYW4ge1xuICBjb2xvcjogI0M3RDlFMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5icmVhZGNydW1iIC5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgY29sb3I6ICNDN0Q5RTIgIWltcG9ydGFudDtcbn1cblxuLnZpZXctY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/folder/tms/tasklocations/tasklocations.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/folder/tms/tasklocations/tasklocations.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TasklocationsComponent */

  /***/
  function srcAppFolderTmsTasklocationsTasklocationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasklocationsComponent", function () {
      return TasklocationsComponent;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _tms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tms.service */
    "./src/app/folder/tms/tms.service.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

    var TasklocationsComponent = /*#__PURE__*/function () {
      function TasklocationsComponent(geolocation, nativeGeocoder, router, route, nativeStorage, tmsSrv) {
        _classCallCheck(this, TasklocationsComponent);

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

        this.router.onSameUrlNavigation = 'reload'; // if (navigator)
        // {
        //   navigator.geolocation.getCurrentPosition( pos => {
        //     this.lon = +pos.coords.longitude;
        //     this.lat = +pos.coords.latitude;
        //   });
        // }

        this.nativeStorage.getItem('loginDetails').then(function (data) {
          return console.log(data);
        }, function (error) {
          return console.error(error);
        });
      }

      _createClass(TasklocationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.userId = window.localStorage.getItem('userId');
          this.tmsSrv.getTaskList(this.userId).subscribe(function (res) {
            // console.log(res);
            _this12.taskList = res['data'];
            _this12.showSpinner = false;
            res['data'].map(function (val) {
              if (val.stage == "Created") {
                _this12.assignedCount++;
              }

              if (val.stage == "Completed") _this12.completCount++;
              if (val.stage == "Accepted") _this12.accepCount++;
              if (val.stage == "Reopen") _this12.reOpenCount++;
              if (val.stage == "Rejected") _this12.rejectCount++;
              if ((val.lat != 0 || val.lat != '') && _this12.lat == undefined) _this12.lat = Number(val.lat);
              if ((val.lon != 0 || val.lon != '') && _this12.lon == undefined) _this12.lon = Number(val.lon); // console.log(this.lat,this.lon)
            });
          });
          var i = 0; // this.getUserPosition();

          this.empId = window.localStorage.getItem('userId');
          this.status = this.route.snapshot.params.status;
          this.tmsSrv.taskLoc(this.empId, this.status).subscribe(function (res) {
            // console.log("result "+res);
            _this12.details = res['data']; // console.log(this.details)
            // alert(JSON.stringify(this.details))

            var goptions = {
              useLocale: true,
              maxResults: 5
            };
            res['data'].map(function (val, index) {
              // console.log(val.lat+" , "+val.lon);
              _this12.nativeGeocoder.reverseGeocode(val.lat, val.lon, goptions).then(function (result) {
                _this12.address = "";
                var responseAddress = [];

                for (var _i3 = 0, _Object$entries2 = Object.entries(result[0]); _i3 < _Object$entries2.length; _i3++) {
                  var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                      key = _Object$entries2$_i[0],
                      value = _Object$entries2$_i[1];

                  if (value.length > 0) responseAddress.push(value);
                }

                responseAddress.pop();
                responseAddress.reverse();

                for (var _i4 = 0, _responseAddress2 = responseAddress; _i4 < _responseAddress2.length; _i4++) {
                  var _value2 = _responseAddress2[_i4];
                  _this12.address += _value2 + ", ";
                }

                _this12.address = _this12.address.slice(0, -2);
                val['address'] = _this12.address; // console.log(val);
              })["catch"](function (error) {
                _this12.address = "Address Not Available!";
                val['address'] = _this12.address; // console.log(res['data']);
              });
            });
            if (_this12.details) _this12.showSpinner = false;
          });
        }
      }, {
        key: "clickedMarker",
        value: function clickedMarker(infowindow) {
          if (this.previous) {
            this.previous.close();
          }

          this.previous = infowindow;
        }
      }, {
        key: "breadcrumb",
        value: function breadcrumb() {
          this.router.navigateByUrl('/folder/tms/mytask');
        }
      }, {
        key: "getUserPosition",
        value: function getUserPosition() {
          var _this13 = this;

          return new Promise(function (resolve, reject) {
            _this13.options = {
              maximumAge: 3000,
              enableHighAccuracy: true
            };

            _this13.geolocation.getCurrentPosition(_this13.options).then(function (pos) {
              _this13.currentPos = pos;
              var location = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                time: new Date()
              }; // console.log('loc', location);

              resolve(pos);
            }, function (err) {
              console.log("error : " + err.message);
              reject(err.message);
            });
          });
        }
      }, {
        key: "goToLi",
        value: function goToLi(status) {
          this.router.navigateByUrl('/folder/tms/taskloc/' + status);
        }
      }]);

      return TasklocationsComponent;
    }();

    TasklocationsComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"]
      }, {
        type: _tms_service__WEBPACK_IMPORTED_MODULE_5__["TmsService"]
      }];
    };

    TasklocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasklocations',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tasklocations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/tms/tasklocations/tasklocations.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tasklocations.component.scss */
      "./src/app/folder/tms/tasklocations/tasklocations.component.scss"))["default"]]
    })], TasklocationsComponent);
    /***/
  },

  /***/
  "./src/app/folder/tms/tms-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/folder/tms/tms-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: TmsRoutingModule */

  /***/
  function srcAppFolderTmsTmsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TmsRoutingModule", function () {
      return TmsRoutingModule;
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


    var _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-task/my-task.component */
    "./src/app/folder/tms/my-task/my-task.component.ts");
    /* harmony import */


    var _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./task-description/task-description.component */
    "./src/app/folder/tms/task-description/task-description.component.ts");
    /* harmony import */


    var _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tasklocations/tasklocations.component */
    "./src/app/folder/tms/tasklocations/tasklocations.component.ts");
    /* harmony import */


    var _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./newtask/newtask.component */
    "./src/app/folder/tms/newtask/newtask.component.ts");

    var routes = [{
      path: 'mytask',
      component: _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_3__["MyTaskComponent"]
    }, {
      path: 'newtask',
      component: _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_6__["NewtaskComponent"]
    }, {
      path: 'taskDes/:id',
      component: _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_4__["TaskDescriptionComponent"]
    }, {
      path: 'taskloc/:status',
      component: _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_5__["TasklocationsComponent"]
    }];

    var TmsRoutingModule = function TmsRoutingModule() {
      _classCallCheck(this, TmsRoutingModule);
    };

    TmsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TmsRoutingModule);
    /***/
  },

  /***/
  "./src/app/folder/tms/tms.module.ts":
  /*!******************************************!*\
    !*** ./src/app/folder/tms/tms.module.ts ***!
    \******************************************/

  /*! exports provided: TmsModule */

  /***/
  function srcAppFolderTmsTmsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TmsModule", function () {
      return TmsModule;
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


    var _tms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tms-routing.module */
    "./src/app/folder/tms/tms-routing.module.ts");
    /* harmony import */


    var _my_task_my_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./my-task/my-task.component */
    "./src/app/folder/tms/my-task/my-task.component.ts");
    /* harmony import */


    var _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-description/task-description.component */
    "./src/app/folder/tms/task-description/task-description.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tasklocations/tasklocations.component */
    "./src/app/folder/tms/tasklocations/tasklocations.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./newtask/newtask.component */
    "./src/app/folder/tms/newtask/newtask.component.ts");

    var TmsModule = function TmsModule() {
      _classCallCheck(this, TmsModule);
    };

    TmsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_my_task_my_task_component__WEBPACK_IMPORTED_MODULE_4__["MyTaskComponent"], _task_description_task_description_component__WEBPACK_IMPORTED_MODULE_5__["TaskDescriptionComponent"], _tasklocations_tasklocations_component__WEBPACK_IMPORTED_MODULE_8__["TasklocationsComponent"], _newtask_newtask_component__WEBPACK_IMPORTED_MODULE_10__["NewtaskComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tms_routing_module__WEBPACK_IMPORTED_MODULE_3__["TmsRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"]]
    })], TmsModule);
    /***/
  }
}]);
//# sourceMappingURL=tms-tms-module-es5.js.map