import {Injectable} from '@angular/core';
export const DDS_HTTP_URL = 'DDS_HTTP_URL';
export const DDS_BUILD_TIMESTAMP = 'DDS_BUILD_TIMESTAMP';

@Injectable()
export class PropertyProviderService {

    getProperty(name: string): string {
        throw new Error('You must extend the PropertyProvider class');
    }

}
