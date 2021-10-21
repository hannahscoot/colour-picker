import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { increment, decrement, reset } from "../counter-store/counter.action";
import { ColourZone } from "../model/ColourZone";
import * as _ from 'lodash';

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
    edit: boolean = false;
    colour: string = '#ffffff';
    locationList: string[] = ['Header', 'Sidebar', 'Highlight', 'Background', 'Text', 'Foreground', 'Logo', 'Secondary Logo', 'Primary', 'Secondary'];
    themeList: ColourZone[] = [];
    previousStateZone: ColourZone = new ColourZone();

    testSiteThemePreset: ColourZone[] = [
        {'id':1,'colour':'#800020', 'location':'Sidebar'},
        {'id':2,'colour':'#6B84D1', 'location':'Highlight'},
        {'id':3,'colour':'#FEFEFE', 'location':'Logo'},
        {'id':4,'colour':'#ACB8CE', 'location':'Secondary Logo'},
        {'id':5,'colour':'#8E9F9E', 'location':'Text'},
        {'id':6,'colour':'#FEFEFE', 'location':'Background'},
        {'id':7,'colour':'#E8E8E8', 'location':'Foreground'},
        {'id':8,'colour':'#AA4C64', 'location':'Primary'},
        {'id':9,'colour':'#F26C8E', 'location':'Secondary'}
    ]

    normalSiteThemePreset: ColourZone[] = [
        {'id':1,'colour':'#363C47', 'location':'Sidebar'},
        {'id':2,'colour':'#6B84D1', 'location':'Highlight'},
        {'id':3,'colour':'#00B3E1', 'location':'Logo'},
        {'id':4,'colour':'#FDCB04', 'location':'Secondary Logo'},
        {'id':5,'colour':'#ACB9CF', 'location':'Text'},
        {'id':6,'colour':'#FFFFFF', 'location':'Background'},
        {'id':7,'colour':'#FFFFFF', 'location':'Foreground'},
        {'id':8,'colour':'#6080A9', 'location':'Primary'},
        {'id':9,'colour':'#A3B02A', 'location':'Secondary'}
    ];

    ngOnInit() {
        this.normalSiteTheme();
    }

    addNewColour() {
        let newId = 0
        let max = _.maxBy(this.themeList, 'id'); 
        if (!_.isNil(max)){
            newId = max?.id;
        }
        this.themeList.push({'id': newId+1,'colour':'#FFFFFF', 'location':'none'});
        console.log(this.themeList);
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

    testSiteTheme() {
        this.themeList = _.cloneDeep(this.testSiteThemePreset);
    }

    normalSiteTheme() {
        this.themeList = _.cloneDeep(this.normalSiteThemePreset);
    }


    upload() {

    }

    save() {

    }

    onRowEditInit(previousZone: ColourZone) {
        this.previousStateZone = _.cloneDeep(previousZone);
        this.edit = true;
    }

    onRowEditCancel(index: number) {
        this.themeList[index] = _.cloneDeep(this.previousStateZone);
        this.previousStateZone = new ColourZone();
        this.edit = false;
    }

    onRowEditConfirm() {
        this.previousStateZone = new ColourZone();
        this.edit= false;
    }

}