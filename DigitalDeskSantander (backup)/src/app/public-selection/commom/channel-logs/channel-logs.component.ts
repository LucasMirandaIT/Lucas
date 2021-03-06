import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDatabaseService } from '../../../services/get-database/get-database.service';
import { PostDatabaseService } from '../../../services/post-database/post-database.service';

@Component({
  selector: 'app-channel-logs',
  templateUrl: './channel-logs.component.html',
  styleUrls: ['./channel-logs.component.css']
})
export class ChannelLogsComponent implements OnInit {

  idItem: any;
  actualPage: any;
  nPages = [];
  dataGeneral : any = [];
  dataDisplay : any = [];
  total : number;
  aux : number;
  channelTitle: any;

  constructor(private activatedRoute : ActivatedRoute, private getDatabaseService : GetDatabaseService, private postDatabaseService : PostDatabaseService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });
    this.getFilters();
  }

  //Chama o Servico do método GET dos dados da tabela
  getFilters(){
    this.dataGeneral = [];
    this.total = 0;

    this.getDatabaseService.getFilterData('agency')
      .subscribe(
        response => {
        this.dataGeneral = this.dataGeneral.concat(response.dados);
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
    for (let i=((page*10)-10); i<(page*10); i++){
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
