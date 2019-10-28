import {AuthUser} from '../../models/auth-user';

export interface IUserState {
  selectedUser: AuthUser;
}

export const initialUserState: IUserState = {
  selectedUser: null
};

