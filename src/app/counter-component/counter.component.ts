import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { increment, decrement, reset } from "../counter-store/counter.action";

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
    color : string = '#545454';
    colourList: string[] = ['#FFFFFF'];

    addNewColour() {
        this.colourList.push("#FFFFFF");
    }

    removeColour(index: number) {
        if (this.colourList.length > 1) {
            this.colourList.splice(index,1);
        }
    }

    trackByIndex(index: number, obj: any): any { //the two way binding works with this function
        return index;
    }

}