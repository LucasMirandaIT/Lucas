import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DdsCardRotateModalComponent } from './dds-card-rotate-modal/dds-card-rotate-modal.component';
import { DdsNotificationService } from '../../services/notification/dds-notification.service';
import { UserAuth } from '../dds-login/auth/userAuth.model';

@Component({
  selector: 'dds-card-rotate',
  templateUrl: './dds-card-rotate.component.html',
  styleUrls: ['./dds-card-rotate.component.scss']
})
export class DdsCardRotateComponent implements OnInit {

  ctrlReleaseModulo: boolean;
  flip: boolean;
  userAuth: UserAuth = new UserAuth();

  @Input() indexModules: any;
  @Input() title: any;

  @Input() get flippedCard(): any {return this._flippedCard; }
  @Output() flippedCardChange: EventEmitter<any> = new EventEmitter();
  set flippedCard(val: any) {
    this._flippedCard = val;
    this.flippedCardChange.emit(val);
  }
  _flippedCard;

  @Input() get version(): any {return this._version; }
  @Output() versionChange: EventEmitter<any> = new EventEmitter();
  set version(val: any) {
    this._version = val;
    this.versionChange.emit(val);
  }
  _version;

  @Input() get alterou(): any {return this._alterou; }
  @Output() alterouChange: EventEmitter<any> = new EventEmitter();
  set alterou(val: any) {
    this._alterou = val;
    this.alterouChange.emit(val);
    if (this.flippedCard === this.indexModules) {
      this.flip = !this.flip;
    }
  }
  _alterou;

  @Output() voltarChange: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog, public notificationService: DdsNotificationService) {}

  ngOnInit() {
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
    this.ctrlReleaseModulo = this.verificarPerfil('Release');
  }

  change() {
    this.flip = !this.flip;
    this.flippedCard = null;
    this.voltarChange.emit(this.indexModules);
  }

  moduleReleaseModal() {
    const dialogRef = this.dialog.open(DdsCardRotateModalComponent, {
      data: {
        buttonOk: [true, 'Confirmar'],
        buttonCancel: [true, 'Cancelar'],
        InputPeticao: false,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'releaseInvalid') {
        this.notificationService.warn({
          title: 'Alerta',
          message: 'Informe a Release e o Codinome!',
          timeout: true
        });
        return;
      } else if (result !== false) {
        this.notificationService.success({
          title: 'Sucesso',
          message: 'Dados alterados com suceso!',
          timeout: true
        });
        this.version[0].release = result.release;
        this.version[0].similarName = result.similarName;
      }
    });
  }

  verificarPerfil(ctrl) {
    let cont = this.userAuth.permissoes.hierarquiaPerfil.length - 1;
    while (cont > 0) {
      if (ctrl === this.userAuth.permissoes.hierarquiaPerfil[cont].descricaoTransacao) {
        return true;
      }
      cont--;
    }
    return false;
  }

}

