// imports angular
import { Component, Inject, OnInit, AfterViewInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { GrupoSelecao } from '../../../model/grupoSelecao.model';
import { GroupPublicSelection } from '../../../model/groupPublicSelection.model';
import { GrupoService } from '../../../services/grupo-service/grupo.service';
import { DdsNotificationService } from '../../../services/notification/dds-notifiction.module';
import { DdsModalComponent } from '../../../commom/dds-modal/dds-modal.component';
import { SelectionChannel } from '../../selection/selection-channel.component';
import { ClientsIncludeComponent } from '../clients-include/clients-include.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MaskUtils } from '../../../shared/utils/maskUtils';

@Component({
  selector: 'clients',
  styleUrls: ['clients.component.scss'],
  templateUrl: 'clients.component.html',
})
export class ClientsComponent extends SelectionChannel implements OnInit {

  groupSelected: any;
  grupo: any = null;
  agencia: any;
  conta: any;
  cpf: any;
  credencial: any;
  _cdPublicoSelecionado;
  _voltar;
  idCliente;

  @Input() get grupoDetalhes() {return this._grupoDetalhes; }
  @Output() grupoDetalhesChange: EventEmitter<any> = new EventEmitter();
  set grupoDetalhes(val) {this._grupoDetalhes = val; this.grupoDetalhesChange.emit(val); }
  _grupoDetalhes;

  @Input() channel;
  @Input() isCPF = true;
  @Input() get cdPublicoSelecionado(): any { return this._cdPublicoSelecionado; }
  @Input() get voltar(): boolean { return this._voltar; }

  @Output() cdPublicoSelecionadoChange: EventEmitter<any> = new EventEmitter();
  @Output() voltarChange: EventEmitter<any> = new EventEmitter();

  set cdPublicoSelecionado(val: any) {
    if (val !== undefined) {
      this._cdPublicoSelecionado = val;
      this.cdPublicoSelecionadoChange.emit(val);
      this.searchSelectedPublicByGroup(); 
    }
  }

  set voltar(val: boolean) {this._voltar = val; this.voltarChange.emit(val); }

  constructor(
    public grupoService: GrupoService,
    public dialog: MatDialog,
    public notificationService: DdsNotificationService,
    public maskUtils: MaskUtils,
    public dom: DomSanitizer
  ) {
    super (null, null, null, null, grupoService, dom, null);
  }

  ngOnInit() {
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
    if (this.cdCanal === 1) {
      this.ctrlAtivarCliente = this.verificarPerfil('Ativar/Destivar Cliente', 'DDS-CTRL-IBPF-EDITARSELECAO');
      this.ctrlExcluirCliente = this.verificarPerfil('Excluir Cliente', 'DDS-CTRL-IBPF-EDITARSELECAO');
      this.ctrlInserirCliente = this.verificarPerfil('Inserir Cliente', 'DDS-CTRL-IBPF-EDITARSELECAO');
    } else {
      this.ctrlAtivarCliente = this.verificarPerfil('Ativar/Destivar Cliente', 'DDS-CTRL-IBE-EDITARSELECAO');
      this.ctrlExcluirCliente = this.verificarPerfil('Excluir Cliente', 'DDS-CTRL-IBE-EDITARSELECAO');
      this.ctrlInserirCliente = this.verificarPerfil('Inserir Cliente', 'DDS-CTRL-IBE-EDITARSELECAO');
    }
  }

  searchSelectedPublicByGroup() {
    this.groupPublicSelectionClient = null;
    this.grupoService.search(this.cdPublicoSelecionado.cdGrupoSelecao).subscribe((retornoGrupo: any) => {
      this.grupo = retornoGrupo;

      if (JSON.stringify(retornoGrupo) !== '{}') {
        this.groupPublicSelectionClient = [];
        retornoGrupo.publicoSelecionado.forEach(item => {
          const obj = new GroupPublicSelection(
            item.cdPublicoSelecionado,
            item.cdCredencial,
            null,
            item.indAtivo,
            item.indAtivoRedis,
            null,
          );
          this.groupPublicSelectionClient.push(obj);
        });
      }
    });
  }​

  onVoltarParaGrupos() {
    this.voltar = !this.voltar;
  }

  changeClientStatus(groupPublicSelection: GroupPublicSelection, index) {
    const grupoSelecao: GrupoSelecao = new GrupoSelecao();
    const prevValueAtivoOracle = groupPublicSelection.ativoOracle;

    let msgRetorno: any;
    if (this.isCPF) {
      msgRetorno = 'Cliente ' + (this.groupPublicSelectionClient[index].cdCredencial);
      // this.idCliente = this.groupPublicSelectionClient[index].cdCredencial;
      this.idCliente = this.maskUtils.cpfFormat(this.groupPublicSelectionClient[index].cdCredencial);
    } else {
      msgRetorno = 'Cliente ' + (this.groupPublicSelectionClient[index].agencia)
      + ' / ' + (this.groupPublicSelectionClient[index].conta);
      this.idCliente = this.groupPublicSelectionClient[index].agencia + '/' + this.groupPublicSelectionClient[index].conta;
    }

    const dialogRef = this.dialog.open(DdsModalComponent, {
      data: {
        title: 'Alterar Estado do Cliente',
        buttonOk: [true, 'Confirmar'],
        buttonDownload: [false, 'Download'],
        buttonDownload2: [false, 'Download'],
        buttonCancel: [true, 'Cancelar'],
        InputPeticao: true,
      }
  });
  const dados = `Tem certeza de que deseja
  ${(groupPublicSelection.ativoOracle === true ? ' desativar' : ' ativar')}  o cliente
   <span style='font-weight: bold'>${this.idCliente}</span> ?`;
    dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(dados);
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'invalid') {
      this.notificationService.warn({
        title: 'Alerta',
        message: 'Petição inválida!',
        timeout: true
      });
      this.groupPublicSelectionClient[index].ativoOracle = prevValueAtivoOracle;
    } else if (result) {
      grupoSelecao.cdUsuarioUltimaAtualizacao = 'x207807';
      grupoSelecao.cdPublicoSelecionado = groupPublicSelection.cdPublicoSelecionado;
      grupoSelecao.numeroRemedyPeticao = result;
      if (groupPublicSelection.ativoOracle === true) {
        this.groupPublicSelectionClient[index].indAtivo = 'S';
        this.groupPublicSelectionClient[index].indAtivoRedis = 'S';
        this.groupPublicSelectionClient[index].ativoOracle = true;
        this.groupPublicSelectionClient[index].ativoRedis = true;
        grupoSelecao.indAtivo = 'S';
        grupoSelecao.indAtivoRedis = 'S';
      } else {
        this.groupPublicSelectionClient[index].indAtivo = 'N';
        this.groupPublicSelectionClient[index].indAtivoRedis = 'N';
        this.groupPublicSelectionClient[index].ativoOracle = false;
        this.groupPublicSelectionClient[index].ativoRedis = false;
        grupoSelecao.indAtivo = 'N';
        grupoSelecao.indAtivoRedis = 'N';
      }
      this.grupoService.enableDisableClient(grupoSelecao).subscribe((retorno: any) => {
        const isAtivo = (groupPublicSelection.ativoOracle === true ? ' ativado' : ' desativado') + ' com sucesso!';
        this.notificationService.success({
          title: 'Sucesso',
          message: msgRetorno + isAtivo,
          timeout: true
        });
        this.searchSelectedPublicByGroup();
      });
    } else {
      this.groupPublicSelectionClient[index].ativoOracle = prevValueAtivoOracle;
    }

  });
  }

  removeClients(groupPublicSelection: GroupPublicSelection, index: number) {
    let msgRetorno: any;
    if (this.isCPF) {
      msgRetorno = (this.groupPublicSelectionClient[index].cdCredencial);
      this.idCliente = this.maskUtils.cpfFormat(this.groupPublicSelectionClient[index].cdCredencial);
    } else {
      msgRetorno = (this.groupPublicSelectionClient[index].agencia)
      + ' / ' + (this.groupPublicSelectionClient[index].conta);
      this.idCliente = this.groupPublicSelectionClient[index].agencia + '/' + this.groupPublicSelectionClient[index].conta;
    }

    const dialogRef = this.dialog.open(DdsModalComponent, {
      data: {
        title: 'Excluir Cliente',
        buttonOk: [true, 'OK'],
        buttonDownload: [false, 'Download'],
        buttonDownload2: [false, 'Download'],
        buttonCancel: [true, 'Cancelar'],
        InputPeticao: true,
      }
    });
    const dados = `Cliente <span style='font-weight: bold'>${this.idCliente}</span> será excluído, deseja continuar ?`;
    dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(dados);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'invalid') {
        this.notificationService.warn({
          title: 'Alerta',
          message: 'Petição inválida!',
          timeout: true
        });
      } else if (result) {
        groupPublicSelection.numeroRemedyPeticao = result;
        this.grupoService.removeClient(groupPublicSelection).subscribe((retorno: any) => {
          this.notificationService.success({
            title: 'Sucesso',
            message: 'Cliente ' + this.groupPublicSelectionClient[index].cdCredencial + ' excluído com sucesso!',
            timeout: true
          });
          this.groupPublicSelectionClient.splice(index, 1);
          this.searchSelectedPublicByGroup();
        });
      }
    });
  }

  addClient() {
    const dialogRef = this.dialog.open(ClientsIncludeComponent, {
      width: '35%',
      data: {
        isCPF: this.isCPF,
        channel: this.channel,
        buttonOk: [true, 'Salvar Cliente'],
        buttonDownload: [true, 'TXT', 'assets/LayoutPF.txt'],
        buttonDownload2: [true, 'CSV', 'assets/LayoutPF.csv'],
        buttonCancel: [true, 'Cancelar'],
        cdGrupoSelecao: this._cdPublicoSelecionado,
        groupPublicSelectionClient: this.groupPublicSelectionClient
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.numeroRemedyPeticao !== null && result.numeroRemedyPeticao !== undefined) {
        const temp3 = {
          cdGrupoSelecao: result.cdGrupoSelecao,
          cdCredencial: result.cdCredential,
          indAtivo: 'S',
          indAtivoRedis: 'S',
          nmCredencial: '',
          cdUsuarioInclusao: result.cdUsuarioInclusao,
          numeroRemedyPeticao: result.numeroRemedyPeticao,
        };
        this.grupoService.includeClient(temp3).subscribe((retorno: any) => {
          this.notificationService.success({
            title: 'Sucesso',
            message: 'Cliente ' + result.cdCredential + ' inserido com sucesso!',
            timeout: true
          });
          this.searchSelectedPublicByGroup();
        });
      } else {
        if (result === 'credInvalid') {
          this.notificationService.warn({
            title: 'Alerta',
            message: 'Campo(s) Inválido(s)!',
            timeout: true
          });
        } else if (result.valid === 'contain') {
          this.notificationService.warn({
            title: 'Alerta',
            message: 'Cliente já inserido na seleção!',
            timeout: true
          });
        } else {
          this.notificationService.warn({
            title: 'Alerta',
            message: 'Petição inválida!',
            timeout: true
          });
        }
      }
    });
  }

}
