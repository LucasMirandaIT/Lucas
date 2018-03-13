import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  channelDatas: any = 
  [
    {channel: 'IBPF', dataProduction: '1.000.000', dataHidden: '10.000', dataPreserved: '0'},
    {channel: 'IBPJ', dataProduction: '600.000', dataHidden: '8.000', dataPreserved: '0'},
    {channel: 'Novo Front', dataProduction: '3.000', dataHidden: '900', dataPreserved: '0'},
    {channel: 'Mobile PF', dataProduction: '1.000', dataHidden: '10', dataPreserved: '0'},
    {channel: 'Mobile PJ', dataProduction: '700', dataHidden: '0', dataPreserved: '0'},
    {channel: 'Way', dataProduction: '50.000', dataHidden: '2.000', dataPreserved: '100'},
  ];

  constructor() { }

  ngOnInit() {
  }

  verify(value){    
    if (value != '0'){
      return true;
    } else {
      return false;
    }
  }

}
