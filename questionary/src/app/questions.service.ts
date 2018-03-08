import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import {IQuestion} from './assesment/question';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class QuestionsService {

  private _url = './assets/data/questions.json';

  constructor(private _http: HttpClient) {}

  getQuestions(): Observable<IQuestion[]> {
    return this._http.get<IQuestion[]>(this._url)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this._errorHandler);
  }

  _errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error || 'Server Error');
  }

}


