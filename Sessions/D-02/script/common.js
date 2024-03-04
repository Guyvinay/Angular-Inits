"use strict";
/*
let addPower = function(power:number){
    return function(hero:any){
        return {
            title:hero.title,
            power:power
        }
    }
};

let common = {
    title:"Steve"
}
common = addPower(7)(common);
console.log(common)
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AddPower = function (power) {
    return function (targetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.title = new targetClass().title;
                this.power = power;
            }
            return class_1;
        }());
    };
};
var CommonMan = /** @class */ (function () {
    function CommonMan() {
        this.title = "Steve";
    }
    CommonMan = __decorate([
        AddPower(9)
    ], CommonMan);
    return CommonMan;
}());
console.log(new CommonMan());
