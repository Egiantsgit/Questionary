import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import {AssessmentComponent} from './assesment/assessment.component';


@NgModule({
  declarations: [
    AppComponent,
    AssessmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'assessment', component: AssessmentComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
