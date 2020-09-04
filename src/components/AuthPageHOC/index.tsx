import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  setOpenKeys,
  setSelectedKeys,
  setCurrentOpenKeys,
  setLoadStatus,
} from '@/store/sysConfigs/actions';
import { RootState } from '@/store';

interface IProps {
  dispatch: Dispatch;
  collapsed: boolean;
  isReload: boolean;
}
const AuthPageHOC = (selectedKeys: Array<string>, openKeys: Array<string>) => {
  const mapStateToprops = (state: RootState) => {
    const { collapsed, isReload } = state.sysConfigs;
    return { collapsed, isReload };
  };
  return (WrapperComponent: React.ComponentType) =>
    connect(mapStateToprops)(
      class WrappedComponent extends Component<IProps> {
        componentDidMount() {
          const { isReload } = this.props;
          if (isReload) {
            console.log('hoc Reload', isReload);
            this.handleSetPage();
          }
        }

        handleSetPage = () => {
          const { dispatch, collapsed } = this.props;

          if (!collapsed) {
            dispatch(setOpenKeys(openKeys));
          }
          dispatch(setLoadStatus(false));
          dispatch(setCurrentOpenKeys(openKeys));
          dispatch(setSelectedKeys(selectedKeys));
        };

        render() {
          return <WrapperComponent />;
        }
      }
    );
};

export default AuthPageHOC;
