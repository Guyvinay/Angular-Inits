let Component =  function(config:any){
    return function(TargetClass:any){
        let tc = new TargetClass();
        return class {
            title : string = tc.title;
            power : number = config.power;
            selector:string = config.selector;
            template:string =  config.template;
        }
    }
}

@Component({
    power:100,
    selector:"app-root",
    template:`
       <div>
        <h2>{{title}}</h2>
       </div>
    `
})
class MyComp {
    title = "Hello Wolf";
}