import { Injectable } from '@angular/core';

@Injectable()
export class ImpostoService {

  constructor() { }

  calcularAliquota(salario:number) {
    if (salario <= 1900 ){
      return 0;
    } else if (salario >= 1901 && salario <= 2800){
        return salario*(7.5/100);
    } else if (salario >= 2801 && salario <= 3750){
        return salario*(15/100);
    } else if (salario >= 3751 && salario <= 4700){
        return salario*(22.5/100);
    }
    //else (salario >= 4701){
    else {
        return salario*(27.5/100);
    }
  }
  }
