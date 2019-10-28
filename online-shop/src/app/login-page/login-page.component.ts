import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthUser} from '../models/auth-user';
import {Router} from '@angular/router';
import {IAppState} from '../store/state/app.state';
import {Store} from '@ngrx/store';
import {GetUser} from '../store/actions/user.actions';
import {AuthCredentials} from '../models/auth-credentials';


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
              private router: Router,
              private store: Store<IAppState>) {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {

    const payload = new AuthCredentials();
    payload.username = this.username.value;
    payload.password = this.password.value;

    this.store.dispatch(new GetUser(payload));
  }

}
