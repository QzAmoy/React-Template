import { ComponentType } from 'react';

export interface Route {
  title: string;
  key: string;
  component?: () => Promise<{ default: ComponentType<any> }>;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  authCode?: string;
  routes?: Routes;
}

export type Routes = Array<Route>;
