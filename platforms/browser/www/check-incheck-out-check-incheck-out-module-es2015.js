(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-incheck-out-check-incheck-out-module"],{

/***/ "./src/app/folder/check-incheck-out/check-incheck-out-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/check-incheck-out/check-incheck-out-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: CheckIncheckOutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIncheckOutRoutingModule", function() { return CheckIncheckOutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin/checkin.component */ "./src/app/folder/check-incheck-out/checkin/checkin.component.ts");




const routes = [{
        path: 'in/:id',
        component: _checkin_checkin_component__WEBPACK_IMPORTED_MODULE_3__["CheckinComponent"]
    }];
let CheckIncheckOutRoutingModule = class CheckIncheckOutRoutingModule {
};
CheckIncheckOutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CheckIncheckOutRoutingModule);



/***/ }),

/***/ "./src/app/folder/check-incheck-out/check-incheck-out.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/check-incheck-out/check-incheck-out.module.ts ***!
  \**********************************************************************/
/*! exports provided: CheckIncheckOutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckIncheckOutModule", function() { return CheckIncheckOutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _check_incheck_out_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-incheck-out-routing.module */ "./src/app/folder/check-incheck-out/check-incheck-out-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");







let CheckIncheckOutModule = class CheckIncheckOutModule {
};
CheckIncheckOutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _check_incheck_out_routing_module__WEBPACK_IMPORTED_MODULE_3__["CheckIncheckOutRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"]
        ]
    })
], CheckIncheckOutModule);



/***/ })

}]);
//# sourceMappingURL=check-incheck-out-check-incheck-out-module-es2015.js.map