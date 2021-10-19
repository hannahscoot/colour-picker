import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { increment, decrement, reset } from "../counter-store/counter.action";
import { ColourZone } from "../model/ColourZone";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    count$!: Observable<number>;

    constructor(private store: Store<{ count:number}>) {
        this.count$ = store.select('count');
    }

    increment() {
        this.store.dispatch(increment())
    }

    decrement() {
        this.store.dispatch(decrement())
    }

    reset() {
        this.store.dispatch(reset())
    }

    /*
    *
    *   This is the code for the colour picker (Below)
    * 
    */
    colour: string = '#ffffff';
    locationList: string[] = ['Header', 'Sidebar', 'Highlight', 'Background', 'Text', 'Foreground', 'Logo', 'Secondary Logo', 'Primary', 'Secondary'];
    themeList: ColourZone[] = [
        {'colour':'#363C47', 'location':'Sidebar'},
        {'colour':'#6B84D1', 'location':'Highlight'},
        {'colour':'#00B3E1', 'location':'Logo'},
        {'colour':'#FDCB04', 'location':'Secondary Logo'},
        {'colour':'#ACB9CF', 'location':'Text'},
        {'colour':'#FFFFFF', 'location':'Background'},
        {'colour':'#FFFFFF', 'location':'Foreground'},
        {'colour':'#6080A9', 'location':'Primary'},
        {'colour':'#A3B02A', 'location':'Secondary'}
    ];

    addNewColour() {
        this.themeList.push({'colour':'#FFFFFF', 'location':'none'});
    }

    removeColour(index: number) {
        if (this.themeList.length > 1) {
            this.themeList.splice(index,1);
        }
    }

    update(index: number) {
        this.themeList[index].colour = this.colour;
        this.colour = '#ffffff';
    }

    upload() {
        
    }

    save() {

    }
}