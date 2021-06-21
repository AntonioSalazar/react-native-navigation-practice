import React, {createContext, useReducer} from 'react';
import {AuthReducer} from './AuthReducer';

//How our initial state should look like
export interface AuthState {
  isLoggedin: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Our actual initial state
export const authInitialState: AuthState = {
  isLoggedin: false,
  username: undefined,
  favoriteIcon: undefined,
};

//and interface of the props that will be exposed by this context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

//create the context
export const AuthContext = createContext({} as AuthContextProps);

//component that provides the state
const AuthProvider = (props: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
