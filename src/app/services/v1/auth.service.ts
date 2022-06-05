import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials: any) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .pipe(
        map((response:any) =>{
          console.log(response);
          let result=response;
          console.log(result.token);
          if(result && result.token){
            localStorage.setItem('token', result.token);
            return true;
          }
          return false;
        })
      );
  }

  logout() { 
    localStorage.removeItem('token');
    console.log('removed token');
    location.reload();
  }

  isLoggedIn() { 
    //// npm i @auth0/angular-jwt

    // let jwtHelper = new JwtHelperService();
    // return jwtHelper.isTokenExpired();


    let jwtHelper = new JwtHelperService();
    let token =localStorage.getItem('token');

    console.log('is Token Expired: ' + jwtHelper.isTokenExpired());
    console.log('token'+token);

    if(token===null)
      return false;

    let decodeToken= jwtHelper.decodeToken(token);
    console.log('tdecoded'+JSON.stringify(decodeToken));

    let experiationDate =jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log("exp date: "+ experiationDate);
    console.log("token expired: "+ isExpired)

    return !isExpired;
  }

  get currentUser(){
    let token =localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }
}

