"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Component = function (config) {
    return function (TargetClass) {
        var tc = new TargetClass();
        return /** @class */ (function () {
            function class_1() {
                this.title = tc.title;
                this.power = config.power;
                this.selector = config.selector;
                this.template = config.template;
            }
            return class_1;
        }());
    };
};
var MyComp = /** @class */ (function () {
    function MyComp() {
        this.title = "Hello Wolf";
    }
    MyComp = __decorate([
        Component({
            power: 100,
            selector: "app-root",
            template: "\n       <div>\n        <h2>{{title}}</h2>\n       </div>\n    "
        })
    ], MyComp);
    return MyComp;
}());
