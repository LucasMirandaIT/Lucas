// imports angular
import { Component, Inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionChannel } from '../../selection/selection-channel.component';
import { GrupoService } from '../../../services/grupo-service/grupo.service';
import { GrupoSelecao } from '../../../model/grupoSelecao.model';
import { NgForm } from '@angular/forms';

 @Component({
   selector: 'clients-include',
   styleUrls: ['clients-include.component.scss'],
   templateUrl: 'clients-include.component.html',
 })

 export class ClientsIncludeComponent extends SelectionChannel implements OnInit {

  @ViewChild('formibpj') formibpj: NgForm;
  @ViewChild('formibpf') formibpf: NgForm;
  @ViewChild('dataForm') dataForm: NgForm;

  credencial: any;
  conta: any;
  agencia: any;
  retorno: any;
  numeroPeticao: any;

  constructor(
    public dialogRef: MatDialogRef < ClientsIncludeComponent > ,
    @Inject(MAT_DIALOG_DATA) public data: any, public grupoService: GrupoService
  ) {
    super(null, null, null, null,  grupoService, null, null);
  }

  ngOnInit() {
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
  }

  addClient(dataForm, formibpfValid, formibpjValid) {
    if (!dataForm) {
      return 'petInvalid';
    }
    if (this.data.isCPF) {
      if (!formibpfValid) {
        return 'credInvalid';
      }
      this.grupoSelecao.cdCredential = this.credencial;
    } else {
      if (!formibpjValid) {
        return 'credInvalid';
      }
      this.grupoSelecao.cdCredential = this.agencia + this.conta;
    }

    const invalid = this.clientValidate();
    if (invalid) {
      return 'contain';
    }

    this.grupoSelecao.numeroRemedyPeticao = this.numeroPeticao;
    this.grupoSelecao.cdCanal = this.data.channel;
    this.grupoSelecao.cdUsuarioInclusao = this.userAuth.user;
    this.grupoSelecao.cdGrupoSelecao = this.data.cdGrupoSelecao.cdGrupoSelecao;
    this.grupoSelecao.nmCredential = this.data.cdGrupoSelecao;
    (this.credencial !== undefined ? this.grupoSelecao.cdCredential.replace(/[\W_]+/g, '') : this.grupoSelecao.cdCredential = undefined );
    return this.grupoSelecao;

  }

  clientValidate() {
    let exist = false;
    let temp;
    let temp2;

    (this.credencial !== undefined ? temp = this.credencial.replace(/[\W_]+/g, '') : temp = null );
    (this.conta !== undefined ? temp2 = this.conta.replace(/[\W_]+/g, '') : temp2 = null );

    this.data.groupPublicSelectionClient.forEach (tabledata => {
      (tabledata.cdCredencial !== undefined ? tabledata.cdCredencial = tabledata.cdCredencial.replace(/[\W_]+/g, '') : temp2 = null );
      (tabledata.agencia !== undefined ? tabledata.agencia = tabledata.agencia.replace(/[\W_]+/g, '') : temp2 = null );
      (tabledata.conta !== undefined ? tabledata.conta = tabledata.conta.replace(/[\W_]+/g, '') : temp2 = null );
      if (
        (this.agencia  === tabledata.agencia && temp2  === tabledata.conta && this.data.isCPF === false) ||
        (this.data.isCPF === true && tabledata.cdCredencial === temp)
      ) {
        exist = true;
        return;
      }
    });
    return exist;
  }

}
