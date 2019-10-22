import {Injectable} from '@angular/core';
import {AppConfig} from '../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthUser} from '../models/auth-user';

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
  user: AuthUser;

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<AuthUser> {
    const payload = {username, password};
    return this.http.post<AuthUser>(this.authUrl, payload, this.httpOptions);
  }

  setUser(user: AuthUser) {
    this.user = user;
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
