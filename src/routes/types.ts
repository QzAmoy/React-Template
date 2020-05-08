import { ComponentType } from 'react';

export interface Route {
  key: string;
  component?: () => Promise<{ default: ComponentType<any> }>;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  routes?: Routes;
}

export type Routes = Array<Route>;
