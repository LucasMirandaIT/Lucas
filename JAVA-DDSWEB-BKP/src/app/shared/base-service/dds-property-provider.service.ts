import {Injectable} from '@angular/core';
import { PropertyProviderService, DDS_HTTP_URL, DDS_BUILD_TIMESTAMP } from './property-provider.service';

@Injectable()
export class DdsPropertyProviderService extends PropertyProviderService {

    getProperty(name: string): string {
        switch (name) {
            case DDS_HTTP_URL:
                return 'https://dds.paas.isbanbr.dev.corp/dds-back-cadastro';
                // return 'http://localhost:8080/java-dds-digital-back/dds-back-cadastro';
            case DDS_BUILD_TIMESTAMP:
                return process.env.buildTimestamp;
        }
        return null;
    }

}
