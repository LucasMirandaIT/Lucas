import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modules-settings',
  templateUrl: './modules-settings.component.html',
  styleUrls: ['./modules-settings.component.css']
})
export class ModulesSettingsComponent implements OnInit {

  aux: any = "";
  channelTitle: any;
  modulesChecked: any = [];
  editVariable: any = [];
  iconDelete: any = [];
  iconEdit: any = []  ;
  lineClick: any = 10;
  allModules: any = ['Oculto', 'Real 1', 'Real 2', 'Preservado']
  modules: any = [
    { nome: 'M1', estado: 'Oculto', estadosPossiveis:'Real 1;Real 2;Preservado', url: '/oculto', description: 'Módulo de testes', status: false },
    { nome: 'M2', estado: 'Real 1', estadosPossiveis:'Oculto;Preservado', url: '/real1', description: 'Módulo em Real datacenter A', status: true },
    { nome: 'M3', estado: 'Real 2', estadosPossiveis:'Oculto;Preservado', url: '/real2', description: 'Módulo em Real datacenter B', status: true },
    { nome: 'M4', estado: 'Preservado', estadosPossiveis:'Real 1;Real 2;Oculto', url: '/preservado', description: 'Módulo desativado', status: true },
    { nome: '', estado: '', estadosPossiveis:'', url: '', description: '' },
  ]; 

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let last = Object.keys(this.modules).length;
    for (let i=0; i<last; i++){
      this.iconDelete[i] = "delete";
      this.iconEdit[i] = "mode_edit";
      this.editVariable[i] = false;
      this.modulesChecked[i] = this.modules[i].estadosPossiveis.split(';');
    }

    this.iconDelete[last-1] =""
    this.iconEdit[last-1] = "add_circle_outline";
    this.editVariable[last-1] = false;

    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });
  }

  editLine(index) {
    if (this.iconEdit[index]=="add_circle_outline"){
      this.modules[this.modules.length-1] = { nome: 'Nome do Módulo', estado: 'Estado do Módulo', estadosPossiveis:'', url: '/url', description: 'false' }
      this.modules[this.modules.length] = { nome: '', estado: '', estadosPossiveis:'', url: '', description: '' }
      let last = Object.keys(this.modules).length;
      for (let i=0; i<last; i++){
        this.iconDelete[i] = "delete";
        this.iconEdit[i] = "mode_edit";
        this.editVariable[i] = false;
        this.modulesChecked[i] = this.modules[i].estadosPossiveis.split(';');
      }
      this.iconDelete[last-1] =""
      this.iconEdit[last-1] = "add_circle_outline";
      this.editVariable[last-1] = false;
    }
    if (this.editVariable[index] == true){
      this.iconEdit[index] = "mode_edit";
      this.iconDelete[index] = "delete";
      this.editVariable[index] = false;
      this.lineClick = "";
      // console.log(valuesChecked);
      // this.modules[index].nome = valuesChecked.nome;
      // this.modules[index].url = valuesChecked.url;
      this.modules[index].estadosPossiveis = this.saveFilters(index);
      this.aux = "";
      // console.log(this.modules)
      alert('Salvo com sucesso!');
    } else {
      this.editVariable[index] = true;
      this.lineClick = index;
      if (this.iconEdit[index] == "mode_edit"){
        this.iconEdit[index] = "done";
        this.iconDelete[index] = "close";
      } else {
        this.iconEdit[index] = "mode_edit";
        this.iconDelete[index] = "delete";
      }
    }
  }

  deleteLine(index) {
    if (this.iconEdit[index]=="add_circle_outline"){
      return;
    }
    if (this.editVariable[index] == true){
      this.iconEdit[index] = "mode_edit";
      this.iconDelete[index] = "delete";
      this.editVariable[index] = false;
      this.lineClick = "";
    } else {
      this.modules.splice(index,1);
      let last = Object.keys(this.modules).length;
      this.iconDelete[last-1] =""
      this.iconEdit[last-1] = "add_circle_outline";
      this.editVariable[last-1] = false;
      alert('Linha foi deletada com sucesso!');
    }
  }

  check(value, index, kIndex){
    for (let i=0; i<this.modulesChecked[index].length; i++){
      if (this.modulesChecked[index][i] == value){
        return true;
      }
    }
    return false;
  }

  saveFilters(index){
    this.aux = this.modulesChecked[index][0]
    for (let i=1; i<this.modulesChecked[index].length; i++){
      this.aux = this.modulesChecked[index][i]+';'+this.aux;     
    };
    return this.aux;
  }

  editFilters(value, i, k){    
    let j;
    for (j=0; j<this.modulesChecked[i].length; j++){
      if (this.modulesChecked[i][j] == value){
        this.modulesChecked[i].splice(j,1);
        break;
      }
    }
    if (j>=this.modulesChecked[i].length){
      this.modulesChecked[i][this.modulesChecked[i].length] = value;
    }
  }
}
