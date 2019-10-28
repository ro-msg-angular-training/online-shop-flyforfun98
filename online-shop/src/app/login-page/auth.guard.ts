import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AuthUser} from '../models/auth-user';
import {IAppState} from '../store/state/app.state';
import {selectSelectedUser} from '../store/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private user: AuthUser;

  constructor(private router: Router,
              private store: Store<IAppState>) {

    this.store.select(selectSelectedUser).subscribe(user => this.user = user);
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.user) {
      return !next.data.roles || this.user.roles.includes(next.data.roles);
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
