import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-modules-turn',
  templateUrl: './modules-turn.component.html',
  styleUrls: ['./modules-turn.component.scss']
})
export class ModulesTurnComponent implements OnInit, AfterViewInit {

  peticao: any;
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
    
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });  
  }

  ngAfterViewInit() {
    $('select').material_select();
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
