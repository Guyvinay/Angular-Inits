import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'app-child',
    standalone:true,
    // inputs:["quantity"], 
    template:`
    <div style="border: 1px dashed red; padding: 20px; margin: 20px;">
        <h1>From ChildComponent</h1>
        <ng-content select="ul" ></ng-content>
        <hr>
        <ng-content select="p.para"></ng-content>
        <hr>
        <ng-content select="#title"></ng-content>
        <hr>
        <ng-content select="#title"></ng-content>
        <h2>Cunt From Parent:{{quantity*2}}</h2>
        <button (click)="emitEvent()" >Event Emit From ChildComponent</button>
    </div>
    `
})
export class ChildComponent{
    title:string="ChildComponent"
    @Input() quantity:any=0;
    @Output() childEvent:EventEmitter<any> = new EventEmitter();

    emitEvent() {
        this.childEvent.emit(this.title);
        // alert("Hi");
    }
}