import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { SearchComponent } from './custom/search/search.component';
import { NgTCComponent } from './new/ng-t-c/ng-t-c.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PopupComponent } from './new/popup/popup.component';
import { GitComponent } from './components/git/git.component';
import { UtilsComponent } from './components/utils/utils.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NgTCComponent,
    PopupComponent,
    GitComponent,
    UtilsComponent,
    RxjsComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    ScrollingModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
