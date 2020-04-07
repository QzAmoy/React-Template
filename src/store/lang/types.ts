export const CHANGE_LANG = 'CHANGE_LANG';
export type CHANGE_LANG = typeof CHANGE_LANG;

export enum langs {
  ZH = 'zh_CN',
  EN = 'en_US',
}
export interface langState {
  lang: langs
}
export interface ChangeLangAction {
  type: CHANGE_LANG;
  lang: langs;
}
