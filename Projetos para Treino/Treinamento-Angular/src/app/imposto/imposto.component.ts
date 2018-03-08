import { Component, OnInit } from '@angular/core';

import {ImpostoService} from './imposto.service';

@Component({
  selector: 'app-imposto',
  templateUrl: './imposto.component.html',
  styleUrls: ['./imposto.component.css']
})
export class ImpostoComponent implements OnInit {

  salario: number;
  aliquota: number;
  salarioFinal: number;

  constructor(private impostoService : ImpostoService) {
  }

calcularAliquota() {
  this.aliquota = this.impostoService.calcularAliquota (this.salario);
}

calculoDesconto() {
  this.salarioFinal = this.salario-this.aliquota
}

  ngOnInit() {
  }

}
