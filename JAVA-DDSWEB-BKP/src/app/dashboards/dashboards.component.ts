import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})

export class DashboardsComponent implements OnInit {

  data = new Date();
  aux: any;
  dados: any;
  channelDatas = [
   {channel: 'IBPF', realData: 1299094 , hiddenData: 1000, desenvolvimento: 50},
   {channel: 'IBE', realData: 343233, hiddenData: 1000, desenvolvimento: 50},
   {channel: 'Novo Front', realData: 6563, hiddenData: 1000, desenvolvimento: 50},
   {channel: 'Mobile PF', realData: 332, hiddenData: 1000, desenvolvimento: 50},
   {channel: 'Mobile PJ', realData: 0, hiddenData: 1000, desenvolvimento: 50},
   {channel: 'Way', realData: 2241256, hiddenData: 0, desenvolvimento: 50},
  ];
  channelDatas2 = [
   {channel: 'IBPF', realData: 6432, hiddenData: 409, desenvolvimento: 0},
   {channel: 'IBE', realData: 506500, hiddenData: 409, desenvolvimento: 0},
   {channel: 'Novo Front', realData: 342, hiddenData: 409, desenvolvimento: 0},
   {channel: 'Mobile PF', realData: 575, hiddenData: 409, desenvolvimento: 100},
   {channel: 'Mobile PJ', realData: 0, hiddenData: 409, desenvolvimento: 100},
   {channel: 'Way', realData: 0, hiddenData: 0, desenvolvimento: 50},
  ];

  ngOnInit() {
    this.dados = this.channelDatas2;
    this.timeout();
  }

  timeout() {
    setTimeout(() => {
        this.data = new Date();
        this.aux = !this.aux;
        if (this.aux) {
          this.dados = this.channelDatas;
        } else {
          this.dados = this.channelDatas2;
        }
        this.timeout();
    }, 5000);
  }

  verify (value) {
    if (value > 0) {
      return true;
    } else {
      return false;
    }
  }
}
