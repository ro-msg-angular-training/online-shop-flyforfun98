import {Component, OnInit} from '@angular/core';
import {AuthService} from './login-page/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shop';

  constructor(private authService: AuthService) {}

  onLogOut() {
    this.authService.logOut();
  }
}
