import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// components
import { DdsModalComponent } from '../../../../commom/dds-modal/dds-modal.component';
import { IbpfAmbientMonitoringConfirmModalComponent } from './ibpf-ambient-monitoring-confirm-modal/ibpf-ambient-monitoring-confirm-modal.component';
// services
import { DdsNotificationService } from '../../../../services/notification/dds-notification.service';
// models
import { ModulesLog } from '../../../../model/modulesLog.model';
import { ModuloService } from '../../../../services/modulo-service/modulo.service';
import { DdsCardRotateComponent } from '../../../../commom/dds-card-rotate/dds-card-rotate.component';
import { UserAuth } from '../../../../commom/dds-login/auth/userAuth.model';

@Component({
  selector: 'ibpf-ambient-monitoring',
  templateUrl: './ibpf-ambient-monitoring.component.html',
  styleUrls: ['./ibpf-ambient-monitoring.component.scss']
})
export class IbpfAmbientMonitoringComponent implements OnInit {

  flipar: boolean;
  indexVIP: any;
  indexBack: any;
  status: any [] = [];
  changeGroupInfo: any [] = [];
  indexModules: any [] = [];
  indexChange: any;
  flip;
  ambient: string;
  module: string;
  selectedRd: any [] = [];
  ctrlAlterarModulo: boolean;
  // modulesLogData: ModulesLog [] = [];
  modules = [
    {
      nomeModulo: 'Módulo 1', version: [{release: 'v1.0.1', similarName: 'Real'}],
      ambients : [
        {urlAmbiente: 'pf.santandernet.com.br', balance: 0.942059191, statusMod: [{actualStatus: 'Online', activeConections: 6780000}], clicked: false, public: [{int: true, ext: false}]},
        {urlAmbiente: 'pfocu.santandernet.com.br', balance: 0, statusMod: [{actualStatus: 'Offline', activeConections: 0}], clicked: false, public: [{int: false, ext: false}]},
        {urlAmbiente: 'pftesteisban.com.br', balance: 0, statusMod: [{actualStatus: 'Offline', activeConections: 0}], clicked: false, public: [{int: false, ext: false}]},
      ],
    },
    {
    nomeModulo: 'Módulo 2', version: [{release: 'v1.0.1', similarName: 'Real'}],
    ambients : [
        {urlAmbiente: 'pf.santandernet.com.br', balance: 0.00972627483673753, statusMod: [{actualStatus: 'Online', activeConections: 70000}], clicked: false, public: [{int: false, ext: false}]},
        {urlAmbiente: 'pfocu.santandernet.com.br', balance: 0.333333333333333, statusMod: [{actualStatus: 'Online', activeConections: 6000}], clicked: false, public: [{int: false, ext: false}]},
        {urlAmbiente: 'pftesteisban.com.br', balance: 0, statusMod: [{actualStatus: 'Offline', activeConections: 0}], clicked: false, public: [{int: false, ext: false}]},
      ],
    },
    {
    nomeModulo: 'Módulo 3', version: [{release: 'v1.0.1', similarName: 'Teste'}],
    ambients : [
        {urlAmbiente: 'pf.santandernet.com.br', balance: 0.0482145338335418, statusMod: [{actualStatus: 'Online', activeConections: 347000}], clicked: false, public: [{int: false, ext: false}]},
        {urlAmbiente: 'pfocu.santandernet.com.br', balance: 0.666666666666667, statusMod: [{actualStatus: 'Online', activeConections: 12000}], clicked: false, public: [{int: false, ext: false}]},
        {urlAmbiente: 'pftesteisban.com.br', balance: 1, statusMod: [{actualStatus: 'Online', activeConections: 1000}], clicked: false, public: [{int: false, ext: false}]},
      ],
    },
    {
    nomeModulo: 'Módulo 4', version: [{release: 'v1.0.1', similarName: 'Preservado'}],
    ambients : [
        {urlAmbiente: 'pf.santandernet.com.br', balance: 0, statusMod: [{actualStatus: 'Offline', activeConections: 0}], clicked: false, public: [{int: false, ext: false}]},
        {urlAmbiente: 'pfocu.santandernet.com.br', balance: 0, statusMod: [{actualStatus: 'Offline', activeConections: 0}], clicked: false, public: [{int: false, ext: false}]},
        {urlAmbiente: 'pftesteisban.com.br', balance: 0, statusMod: [{actualStatus: 'Offline', activeConections: 0}], clicked: false, public: [{int: false, ext: false}]},
      ],
    },
  ];

  aux: any = [];
  data = new Date();
  voltar: any;
  states = [
    {name: 'Online', desc: 'Ativar ambiente!'},
    {name: 'Offline', desc: 'Desativar ambiente, aguardando sessões serem finalizadas.'},
    {name: 'Forced Offline', desc: 'Desativar ambiente de imediato!'},
  ];
  userAuth: UserAuth = new UserAuth();

  checkValid = true;
  isLinear = true;
  @ViewChild('firstFormGroup') firstFormGroup: NgForm;
  @ViewChild('secondFormGroup') secondFormGroup: NgForm;

