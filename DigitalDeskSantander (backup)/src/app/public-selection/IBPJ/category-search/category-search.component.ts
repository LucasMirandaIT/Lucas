import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDatabaseService } from '../../../services/get-database/get-database.service';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent implements OnInit {

  @Output() clickEvents = new EventEmitter<boolean>();

  callTable: boolean = false;
  categorias = ['Internet Banking', 'Van Gogh'];
  channelTitle;
  dataGeneral: any = [];
  aux;

  constructor(private activatedRoute : ActivatedRoute, private getDatabaseService: GetDatabaseService) { }

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

  receiveEvent(returnEvent) {
    this.callTable = returnEvent;
  }

  addValues () {    
    this.getDatabaseService.getFilterData('category').subscribe(
      response => {
      this.dataGeneral = response.dados;
      this.callTable = true;
    }, error => {
      alert('Erro ao acessar servidor!');
      this.callTable = false;
    });
  }

}
