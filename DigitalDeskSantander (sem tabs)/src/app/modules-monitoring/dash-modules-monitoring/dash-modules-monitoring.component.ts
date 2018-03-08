import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-modules-monitoring',
  templateUrl: './dash-modules-monitoring.component.html',
  styleUrls: ['./dash-modules-monitoring.component.css']
})
export class DashModulesMonitoringComponent implements OnInit {

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

  randomic(index){
    switch (index){
      case 0: return '#b71c1c'; //
      case 1: return '#880e4f';
      case 5: return '#4a148c'; //
      case 3: return '#2196f3';
      case 2: return '#ff6f00'; //
      case 4: return '#64dd17';
    }
  }

}

