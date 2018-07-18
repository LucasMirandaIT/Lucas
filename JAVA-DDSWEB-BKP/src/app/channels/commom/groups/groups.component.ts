import { Component, Input, Output, OnInit, OnDestroy, AfterViewInit, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { forEach } from '@angular/router/src/utils/collection';

import { DdsModalComponent } from '../../../commom/dds-modal/dds-modal.component';
import { SelectionChannel } from '../../selection/selection-channel.component';
import { GrupoService } from '../../../services/grupo-service/grupo.service';
import { ModuloService } from '../../../services/modulo-service/modulo.service';
import { DdsFormValidationService } from '../../../commom/validation/dds-form-validation.service';
import { DdsNotificationService } from '../../../services/notification/dds-notification.service';
import { Grupos } from '../../../model/grupoTableEdicao.model';
import { DataCreate } from '../../../model/dataCreate.model';
import { GroupPublicSelection } from '../../../model/groupPublicSelection.model';
import { StepOptions } from '../../../commom/dds-step-navigation/step-navigation.model';
import { GrupoSelecao } from '../../../model/grupoSelecao.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'groups',
  templateUrl: 'groups.component.html',
  styleUrls: ['groups.component.scss'],
})
export class GroupsComponent extends SelectionChannel implements OnInit {

  @Input() cdCanal: number;
  @Input() get voltar(): boolean {return this._voltar; }
  @Output() voltarChange: EventEmitter<any> = new EventEmitter();
  set voltar(val: boolean) {
    this._voltar = val;
    this.voltarChange.emit(val);
    this.searchGroupsSelectionsByChannel();
  }

  _voltar;
  groupAtivo: number = null;
  tabelaDetalhesGrupo: any;

  constructor(
    public dialog: MatDialog,
    public formValidator: DdsFormValidationService,
    public notificationService: DdsNotificationService,
    public moduloService: ModuloService,
    public grupoService: GrupoService,
    public dom: DomSanitizer,
  ) { super(null, null, null, null, grupoService, dom, null); }

  ngOnInit() {
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
    if (this.cdCanal === 1) {
      this.ctrlAtivarGrupo = this.verificarPerfil('Ativar/Destivar Cliente', 'DDS-CTRL-IBPF-EDITARSELECAO');
      this.ctrlExcluirGrupo = this.verificarPerfil('Excluir Cliente', 'DDS-CTRL-IBPF-EDITARSELECAO');
    } else {
      this.ctrlAtivarGrupo = this.verificarPerfil('Ativar/Destivar Cliente', 'DDS-CTRL-IBE-EDITARSELECAO');
      this.ctrlExcluirGrupo = this.verificarPerfil('Excluir Cliente', 'DDS-CTRL-IBE-EDITARSELECAO');
    }
  }

  detalhesDoGrupo(grupo: Grupos) {
    this.tabelaDetalhesGrupo = null;
    if (grupo.operacoes === true) {
      this.tabelaDetalhesGrupo = grupo;
      this.voltar = !this.voltar;
    } else {
      const dialogRef = this.dialog.open(DdsModalComponent, {
        data: {
          title: 'Detalhes do Grupo',
          message: 'Este grupo foi criado através de upload de arquivo. Aguarde-o ser processado',
          buttonOk: [true, 'OK'],
          buttonDownload: [false, 'Download'],
          buttonDownload2: [false, 'Download'],
          buttonCancel: [false, 'Cancelar'],
          InputPeticao: false,
        }
      });
    }
  }

