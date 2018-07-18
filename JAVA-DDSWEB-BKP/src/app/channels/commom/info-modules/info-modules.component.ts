import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DdsNotificationService } from '../../../services/notification/dds-notifiction.module';
import { GrupoService } from '../../../services/grupo-service/grupo.service';
import { MatDialog } from '@angular/material';
import { DdsFormValidationService } from '../../../commom/validation/dds-form-validation.service';
import { DdsModalComponent } from '../../../commom/dds-modal/dds-modal.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'info-modules',
    templateUrl: 'info-modules.component.html',
    styleUrls: ['info-modules.component.scss'],
})
export class InfoModulesComponent {

    @Input() get detalhes() {return this._detalhes; }
    @Output() detalhesChange: EventEmitter<any> = new EventEmitter();
    set detalhes(val) {this._detalhes = val; this.detalhesChange.emit(val); }
    _detalhes;

    @Input() grupo: any = null;
    data = "peticao.dtInclusao | date: 'dd/MM/yyyy HH:mm'";

    constructor( public dialog: MatDialog, public formValidator: DdsFormValidationService, private dom: DomSanitizer) {}

    formatDate(date: Date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return day + '/' + month + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds;
    }

}
