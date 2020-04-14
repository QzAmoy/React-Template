export const CHANGE_LANG = 'CHANGE_LANG';
export type CHANGE_LANG = typeof CHANGE_LANG;

export enum Langs {
  ZH = 'zh_CN',
  EN = 'en_US',
}
export interface LangState {
  lang: Langs
}
export interface ChangeLangAction {
  type: CHANGE_LANG;
  lang: Langs;
}
