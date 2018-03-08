import { Injectable } from '@angular/core';

@Injectable()
export class ImcService {

  constructor() { }

  calcularImc(peso:number, altura:number){

    altura = this.converterCMtoM(altura)

    let imc : number = peso/ (altura*altura);

    return imc;
  }

  converterCMtoM(altura:number) {
    altura = altura/100;
    return altura;
  }

}
