export const SET_LANG = 'SET_LANG';
export type SET_LANG = typeof SET_LANG;
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export type SET_LOGIN_STATE = typeof SET_LOGIN_STATE;
export const SET_AUTH = 'SET_AUTH';
export type SET_AUTH = typeof SET_AUTH;

export enum Langs {
  ZH = 'zh_CN',
  EN = 'en_US',
}

export type IsLogin = boolean;
export type Lang = string;
export type Auth = Array<string>;

export interface SysConfigState {
  lang: Lang;
  isLogin: IsLogin;
  auth: Auth;
}

export interface SetLangAction {
  type: SET_LANG;
  lang: Lang;
}

export interface SetLoginStateAction {
  type: SET_LOGIN_STATE;
  isLogin: IsLogin;
}

export interface SetAutheAction {
  type: SET_AUTH;
  auth: Auth;
}

export type SysConfigActionTypes =
  | SetLangAction
  | SetLoginStateAction
  | SetAutheAction;
