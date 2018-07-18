import { Injectable, Optional } from '@angular/core';
import { Http, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PathModel } from './path.model';
import { RESTClientBuilder, RestRequestBuilder} from './rest.client.builder';
import { RequestModifierService } from './request-modifier.service';
import { CustomHttpEventObserverService } from './custom-http-event-observer.service';
import { PropertyProviderService } from './property-provider.service';

export type RequestMethodName = 'Get' | 'Post' | 'Put' | 'Delete' | 'Options' | 'Head' | 'Patch';

@Injectable()
export class RestClientService {

    //public logger: any = LoggerHelper.getLogger(RESTClient);

    constructor(protected http: Http,
               public _event: CustomHttpEventObserverService,
               public propertyProvider: PropertyProviderService,
                @Optional()public requestModifier: RequestModifierService) {
        if (this.http === null || this.http === undefined) {
            // this.logger.error('constructor(): %s', 'O objeto http não pode ser carregado!');
        }
    }

    public request(method: RequestMethodName | RequestMethod): RestRequestBuilder {
        if (typeof method === 'string') {
            method = RequestMethod[method];
        }
        return new RESTClientBuilder(this.http, method as RequestMethod, this._event, this.propertyProvider, this.requestModifier)
            .withCustomProperties();
    }

    public get(path: string | PathModel, queryParams?: { [propName: string]: any }): Observable<any> {
        const request = this.request(RequestMethod.Get).json().url(path);
        if (queryParams) {
            for (const key of Object.keys(queryParams)) {
                const value = queryParams[key];
                request.addParam(key, value ? value.toString() : value);
            }
        }
        return request.send();
    }

    public post(path: string | PathModel, body: any): Observable<any> {
        return this.request(RequestMethod.Post).json().url(path).body(body).send();
    }

    public put(path: string | PathModel, body: any): Observable<any> {
        return this.request(RequestMethod.Put).json().url(path).body(body).send();
    }

    public delete(path: string | PathModel): Observable<any> {
        return this.request(RequestMethod.Delete).json().url(path).send();
    }

    public save(path: string | PathModel, model: any): Observable<any> {
        if (model === null || model === undefined) {
            return Observable.create();
        }

        if (model.id) {
            return this.put(path, model);
        }

        return this.post(path, model);
    }

}
