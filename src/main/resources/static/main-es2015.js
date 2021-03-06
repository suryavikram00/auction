(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _service_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/image.service */ "./src/app/service/image.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AddProductComponent {
    constructor(productService, imageService, route) {
        this.productService = productService;
        this.imageService = imageService;
        this.route = route;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // id : new FormControl(''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            minimumAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            productImages: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            productTag: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.file = [];
    }
    ngOnInit() {
        let productId = this.route.snapshot.paramMap.get('productId');
        this.getLocation();
        if (productId != null) {
            this.editProduct(productId);
            return;
        }
    }
    addProduct() {
        let productId;
        this.productService.addProduct(this.productForm.value)
            .subscribe(data => {
            console.log(data);
            productId = data.result.id;
        });
        this.imageService.addImage(this.file, productId)
            .subscribe(data => console.log(data));
    }
    onFileSelect(event) {
        this.file = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
        }
    }
    showPosition(position) {
        // alert('Latitude: ' + position.coords.latitude + 'Longitude:' + position.coords.longitude);
    }
    editProduct(productId) {
        this.productService.retrieveProduct(productId).subscribe(data => {
            console.log(data);
            this.productForm.controls['name'].setValue(data.result.name);
            this.productForm.controls['description'].setValue(data.result.description);
            this.productForm.controls['minimumAmount'].setValue(data.result.minimumAmount);
            // this.productForm.controls['tags'].setValue(data.result.minimumAmount); 
            $("#productName").prop("readonly", true);
            $("#productMinimumAmount").prop("readonly", true);
        });
    }
}
AddProductComponent.??fac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
AddProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], inputs: { productId: "productId" }, decls: 37, vars: 1, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "inputProductName", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "id", "productName", "formControlName", "name", 1, "form-control"], ["for", "inputProductDescription", 1, "col-sm-3", "col-form-label"], ["id", "productDescription", "rows", "4", "cols", "50", "formControlName", "description", 1, "form-control"], ["for", "inputProductMinimumAmount", 1, "col-sm-3", "col-form-label"], ["type", "number", "id", "productMinimumAmount", "formControlName", "minimumAmount", "min", "0", 1, "form-control"], ["for", "inputUploadImages", 1, "col-sm-3", "col-form-label"], ["type", "file", "id", "productImages", "multiple", "", "formControlName", "productImages", 1, "form-control-file", 3, "change"], ["for", "inputProductTags", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "productTag", "formControlName", "minimumAmount", 1, "form-control"], ["for", "inputExpiryDate", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "expiryDate", "formControlName", "minimumAmount", 1, "form-control"], [1, "col-sm-10"], ["type", "submit", 1, "btn", "btn-primary"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_1_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "                    At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Minimum Amount in Rupee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Upload Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AddProductComponent_Template_input_change_22_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Product tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Auction End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Sell Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.productForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.css']
            }]
    }], function () { return [{ type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _service_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _show_all_product_show_all_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-all-product/show-all-product.component */ "./src/app/show-all-product/show-all-product.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/view-product/view-product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _my_product_my_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-product/my-product.component */ "./src/app/my-product/my-product.component.ts");
/* harmony import */ var _my_product_bid_my_product_bid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-product-bid/my-product-bid.component */ "./src/app/my-product-bid/my-product-bid.component.ts");
/* harmony import */ var _bid_won_bid_won_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bid-won/bid-won.component */ "./src/app/bid-won/bid-won.component.ts");











const routes = [
    { path: '', component: _show_all_product_show_all_product_component__WEBPACK_IMPORTED_MODULE_3__["ShowAllProductComponent"] },
    { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"] },
    // { path: 'edit-product/:productId', redirectTo: '/add-product', pathMatch: 'full' },
    { path: 'edit-product/:productId', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"] },
    { path: 'show-all-product', component: _show_all_product_show_all_product_component__WEBPACK_IMPORTED_MODULE_3__["ShowAllProductComponent"] },
    { path: 'view-product', component: _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductComponent"] },
    { path: 'log-in', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'my-product', component: _my_product_my_product_component__WEBPACK_IMPORTED_MODULE_6__["MyProductComponent"] },
    { path: 'my-productbid', component: _my_product_bid_my_product_bid_component__WEBPACK_IMPORTED_MODULE_7__["MyProductBidComponent"] },
    { path: 'bid-won', component: _bid_won_bid_won_component__WEBPACK_IMPORTED_MODULE_8__["BidWonComponent"] },
    { path: '**', component: _show_all_product_show_all_product_component__WEBPACK_IMPORTED_MODULE_3__["ShowAllProductComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class AppComponent {
    constructor() {
        this.title = 'auction';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 78, vars: 0, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-light", "bg-success", "w-100"], [1, "container"], [1, "row", "inline-content-sm", "w-100"], [1, "col-md-4", "col-lg-4", "col-sm-4", "col-xs-4"], ["routerLink", "/show-all-product", 1, "navbar-brand", "text-white"], [1, "form-inline", "nowrap"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0", "text-white", "d-none", "d-md-block"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-white"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "/add-product", 1, "dropdown-item"], ["routerLink", "/my-product", 1, "dropdown-item"], ["routerLink", "/my-productbid", 1, "dropdown-item"], ["routerLink", "/bid-won", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item"], ["routerLink", "/add-product", "routerLinkActive", "active"], ["routerLink", "/show-all-product", "routerLinkActive", "active"], ["routerLink", "/view-product", "routerLinkActive", "active"], ["routerLink", "/edit-product", "routerLinkActive", "active"], ["routerLink", "/my-product", "routerLinkActive", "active"], ["routerLink", "/my-productbid", "routerLinkActive", "active"], ["routerLink", "/bid-won", "routerLinkActive", "active"], ["routerLink", "/register-user", "routerLinkActive", "active"], ["routerLink", "/log-in", "routerLinkActive", "active"], ["routerLink", "/make-productbid", "routerLinkActive", "active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "AUCTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " My Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Sell Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "My Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "My Bids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Bids Won");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Show All Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "View Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Edit Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "My Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "My Bids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Bids Won");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Make Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".nowrap[_ngcontent-%COMP%]{\r\n  flex-wrap: nowrap;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  margin-top: 60px;\r\n}\r\n\r\n@media screen and (max-width: 780px) {\r\n  .inline-content-sm[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  }\r\n  .container[_ngcontent-%COMP%]{\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFO0VBQ0EsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybChcIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMC4wL2Nzcy9ib290c3RyYXAtZ2x5cGhpY29ucy5jc3NcIik7XHJcbiAgXHJcbi50aGUtaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufSAqL1xyXG5cclxuLm5vd3JhcHtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XHJcbiAgLmlubGluZS1jb250ZW50LXNte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _show_all_product_show_all_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-all-product/show-all-product.component */ "./src/app/show-all-product/show-all-product.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/view-product/view-product.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _utils_token_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/token-interceptor */ "./src/app/utils/token-interceptor.ts");
/* harmony import */ var _my_product_my_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-product/my-product.component */ "./src/app/my-product/my-product.component.ts");
/* harmony import */ var _my_product_bid_my_product_bid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-product-bid/my-product-bid.component */ "./src/app/my-product-bid/my-product-bid.component.ts");
/* harmony import */ var _bid_won_bid_won_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bid-won/bid-won.component */ "./src/app/bid-won/bid-won.component.ts");
















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _utils_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
        _show_all_product_show_all_product_component__WEBPACK_IMPORTED_MODULE_8__["ShowAllProductComponent"],
        _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_9__["ViewProductComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _my_product_my_product_component__WEBPACK_IMPORTED_MODULE_12__["MyProductComponent"],
        _my_product_bid_my_product_bid_component__WEBPACK_IMPORTED_MODULE_13__["MyProductBidComponent"],
        _bid_won_bid_won_component__WEBPACK_IMPORTED_MODULE_14__["BidWonComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"],
                    _show_all_product_show_all_product_component__WEBPACK_IMPORTED_MODULE_8__["ShowAllProductComponent"],
                    _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_9__["ViewProductComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _my_product_my_product_component__WEBPACK_IMPORTED_MODULE_12__["MyProductComponent"],
                    _my_product_bid_my_product_bid_component__WEBPACK_IMPORTED_MODULE_13__["MyProductBidComponent"],
                    _bid_won_bid_won_component__WEBPACK_IMPORTED_MODULE_14__["BidWonComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _utils_token_interceptor__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bid-won/bid-won.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bid-won/bid-won.component.ts ***!
  \**********************************************/
/*! exports provided: BidWonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidWonComponent", function() { return BidWonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function BidWonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Ends In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Start Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Max Bid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Bid ends In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const productBid_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8080//retrieve-image/", (productBid_r1 == null ? null : productBid_r1.product == null ? null : productBid_r1.product.imageMetaData[0] == null ? null : productBid_r1.product.imageMetaData[0].id) || 8, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", productBid_r1 == null ? null : productBid_r1.product == null ? null : productBid_r1.product.name, " sfddsfdsf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "../edit-product/", productBid_r1 == null ? null : productBid_r1.product == null ? null : productBid_r1.product.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Rs ", productBid_r1 == null ? null : productBid_r1.product == null ? null : productBid_r1.product.minimumAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rs ", productBid_r1 == null ? null : productBid_r1.product == null ? null : productBid_r1.product.maximumBidAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "counter", i_r2, "");
} }
class BidWonComponent {
    constructor(productService) {
        this.productService = productService;
        this.wonProductList = [];
    }
    ngOnInit() {
        this.showWonProductBid();
    }
    showWonProductBid() {
        let productId;
        this.productService.retrieveWonProductBid()
            .subscribe(data => {
            console.log(data);
            for (var i = 0; i < data.result.length; i++) {
                this.wonProductList.push(data.result[i]);
            }
        });
    }
}
BidWonComponent.??fac = function BidWonComponent_Factory(t) { return new (t || BidWonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
BidWonComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BidWonComponent, selectors: [["app-bid-won"]], decls: 2, vars: 1, consts: [[1, "container"], [4, "ngFor", "ngForOf"], [1, "card", "col-sm-12", "col-lg-4", "col-md-4", "float-left"], [1, "box-border-style", "mPad10", "mt-3", "mb-3"], ["alt", "Card image cap", 1, "card-img-top", "rounded", 2, "height", "200px", 3, "src"], [1, "card-body"], [1, "mx-3"], [1, "card-text"], [1, "text-primary", "py-1"], [1, "row", "py-1", "mx-3"], [3, "routerLink"], [1, "glyphicon", "glyphicon-edit"], [1, "col-6", "text-secondary", "px-0", "text-left"], [1, "col-6", "text-primary", "px-0", "text-right"], [1, "col-6", "text-secondary", "px-0", 3, "id"]], template: function BidWonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BidWonComponent_div_1_Template, 27, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.wonProductList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    text-overflow: ellipsis;\r\n    margin: 0;\r\n  }\r\n\r\n.search-results[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:out-of-range {\r\n  border: 2px solid red;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 5px 3px #ccc;\r\n  border-radius: 2%;\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0px 0px 5px 3px #51d663;\r\n}\r\n\r\n.font[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.font-header[_ngcontent-%COMP%]{\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlkLXdvbi9iaWQtd29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkZBQTJGOztBQUUzRjtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9iaWQtd29uL2JpZC13b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4wLjAvY3NzL2Jvb3RzdHJhcC1nbHlwaGljb25zLmNzc1wiKTsgKi9cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5pbnB1dDpvdXQtb2YtcmFuZ2Uge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uYm94LWJvcmRlci1zdHlsZXtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYm94LWJvcmRlci1zdHlsZTpob3ZlcntcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggIzUxZDY2MztcclxufVxyXG4uZm9udHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb250LWhlYWRlcntcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BidWonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bid-won',
                templateUrl: './bid-won.component.html',
                styleUrls: ['./bid-won.component.css']
            }]
    }], function () { return [{ type: _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/local-storage-utils */ "./src/app/utils/local-storage-utils.ts");






class LoginComponent {
    constructor(loginService, localStorageUtils) {
        this.loginService = loginService;
        this.localStorageUtils = localStorageUtils;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    signUp() {
        this.loginService.signUp(this.signUpForm.value)
            .subscribe(data => {
            console.log(data);
            alert(data);
            this.localStorageUtils.setJwtToken(JSON.stringify(data.result));
        });
    }
    login() {
        this.loginService.login(this.loginForm.value)
            .subscribe(data => {
            console.log(data);
            alert(data);
            this.localStorageUtils.setJwtToken(JSON.stringify(data.result));
        });
    }
    signOut() {
        this.localStorageUtils.clearJwtToken();
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_3__["LocalStorageUtils"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 41, vars: 2, consts: [[1, "container"], [1, "nav", "nav-tabs"], [1, "nav-item", "active"], ["data-toggle", "tab", "href", "#login-div", 1, "nav-link", "active"], [1, "nav-item"], ["data-toggle", "tab", "href", "#sign-up-div", 1, "nav-link"], [1, "tab-content"], ["id", "sign-up-div", 1, "tab-pane", "fade", "in"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-sm-12"], ["type", "text", "formControlName", "firstName", "id", "firstName", "placeholder", "firstName", 1, "form-control"], ["type", "text", "formControlName", "lastName", "id", "lastName", "placeholder", "lastName", 1, "form-control"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "email", 1, "form-control"], ["type", "number", "formControlName", "phone", "id", "phone", "placeholder", "phone", 1, "form-control"], ["type", "text", "formControlName", "password", "id", "signInpassword", "placeholder", "password", 1, "form-control"], ["type", "submit", "value", "Sign Up", 1, "btn", "btn-primary", "mBottom20"], ["id", "login-div", 1, "tab-pane", "fade", "in", "active"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "password", 1, "form-control"], ["type", "submit", "value", "Log In", 1, "btn", "btn-primary", "mBottom20"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_31_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _utils_local_storage_utils__WEBPACK_IMPORTED_MODULE_3__["LocalStorageUtils"] }]; }, null); })();


/***/ }),

/***/ "./src/app/my-product-bid/my-product-bid.component.ts":
/*!************************************************************!*\
  !*** ./src/app/my-product-bid/my-product-bid.component.ts ***!
  \************************************************************/
/*! exports provided: MyProductBidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductBidComponent", function() { return MyProductBidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MyProductBidComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Ends In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Start Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "My Bid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Max Bid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Bid No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Bid ends In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const productBid_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8080//retrieve-image/", (productBid_r1.product == null ? null : productBid_r1.product.imageMetaData[0] == null ? null : productBid_r1.product.imageMetaData[0].id) || 8, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", productBid_r1.product == null ? null : productBid_r1.product.name, " sfddsfdsf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Rs ", productBid_r1.product == null ? null : productBid_r1.product.minimumAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rs ", productBid_r1.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rs ", productBid_r1.product == null ? null : productBid_r1.product.maximumBidAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rs ", productBid_r1.bidNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "counter", i_r2, "");
} }
class MyProductBidComponent {
    constructor(productService) {
        this.productService = productService;
        this.productBidList = [];
        this.productList = [];
        this.showMyProductBid();
    }
    ngOnInit() {
    }
    showMyProductBid() {
        this.productService.retrieveMyProductBid()
            .subscribe(data => {
            console.log(data);
            console.log(data.result[0].product);
            for (var i = 0; i < data.result.length; i++) {
                this.productList.push[data.result[i].product];
                this.productBidList.push(data.result[i]);
            }
        });
    }
}
MyProductBidComponent.??fac = function MyProductBidComponent_Factory(t) { return new (t || MyProductBidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
MyProductBidComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MyProductBidComponent, selectors: [["app-my-product-bid"]], decls: 2, vars: 1, consts: [[1, "container"], [4, "ngFor", "ngForOf"], [1, "card", "col-sm-12", "col-lg-4", "col-md-4", "float-left"], [1, "box-border-style", "mPad10", "mt-3", "mb-3"], ["alt", "Card image cap", 1, "card-img-top", "rounded", 2, "height", "200px", 3, "src"], [1, "card-body"], [1, "mx-3"], [1, "card-text"], [1, "text-primary", "py-1"], [1, "row", "py-1", "mx-3"], [1, "col-6", "text-secondary", "px-0", "text-left"], [1, "col-6", "text-primary", "px-0", "text-right"], [1, "col-6", "text-secondary", "px-0", 3, "id"]], template: function MyProductBidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MyProductBidComponent_div_1_Template, 33, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productBidList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    text-overflow: ellipsis;\r\n    margin: 0;\r\n  }\r\n\r\n.search-results[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:out-of-range {\r\n  border: 2px solid red;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 5px 3px #ccc;\r\n  border-radius: 2%;\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0px 0px 5px 3px #51d663;\r\n}\r\n\r\n.font[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.font-header[_ngcontent-%COMP%]{\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZHVjdC1iaWQvbXktcHJvZHVjdC1iaWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7O0FBRTNGO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0FBRUY7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL215LXByb2R1Y3QtYmlkL215LXByb2R1Y3QtYmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybChcIi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMC4wL2Nzcy9ib290c3RyYXAtZ2x5cGhpY29ucy5jc3NcIik7ICovXHJcblxyXG5wIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuaW5wdXQ6b3V0LW9mLXJhbmdlIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG5cclxuLmJveC1ib3JkZXItc3R5bGV7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggM3B4ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgXHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJveC1ib3JkZXItc3R5bGU6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggM3B4ICM1MWQ2NjM7XHJcbn1cclxuLmZvbnR7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZm9udC1oZWFkZXJ7XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MyProductBidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-product-bid',
                templateUrl: './my-product-bid.component.html',
                styleUrls: ['./my-product-bid.component.css']
            }]
    }], function () { return [{ type: _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/my-product/my-product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/my-product/my-product.component.ts ***!
  \****************************************************/
/*! exports provided: MyProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductComponent", function() { return MyProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function MyProductComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Ends In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Start Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Max Bid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Bid ends In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8080//retrieve-image/", (product_r1 == null ? null : product_r1.imageMetaData[0] == null ? null : product_r1.imageMetaData[0].id) || 8, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", product_r1.name, " sfddsfdsf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "../edit-product/", product_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Rs ", product_r1.minimumAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rs ", product_r1.maximumBidAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "counter", i_r2, "");
} }
class MyProductComponent {
    constructor(productService) {
        this.productService = productService;
        this.productList = [];
    }
    ngOnInit() {
        this.showMyProduct();
    }
    showMyProduct() {
        let productId;
        this.productService.retrieveMyProduct()
            .subscribe(data => {
            console.log(data);
            for (var i = 0; i < data.result.length; i++) {
                this.productList.push(data.result[i]);
            }
        });
    }
}
MyProductComponent.??fac = function MyProductComponent_Factory(t) { return new (t || MyProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
MyProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MyProductComponent, selectors: [["app-my-product"]], decls: 2, vars: 1, consts: [[1, "container"], [4, "ngFor", "ngForOf"], [1, "card", "col-sm-12", "col-lg-4", "col-md-4", "float-left"], [1, "box-border-style", "mPad10", "mt-3", "mb-3"], ["alt", "Card image cap", 1, "card-img-top", "rounded", 2, "height", "200px", 3, "src"], [1, "card-body"], [1, "mx-3"], [1, "card-text"], [1, "text-primary", "py-1"], [1, "row", "py-1", "mx-3"], [3, "routerLink"], [1, "glyphicon", "glyphicon-edit"], [1, "col-6", "text-secondary", "px-0", "text-left"], [1, "col-6", "text-primary", "px-0", "text-right"], [1, "col-6", "text-secondary", "px-0", 3, "id"]], template: function MyProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, MyProductComponent_div_1_Template, 27, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    text-overflow: ellipsis;\r\n    margin: 0;\r\n  }\r\n\r\n.search-results[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:out-of-range {\r\n  border: 2px solid red;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 5px 3px #ccc;\r\n  border-radius: 2%;\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0px 0px 5px 3px #51d663;\r\n}\r\n\r\n.font[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.font-header[_ngcontent-%COMP%]{\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktcHJvZHVjdC9teS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkZBQTJGOztBQUUzRjtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9teS1wcm9kdWN0L215LXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4wLjAvY3NzL2Jvb3RzdHJhcC1nbHlwaGljb25zLmNzc1wiKTsgKi9cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5pbnB1dDpvdXQtb2YtcmFuZ2Uge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uYm94LWJvcmRlci1zdHlsZXtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYm94LWJvcmRlci1zdHlsZTpob3ZlcntcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggIzUxZDY2MztcclxufVxyXG4uZm9udHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb250LWhlYWRlcntcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MyProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-product',
                templateUrl: './my-product.component.html',
                styleUrls: ['./my-product.component.css']
            }]
    }], function () { return [{ type: _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/image.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/image.service.ts ***!
  \******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ImageService {
    constructor(http) {
        this.http = http;
        this.addImageUrl = "http://localhost:8080/add-image-compressed";
    }
    addImage(image, productId) {
        productId = 33;
        console.log('productId :: ' + productId);
        const httpOptions = {
        // headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
        };
        const formData = new FormData();
        for (var i = 0; i < image.length; i++) {
            formData.append('file', image[i]);
        }
        formData.append('productId', productId);
        return this.http.post(this.addImageUrl, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
ImageService.??fac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ImageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ImageService, factory: ImageService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class LoginService {
    constructor(http) {
        this.http = http;
        this.signUpUrl = "http://localhost:8080/sign-up";
        this.loginUrl = "http://localhost:8080/login";
    }
    signUp(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.signUpUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    login(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.loginUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
LoginService.??fac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LoginService, factory: LoginService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ProductService {
    constructor(http) {
        this.http = http;
        this.addProductUrl = "http://localhost:8080/add-update-product";
        this.retrieveAllProductUrl = "http://localhost:8080/retrieve-product/user/13";
        this.addProductBidUrl = "http://localhost:8080/add-productbid";
        this.retrieveProductUrl = "http://localhost:8080/retrieve-product";
        this.retrieveProductByUser = "http://localhost:8080/retrieve-product/user/13";
        this.retrieveProductBidByUser = "http://localhost:8080/retrieve-productbid/user/10";
        this.retrieveWonProductBidByUser = "http://localhost:8080/retrieve-won-productbid/user/10";
    }
    addProduct(product) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.addProductUrl, product, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    retrieveMyProduct() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.retrieveProductByUser, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    retrieveMyProductBid() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.retrieveWonProductBidByUser, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    retrieveWonProductBid() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.retrieveProductBidByUser, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    retrieveAllProduct(page, quantity) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.retrieveAllProductUrl + '/page/' + page + '/quantity/' + quantity, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    retrieveProduct(productId) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.retrieveProductUrl + '/' + productId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    addProductBid(productId, bidAmount) {
        var product = {};
        product["id"] = productId;
        var user = {};
        user["userId"] = 10;
        var jsonObject = {};
        jsonObject["amount"] = bidAmount;
        jsonObject["product"] = product;
        jsonObject["user"] = user;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.addProductBidUrl, jsonObject, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('productBid')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
ProductService.??fac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ProductService, factory: ProductService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/show-all-product/show-all-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/show-all-product/show-all-product.component.ts ***!
  \****************************************************************/
/*! exports provided: ShowAllProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllProductComponent", function() { return ShowAllProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ShowAllProductComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Ends In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShowAllProductComponent_div_1_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const product_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.bidNowBtnClick(product_r1.id, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function ShowAllProductComponent_div_1_Template_input_keyup_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r5.bidKeyPress($event, i_r2); })("focus", function ShowAllProductComponent_div_1_Template_input_focus_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r6.bidFocusIn(i_r2); })("focusout", function ShowAllProductComponent_div_1_Template_input_focusout_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const i_r2 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r7.bidFocusOut(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("src", "http://localhost:8080//retrieve-image/", (product_r1 == null ? null : product_r1.imageMetaData[0] == null ? null : product_r1.imageMetaData[0].id) || 8, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", product_r1.name, " sfddsfdsf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Rs ", product_r1.maximumBidAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "counter", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "bid-now-btn", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "bid-amount", i_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("id", "message", i_r2, "");
} }
class ShowAllProductComponent {
    constructor(productService) {
        this.productService = productService;
        this.productList = [];
        this.counter = "";
        // Update the count down every 1 second
        this.noOfItemsToShowInitially = 10;
        // itemsToLoad - number of new items to be displayed
        this.itemsToLoad = 10;
        // List that is going to be actually displayed to user
        // public productToShow = this.productList;
        // No need to call onScroll if full list has already been displayed
        this.isFullListDisplayed = false;
    }
    onScroll() {
        console.log('hey');
        if (this.noOfItemsToShowInitially <= this.productList.length) {
            // Update ending position to select more items from the array
            this.noOfItemsToShowInitially += this.itemsToLoad;
            this.getAllProduct(Math.floor(this.noOfItemsToShowInitially / 10), this.itemsToLoad);
            console.log("scrolled");
        }
        else {
            this.isFullListDisplayed = true;
        }
    }
    countdownTimer() {
        let x = setInterval(function () {
            for (var i = 0; i < this.productList.length; i++) {
                // Set the date we're counting down to
                let countDownDate = new Date(this.productList[i].expiryTime).getTime();
                // Get today's date and time
                let now = new Date().getTime();
                let expiryTime = countDownDate;
                // Find the distance between now and the count down date
                let distance = expiryTime - now;
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                // Output the result in an element with id="demo"
                this.productList[i].expiryTime = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";
                // $('#counter0').val(this.counter);
                console.log(this.productList[i].expiryTime);
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(this.x);
                    this.productList[i].expiryTime = "EXPIRED";
                }
            }
        }, 1000);
    }
    ngOnInit() {
        this.getAllProduct(this.noOfItemsToShowInitially / 10, this.noOfItemsToShowInitially);
        if (this.productList != undefined) {
            // this.countdownTimer();
        }
    }
    ngAfterViewInit() {
    }
    getAllProduct(page, quantity) {
        this.productService.retrieveAllProduct(page - 1, quantity).subscribe(data => {
            console.log(data);
            for (var i = 0; i < data.result.length; i++) {
                this.productList.push(data.result[i]);
            }
            // this.productToShow = this.productList;
            for (var i = 0; i < this.productList.length; i++) {
                $('#bid-amount' + i).val(this.productList[i].maximumBidAmount);
            }
        });
    }
    bidNowBtnClick(productId, i) {
        let index = i;
        let bidAmount = $('#bid-amount' + index).val();
        this.productService.addProductBid(productId, bidAmount)
            .subscribe(data => {
            this.productList[index].maximumBidAmount = data.result.amount;
            $("#message" + index).html(data.message);
        });
    }
    checkBidAmount(index) {
        if (this.productList[index].maximumBidAmount >= $('#bid-amount' + index).val()) {
            $("#bid-now-btn" + index).prop("disabled", true);
            return false;
        }
        else {
            $("#bid-now-btn" + index).prop("disabled", false);
            return true;
        }
    }
    bidFocusIn(index) {
        $("#message" + index).html("");
        this.checkBidAmount(index);
    }
    bidFocusOut(index) {
        if (!this.checkBidAmount(index)) {
            $("#message" + index).html("Enter Amount > Bid Amount!");
        }
    }
    bidKeyPress(event, index) {
        this.checkBidAmount(index);
    }
}
ShowAllProductComponent.??fac = function ShowAllProductComponent_Factory(t) { return new (t || ShowAllProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
ShowAllProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ShowAllProductComponent, selectors: [["app-show-product"]], decls: 2, vars: 5, consts: [["infiniteScroll", "", 1, "container", "search-results", 3, "scrolled"], [4, "ngFor", "ngForOf"], [1, "card", "col-sm-12", "col-lg-4", "col-md-4", "float-left"], [1, "box-border-style", "mPad10", "mt-3", "mb-3"], ["alt", "Card image cap", 1, "card-img-top", "rounded", 2, "height", "200px", 3, "src"], [1, "card-body"], [1, "mx-3"], [1, "card-text"], [1, "text-primary", "py-1"], [1, "row", "py-1", "mx-3"], [1, "col-6", "text-primary", "px-0"], [1, "col-6", "text-primary", "px-0", 3, "id"], [1, "form-group", "text-center"], ["type", "button", "value", "Bid Now", 1, "col-5", "mx-1", "btn", "btn-lg", "btn-primary", 3, "id", "click"], ["type", "number", 1, "col-5", "mx-1", "form-control", 2, "display", "inline-block", 3, "id", "keyup", "focus", "focusout"], [1, "text-center"], [1, "text-primary", "font", 2, "min-height", "25px", 3, "id"]], template: function ShowAllProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scrolled", function ShowAllProductComponent_Template_div_scrolled_0_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ShowAllProductComponent_div_1_Template, 19, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("infiniteScrollDisabled", ctx.isFullListDisplayed)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productList);
    } }, directives: [ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_2__["InfiniteScrollDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    text-overflow: ellipsis;\r\n    margin: 0;\r\n  }\r\n\r\n.search-results[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:out-of-range {\r\n  border: 2px solid red;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 0px 5px 3px #ccc;\r\n  border-radius: 2%;\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%]{\r\n  border: none;\r\n}\r\n\r\n.box-border-style[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0px 0px 5px 3px #51d663;\r\n}\r\n\r\n.font[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.font-header[_ngcontent-%COMP%]{\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1hbGwtcHJvZHVjdC9zaG93LWFsbC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkZBQTJGOztBQUUzRjtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztBQUVGO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsZ0NBQWdDOztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC9zaG93LWFsbC1wcm9kdWN0L3Nob3ctYWxsLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKFwiLy9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4wLjAvY3NzL2Jvb3RzdHJhcC1nbHlwaGljb25zLmNzc1wiKTsgKi9cclxuXHJcbnAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5pbnB1dDpvdXQtb2YtcmFuZ2Uge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLyogRmlyZWZveCAqL1xyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uYm94LWJvcmRlci1zdHlsZXtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxuICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYm94LWJvcmRlci1zdHlsZTpob3ZlcntcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggIzUxZDY2MztcclxufVxyXG4uZm9udHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5mb250LWhlYWRlcntcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShowAllProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-product',
                templateUrl: './show-all-product.component.html',
                styleUrls: ['./show-all-product.component.css']
            }]
    }], function () { return [{ type: _service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utils/local-storage-utils.ts":
/*!**********************************************!*\
  !*** ./src/app/utils/local-storage-utils.ts ***!
  \**********************************************/
/*! exports provided: LocalStorageUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageUtils", function() { return LocalStorageUtils; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalStorageUtils {
    setJwtToken(token) {
        localStorage.setItem("token", token);
    }
    clearJwtToken() {
        localStorage.removeItem("token");
    }
    getJwtToken() {
        return localStorage.getItem("token");
    }
}
LocalStorageUtils.??fac = function LocalStorageUtils_Factory(t) { return new (t || LocalStorageUtils)(); };
LocalStorageUtils.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LocalStorageUtils, factory: LocalStorageUtils.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LocalStorageUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/utils/token-interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/utils/token-interceptor.ts ***!
  \********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _local_storage_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage-utils */ "./src/app/utils/local-storage-utils.ts");




class TokenInterceptor {
    constructor(localStorageUtils) {
        this.localStorageUtils = localStorageUtils;
    }
    intercept(request, next) {
        // alert('token' + this.localStorageUtils.getJwtToken()); 
        request = request.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
                'Access-Control-Allow-Origin': 'https:localhost:4200',
                token: this.localStorageUtils.getJwtToken()
            })
        });
        return next.handle(request);
    }
}
TokenInterceptor.??fac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_local_storage_utils__WEBPACK_IMPORTED_MODULE_2__["LocalStorageUtils"])); };
TokenInterceptor.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _local_storage_utils__WEBPACK_IMPORTED_MODULE_2__["LocalStorageUtils"] }]; }, null); })();


