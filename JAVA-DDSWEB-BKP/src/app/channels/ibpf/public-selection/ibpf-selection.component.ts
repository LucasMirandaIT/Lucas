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
  selector: 'ibpf-selection',
  templateUrl: './ibpf-selection.component.html',
  styleUrls: ['./ibpf-selection.component.scss'],
})
export class IbpfSelectionComponent extends SelectionChannel implements OnInit, AfterViewInit, OnDestroy {

  formStatus = false;
  isLeftVisible = true;
  tabelaDetalhesGrupo: any;
  moduloAmbienteCanal: ModuloAmbienteCanal[] = [];
  cdCredencial;

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
    this.cdCanal = 1;
    this.Step.push(new StepOptions(0, 'CURRENT', 'Informações Gerais do Grupo', true));
    this.Step.push(new StepOptions(1, 'NONE', 'Seleção de Clientes', false));
    this.cdCanal = 1;
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
    this.getModulesChannel();
    this.ctrlCriarGrupo = this.verificarPerfil('Criar Grupos', 'DDS-ABA-IBPF-CRIARSELECAO');
    this.ctrlExibirGrupo = this.verificarPerfil('Exibir Grupos', 'DDS-ABA-IBPF-EDITARSELECAO');
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
    (this.groupPublicSelection.cdCredencial !== undefined && this.groupPublicSelection.cdCredencial !== null ?
      temp = this.groupPublicSelection.cdCredencial.replace(/[\W_]+/g, '') : temp = '');
    if (temp.length >= 11 && valid) {
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
      if (this.groupPublicSelection.cdCredencial !== '' && this.groupPublicSelection.cdCredencial !== undefined) {
        this.listaTableClientes.push({
          cpf: this.groupPublicSelection.cdCredencial,
          conta: null,
          agencia: null
        });
        this.grupoSelecao.publicoSelecionadoInclude.push(new GroupPublicSelection(
          null, this.groupPublicSelection.cdCredencial, null, 'N', 'N', null
        ));
        this.showTable = true;
        this.groupPublicSelection = new GroupPublicSelection(null, null, null, 'N', 'N', null);
        Object.keys(this.formCadastro.controls).forEach(key => {
          this.formCadastro.controls[key].reset();
        });
      } else {
        this.notificationService.warn({
          title: 'Atenção',
          message: 'CPF inválido!',
          timeout: true
        });
      }
    } else {
      this.notificationService.warn({
        title: 'Atenção',
        message: 'CPF inválido!',
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
        <p> Um conjunto de números "0" que representará o CPF que deseja incluir. </p>
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
            null, data.cpf, null, 'S', 'N', null
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

  clientValidate() {
    let exist = false;
    this.listaTableClientes.forEach (data => {
      if (data.cpf === this.groupPublicSelection.cdCredencial) {
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
