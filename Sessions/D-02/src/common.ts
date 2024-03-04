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

let AddPower = function(power:number){
    return function(targetClass:any){
        return class {
            title:string = new targetClass().title;
            power:number = power;
        }
    }
}

@AddPower(9)
class CommonMan {
    title:string = "Steve";
}
console.log(new CommonMan())