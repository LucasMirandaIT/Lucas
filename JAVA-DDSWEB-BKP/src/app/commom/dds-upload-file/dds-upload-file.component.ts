import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Arquivo } from './arquivo.model';
import { DdsNotificationService } from '../../services/notification/dds-notification.service';

@Component({
  selector: 'dds-upload-file',
  templateUrl: './dds-upload-file.component.html',
  styleUrls: ['./dds-upload-file.component.scss']
})
export class DdsUploadFileComponent {

    arquivo: Arquivo = new Arquivo();
    dragging = false;
    loaded = false;
    _file: any = null;

    @Input() formatos = '.csv, .txt'; // default values
    @Input() get file(): any {return this._file; }
    @Output() fileChange: EventEmitter<any> = new EventEmitter();
    set file(val: any) {
      this._file = val;
      if (this.arquivo.nome != null) {
        this.arquivo.nome = null;
      }
      this.fileChange.emit(val);
    }

  constructor(private notificationService: DdsNotificationService) {}

  onDragEnter() {
    if (!this.dragging) {
      this.dragging = true;
    }
  }
  onDragLeave() {
    if (this.dragging) {
      this.dragging = false;
    }
  }

  onDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.onArquivoSelecionado(e);
  }

  onArquivoSelecionado(arquivo) {
    const _file = arquivo.dataTransfer ? arquivo.dataTransfer.files[0] : arquivo.target.files[0];
    if (typeof _file === 'undefined') {
        return;
    }
    if (!this.isValido(arquivo, _file.name)) {
        this.notificationService.warn({
            title: 'Atenção',
            message: 'Formato de arquivo inválido',
            timeout: true
        });
        return;
    }
    this.arquivo.nome = _file.name;
    const reader = new FileReader();
    reader.onload = this.onCarregarArquivo.bind(this);
    this.file.nomeSemFormatacao = this.arquivo.nome;
    this.file.file = _file;
    reader.readAsDataURL(_file);
}

  isValido(arquivo: any, nome: string): boolean {
    const type = nome.substring(nome.length, nome.length - 4);
    const nomeSemTipo = nome.substring(0, nome.length - 4);
    this.file.nmArquivo = nomeSemTipo + '_' + this.formatDate(new Date());
    this.file.nmArquivo = this.file.nmArquivo + type;
    const arrayFormats: string[] = this.formatos.trim().split(',');
    let valid = false;
    arrayFormats.forEach((fmt => {
        if (type.match(fmt.trim())) {
            valid = true;
        }
    }));
    return valid;
  }

  onCarregarArquivo(e) {
    const reader = e.target;
    this.arquivo.local = reader.result;
    // this.file.file = reader.result;
    this.loaded = true;
  }

  formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const minutes = date.getMinutes();
    return year + '-' + month + '-' + day + '-' + minutes;
  }
}
