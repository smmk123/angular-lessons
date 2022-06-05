import { state } from '@angular/animations';
import { Statement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router)  { }

  canActivate(route: any, state: RouterStateSnapshot): boolean {
      if(this.authService.isLoggedIn()) return true;

      this.router.navigate(['/login'],{queryParams: {returnUrl: state.url}});
      return false;
  }
}
