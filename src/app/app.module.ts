import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { counterReducer } from './counter-store/counter.reducer';
import { CounterComponent } from './counter-component/counter.component';

import { StoreModule } from '@ngrx/store';

import { BadgeModule } from 'primeng/badge';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BadgeModule,
    ColorPickerModule,
    DropdownModule,
    TableModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
