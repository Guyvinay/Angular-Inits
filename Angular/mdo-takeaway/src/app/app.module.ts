import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { SearchComponent } from './custom/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    ScrollingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
