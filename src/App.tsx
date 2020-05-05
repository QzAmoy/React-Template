import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { Langs } from './store/langConfig/types';
import changeLang from './store/langConfig/actions';
import './assets/css/index.css';

const App = () => {
  const dispatch = useDispatch();
  const lang = useSelector((store: RootState) => store.langConfig.lang);
  const handleChangeLang = () => {
    dispatch(changeLang(lang === Langs.ZH ? Langs.EN : Langs.ZH));
  };
  return (
    <span>
      {lang}
      <button type="button" onClick={handleChangeLang}>
        lang
      </button>
    </span>
  );
};
export default App;
