import { DdsLoginComponent } from './dds-login.component';
import { AuthService } from './auth/auth.service';

describe ('DdsLoginComponent', () => {

    const component = new DdsLoginComponent(null);

    it ('test variables', () => {
        expect(component.userLogin).toBe('X207809');
        expect(component.passwordLogin).toBe('123');
    });

});

describe ('AuthService', () => {

    const service = new AuthService(null);

    it ('test variables', () => {
        expect(service.userAuth.logado).toBe(undefined);
        expect(service.RetornoMBS.length).toBe(2);
    });

    // it ('AutenticarLogin()', () => {
    //     service.AutenticarLogin('X207807', '123');
    // });

});
