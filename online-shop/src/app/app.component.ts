import {Component, OnInit} from '@angular/core';
import {AuthService} from './login-page/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    './products/products-list/products-list.component.css']
})
export class AppComponent {
  title = 'online-shop';

  authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }


  onLogOut() {
    this.authService.logOut();
  }
}
