import {ShoppingCartService} from '../../shopping-cart/shopping-cart.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {
  CreateCheckout, CreateCheckoutSuccess,
  EShoppingCartActions
} from '../actions/shopping-cart.actions';
import {map, switchMap, tap} from 'rxjs/operators';

export class ShoppingCartEffects {

  /*
    No side-effects available for this tutorial => no use of effects for this class
  */

  @Effect()
  createCheckout$ = this.actions$.pipe(
    ofType<CreateCheckout>(EShoppingCartActions.CreateCheckout),
    map(action => action.payload),
    switchMap(payload => this.cartService.checkout(payload).pipe(
      map(newCheckout => {
        return new CreateCheckoutSuccess(payload);
      })
    )));

  @Effect({dispatch: false})
  createCheckoutSuccess$ = this.actions$.pipe(
    ofType<CreateCheckoutSuccess>(EShoppingCartActions.CreateCheckoutSuccess),
    tap(() => this.router.navigate(['products']))
  );

  constructor(private cartService: ShoppingCartService,
              private actions$: Actions,
              private router: Router) {
  }
}
