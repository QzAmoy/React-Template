import { ReactElement } from 'react';
import { RouteProps } from 'react-router-dom';

export interface Route extends RouteProps {
  title: string;
  key: string;
  authCode?: string;
  routes?: Routes;
  icon?: ReactElement;
}

export type Routes = Array<Route>;
