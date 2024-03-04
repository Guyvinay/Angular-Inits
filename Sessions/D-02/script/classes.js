"use strict";
/*
Constructor
getter, setter, private public, static Propery/Method
*/
var Hero = /** @class */ (function () {
    // title:string="Batman";
    // private _firstName:string="Steve"
    // private _lastName:string="Rogers" //Ha Ha 
    // set firstName(firstName:string){ this.firstName=firstName}
    function Hero(title, firstName, lastName) {
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Hero;
}());