/***/ }),

/***/ "./src/app/view-product/view-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-product/view-product.component.ts ***!
  \********************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ViewProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewProductComponent.??fac = function ViewProductComponent_Factory(t) { return new (t || ViewProductComponent)(); };
ViewProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ViewProductComponent, selectors: [["app-view-product"]], decls: 57, vars: 0, consts: [[1, "container", 2, "width", "600px"], ["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "http://localhost:8080//retrieve-image/8", "alt", "First slide", 1, "d-block", "w-100", 2, "height", "400px"], [1, "carousel-item"], ["src", "http://localhost:8080//retrieve-image/8", "alt", "Second slide", 1, "d-block", "w-100", 2, "height", "400px"], ["src", "http://localhost:8080//retrieve-image/8", "alt", "Third slide", 1, "d-block", "w-100", 2, "height", "400px"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row"], [1, "col-lg-1", "col-md-1"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [2, "font-weight", "300"], [1, "col-lg-8", "col-md-8", "col-sm-12"]], template: function ViewProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Descritpion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Description of the product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Address of the product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Expiry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Expiry Time of the product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Current Bid Amount of the product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Seller Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Seller of the product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-product',
                templateUrl: './view-product.component.html',
                styleUrls: ['./view-product.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\surya vikram\projects\Angular\auction\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map