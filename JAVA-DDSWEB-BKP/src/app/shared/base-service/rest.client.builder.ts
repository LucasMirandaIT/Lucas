import { Headers, Http, RequestMethod, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { PathModel } from './path.model';
import { RequestModifierService } from './request-modifier.service';
import { PropertyProviderService, DDS_HTTP_URL} from './property-provider.service';
import { CustomHttpEventObserverService } from './custom-http-event-observer.service';
// import {LoggerHelper} from '../logger.helper';

export interface RestClientSender {
    send(): Observable<any>;
}

export interface BodyRestClientBuilder {
    body(body: any): RestClientSender;

    addHeader(name: string, value: string): BodyRestClientBuilder & RestClientSender;

    addParam(name: string, value: string): BodyRestClientBuilder & RestClientSender;
}

export interface URLRestClientBuilder {
    url(url: string | PathModel): BodyRestClientBuilder & RestClientSender;
}

export interface RestRequestBuilder {

    json(): URLRestClientBuilder;

    url(url: string | PathModel): BodyRestClientBuilder & RestClientSender;
}

export class RESTClientBuilder implements RestRequestBuilder, URLRestClientBuilder, RestClientSender, BodyRestClientBuilder {
    // logger = LoggerHelper.getLogger(RESTClientBuilder);

   _headers: Headers = new Headers();
   _search: URLSearchParams = new URLSearchParams();
   _url: string;
   _body: any;
    // _withAuthentication = false;
   _withCustomProperties = false;
   _requestBodyTransform: Function = (value: any) => value;
   _responseBodyTransform: Function = (value: any) => value;

    constructor(
       public http: Http,
       public _method: RequestMethod,
       public _httpEvent: CustomHttpEventObserverService,
       public propertyProvider: PropertyProviderService,
       public requestModifier: RequestModifierService) {
    }

    json(): URLRestClientBuilder {
        this._headers.append('Content-Type', 'application/json');
        this._requestBodyTransform = (value: any) => {
            if (!(typeof value === 'string')) {
                value = JSON.stringify(value);
            }
            return value;
        };
        this._responseBodyTransform = (result: Response) => {
            // this.logger.debug('extractBody(): %o', result);
            return result.text() === '' ? null : result.json();
        };
        return this;
    }

    url(path: string | PathModel): BodyRestClientBuilder & RestClientSender {
        let url: string = this.propertyProvider.getProperty(DDS_HTTP_URL);
        if (!url) {
            throw new Error('Please define the \'DDS_HTTP_URL\' property within your implementation of PropertyProvider');
        }

        url = url.endsWith('/') ? url.substring(0, url.length - 1) : url;
        this._url = url + path.toString();
        return this;
    }

    // withAuthentication(): RESTClientBuilder {
    //     this._withAuthentication = true;
    //     return this;
    // }

    withCustomProperties(): RESTClientBuilder {
        this._withCustomProperties = true;
        return this;
    }

    addHeader(name: string, value: string): BodyRestClientBuilder & RestClientSender {
        this._headers.append(name, value);
        return this;
    }

    addParam(name: string, value: string): BodyRestClientBuilder & RestClientSender {
        this._search.append(name, value);
        return this;
    }

    body(body: any): RestClientSender {
        this._body = body;
        return this;
    }

    send(): Observable<any> {
        let o: Observable<any> = null;

        // this.logger.debug('%s: [%s]', this._method, this._url);

        if (this._withCustomProperties && this.requestModifier) {
            this.requestModifier.setCustomProperties(this);
        }

        this._httpEvent.beforeRequest.next();
        switch (this._method) {
            case RequestMethod.Get:
                o = this.http.get(this._url, {headers: this._headers, search: this._search});
                break;
            case RequestMethod.Post:
                o = this.http.post(this._url, this._requestBodyTransform(this._body), {headers: this._headers, search: this._search});
                break;
            case RequestMethod.Put:
                o = this.http.put(this._url, this._requestBodyTransform(this._body), {headers: this._headers, search: this._search});
                break;
            case RequestMethod.Delete:
                o = this.http.delete(this._url, {headers: this._headers, search: this._search});
                break;
        }
        o = o.map(r => this._responseBodyTransform(r))
            .catch(e => this.handleError(this._method, e))
            .finally(() => this._httpEvent.afterRequest.next());
        return o;
    }

   handleError(method: RequestMethod, error: Response): Observable<any> {
        // this.logger.error('handleError(): %o', error);

        let errorBody: any;
        switch (error.status) {
            case 401:
                errorBody = {message: 'Usuário não autorizado'};
                console.log(error);
                break;
            case 404:
                errorBody = {message: 'Página não encontrada'};
                console.log(error);
                break;
            case 450:
                errorBody = {message: 'Ocorreu um erro na integração do sistema'};
                break;
            case 0:
                errorBody = {message: 'Ocorreu um erro na integração do sistema'};
            break;
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
                errorBody = {
                    code: 500,
                    method: method,
                    url: this._url,
                    body: this._body,
                    error: this.getErrorBody(error),
                    message: 'Ocorreu um erro interno no servidor'
                };
                break;
            default:
                errorBody = {message: 'Ocorreu um erro na integração do sistema'};
                console.log(error);
        }
        return Observable.throw(errorBody);
    }

   getErrorBody(error: Response) {
        let errorBody: any;
        try {
            errorBody = error.json(); // gera exceção se json não é válido
        } catch (e) {
            errorBody = error.toString();
        }
        return errorBody;
    }

}
