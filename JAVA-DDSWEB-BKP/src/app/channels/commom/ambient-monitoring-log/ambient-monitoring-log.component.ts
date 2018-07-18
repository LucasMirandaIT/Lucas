import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModuloService } from '../../../services/modulo-service/modulo.service';
import { DdsModalComponent } from '../../../commom/dds-modal/dds-modal.component';

@Component({
  selector: 'ambient-monitoring-log',
  templateUrl: './ambient-monitoring-log.component.html',
  styleUrls: ['./ambient-monitoring-log.component.scss']
})
export class AmbientMonitoringLogComponent implements OnInit {

  sortF: string;
  objectoElasticSearch: any = {};
  voltar = true;
  detalhesLog: any;

  _data: any;
  @Input() get data(): any {return this._data; }
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  set data(val: any) {this._data = val; this.dataChange.emit(val); }

  constructor(public dialog: MatDialog, public moduloService: ModuloService) { }

  ngOnInit() {
    this.moduloService.buscarHistorico().subscribe(retorno => {
      this._data = [];
      if (retorno._body) {
        const dados = JSON.parse(retorno._body);
        dados.hits.hits.forEach((grupo: any) => {
          this.objectoElasticSearch = {};
          this.objectoElasticSearch.execid = grupo._source.bean.execid;
          this.objectoElasticSearch.username = grupo._source.bean.username;
          this.objectoElasticSearch.modulo = grupo._source.bean.modulo;
          this.objectoElasticSearch.status = grupo._source.bean.status;
          this.objectoElasticSearch.estado = grupo._source.bean.estado;
          this.objectoElasticSearch.timestamp = grupo._source.bean.timestamp;
          this.objectoElasticSearch.logs = grupo._source.bean.logs;
          this._data.push(this.objectoElasticSearch);
          return;
        });
      }
    });
  }

  changeSort(event) {
    if (!event.order) {
      this.sortF = 'nome';
    } else {
      this.sortF = event.field;
    }
  }

  moreInfo(rowData) {
    const dialogRef = this.dialog.open(DdsModalComponent, {
      height: '80%',
      data: {
        title: 'Log da execução #' + rowData.execid,
        message: rowData.logs,
        buttonOk: [true, 'Voltar'],
        buttonCancel: [false, 'Cacelar'],
        buttonDownload: [false, 'TXT', 'assets/LayoutPF.txt'],
        buttonDownload2: [false, 'CSV', 'assets/LayoutPF.csv'],
        InputPeticao: false,
      }
    });

  }

  detalhesDaExecucao(rowData) {
    this.voltar = !this.voltar;
    this.detalhesLog = rowData;
  }

}
