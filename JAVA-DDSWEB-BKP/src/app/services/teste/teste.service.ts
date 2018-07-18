import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/base-service/base.service';
import { RestClientService } from '../../shared/base-service/rest-client.service';
import { BaseParamsService } from '../../shared/base-service/base-params.service';
import { REST_PATH } from '../../shared/app.config';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TesteService extends BaseService {

    constructor(private restClientService: RestClientService, baseParamsService: BaseParamsService) {
        super(baseParamsService);
    }

    public buscar(id: number) {
        if (id) {
            return this.restClientService.get(REST_PATH.canal.buscar)
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

    public listar(body: any): Observable<any> {
        if (body) {
            return this.restClientService.post(REST_PATH.canal.buscar, JSON.stringify(body))
                .catch(error => this.handleError(error));
        } else {
            return Observable.of({});
        }
    }

}
