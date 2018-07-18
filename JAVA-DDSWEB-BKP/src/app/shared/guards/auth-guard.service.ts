import { Injectable, Output, EventEmitter } from '@angular/core';
import { CanActivate, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../commom/dds-login/auth/auth.service';
import { UserAuth } from '../../commom/dds-login/auth/userAuth.model';

@Injectable()
export class AuthGuardService implements CanActivate {

    @Output()  userLogado = new EventEmitter<any>();

    constructor(private authService: AuthService, private router: Router) { }

    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (process.env.localHost !== null && process.env.localHost !== undefined && process.env.localHost === 'true') {
            return true;
        }
        const temp = JSON.parse(sessionStorage.getItem('Item 1'));
        if (sessionStorage.getItem('Item 1') === null || temp === undefined || temp.permissoes === undefined) {
            this.router.navigate(['/login']);
            return false;
        }

        const tam = temp.permissoes.hierarquiaPerfil.length;
        for (let i = 0; i < tam; i++) {
            if (route.routeConfig.path === temp.permissoes.hierarquiaPerfil[i].linkTransacao) {
                this.userLogado.emit(temp);
                return true;
            }
        }

        this.router.navigate(['/no-access']);
        return false;
    }

    canLoad(route: Route): boolean {
        return true;
    }

    setLogout() {
        this.userLogado.emit(null);
        sessionStorage.clear();
    }
}
