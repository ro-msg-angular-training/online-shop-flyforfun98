import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthUser} from '../models/auth-user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  errorMessage: string;
  user: AuthUser;

  loginForm = this.formBuilder.group({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {

    const username = this.username.value;
    const password = this.password.value;
    this.authService.authenticate(username, password).subscribe(
      user => {
        this.user = user;
        this.authService.setUser(this.user);
        this.errorMessage = null;
        this.router.navigate(['products']);
      }, error => {
        this.errorMessage = 'Invalid Login Credentials!';
      }
    );
  }

}
