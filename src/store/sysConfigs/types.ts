export const SET_LANG = 'SET_LANG';
export type SET_LANG = typeof SET_LANG;

export enum Langs {
  ZH = 'zh_CN',
  EN = 'en_US',
}

export type Lang = string;

export interface SysConfigState {
  lang: Lang;
}

export interface SetLangAction {
  type: SET_LANG;
  lang: Lang;
}

export type SysConfigActionTypes = SetLangAction;
