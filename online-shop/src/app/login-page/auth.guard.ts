import {Injectable, OnInit} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Store} from '@ngrx/store';
import {AuthUser} from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router,
              private authService: AuthService) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.user) {
      return !next.data.roles || this.authService.user.roles.includes(next.data.roles);
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
