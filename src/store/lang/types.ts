export const CHANGE_LANG = 'CHANGE_LANG';

export enum langs {
  ZH = 'zh_CN',
  EN = 'en_US',
}
export interface langState {
  lang: langs
}
export interface ChangeLangAction {
  type: typeof CHANGE_LANG;
  lang: langs;
}
