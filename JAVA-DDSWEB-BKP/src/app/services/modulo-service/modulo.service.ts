import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base-service/base.service';
import { RestClientService } from '../../shared/base-service/rest-client.service';
import { BaseParamsService } from '../../shared/base-service/base-params.service';
import { REST_PATH } from '../../shared/app.config';

import { Observable } from 'rxjs/Observable';
import { Modulo } from '../../model/modulo.model';
import { ModuloAmbienteCanal } from '../../model/moduloAmbienteCanal.model';
import { Http } from '@angular/http';


@Injectable()
export class ModuloService extends BaseService {

    constructor(private restClientService: RestClientService, baseParamsService: BaseParamsService, public http: Http) {
        super(baseParamsService);
    }

    // public buscar(modulo: Modulo) {
    //     if (modulo) {
    //         return this.restClientService.get(REST_PATH.modulo.buscar)
    //             .catch(error => this.handleError(error));
    //     } else {
    //         return Observable.of({});
    //     }
    // }

    public listar(moduloAmbienteCanal: any) {
        if (moduloAmbienteCanal) {
            return this.restClientService.post(REST_PATH.moduloAmbienteCanal.listarModulos, JSON.stringify(moduloAmbienteCanal))
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public trocarModuloOn(modulo: any) {
      if (modulo) {
        return this.restClientService.post(REST_PATH.moduloRundeck.trocarModuloOn, modulo)
            .catch(error => this.handleError(error));
      } else {
        return Observable.of({});
      }
    }

    public trocarModuloOff(modulo: any) {
      if (modulo) {
        return this.restClientService.post(REST_PATH.moduloRundeck.trocarModuloOff, modulo)
            .catch(error => this.handleError(error));
      } else {
        return Observable.of({});
      }
    }

    public buscarHistorico() {
            let queryElastic = {
                "size": 100,
                "query": {
                  "bool": {
                    "must": [
                      {
                        "query_string": {
                          "query": "tool:RundeckInfra AND *TEL_ANSIBLE-Telecom* AND bean.id:0b7d0787-fa26-4cd4-91f8-48fd44ca5572",
                          "analyze_wildcard": true
                        }
                      }
                    ]
                  }
                },
                "fields": [
                  "*",
                  "_source"
                ]
              }
            return this.http.post("https://dds.paas.isbanbr.dev.corp:443/dds-back-cadastro/elastic/_search", queryElastic)
                .catch(error => this.handleError(error));
    }

}
