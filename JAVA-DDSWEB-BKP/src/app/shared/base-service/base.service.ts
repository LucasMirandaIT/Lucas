import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseParamsService } from './base-params.service';

@Injectable()
export abstract class BaseService {

    constructor(protected baseServiceParams: BaseParamsService) {
    }

    public handleError(error: any): Observable<any> {
        if (error.code === 500) {
            this.baseServiceParams.notificationService.error({
                title: 'Erro',
                message: error.message
            });
        } else {
            const args: any[] = error.arguments;
            if (args && args.length) {
                for (const a of args) {
                    const message = (a.detail) ? `${a.message} - ${a.detail}` : a.message;
                    this.baseServiceParams.notificationService.error(message);
                }
                return;
            }
            this.baseServiceParams.notificationService.error(error['message'] || JSON.stringify(error));
        }
        return Observable.throw(error);
    }

}
