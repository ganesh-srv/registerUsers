import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { Subject, Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
    providedIn: 'root'
})


export class LoginService {
    private createUserUrl;
    private checkUserUrl;
    constructor(private readonly http: HttpClient) {
        this.createUserUrl = `http://localhost:3333/api/users/create`;
        this.checkUserUrl = `http://localhost:3333/api/users/check`;
    }


    isValidUser() {
      
        
        if (localStorage['jwt']) {
            var decoded: any = jwt_decode(localStorage['jwt']);
            const { exp } = decoded;
            if (exp > Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } else {
            return false
        }


    }

    createUsers(payload: any) {
        console.log("heyy in login service");

        return this.http.post(this.createUserUrl, payload).pipe(map((res: any) => {
            return res;
        }));

    }


    checkUser(payload: any) {
        console.log("check user", payload);

        return this.http.post(this.checkUserUrl, payload).pipe(map((res: any) => {
            return res;
        }));
    }





    //  getOrganizations(jwt) {
    //   localStorage.setItem('token', jwt);
    //   return this.http.get(this.getOrganizationsUrl).pipe(map((res: any) => {
    //     return res;
    //   }))
    // }

    // validateOTP(payload) {
    //   return this.http.post(this.validateOTPUrl, payload).pipe(map((res: any) => {
    //     return res;
    //   }));
    // }

}
