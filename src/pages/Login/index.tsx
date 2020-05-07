import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import { RootState } from '../../store';
import { IsLogin } from '../../store/sysConfigs/types';

interface IProps extends RouteChildrenProps {
  isLogin: IsLogin;
}
class Index extends Component<IProps> {
  componentDidMount() {
    const { isLogin, history } = this.props;
    if (isLogin) {
      history.push('/admin');
    }
  }

  render() {
    return <div>Login</div>;
  }
}

const mapStateToprops = (state: RootState) => ({
  isLogin: state.sysConfigs.isLogin,
});
export default withRouter(connect(mapStateToprops)(Index));
