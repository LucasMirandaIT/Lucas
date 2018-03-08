import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDatabaseService } from '../../../services/get-database/get-database.service';
import { PostDatabaseService } from '../../../services/post-database/post-database.service';

@Component({
  selector: 'app-cnpj-search',
  templateUrl: './cnpj-search.component.html',
  styleUrls: ['./cnpj-search.component.css']
})
export class CnpjSearchComponent implements OnInit {

  callTable: boolean = false;
  channelTitle: any = "";
  dataGeneral: any = [];
  actualPage: any;
  nPages = [];
  dataDisplay : any = [];
  total : number;
  aux : number;

  constructor(private activatedRoute : ActivatedRoute, private getDatabaseService : GetDatabaseService, private postDatabaseService : PostDatabaseService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
      // Materialize.updateTextFields();

      // $("#rollBtn").click(function(){
      //   $('html, body').animate({
      //     scrollTop: $("#div1").offset().top
      //   }, 800);
      // });
    });

    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });
  }

  //Chama o Servico do método GET dos dados da tabela
  getFilters(){
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

  addValues () {
    this.getDatabaseService.getFilterData('arquivos').subscribe(
      response => {
      this.dataGeneral = this.dataGeneral.concat(response.dados);
      this.total = this.dataGeneral.length;
      this.callTable = true;
      this.getFilters();
    }, error => {
      alert('Erro ao acessar servidor!');
      this.callTable = false;
    });
  }

}
