import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Auth } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: Auth, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.authenticated()) {
            console.log('Auth Guard Pass');
            return true;
        } else {
            console.log('Blocked by Auth Guard');
            this.router.navigate(['/']);
            return false;
        }
    }
}
