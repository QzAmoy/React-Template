import React, { PureComponent } from 'react';
import AuthPageHOC from '@components/AuthPageHOC';
import LangSelector from '@components/LangSelector';

interface IProps {}
interface IState {
  index: Number;
}
class Index extends PureComponent<IProps, IState> {
  timeout = null;

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <LangSelector />
      </div>
    );
  }
}

export default AuthPageHOC(['userInfo'], ['admin'])(Index);
