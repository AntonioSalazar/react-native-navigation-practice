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
  signOut: () => void;
  setFavIcon: (iconName: string) => void;
  changeUserName: (username: string) => void;
}

//create the context
export const AuthContext = createContext({} as AuthContextProps);

//component that provides the state
const AuthProvider = (props: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const setFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUserName = (username: string) => {
    dispatch({type: 'changeUserName', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        setFavIcon,
        changeUserName,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
