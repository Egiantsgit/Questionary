import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  private _url = './questions.json';

  constructor(private _http: Http) {}

  getQuestions() {
    return this._http.get(this._url)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  _errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error || 'Server Error');
  }

}


