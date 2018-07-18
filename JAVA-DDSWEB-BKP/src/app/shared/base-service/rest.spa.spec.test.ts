import { Router } from '@angular/router';
import { RESTClientBuilder } from './rest.client.builder';
import { Http, RequestMethod } from '@angular/http';
import { CustomHttpEventObserverService } from './custom-http-event-observer.service';
import { PropertyProviderService } from './property-provider.service';
import { RequestModifierService } from './request-modifier.service';

describe('RESTClientBuilder', () => {
      
  const component = new RESTClientBuilder(null, null, null, null, null);

    // it('test variables', () => {
    //     expect(component.lado).toBe('end');
    //     expect(component._show).toBe(false);
    //     component._show = true;
    // });

    // it('test changes()', () => {
    //     component.changes(null);
    // });

});
