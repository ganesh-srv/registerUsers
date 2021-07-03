import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class HomeGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: LoginService
    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // var decoded: any = jwt_decode(localStorage['token']);
        // const { exp } = decoded;

        if (this.authenticationService.isValidUser()) {
            return true;
        } else {
            console.log("jeui");
            this.router.navigate(['login'])
            return false;
        }

    }

}


