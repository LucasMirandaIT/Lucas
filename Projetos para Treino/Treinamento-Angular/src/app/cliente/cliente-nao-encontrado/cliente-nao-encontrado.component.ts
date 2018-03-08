import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-nao-encontrado',
  templateUrl: './cliente-nao-encontrado.component.html',
  styleUrls: ['./cliente-nao-encontrado.component.css']
})
export class ClienteNaoEncontradoComponent implements OnInit {

  idCliente: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params:any)=> {
      this.idCliente = params['idCliente'];
    } )
  }

  ngOnDestroy (){
    this.inscricao.unsubscribe();
  }

}
