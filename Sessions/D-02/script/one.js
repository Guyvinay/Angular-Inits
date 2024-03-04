"use strict";
var message = "Hello Wolf";
var message2 = "Hello Wolf";
var message3 = "Hello Wolf";
// message2 = 34567;
//Generics
var msgs = ["HI", "Hello", "Bye", "Good Bye", "Greetings"];
var mesgs = ["HI", "Hello", "Bye", "Good Bye", "Greetings"];
// alert(msgs[Math.floor(Math.random() * msgs.length - 1)]);
var Power;
(function (Power) {
    Power[Power["weak"] = 0] = "weak";
    Power[Power["strong"] = 1] = "strong";
    Power[Power["fragile"] = 2] = "fragile";
})(Power || (Power = {}));
// enum Power{ weak = 3, strong, fragile }
var hero = Power.strong;
var pow = Power[hero];
console.log(Power.fragile);
console.log(pow);
function adder(n1, n2, n3) {
    if (n2 === void 0) { n2 = 1; }
    return n1 + n2;
}
console.log(adder(5));
console.log(adder(5, 5));
console.log(adder(5, 5, 6));
