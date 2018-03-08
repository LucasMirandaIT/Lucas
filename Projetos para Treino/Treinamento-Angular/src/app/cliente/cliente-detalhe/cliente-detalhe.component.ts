import { ClienteService } from '../cliente.service';
import { ClienteComponent } from '../cliente.component';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  idCliente: string;
  idEmpresa: string;
  inscricao: Subscription;
  idInvalido: string;

  cliente : any;

  constructor(private route : ActivatedRoute,
              private clienteService: ClienteService,
              private router: Router) {
    console.log (route);
    //this.idCliente=this.route.snapshot.params['idCliente'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe( (params: any) => {
    this.idCliente = params['idCliente'];
    // this.idEmpresa = params['idEmpresa'];
    this.cliente = this.clienteService.getCliente(parseInt(this.idCliente));

    if (this.cliente == null) {
      this.idInvalido = this.idCliente;
 //      alert ('Cliente ' + this.idInvalido + ' não encontrado!');
      this.router.navigate(['/cliente-nao-encontrado', this.idCliente]);
    }
  });
  }

  ngOnDestroy () {
    this.inscricao.unsubscribe();
  }

}
