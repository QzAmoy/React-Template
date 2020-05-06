import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { Langs } from './store/sysConfigs/types';
import { setLang } from './store/sysConfigs/actions';
import './assets/css/index.css';

const App = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store: RootState) => store.sysConfigs.lang);
  const handleSetLang = () => {
    dispatch(setLang(lang === Langs.ZH ? Langs.EN : Langs.ZH));
  };
  return (
    <span>
      {lang}
      <button type="button" onClick={handleSetLang}>
        lang
      </button>
    </span>
  );
};
export default App;
