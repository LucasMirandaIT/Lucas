import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDatabaseService } from '../../../services/get-database/get-database.service';

@Component({
  selector: 'app-predefined-filters',
  templateUrl: './predefined-filters.component.html',
  styleUrls: ['./predefined-filters.component.css']
})
export class PredefinedFiltersComponent implements OnInit {

  callTable: boolean = false;
  channelTitle: any = "";
  dataGeneral: any = [];

  constructor(private activatedRoute : ActivatedRoute, private getDatabaseService: GetDatabaseService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
      // Materialize.updateTextFields();

      $("#rollBtn").click(function(){
        $('html, body').animate({
          scrollTop: $("#div1").offset().top
        }, 800);
      });
    });

    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });
  }

  receiveEvent(returnEvent) {
    this.callTable = returnEvent;
  }

  addValues () {    
    this.getDatabaseService.getFilterData('arquivos').subscribe(
      response => {
      this.dataGeneral = response.dados;
      this.callTable = true;
    }, error => {
      alert('Erro ao acessar servidor!');
      this.callTable = false;
    });
  }

}
