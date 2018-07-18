import { Injectable } from '@angular/core';
import { BodyRestClientBuilder } from './rest.client.builder';

@Injectable()
export abstract class RequestModifierService {

    public abstract setCustomProperties(restClientBuilder: BodyRestClientBuilder): void;

}
