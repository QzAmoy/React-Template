export const SET_LANG = 'SET_LANG';
export type SET_LANG = typeof SET_LANG;
export const SET_COLLAPSED = 'SET_COLLAPSED';
export type SET_COLLAPSED = typeof SET_COLLAPSED;
export const SET_OPEN_KEYS = 'SET_OPEN_KEYS';
export type SET_OPEN_KEYS = typeof SET_OPEN_KEYS;
export const SET_CURRENT_OPEN_KEYS = 'SET_CURRENT_OPEN_KEYS';
export type SET_CURRENT_OPEN_KEYS = typeof SET_CURRENT_OPEN_KEYS;
export const SET_SELECTED_KEYS = 'SET_SELECTED_KEYS';
export type SET_SELECTED_KEYS = typeof SET_SELECTED_KEYS;
export const SET_LOAD_STATUS = 'SET_LOAD_STATUS';
export type SET_LOAD_STATUS = typeof SET_LOAD_STATUS;

export enum Langs {
  ZH = 'zh_CN',
  EN = 'en_US',
}

export type Lang = string;

export interface SysConfigState {
  lang: Lang;
  collapsed: boolean;
  selectedKeys: Array<string>;
  openKeys: Array<string>;
  currentOpenKeys: Array<string>;
  isReload: boolean;
}

export interface SetLangAction {
  type: SET_LANG;
  lang: Lang;
}
export interface SetCollapsedAction {
  type: SET_COLLAPSED;
  collapsed: boolean;
}
export interface SetOpenKeysAction {
  type: SET_OPEN_KEYS;
  openKeys: Array<string>;
}
export interface SetCurrentOpenKeysAction {
  type: SET_CURRENT_OPEN_KEYS;
  currentOpenKeys: Array<string>;
}
export interface SetSelectedKeysAction {
  type: SET_SELECTED_KEYS;
  selectedKeys: Array<string>;
}
export interface SetLoadStatusAction {
  type: SET_LOAD_STATUS;
  isReload: boolean;
}

export type SysConfigActionTypes =
  | SetLangAction
  | SetCollapsedAction
  | SetOpenKeysAction
  | SetCurrentOpenKeysAction
  | SetSelectedKeysAction
  | SetLoadStatusAction;
