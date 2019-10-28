import {Action} from '@ngrx/store';
import {AuthUser} from '../../models/auth-user';
import {AuthCredentials} from '../../models/auth-credentials';

export enum EUserActions {
  GetUser = '[Auth-User] Get User',
  GetUserSuccess = '[User] Get User Success'
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;

  constructor(public  payload: AuthCredentials) {
  }
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;

  constructor(public payload: AuthUser) {
  }
}

export type UserActions =
  GetUser
  | GetUserSuccess;
