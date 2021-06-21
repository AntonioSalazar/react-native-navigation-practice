import {AuthState} from './AuthContext';

type AuthAction =
  | {
      type: 'signIn';
    }
  | {type: 'signOut'}
  | {type: 'changeFavIcon'; payload: string};

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

    case 'signOut':
      return {
        ...state,
        isLoggedin: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    default:
      return state;
  }
};
