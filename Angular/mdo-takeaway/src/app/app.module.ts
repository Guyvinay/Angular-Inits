import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { SearchComponent } from './custom/search/search.component';
import { NgTCComponent } from './new/ng-t-c/ng-t-c.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { GitComponent } from './components/git/git.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NgTCComponent,
    RxjsComponent,
    GitComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    ScrollingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
