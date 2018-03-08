import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-import-search',
  templateUrl: './import-search.component.html',
  styleUrls: ['./import-search.component.css']
})
export class ImportSearchComponent implements OnInit {

  @Input() title: any;
  channelTitle;
  fileImport: any;
  files: any;
  layout_data: any;


  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    
    $(document).ready(function(){
      $('#load_data').click(function(){
        $.ajax({
          url:"../../assets/Layout.csv",
          dataType:"text",
          success: function(data)
          {
            this.layout_data = data.split(/\r?n|\r/);
            console.log('dentro: '+this.layout_data);
          }
        });
        
      });
    });

    console.log('fora: '+this.layout_data);

    this.activatedRoute.queryParams.subscribe(query => {
      this.channelTitle = query['channelTitle'];
    });
  }

  teste (){
    console.log('fora: '+this.layout_data);
  }

}
