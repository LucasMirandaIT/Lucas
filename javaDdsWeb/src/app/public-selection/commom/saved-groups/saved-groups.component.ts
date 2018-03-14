import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { GetDatabaseService } from '../../../services/get-database/get-database.service';
import { PostDatabaseService } from '../../../services/post-database/post-database.service';

@Component({
  selector: 'app-saved-groups',
  templateUrl: './saved-groups.component.html',
  styleUrls: ['./saved-groups.component.css']
})
export class SavedGroupsComponent implements OnInit, AfterViewInit {

  actualPage: any;
  nPages = [];
  dataGeneral : any = [];
  dataDisplay : any = [];
  total : number;
  aux : number;
  switchButton: boolean = true;
  serverStatus: boolean = false;
  openTable: boolean = false;

  constructor(private getDatabaseService : GetDatabaseService, private postDatabaseService : PostDatabaseService) { }

  ngOnInit() {
    this.getFilters();
  }

  ngAfterViewInit() {
    $('select').material_select();
    $('ul.tabs').tabs();
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});     
  }

  // Chama o Servico do método GET dos dados da tabela
  getFilters(){
    this.dataGeneral = [];
    this.total = 0;

    this.getDatabaseService.getFilterData('listGroup')
      .subscribe(
        response => {
        this.dataGeneral = response.dados;
        this.total = this.dataGeneral.length;

        this.pagination(1);
        let k = 0;
        if (this.total > 0 &&  this.total%10 != 0) {
          this.aux = Math.floor(this.total/10)+1;

          for (let i=1; i<(this.aux); i++){
            this.nPages[k] = (i+1);
            k++;
          }

        } else if (this.total > 0 &&  this.total%10 == 0) {
          this.aux = Math.floor(this.total/10);

          for (let i=1; i<(this.aux); i++){
            this.nPages[k] = (i+1);
            k++;
          }
        }

      }, error => {
        alert('Erro ao acessar servidor!');
      });
  };

  // Chama o Servico do método POST dos dados da tabela
  postData () {
    this.postDatabaseService.postFilters();
  }

  //Configurar barra de paginação
  pagination(page) {
    this.actualPage = page;

    if (page < 1){
      this.actualPage = 1;
      return;
    } else if (page > this.aux) {
      this.actualPage = this.aux;
      return;
    }

    this.dataDisplay = [];

    let k = 0;
    for (let i=((page*10)-10); i<(page*10); i++){
      if (i > this.dataGeneral.length - 1){
        return;
      }
      this.dataDisplay[k] = this.dataGeneral[i];
      k++
    }

  };

  close () {
    // this.eventClose.emit(false);
  }

  switchStatus(returnStatus) {
    this.switchButton = returnStatus;
  }

}

