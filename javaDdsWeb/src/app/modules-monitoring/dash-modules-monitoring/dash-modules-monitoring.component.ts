import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dash-modules-monitoring',
  templateUrl: './dash-modules-monitoring.component.html',
  styleUrls: ['./dash-modules-monitoring.component.css']
})
export class DashModulesMonitoringComponent implements OnInit {

  iconsChannel: any = []
  channelDatas: any = 
  [
    {channel: 'IBPF', dataProduction: '1.000.000', dataHidden: '10.000', dataPreserved: '0'},
    {channel: 'IBPJ', dataProduction: '600.000', dataHidden: '8.000', dataPreserved: '0'},
    {channel: 'Novo Front', dataProduction: '30.000', dataHidden: '900', dataPreserved: '0'},
    {channel: 'Mobile PF', dataProduction: '10.000', dataHidden: '10', dataPreserved: '0'},
    {channel: 'Mobile PJ', dataProduction: '70.00', dataHidden: '0', dataPreserved: '0'},
    {channel: 'Way', dataProduction: '50.000', dataHidden: '2.000', dataPreserved: '100'},
  ];
  
  constructor() { }

  ngOnInit() {    
    for (let i=0, len = this.channelDatas.length; i<len; i++){
      switch (this.channelDatas[i].channel){
        case 'IBPF': this.iconsChannel[i] = '../../../assets/img/channels-icons/NovoFronts.svg#NovoFront';
        case 'IBPJ': this.iconsChannel[i] = '../../../assets/img/channels-icons/NovoFronts.svg#NovoFront';
        case 'Mobile PF': this.iconsChannel[i] = '../../../assets/img/channels-icons/NovoFronts.svg#NovoFront';
        case 'Mobile PJ': this.iconsChannel[i] = '../../../assets/img/channels-icons/NovoFronts.svg#NovoFront';
        case 'Novo Front': this.iconsChannel[i] = '../../../assets/img/channels-icons/NovoFronts.svg#NovoFront';
        case 'Way': this.iconsChannel[i] = '../../../assets/img/channels-icons/NovoFronts.svg#NovoFront';
      }
    }
  }

  randomic(index, sizeBorder){
    switch (index){
      case 0: return sizeBorder+'px solid #DEB046';
      case 1: return sizeBorder+'px solid #823A60';
      case 2: return sizeBorder+'px solid #3575B7';
      case 3: return sizeBorder+'px solid #AFBF50';
      case 4: return sizeBorder+'px solid #EA8733';
      case 5: return sizeBorder+'px solid #C6291C';
    }
  }
}

