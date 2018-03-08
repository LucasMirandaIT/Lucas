import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class HttpExemploService {

  constructor(private http : Http) { }

  searchProjects(searchField) {
    return this.http.get('https://api.github.com/search/repositories?q=' + searchField).map(response => response.json());
  }
    }
