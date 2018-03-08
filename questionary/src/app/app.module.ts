import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import {AssessmentComponent} from './assesment/assessment.component';
import {QuestionsService} from "./questions.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AssessmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'assessment', component: AssessmentComponent}
    ]),
  ],
  providers: [ HttpClient, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
