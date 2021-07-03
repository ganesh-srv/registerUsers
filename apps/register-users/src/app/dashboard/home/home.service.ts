import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { Subject, Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
    providedIn: 'root'
})


export class HomeService {
    private getAllUsersUrl;
    constructor(private readonly http: HttpClient) {
        this.getAllUsersUrl = `http://localhost:3333/api/users/getAll`;
    }




    getAllUsers(){
        return this.http.get(this.getAllUsersUrl).pipe(map((res: any) => {
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