  changeGroupStatus(grupos: Grupos, index: number, cdModuloAmbiente: number) {
    let existGroupAtivo = false;
    let cdGroupAtivo = null;
    let nomeGroupAtivo = null;

    // desativar grupo
    if (grupos.indAtivo) {
      const dialogRef = this.dialog.open(DdsModalComponent, {
        width: '40%',
        data: {
          title: 'Desativar Grupo',
          // message: 'O grupo será desativado, deseja continuar ?',
          buttonOk: [true, 'OK'],
          buttonDownload: [false, 'Download'],
          buttonDownload2: [false, 'Download'],
          buttonCancel: [true, 'Cancelar'],
          InputPeticao: true,
        }
      });
      const message = `O grupo <span style="font-weight: bold">${grupos.nomeGrupoSelecao}  </span> será desativado, deseja continuar?`;
        dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(message);
      this.mudarStatusGrupo(dialogRef, index, grupos, null, grupos.cdGrupoSelecao);
    } else {
        for (let i = 0; i < this.grupos.length; i++) {
          const item = this.grupos[i];
        if (item.cdModuloAmbiente === cdModuloAmbiente) {
          if (item.indAtivo === true) {
            existGroupAtivo = true;
            cdGroupAtivo = item.cdGrupoSelecao;
            nomeGroupAtivo = item.nomeGrupoSelecao;
            break;
          }
        }
      }

      if (existGroupAtivo) {
        const dialogRef = this.dialog.open(DdsModalComponent, {
          width: '40%',
          data: {
            title: 'Ativar Grupo',
            buttonOk: [true, 'OK'],
            buttonDownload: [false, 'Download'],
            buttonDownload2: [false, 'Download'],
            buttonCancel: [true, 'Cancelar'],
            InputPeticao: true,
          }
        });
        const dados =
        `O grupo <span style="font-weight: bold">${nomeGroupAtivo}</span>
        será desativado para ativar o grupo
        <span style="font-weight: bold">${grupos.nomeGrupoSelecao}</span>, deseja continuar ? `;
        dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(dados);
        this.mudarStatusGrupo(dialogRef, index, grupos, grupos.cdGrupoSelecao, cdGroupAtivo);
      } else {
        const dialogRef = this.dialog.open(DdsModalComponent, {
          width: '32%',
          data: {
            title: 'Ativar Grupo',
            buttonOk: [true, 'OK'],
            buttonDownload: [false, 'Download'],
            buttonDownload2: [false, 'Download'],
            buttonCancel: [true, 'Cancelar'],
            InputPeticao: true,
          }
        });
        const message = `O grupo <span style="font-weight: bold">${grupos.nomeGrupoSelecao}  </span> será ativado, deseja continuar?`;
        dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(message);
        this.mudarStatusGrupo(dialogRef, index, grupos, grupos.cdGrupoSelecao, null);
      }
    }

  }

  mudarStatusGrupo(dialogRef: any, index: number, grupos: Grupos, ativar: number, desativar: number) {
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'invalid') {
        this.notificationService.warn({
          title: 'Alerta',
          message: 'Petição inválida!',
          timeout: true
        });
        this.grupos[index].indAtivo = !this.grupos[index].indAtivo;
      } else if (result) {
        const grup = {
          numeroRemedyPeticao: result,
          cdCanal: this.cdCanal,
          cdUsuario: this.userAuth.user,
          cdGrupoSelecaoAtivar: ativar,
          cdGrupoSelecaoDesativar: desativar
        };

        this.grupoService.habilitarGrupo(grup).subscribe((retorno: any) => {
          this.searchGroupsSelectionsByChannel();
            this.notificationService.success({
              title: 'Sucesso',
              message: 'Grupo alterado com sucesso, aguarde enquanto os dados são sincronizados',
              timeout: false
            });
        });

      } else {
        this.grupos[index].indAtivo = !this.grupos[index].indAtivo;
      }
    });
  }

  removeGroups(grupo: Grupos, index: number) {
    const isAtivo = grupo.indAtivo ? ` está ativo e ` : ``;
    const comPublico = `O grupo ` +
    `<span style="font-weight: bold">${grupo.nomeGrupoSelecao}  </span>${isAtivo}
    possui  <span style="font-weight: bold">${grupo.totalPublicoSelecionado} cliente(s)</span>, deseja continuar?`;

    const semPublico =
    `O grupo  <span style="font-weight: bold">${grupo.nomeGrupoSelecao} ${isAtivo}</span> será excluído, deseja continuar?`;

    const dados = grupo.totalPublicoSelecionado > 0 ? comPublico : semPublico;

    const dialogRef = this.dialog.open(DdsModalComponent, {
      data: {
        title: 'Excluir Grupo',
        buttonOk: [true, 'OK'],
        buttonDownload: [false, 'Download'],
        buttonDownload2: [false, 'Download'],
        buttonCancel: [true, 'Cancelar'],
        InputPeticao: true,
      }
    });

    dialogRef.componentInstance.htmlContent = this.dom.bypassSecurityTrustHtml(dados);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'invalid') {
        this.notificationService.warn({
          title: 'Alerta',
          message: 'Petição inválida!',
          timeout: true
        });
      } else if (result) {
        grupo.numeroRemedyPeticao = result;
        this.grupoService.removeGroup(grupo).subscribe((retorno: any) => {
            this.notificationService.success({
                title: 'Sucesso',
                message: 'Grupo ' + grupo.nomeGrupoSelecao + ' excluído com sucesso!',
                timeout: true
            });
            this.grupos.splice(index, 1);
        });
      }
    });
  }

}
