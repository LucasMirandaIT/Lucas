import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  data = new Date();
  hora = this.data.getHours();
  min = this.data.getMinutes();        // 0-59
  sec = this.data.getSeconds();

  channelDatas: any = 
  [
    {channel: 'IBPF', dataM1: '1.000.000', dataM2: '10.000', dataM3: '0', dataM4: '0'},
    {channel: 'IBPJ', dataM1: '600.000', dataM2: '8.000', dataM3: '0', dataM4: '0'},
    {channel: 'Novo Front', dataM1: '3.000', dataM2: '900', dataM3: '0', dataM4: '0'},
    {channel: 'Mobile PF', dataM1: '1.000', dataM2: '10', dataM3: '0', dataM4: '0'},
    {channel: 'Mobile PJ', dataM1: '700', dataM2: '0', dataM3: '0', dataM4: '0'},
    {channel: 'Way', dataM1: '50.000', dataM2: '2.000', dataM3: '100', dataM4: '0'},
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
