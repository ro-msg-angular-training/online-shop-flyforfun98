import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {EUserActions, GetUser, GetUserSuccess} from '../actions/user.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import {AuthService} from '../../login-page/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    /* Need to map the Observable<AuthUser> into AuthUser
        For this, first we need to apply pipe and then map inside the pipe
     */
    switchMap(payload =>
      this.authService.authenticate(payload.username, payload.password).pipe(
        map(selectedUser => new GetUserSuccess(selectedUser)
        ))
    ));

  @Effect({dispatch: false})
  getAuthUserSuccess$ = this.actions$.pipe(
    ofType<GetUserSuccess>(EUserActions.GetUserSuccess),
    tap(
      () => {
        this.router.navigateByUrl('/products');
      }
    )
  );

  constructor(private authService: AuthService,
              private actions$: Actions,
              private router: Router) {
  }
}
