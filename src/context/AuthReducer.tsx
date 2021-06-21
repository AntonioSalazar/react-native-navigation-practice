import {AuthState} from './AuthContext';

type AuthAction = {
  type: 'signIn';
};

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedin: true,
        username: 'no-username-yet',
      };

    default:
      return state;
  }
};
