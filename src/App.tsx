import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Langs } from './store/lang/types';
import changeLang from './store/lang/actions';
import './assets/css/index.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLang(Langs.EN));
    return function cleanup() {
      dispatch(changeLang(Langs.ZH));
    };
  });
  return <span>App1</span>;
};

export default App;
