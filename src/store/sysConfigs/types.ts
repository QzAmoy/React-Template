export const SET_LANG = 'SET_LANG';
export type SET_LANG = typeof SET_LANG;
export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';
export type SET_LOGIN_STATE = typeof SET_LOGIN_STATE;

export enum Langs {
  ZH = 'zh_CN',
  EN = 'en_US',
}

export type IsLogin = boolean;
export type Lang = string;

export interface SysConfigState {
  lang: Lang;
  isLogin: IsLogin;
}

export interface SetLangAction {
  type: SET_LANG;
  lang: Lang;
}

export interface SetLoginStateAction {
  type: SET_LOGIN_STATE;
  isLogin: IsLogin;
}

export type SysConfigActionTypes = SetLangAction | SetLoginStateAction;