  constructor(public _formBuilder: FormBuilder, public dialog: MatDialog, public notificationService: DdsNotificationService, public moduloService: ModuloService, public card: DdsCardRotateComponent) { }

  ngOnInit() {
    let tempCont = 0;
    this.modules.forEach (response => {
      this.indexModules[tempCont] = tempCont;
      tempCont++;
    });
    this.data = new Date();
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
    this.ctrlAlterarModulo = this.verificarPerfil('Alterar', 'DDS-CTRL-IBPF-CONFIFURACOES');
  }

  savedPrevious(selectedI, selectedE, indexMod, indexVIP) {
    this.aux[indexMod] = this.modules[indexMod].ambients[indexVIP].statusMod[0].actualStatus;
    if (selectedI === false && selectedE === false) {
      this.checkValid = true;
      return;
    } else {
      this.checkValid = false;
      return;
    }
  }

  changeState(indexMod, indexAmb) {
    const tempAtual = this.modules[indexMod].ambients[indexAmb].statusMod[0].actualStatus;
    const tempAnt = this.aux[indexMod];

    if (tempAnt === tempAtual) {
      this.notificationService.warn({
        title: 'Alerta',
        message: 'Este módulo ja está ' + tempAnt + '!',
        timeout: true
      });
      this.modules[indexMod].ambients[indexAmb].statusMod[0].actualStatus = tempAnt;
      return;
    }

    const dialogRef = this.dialog.open(IbpfAmbientMonitoringConfirmModalComponent, {
      data: { objectMod: this.modules[indexMod] , objectAmbient: this.modules[indexMod].ambients[indexAmb], tempAtual: tempAtual, tempAnt: tempAnt}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'invalid Pt') {
        this.notificationService.warn({
          title: 'Alerta',
          message: 'Petição inválida!',
          timeout: true
        });
        this.modules[indexMod].ambients[indexAmb].statusMod[0].actualStatus = tempAnt;
        return;
      } else if (result === 'invalid Rd') {
        this.notificationService.warn({
          title: 'Alerta',
          message: 'Preencha seu login e senha do Rundek!',
          timeout: true
        });
        this.modules[indexMod].ambients[indexAmb].statusMod[0].actualStatus = tempAnt;
        return;
      }
      if (result !== false) {
        const aux: any = {};
        aux.cdCanal = 1;
        aux.modulo = this.deParaModulo(this.modules[indexMod].nomeModulo);
        aux.urlVip = this.modules[indexMod].ambients[indexAmb].urlAmbiente;
        if (this.modules[indexMod].ambients[indexAmb].public[0].int === true && this.modules[indexMod].ambients[indexAmb].public[0].ext === true) {
          aux.tipoPublico = 'interno;externo';
        } else if (this.modules[indexMod].ambients[indexAmb].public[0].int === true) {
          aux.tipoPublico = 'interno';
        } else {
          aux.tipoPublico = 'externo';
        }
        aux.estado = this.deParaEstado(tempAtual);
        aux.login = result.controls.login.value;
        aux.senha = result.controls.senha.value;
        aux.cdUsuario = this.userAuth.user;
        aux.remedy = result.controls.peticao.value;

        if (tempAtual === 'Online') {
          this.moduloService.trocarModuloOn(aux).subscribe((retorno: any) => {
            this.notificationService.success({
              title: 'Sucesso',
              message: 'Módulo alterado com sucesso, id de execução: ' + retorno.id,
              timeout: false
            });
          });
        } else {
          this.moduloService.trocarModuloOff(aux).subscribe((retorno: any) => {
            this.notificationService.success({
              title: 'Sucesso',
              message: 'Módulo alterado com sucesso, id de execução: ' + retorno.id,
              timeout: false
            });
          });
        }
      } else {
        this.modules[indexMod].ambients[indexAmb].statusMod[0].actualStatus = tempAnt;
        return;
      }
    });
  }

  openModulesConfig(indexModulo, indexVIP) {
    if (this.ctrlAlterarModulo) {
      this.indexChange = indexModulo;
      this.flipar = !this.flipar;
      this.modules[indexModulo].ambients[indexVIP].clicked = true;
      this.savedPrevious(false, false, indexModulo, indexVIP);
    }
  }

  voltarFront(retorno) {
    this.indexBack = retorno;
    let cont = 0;
    this.modules[this.indexBack].ambients.forEach (VIP => {
      this.modules[this.indexBack].ambients[cont].clicked = false;
      cont++;
    });
  }

  deParaModulo(modulo) {
    if (modulo === 'Módulo 1') return 'modulo1';
    if (modulo === 'Módulo 2') return 'modulo2';
    if (modulo === 'Módulo 3') return 'modulo3';
    if (modulo === 'Módulo 4') return 'modulo3';
  }

  deParaEstado(estado) {
    if (estado === 'Online') return 'online';
    if (estado === 'Offline') return 'offline';
    if (estado === 'Forced Offline') return 'forcedoffline';
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
