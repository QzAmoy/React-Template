import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Langs } from '@/store/sysConfigs/types';
import { setLang } from '@/store/sysConfigs/actions';

export default () => {
  const dispatch = useDispatch();
  const lang = useSelector((store: RootState) => store.sysConfigs.lang);
  const handleSetLang = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLang(e.target.value));
  };
  const langKeys = Object.keys(Langs);
  const options = langKeys.map((key) => (
    <option key={key} value={Langs[key]}>
      {Langs[key]}
    </option>
  ));
  return (
    <select value={lang} onChange={handleSetLang}>
      {options}
    </select>
  );
};
