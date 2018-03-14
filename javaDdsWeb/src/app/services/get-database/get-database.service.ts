import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetDatabaseService {

  constructor(private http : Http) { }

  getFilterData (path) {
    return this.http.get('http://localhost:8081/'+path)
      .map(response => response.json())
      .catch(err => Observable.throw(err.message));
  }
}
