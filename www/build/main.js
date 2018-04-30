webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.tapCounter = "Milano";
        this.position = 0;
        //the App starts here 
        this.fromMilano();
    }
    HomePage.prototype.fromNice = function () {
        var _this = this;
        this.tapCounter = "Nice";
        this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-stations/autocomplete?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW&term=Nice')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.posts = data;
        }, function (err) {
            console.log("ERROR");
        });
    };
    HomePage.prototype.fromParis = function () {
        var _this = this;
        this.tapCounter = "Paris";
        this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-stations/autocomplete?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW&term=Paris')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.posts = data;
        }, function (err) {
            console.log("ERROR");
        });
    };
    HomePage.prototype.fromMilano = function () {
        var _this = this;
        //update the text
        this.tapCounter = "Milano";
        // call the JSON API and get the data to pass to home.html
        // new for RAIL (26/04/2018)		
        this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-stations/autocomplete?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW&term=Milano')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.posts = data;
        }, function (err) {
            console.log("ERROR");
        });
    };
    HomePage.prototype.infoNice = function () {
        var _this = this;
        this.tapCounter = "INFO Nice";
        this.http.get('https://api.sandbox.amadeus.com/v1.2/rail-station/8304501?apikey=ZDxf6DCpuQABbJ8GinUa7FlwaSFBbfbW')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.infoPosts = data;
        }, function (err) {
            console.log("ERROR");
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\AMADEUS-FABRIZIO-FILES\AMADEUS\Dev\GIT\clones\aws\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Demo Mobile AmadeusWS</ion-title>\n  </ion-navbar>\n</ion-header>\n \n\n<ion-content padding>\n <h1>RAIL Stations using Amadeus API</h1>\n  <br>\n  <a href="https://sandbox.amadeus.com/travel-innovation-sandbox/apis/get/rail-stations/autocomplete">Amadeus RAIL WBS (JSON/REST API)</a>\n  <br><br>\n  <hr />\n\n  	\n		<ion-buttons>\n			<button ion-button block (click)="fromNice()">Nice RAIL Stations</button>\n			<button ion-button block (click)="fromParis()">Paris RAIL Stations</button>\n			<button ion-button block (click)="fromMilano()">Milano RAIL Stations</button>\n			<button ion-button block (click)="infoNice()">INFO Nice Stations</button>\n		</ion-buttons>\n		<div>\n			<p align="center">Amadeus API Mobile JSON/REST</p>\n			<p align="center">List of rail stations in: <strong>{{tapCounter}}</strong></p>\n		</div>\n	\n	<!--  DA USARE PER RAIL  https://sandbox.amadeus.com/travel-innovation-sandbox/apis/get/rail-stations/autocomplete    -->\n	<ion-list >\n		<ion-item-sliding *ngFor="let post of posts; let i = index">\n			<ion-item>\n				<span>{{i+1}}. </span>				\n				<h2>Station Name: <strong>{{post.label}}</strong></h2>				\n				<h2>Station Code: <strong>{{post.value}}</strong></h2>				\n			</ion-item>\n		</ion-item-sliding>\n	</ion-list>\n	\n	<!--\n	<ion-list >\n		<ion-item-sliding *ngFor="let post of infoPosts; let i = index">\n			<ion-item>\n				<span>{{i+1}}. </span>				\n				<h2>Station Name: <strong>{{post.name}}</strong></h2>				\n				<h2>Station Id: <strong>{{post.id}}</strong></h2>				\n			</ion-item>\n		</ion-item-sliding>\n	</ion-list>\n	-->\n	\n	<!--  DA USARE PER I VOLI -->\n	<!-- <ion-list >\n		<ion-item-sliding *ngFor="let post of posts; let i = index">\n			<ion-item>\n				<span>{{i+1}}. </span>\n				<h2>Destination: <strong>{{post.destination}}</strong></h2>\n				<h2>Flights: <strong>{{post.flights}}</strong></h2>\n				<h2>Travelers: <strong>{{post.travelers}}</strong></h2>\n			</ion-item>\n		</ion-item-sliding>\n	</ion-list> -->\n<br>\nNOTE <br>\nGiven the start of any word in a rail station\'s official name, as a term, this API provides the full name and rail station ID of a rail station for use in searches. \nThe response provides an array of up to 20 possible matches, sorted by passenger traffic, in a JQuery Autocomplete compatible format.\nThe value returned is the UIC station code. The label returned is always in UTF-8 format, with the station\'s official name (which is often in the native language). \nAgglomeration station codes may also be returned.\nOnly French and Italian rail stations are supported by the Rail Station Autocomplete API.\n\n	\n	<br>\n	<p align="right">fmonticelli (08/2017 made with Ionic2) last update 30/04/2018</p>\n	\n	\n</ion-content>\n\n'/*ion-inline-end:"D:\AMADEUS-FABRIZIO-FILES\AMADEUS\Dev\GIT\clones\aws\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], HomePage);

/*
 API from here
 https://sandbox.amadeus.com/travel-innovation-sandbox/apis/get/travel-intelligence/top-destinations
 
 
 {
 "origin": "BOS",
 "period": "2016-09",
 "results": [
   {
     "international": [
       "0"
     ],
     "destination": "NYC",
     "flights": 288,
     "travelers": 74537
   },
   {
     "international": [
       "0"
     ],
     "destination": "CHI",
     "flights": 356,
     "travelers": 72265
   },
   {
     "international": [
       "0"
     ],
     "destination": "WAS",
     "flights": 136,
     "travelers": 59506
   },

 
*/
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\AMADEUS-FABRIZIO-FILES\AMADEUS\Dev\GIT\clones\aws\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\AMADEUS-FABRIZIO-FILES\AMADEUS\Dev\GIT\clones\aws\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map