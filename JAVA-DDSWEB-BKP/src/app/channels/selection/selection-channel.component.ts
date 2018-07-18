// imports angular
import { ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// services
import { DdsFormValidationService } from '../../commom/validation/dds-form-validation.service';
import { DdsNotificationService } from '../../services/notification/dds-notification.service';
import { ModuloService } from '../../services/modulo-service/modulo.service';
import { GrupoService } from '../../services/grupo-service/grupo.service';

// components
import { DdsModalComponent } from '../../commom/dds-modal/dds-modal.component';

// class
import { GrupoSelecao } from '../../model/grupoSelecao.model';
import { GrupoTableEdicao, Grupos } from '../../model/grupoTableEdicao.model';
import { DataCreate } from '../../model/dataCreate.model';
import { GroupPublicSelection } from '../../model/groupPublicSelection.model';
import { DomSanitizer } from '@angular/platform-browser';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { AuthGuardService } from '../../shared/guards/auth-guard.service';
import { UserAuth } from '../../commom/dds-login/auth/userAuth.model';

export class SelectionChannel {

  @ViewChild('formCadastro') formCadastro: NgForm;
  @ViewChild('formInfo') formInfo: NgForm;
  @ViewChild('formClientes') formClientes: NgForm;

  // geral Seleção de público
  cdCanal: number;
  indexTab = 0;
  // variaveis Tabela de Grupo
  verDetalhes = true;
  grupoTableEdicao: GrupoTableEdicao[] = []; // remover depois;
  grupos: Grupos[] = null;
  groupAtivo: number = null;
  subscriptions: Subscription[] = [];
  valid = false;
  grupoSelecao: GrupoSelecao = new GrupoSelecao();
  groupPublicSelection: GroupPublicSelection = new GroupPublicSelection(null, null, null, 'N', 'N', null);
  groupPublicSelectionClient: GroupPublicSelection [] = null;
  ctrlAtivarGrupo: boolean;
  ctrlExcluirGrupo: boolean;
  ctrlAtivarCliente: boolean;
  ctrlExcluirCliente: boolean;
  ctrlInserirCliente: boolean;
  // variaveis Criação de Grupos
  Step: any = [] = [];
  showTable = false;
  listaTableClientes: DataCreate[] = [];
  nmGrupoSelecao: any;
  numeroRemedyPeticao: any;
  cdModuloAmbiente: any;
  ctrlCriarGrupo: boolean;
  ctrlExibirGrupo: boolean;
  // variaveis para DataSort
  sortF: string;
  userAuth: UserAuth = new UserAuth();

  constructor(
    public dialog: MatDialog,
    public formValidator: DdsFormValidationService,
    public notificationService: DdsNotificationService,
    public moduloService: ModuloService,
    public grupoService: GrupoService,
    public dom: DomSanitizer,
    public authGuardService: AuthGuardService,
  ) { }

  uploadClientes() {
    if (this.grupoSelecao.file === undefined) {
      this.notificationService.warn({
        title: 'Atenção',
        message: 'Para esse tipo de cadastrado é necessario inserir um arquivo',
        timeout: true
      });
    } else {
      const dialogRef = this.dialog.open(DdsModalComponent, {
        data: {
          title: 'Enviar arquivo',
          buttonOk: [true, 'OK'],
          buttonDownload: [false, 'Download'],
          buttonDownload2: [false, 'Download'],
          buttonCancel: [true, 'Cancelar'],
          InputPeticao: false,
        }
      });
      const dados =
      `O arquivo <span style='font-weight: bold'>${this.grupoSelecao.nomeSemFormatacao}</span> será enviado, deseja continuar ?`;
      dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(dados);
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.grupoSelecao.cdCanal = this.cdCanal;
          this.grupoSelecao.cdUsuarioInclusao = this.userAuth.user;
          this.grupoSelecao.cdOrigemMassa = 2; // via upload
          this.grupoSelecao.nomeGrupoSelecao = this.nmGrupoSelecao;
          this.grupoSelecao.numeroRemedyPeticao = this.numeroRemedyPeticao;
          this.grupoSelecao.cdModuloAmbienteCanal = this.cdModuloAmbiente;
          this.removeMask();
          this.grupoService.includeMassiveLoad(this.grupoSelecao).subscribe((retorno: any) => {
            if (retorno.status === 200) {
              this.notificationService.success({
                title: 'Sucesso',
                message: 'Dados gravados com sucesso!',
                timeout: true
              });
              this.grupoSelecao = new GrupoSelecao();
              this.stepReset(1, 0, true);
              Object.keys( this.formInfo.controls).forEach(key => {
                this.formInfo.controls[key].reset();
              });
            } else {
              this.notificationService.warn({
                title: 'Atenção',
                message: retorno,
                timeout: true
              });
            }
          });
        }
      });
    }
  }

  onSubmit() {
    const dialogRef = this.dialog.open(DdsModalComponent, {
      data: {
        title: 'Gravar Seleção',
        message: 'Esta seleção será salva no banco, deseja continuar?',
        buttonOk: [true, 'OK'],
        buttonDownload: [false, 'Download'],
        buttonDownload2: [false, 'Download'],
        buttonCancel: [true, 'Cancelar'],
        InputPeticao: false,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.grupoService.includeManually(this.grupoSelecao).subscribe((retorno: any) => {
          this.notificationService.success({
            title: 'Sucesso',
            message: 'Dados gravados com sucesso!',
            timeout: true
          });
          this.groupPublicSelection = new GroupPublicSelection(null, null, null, 'N', 'N', null);
          this.listaTableClientes = [];
          this.grupoSelecao = new GrupoSelecao();
          this.stepReset(1, 0, true);
          Object.keys( this.formInfo.controls).forEach(key => {
            this.formInfo.controls[key].reset();
          });
        });
      }
    });
  }

  searchGroupsSelectionsByChannel() {
    this.grupoSelecao.cdCanal = this.cdCanal;
    this.grupos = null;
    this.grupoService.searchGroupsSelectionsByChannel(this.grupoSelecao.cdCanal).subscribe((gruposRetorno: Grupos[]) => {
      this.grupos = [];
      gruposRetorno.forEach((grupo: Grupos) => {
        grupo.indAtivo = grupo.indAtivo === 'S' ? true : false;
        grupo.indAtivoRedis = grupo.indAtivoRedis === 'S' ? true : false;
        grupo.operacoes = grupo.cdProcessamentoArquivo === null && grupo.cdProcessamentoArquivo === 3 ? false : true;
        this.grupos.push(grupo);
        return;
      });
    });
  }

  removeMask() {
    this.grupoSelecao.publicoSelecionadoInclude.forEach(item => {
      item.cdCredencial = item.cdCredencial.replace(/[\W_]+/g, '');
    });
  }

  stepChange(indexPrev: number, indexNext: number, valid: boolean) {
    if (!valid) {
      this.notificationService.warn({
        title: 'Atenção',
        message: 'Preencha todos os campos!',
        timeout: true
      });
      return;
    }

    this.grupoService.existGrupo(this.nmGrupoSelecao, this.cdCanal).subscribe((retorno: any) => {
      if (retorno) {
        this.notificationService.warn({
          title: 'Atenção',
          message: 'Já existe um grupo com o nome informado!',
          timeout: true
        });
      } else {
        this.onItemStep(indexPrev, false, 'DONE', true);
        this.onItemStep(indexNext, true, 'CURRENT', true);
      }
    });
  }

  stepReset(indexPrev: number, indexNext: number, valid: boolean) {
    if (!valid) {
      return;
    }
    this.onItemStep(indexPrev, false, 'NONE', true);
    this.onItemStep(indexNext, true, 'CURRENT', true);
  }

  onItemStep(index: number, expand: boolean, status: string, isNext: boolean) {
    this.Step[index].expand = expand;
    this.Step[index].status = status;
    this.Step[index].isNext = isNext;
  }

  clearSelection() {
    const dialogRef = this.dialog.open(DdsModalComponent, {
      data: {
        title: 'Limpar Grupo',
        message: 'Esta seleção será apagada, deseja continuar?',
        buttonOk: [true, 'OK'],
        buttonDownload: [false, 'Download'],
        buttonDownload2: [false, 'Download'],
        buttonCancel: [true, 'Cancelar'],
        InputPeticao: false,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notificationService.success({
          title: 'Sucesso',
          message: 'Seleção limpa com sucesso!',
          timeout: true
        });
        this.listaTableClientes = [];
        this.grupoSelecao = new GrupoSelecao();
      }
    });
  }

  changeTab() {
    if (this.indexTab === 1) {
      this.showTable = false;
      this.verDetalhes = true;
    } else {
      this.showTable = true;
      this.verDetalhes = false;
    }
  }

  loadCarsLazy(event: LazyLoadEvent) {
    setTimeout(() => {
      // if (this.datasource) {
        // this.grupoTableEdicao = this.datasource.slice(event.first, (event.first + event.rows));
      // }
    }, 250);
  }

  changeSort(event) {
    if (!event.order) {
      this.sortF = 'nomeGrupoSelecao';
    } else {
      this.sortF = event.field;
    }
  }

  verificarPerfil(ctrl, nome) {
    let cont = this.userAuth.permissoes.hierarquiaPerfil.length - 1;
    while (cont > 0) {
      if (ctrl === this.userAuth.permissoes.hierarquiaPerfil[cont].descricaoTransacao &&
        this.userAuth.permissoes.hierarquiaPerfil[cont].nomeTransacao === nome) {
        return true;
      }
      cont--;
    }
    return false;
  }

}
