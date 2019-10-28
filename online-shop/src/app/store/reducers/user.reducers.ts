import {initialUserState, IUserState} from '../state/user.state';
import {EUserActions, UserActions} from '../actions/user.actions';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default:
      return state;
  }
};
