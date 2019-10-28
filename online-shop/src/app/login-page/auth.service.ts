import {Injectable} from '@angular/core';
import {AppConfig} from '../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthUser} from '../models/auth-user';
import {IAppState} from '../store/state/app.state';
import {Store} from '@ngrx/store';
import {selectSelectedUser} from '../store/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = AppConfig.API_ENDPOINT + '/login';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private userState$: Observable<any>;
  user: AuthUser;

  constructor(private http: HttpClient,
              private store: Store<IAppState>) {

    this.userState$ = this.store.select(selectSelectedUser);
    this.userState$.subscribe(user => this.user = user);
  }

  authenticate(username: string, password: string): Observable<AuthUser> {
    const payload = {username, password};
    return this.http.post<AuthUser>(this.authUrl, payload, this.httpOptions);
  }


  isAdmin(): boolean {
    return this.user.roles.includes(AppConfig.ROLE_ADMIN);
  }

  isUser(): boolean {
    return this.user.roles.includes(AppConfig.ROLE_USER);
  }

  isCustomer(): boolean {
    return this.user.roles.includes(AppConfig.ROLE_CUSTOMER);
  }

  logOut() {
    this.user = null;
  }
}
