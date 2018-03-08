import { Component, OnInit } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-modules-turn',
  templateUrl: './modules-turn.component.html',
  styleUrls: ['./modules-turn.component.css']
})
export class ModulesTurnComponent implements OnInit {


  selectedDropdown: any;
  activeModules: any = [];
  channelTitle: any;
  switchButton: boolean = true;
  imgServer: string;
  serverStatus: boolean = false;
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

    $(document).ready(function(){
      $('select').material_select();
      $('.collapsible').collapsible();
      Materialize.updateTextFields();
      $('.dropdown-button').dropdown({
        constrainWidth: true, // Does not change width of dropdown to that of the activator
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
      });
    });

    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });

    this.switchModule(0);
    this.switchStatus(this.activeModules.status);

    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
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

  switchStatus(returnStatus) {
    this.switchButton = returnStatus;
    if (returnStatus == true) {
      this.imgServer = "../../assets/img/serverOn.gif"
    } else {
      this.imgServer = "../../assets/img/serverOff.png"
    }
  }

  switchModule ( i ){
    this.activeModules.nome = this.modules[i].nome;
    this.activeModules.estado = this.modules[i].estado;
    this.activeModules.url = this.modules[i].url;
    this.activeModules.description = this.modules[i].description;
    this.switchStatus(this.modules[i].status);
    this.filter(this.activeModules.nome);
  }

  openModal(index){
    this.selectedDropdown = index;
  }
}
