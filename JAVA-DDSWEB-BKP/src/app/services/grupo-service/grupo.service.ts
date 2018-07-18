import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base-service/base.service';
import { RestClientService } from '../../shared/base-service/rest-client.service';
import { BaseParamsService } from '../../shared/base-service/base-params.service';
import { REST_PATH } from '../../shared/app.config';

import { Observable } from 'rxjs/Observable';
import { GrupoSelecao } from '../../model/grupoSelecao.model';
import { Http } from '@angular/http';
import { GroupPublicSelection } from '../../model/groupPublicSelection.model';
import { GrupoTableEdicao, Grupos } from '../../model/grupoTableEdicao.model';
import { PropertyProviderService, DDS_HTTP_URL } from '../../shared/base-service/property-provider.service';

@Injectable()
export class GrupoService extends BaseService {

    constructor(private restClientService: RestClientService, 
        baseParamsService: BaseParamsService, 
        public http: Http, public propertyProvider: PropertyProviderService) {
        super(baseParamsService);
    }

    public includeMassiveLoad(grupoSelecao: GrupoSelecao) {

        const grupo = {
            cdCanal: grupoSelecao.cdCanal,
            cdModuloAmbienteCanal: grupoSelecao.cdModuloAmbienteCanal,
            cdOrigemMassa: grupoSelecao.cdOrigemMassa,
            numeroRemedyPeticao: grupoSelecao.numeroRemedyPeticao,
            nomeGrupoSelecao: grupoSelecao.nomeGrupoSelecao,
            indAtivo: grupoSelecao.indAtivo,
            indAtivoRedis: grupoSelecao.indAtivoRedis,
            cdUsuarioInclusao: grupoSelecao.cdUsuarioInclusao,
            file: '',
            nmArquivo: grupoSelecao.nmArquivo,
        };

        const formData: FormData = new FormData();
        formData.append('file', grupoSelecao.file);
        formData.append('json', JSON.stringify(grupo));
        return this.http.post(
            this.propertyProvider.getProperty(DDS_HTTP_URL) + '/groupSelection/includeMassiveLoad', formData).catch(error => this.handleError(error))
    }

    public includeManually(grupo: GrupoSelecao) {
        if (grupo) {
            return this.restClientService.post(REST_PATH.grupo.includeManually, JSON.stringify(grupo))
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public existGrupo(grupo: string, canal: number) {
        if (grupo) {
            return this.restClientService.post(REST_PATH.grupo.existGroup, {nomeGrupoSelecao : grupo, cdCanal: canal})
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public includeClient(grupo: any) {
        if (grupo) {
            // const temp = {
            //     cdGrupoSelecao: grupo.cdGrupoSelecao,
            //     cdCredencial: grupo.cdCredential,
            //     indAtivo: 'N',
            //     indAtivoRedis: 'N',
            //     nmCredencial: '',
            //     cdUsuarioInclusao: grupo.cdUsuarioInclusao
            //   }​;
            return this.restClientService.post(REST_PATH.grupo.includeClient, grupo)
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public searchGroupsSelectionsByChannel(canal: number) {
        if (canal) {
            return this.restClientService.post(REST_PATH.grupo.searchGroupsSelectionsByChannel, {cdCanal: canal});
        } else {
            return Observable.of({});
        }
    }

    public searchSelectedPublicByGroup(grupoSerial: number) {
        if (grupoSerial) {
            return this.restClientService.post(REST_PATH.grupo.searchSelectedPublicByGroup, {cdGrupoSelecao: grupoSerial});
        } else {
            return Observable.of({});
        }
    }

    public search(grupo: number) {
        if (grupo) {
            return this.restClientService.post(REST_PATH.grupo.search, {cdGrupoSelecao: grupo});
        } else {
            return Observable.of({});
        }
    }

    // public enableDisable(grupo: GrupoSelecao) {
    //     if (grupo) {
    //         return this.restClientService.post(REST_PATH.grupo.enableDisable, JSON.stringify(grupo))
    //             .catch(error => this.handleError(error));
    //     } else {
    //         return Observable.of({});
    //     }
    // }

    public habilitarGrupo(grupo: any) {
        if (grupo) {
            return this.restClientService.post(REST_PATH.grupo.enableDisable, JSON.stringify(grupo))
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public enableDisableClient(grupo: GrupoSelecao) {
        if (grupo) {
            return this.restClientService.post(REST_PATH.grupo.enableDisableClient, JSON.stringify(grupo))
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public removeGroup(grupo: Grupos) {
        if (grupo) {
            return this.restClientService.post(REST_PATH.grupo.removeGroup, JSON.stringify(grupo))
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public removeClient(groupPublicSelection: GroupPublicSelection) {
        if (groupPublicSelection) {
            return this.restClientService.post(REST_PATH.grupo.removeClient, JSON.stringify(groupPublicSelection))
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

}
