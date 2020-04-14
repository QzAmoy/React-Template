import { ChangeLangAction, CHANGE_LANG, Langs } from './types';

const changeLang = (lang: Langs): ChangeLangAction => ({
  type: CHANGE_LANG,
  lang,
});
export default changeLang;
