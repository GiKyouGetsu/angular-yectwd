import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';

import { AppComponent } from './app.component';
import { RowSpanComponent } from './row-span.component';

@NgModule({
  imports:      [ BrowserModule, MatTableModule ],
  declarations: [ AppComponent, RowSpanComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
