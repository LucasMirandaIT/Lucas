import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDatabaseService } from '../../services/get-database/get-database.service';
import { PostDatabaseService } from '../../services/post-database/post-database.service';

@Component({
  selector: 'app-general-logs',
  templateUrl: './general-logs.component.html',
  styleUrls: ['./general-logs.component.css']
})
export class GeneralLogsComponent implements OnInit, AfterViewInit {

  idItem: any;
  actualPage: any;
  nPages = [];
  dataGeneral : any = [];
  dataDisplay : any = [];
  total : number;
  aux : number;

  constructor(private getDatabaseService : GetDatabaseService, private postDatabaseService : PostDatabaseService) { }

  ngOnInit() {
    this.getFilters();      
  }

  ngAfterViewInit(){
    $('.modal').modal();
  }

  getFilters(){
    this.getDatabaseService.getFilterData('log').subscribe(
      response => {
      this.dataGeneral = response.dados;
      this.total = this.dataGeneral.length;
      this.pagination(1);

      let k = 0;
    if (this.total > 0 &&  this.total%6 != 0) {
      this.aux = Math.floor(this.total/6)+1;

      for (let i=1; i<(this.aux); i++){
        this.nPages[k] = (i+1);
        k++;
      }

    } else if (this.total > 0 &&  this.total%6 == 0) {
      this.aux = Math.floor(this.total/6);

      for (let i=1; i<(this.aux); i++){
        this.nPages[k] = (i+1);
        k++;
      }
    }
    }, error => {
      alert('Erro ao acessar servidor!');
      return;
    });
        
    
  };

  //Chama o Servico do método POST dos dados da tabela
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
    for (let i=((page*6)-6); i<(page*6); i++){
      if (i > this.dataGeneral.length - 1){
        return;
      }
      this.dataDisplay[k] = this.dataGeneral[i];
      k++
    }
  };

  openModal(index){
    this.idItem = index;
  }

}

