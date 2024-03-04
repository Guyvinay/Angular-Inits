let message: string = "Hello Wolf";
let message2: string | number | boolean = "Hello Wolf";
let message3: any = "Hello Wolf";
// message2 = 34567;

//Generics
let msgs: string[] = ["HI", "Hello", "Bye", "Good Bye", "Greetings"];
let mesgs: Array<string> = ["HI", "Hello", "Bye", "Good Bye", "Greetings"];

// alert(msgs[Math.floor(Math.random() * msgs.length - 1)]);

enum Power {
  weak,
  strong,
  fragile,
}
// enum Power{ weak = 3, strong, fragile }

let hero: Power = Power.strong;

let pow = Power[hero];

console.log(Power.fragile);
console.log(pow);

function adder(n1:number, n2:number=1, n3?:number):number{
    return n1+n2;
}
console.log(adder(5));
console.log(adder(5,5));
console.log(adder(5, 5, 6));