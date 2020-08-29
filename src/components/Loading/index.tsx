import React from 'react';
import { Spin } from 'antd';
import './index.less';

export default () => {
  return <div className="spin-wrapper"><Spin tip="Loading" /></div>;
};
