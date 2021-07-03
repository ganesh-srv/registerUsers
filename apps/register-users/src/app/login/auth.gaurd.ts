import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
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
            console.log("srv");
            
            this.router.navigate(['home']);
            return false;
        } else {
            console.log("jeui");
            
          return true;
        }
        if (localStorage['token']) {
            var decoded: any = jwt_decode(localStorage['token']);
            const { exp } = decoded;
            // console.log("decode", decoded);
            this.router.navigate(['home']);
            return true;
            // if (exp > Date.now() / 1000) {
            //     console.log("im there");
            //     return true;
            // }
        } else {
            // console.log("auth gaurd failed");
            // this.router.navigate(["login"]);
            return true;
        }
    }

}


