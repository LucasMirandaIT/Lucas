import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

    idade : number;
    clientes: any;    

  constructor() {}

getClientes(){
  return [
    {id: 1, nome: 'Indra', descricao: 'Indra Company'},
    {id: 2, nome: 'Vivo', descricao: 'Vivo Telefonia'},
    {id: 3, nome: 'Original', descricao: 'Banco Original'}
  ];
}

getCliente (id:number) {
  let clientes = this.getClientes();

  for (let i=0; i< clientes.length; i++) {
    let cliente = clientes [i];

    if (cliente.id == id) {
      return cliente;
    }
  }

  return null; 

}

}
