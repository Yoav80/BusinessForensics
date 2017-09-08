webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{title}}\n  </h1>\n</div>\n\n<!--Game screen-->\n<div *ngIf=\"!isGameFinished\" class=\"content\">\n  <form (ngSubmit)=\"onSubmit()\" #guessingForm=\"ngForm\">\n\n    <div class=\"inputWrapper\" style=\"max-width: 300px; flex-direction: row\">\n      <label>Try to guess a number between: {{gameManager.minimumNumber}} - {{gameManager.maximumNumber}}</label>\n      <input class=\"form-control\"\n             [(ngModel)]=\"guessModel\"\n             min=\"{{gameManager.minimumNumber}}\"\n             max=\"{{gameManager.maximumNumber}}\"\n             type=\"number\"\n             name=\"guess\"\n             required/>\n\n      <div *ngIf=\"guessingForm.form.invalid\"\n           class=\"alert alert-danger\">\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!guessingForm.form.valid\">\n        Submit\n      </button>\n    </div>\n\n    <div class=\"row\">\n      <h2>{{gameManager.attempts}} attempts out of {{gameManager.maxAttempts}} </h2>\n    </div>\n  </form>\n</div>\n\n<!-- End Screen-->\n<div *ngIf=\"isGameFinished\" class=\"content end-screen\">\n  <div class=\"row\">\n    <button (click)=\"refreshClicked()\">Restart game</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-root .content {\n  text-align: center;\n  width: 80%;\n  margin: 10px auto; }\n  app-root .content.end-screen, app-root .content form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  app-root .content .row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 10px; }\n    app-root .content .row button {\n      max-width: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_game_manager_service__ = __webpack_require__("../../../../../src/services/game-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = (function () {
    function AppComponent(gameManager) {
        this.gameManager = gameManager;
        this.title = 'Guessing Game';
        this.isGameFinished = false;
    }
    AppComponent.prototype.onSubmit = function () {
        this.gameManager.logAnAttempt();
        if (this.gameManager.isAnswerCorrect(this.guessModel)) {
            // if correct
            alert('You are correct!');
            this.gameManager.start();
        }
        else {
            // if wrong
            alert('You are wrong!');
            this.checkAttempts();
        }
    };
    AppComponent.prototype.checkAttempts = function () {
        this.isGameFinished = this.gameManager.isGameFinished;
        if (this.isGameFinished) {
            alert('No more attempts! the answer was' + this.gameManager.answer);
        }
    };
    AppComponent.prototype.refreshClicked = function () {
        this.gameManager.start();
        this.isGameFinished = this.gameManager.isGameFinished;
        this.guessModel = undefined;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_game_manager_service__["a" /* GameManagerService */])),
    __metadata("design:paramtypes", [Object])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_manager_service__ = __webpack_require__("../../../../../src/services/game-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_game_manager_service__["a" /* GameManagerService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/game-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameManagerService = (function () {
    function GameManagerService() {
        this.maxNumberOfAttempts = 3;
        this.start();
    }
    GameManagerService.prototype.start = function () {
        this.correctAnswer = this.generateAnswer();
        this.resetNumberOfAttempts();
    };
    GameManagerService.prototype.generateAnswer = function () {
        // todo: generate randomly
        return 10;
    };
    GameManagerService.prototype.resetNumberOfAttempts = function () {
        this.numberOfAttempts = 0;
    };
    GameManagerService.prototype.logAnAttempt = function () {
        console.log('user attempted a guess');
        this.numberOfAttempts++;
    };
    GameManagerService.prototype.isAnswerCorrect = function (attempt) {
        return attempt === this.correctAnswer;
    };
    Object.defineProperty(GameManagerService.prototype, "answer", {
        get: function () {
            return this.correctAnswer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameManagerService.prototype, "attempts", {
        get: function () {
            return this.numberOfAttempts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameManagerService.prototype, "maxAttempts", {
        get: function () {
            return this.maxNumberOfAttempts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameManagerService.prototype, "minimumNumber", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameManagerService.prototype, "maximumNumber", {
        get: function () {
            return 20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameManagerService.prototype, "isGameFinished", {
        get: function () {
            return this.numberOfAttempts >= this.maxNumberOfAttempts;
        },
        enumerable: true,
        configurable: true
    });
    return GameManagerService;
}());
GameManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GameManagerService);

//# sourceMappingURL=game-manager.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map