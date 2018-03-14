import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-modules-turn',
  templateUrl: './modules-turn.component.html',
  styleUrls: ['./modules-turn.component.css']
})
export class ModulesTurnComponent implements OnInit, AfterViewInit {

  activeModules: any = [];
  channelTitle: any;
  switchButton: boolean = true;
  allModules: any = ['Oculto', 'Real 1', 'Real 2', 'Preservado']
  modulos: any = ['Real 1', 'Real 2', 'Preservado'];
  modules: any = [
    { nome: 'M1', estado: 'Oculto', url: '/oculto', description: 'Módulo de testes', status: false },
    { nome: 'M2', estado: 'Real 1', url: '/real1', description: 'Módulo em Real datacenter A', status: true },
    { nome: 'M3', estado: 'Real 2', url: '/real2', description: 'Módulo em Real datacenter B', status: true },
    { nome: 'M4', estado: 'Preservado', url: '/preservado', description: 'Módulo desativado', status: true },

  ]; 

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });
  }

  ngAfterViewInit() {
    $('.dropdown-button').dropdown({
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
    });
  }

  filter(filter){
    let k = -1;
    let i = 0;

    this.modulos = [];

    for (i=0; i<4; i++){
      if (this.allModules[i] != filter){
        k++;
        this.modulos[k] = this.allModules[i];
      }
    }
  }
}
