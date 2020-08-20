export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export type SET_LOGIN_STATE = typeof SET_LOGIN_STATE;
export const SET_AUTH = 'SET_AUTH';
export type SET_AUTH = typeof SET_AUTH;


export type IsLogin = boolean;
export type Auth = Array<string>;

export interface AuthState {
  isLogin: IsLogin;
  auth: Auth;
}

export interface SetLoginStateAction {
  type: SET_LOGIN_STATE;
  isLogin: IsLogin;
}

export interface SetAutheAction {
  type: SET_AUTH;
  auth: Auth;
}

export type AuthActionTypes =
  | SetLoginStateAction
  | SetAutheAction;
