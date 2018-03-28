import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Arquivo } from './arquivo';
import { DdsNotificationService } from '../../services/notification';

@Component({
  selector: 'dds-upload-csv',
  templateUrl: './dds-upload-file.component.html',
  styleUrls: ['./dds-upload-file.component.scss']
})
export class DdsUploadFileComponent {

    private arquivo: Arquivo = new Arquivo();
    private dragging: boolean = false;
    private loaded: boolean = false;

    @Input() formatos: string = ".csv, .txt"; // default values

  constructor(private notificationService: DdsNotificationService) {}

  onDragEnter() { this.dragging = true; }
  onDragLeave() { this.dragging = false; }

  onDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.onArquivoSelecionado(e);
  }

  onArquivoSelecionado(arquivo) {
    let file = arquivo.dataTransfer ? arquivo.dataTransfer.files[0] : arquivo.target.files[0];
    if (typeof file === 'undefined') {
        return;
    }
    if (!this.isValido(arquivo, file.name)) {
        this.notificationService.warn({
            title: 'Atenção',
            message: 'Formato de arquivo inválido',
            timeout: true
        });
        return;
    }

    this.arquivo.nome = file.name;
    let reader = new FileReader();
    reader.onload = this.onCarregarArquivo.bind(this);
    reader.readAsDataURL(file);
}

  private isValido(arquivo: any, nome: string): boolean {
    let type = nome.substring(nome.length, nome.length - 4);
    let arrayFormats: string[] = this.formatos.trim().split(",");
    let valid: boolean = false;
    arrayFormats.forEach((fmt => {
        if (type.match(fmt.trim())) {
            valid = true;
        }
    }));
    return valid;
  }

  onCarregarArquivo(e) {
    let reader = e.target;
    this.arquivo.local = reader.result;
    this.loaded = true;
  }
}
