// imports angular
import { Component, Input, Output, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { forEach } from '@angular/router/src/utils/collection';

// custom components
import { DdsModalComponent } from '../../../commom/dds-modal/dds-modal.component';
import { SelectionChannel } from '../../selection/selection-channel.component';

//  services
import { GrupoService } from '../../../services/grupo-service/grupo.service';
import { ModuloService } from '../../../services/modulo-service/modulo.service';
import { DdsFormValidationService } from '../../../commom/validation/dds-form-validation.service';
import { DdsNotificationService } from '../../../services/notification/dds-notification.service';

//  models
import { ModuloAmbienteCanal } from '../../../model/moduloAmbienteCanal.model';
import { GrupoTableEdicao } from '../../../model/grupoTableEdicao.model';
import { DataCreate } from '../../../model/dataCreate.model';
import { GroupPublicSelection } from '../../../model/groupPublicSelection.model';
import { StepOptions } from '../../../commom/dds-step-navigation/step-navigation.model';
import { DomSanitizer } from '@angular/platform-browser';
import { GrupoSelecao } from '../../../model/grupoSelecao.model';

@Component({
  selector: 'ibpj-selection',
  templateUrl: './ibpj-selection.component.html',
  styleUrls: ['./ibpj-selection.component.scss'],
})
export class IbpjSelectionComponent extends SelectionChannel implements OnInit, AfterViewInit, OnDestroy {

  formStatus = false;
  isLeftVisible = true;
  tabelaDetalhesGrupo: any;
  moduloAmbienteCanal: ModuloAmbienteCanal[] = [];

  constructor(
    public dialog: MatDialog,
    public formValidator: DdsFormValidationService,
    public notificationService: DdsNotificationService,
    public moduloService: ModuloService,
    public grupoService: GrupoService,
    public dom: DomSanitizer
  ) {
    super(dialog, formValidator, notificationService, moduloService, grupoService, dom, null);
  }

  ngOnInit() {
    this.cdCanal = 2;
    this.Step.push(new StepOptions(0, 'CURRENT', 'Informações Gerais do Grupo', true));
    this.Step.push(new StepOptions(1, 'NONE', 'Seleção de Clientes', false));
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
    this.getModulesChannel();
    this.ctrlCriarGrupo = this.verificarPerfil('Criar Grupos', 'DDS-ABA-IBE-CRIARSELECAO');
    this.ctrlExibirGrupo = this.verificarPerfil('Exibir Grupos', 'DDS-ABA-IBE-EDITARSELECAO');
  }

  ngAfterViewInit() {
    if (this.ctrlCriarGrupo === true) {
      this.subscriptions.push(this.formInfo.control.valueChanges.subscribe((status) => {
        if (!this.formInfo.valid) {
          this.valid = false;
          return;
        }
      }));
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  getModulesChannel() {
    this.moduloService.listar({cdCanal: this.cdCanal}).subscribe((moduloAmbienteCanal: any) => {
      this.moduloAmbienteCanal = [];
      this.moduloAmbienteCanal = moduloAmbienteCanal;
    });
  }

  addCliente(valid) {
    let temp;
    let tempDois;
    (this.groupPublicSelection.agencia !== null ? temp = this.groupPublicSelection.agencia.replace(/[\W_]+/g, '') : temp = '');
    (this.groupPublicSelection.conta !== null ? tempDois = this.groupPublicSelection.conta.replace(/[\W_]+/g, '') : tempDois = '');
    if (temp.length >= 4 && tempDois.length >= 7 && valid) {
      const invalid = this.clientValidate();
      if (invalid) {
        this.notificationService.warn({
          title: 'Atenção',
          message: 'Cliente já inserido na Seleção!',
          timeout: true
        });
        this.groupPublicSelection = new GroupPublicSelection(null, null, null, 'N', 'N', null);
        return;
      }
      this.groupPublicSelection.cdCredencial = this.groupPublicSelection.agencia + this.groupPublicSelection.conta;
      if (this.groupPublicSelection.cdCredencial !== '' && this.groupPublicSelection.cdCredencial !== undefined) {
        this.listaTableClientes.push({
          cpf: null,
          conta: this.groupPublicSelection.conta,
          agencia: this.groupPublicSelection.agencia
        });
        this.grupoSelecao.publicoSelecionadoInclude.push(new GroupPublicSelection(
          null, this.groupPublicSelection.cdCredencial, null, 'S', 'N', null
        ));
        this.groupPublicSelection = new GroupPublicSelection(null, null, null, 'N', 'N', null);
        this.showTable = true;
        Object.keys(this.formCadastro.controls).forEach(key => {
          this.formCadastro.controls[key].reset();
        });
      } else {
        this.notificationService.warn({
          title: 'Atenção',
          message: 'Agência e Conta inválidos!',
          timeout: true
        });
      }
    } else {
      this.notificationService.warn({
        title: 'Atenção',
        message: 'Agência e Conta inválidos!',
        timeout: true
      });
    }
  }

  downloadLayout() {
    const dialogRef = this.dialog.open(DdsModalComponent, {
      data: {
        title: 'Download de Layout Padrão',
        buttonOk: [false, 'OK'],
        buttonDownload: [true, 'TXT', 'assets/LayoutPF.txt'],
        buttonDownload2: [true, 'CSV', 'assets/LayoutPF.csv'],
        buttonCancel: [true, 'Voltar'],
        InputPeticao: false,
      }
    });
       const dados =
       `<p> O Layout padrão serve para auxiliar no upload de carga massiva por arquivos. Nele você encontrará: </p>
        <p> Um conjunto de números "0" que representará o número da agência que deseja incluir. </p>
        <p> Um conjunto de números "1" que representará o número da conta que deseja incluir. </p>
        <p> Ao final da linha, um ";" para separar os CPFs desejados. </p>`;
       dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(dados);
  }

  removeClient(index: number): void {
    const dialogRef = this.dialog.open(DdsModalComponent, {
      data: {
        title: 'Excluir Cliente',
        message: 'Este cliente será excluído da seleção, deseja continuar?',
        buttonOk: [true, 'OK'],
        buttonDownload: [false, 'TXT', 'assets/LayoutPF.txt'],
        buttonDownload2: [false, 'CSV', 'assets/LayoutPF.csv'],
        buttonCancel: [true, 'Voltar'],
        InputPeticao: false,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const tempDataSource = this.listaTableClientes;
        tempDataSource.splice(index, 1);
        this.listaTableClientes = tempDataSource;
        this.grupoSelecao = new GrupoSelecao();
        this.listaTableClientes.forEach (data => {
          this.grupoSelecao.publicoSelecionadoInclude.push(new GroupPublicSelection(
            null, data.agencia + data.conta, null, 'S', 'N', null
          ));
        });
        this.notificationService.success({
          title: 'Sucesso',
          message: 'Cliente excluído com sucesso!',
          timeout: true
        });
      }
    });
  }

  clientValidate(): boolean {
    let exist = false;
    this.listaTableClientes.forEach (data => {
      if (data.agencia  === this.groupPublicSelection.agencia && data.conta  === this.groupPublicSelection.conta) {
        exist = true;
        return;
      }
    });
    return exist;
  }

  submited() {
    this.grupoSelecao.cdCanal = this.cdCanal;
    this.grupoSelecao.cdUsuarioInclusao = this.userAuth.user;
    this.grupoSelecao.cdOrigemMassa = 1; // via manual
    this.grupoSelecao.nomeGrupoSelecao = this.nmGrupoSelecao;
    this.grupoSelecao.numeroRemedyPeticao = this.numeroRemedyPeticao;
    this.grupoSelecao.cdModuloAmbienteCanal = this.cdModuloAmbiente;
    this.removeMask();

    this.onSubmit();
  }
}
