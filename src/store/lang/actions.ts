import { ChangeLangAction, CHANGE_LANG, langs } from './types';

const changeLang = (lang: langs): ChangeLangAction => ({
  type: CHANGE_LANG,
  lang,
});
export default changeLang;