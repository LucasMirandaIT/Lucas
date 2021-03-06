import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomHttpEventObserverService {
    afterRequest: Subject<void> = new Subject<void>();
    beforeRequest: Subject<void> = new Subject<void>();
}
