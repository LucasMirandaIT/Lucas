import { Component, OnInit } from '@angular/core';

import {HttpExemploService} from './http-exemplo.service';

@Component({
  selector: 'app-http-exemplo',
  templateUrl: './http-exemplo.component.html',
  styleUrls: ['./http-exemplo.component.css']
})
export class HttpExemploComponent{

  searchField: string = '';

  projects:any [];
  total= 0;

  constructor(private httpreq : HttpExemploService) { }

 buscaProjetos() {
 return this.httpreq.searchProjects(this.searchField).subscribe(response => {
   this.projects = response.items;
   this.total = response.total_count;
 });
 }
}
