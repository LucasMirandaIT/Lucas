import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router/';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

clientes;
pagina:number;


  constructor(private clienteService : ClienteService, private activatedRoute : ActivatedRoute, private router : Router) {
this.clientes = clienteService.getClientes();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(queryParams => {
        this.pagina = queryParams['pagina'];
        alert ('Pagina: ' + this.pagina);
    } );
  }

  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/clientes'], 
    {queryParams: 
      {pagina:this.pagina} }
    );
  }
}
