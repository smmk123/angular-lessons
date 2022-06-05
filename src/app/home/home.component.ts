import { Component } from '@angular/core';
import { AuthService } from './../services/v1/auth.service';

@Component({
  selector: 'app-home',

  template: `<div class="container">
  <h1>Home Page</h1>
  <p *ngIf="authService.isLoggedIn()">
    Welcome {{authService.currentUser.name}}
  </p>
  <ul class="list-group">
    <li class="list-group-item" *ngIf="authService.isLoggedIn() && authService.currentUser.admin" ><a routerLink="/admin">Admin</a></li>
    <li class="list-group-item" *ngIf="!authService.isLoggedIn()"><a routerLink="/login">Login</a></li>
    <li class="list-group-item" *ngIf="authService.isLoggedIn()"><a routerLink="" (click)="authService.logout()">Logout</a></li>
  </ul>
  </div>`,

})
export class HomeComponent {

  constructor(public authService: AuthService) { }
}
