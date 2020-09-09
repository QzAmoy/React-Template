import {
  SetLangAction,
  SET_LANG,
  SetCollapsedAction,
  SET_COLLAPSED,
  SetOpenKeysAction,
  SET_OPEN_KEYS,
  SetCurrentOpenKeysAction,
  SET_CURRENT_OPEN_KEYS,
  SetSelectedKeysAction,
  SET_SELECTED_KEYS,
  SetLoadStatusAction,
  SET_LOAD_STATUS,
} from './types';

export const setLang = (lang: string): SetLangAction => ({
  type: SET_LANG,
  lang,
});

export const setCollapsed = (collapsed: boolean): SetCollapsedAction => ({
  type: SET_COLLAPSED,
  collapsed,
});

export const setOpenKeys = (openKeys: Array<string>): SetOpenKeysAction => ({
  type: SET_OPEN_KEYS,
  openKeys,
});

export const setCurrentOpenKeys = (
  currentOpenKeys: Array<string>
): SetCurrentOpenKeysAction => ({
  type: SET_CURRENT_OPEN_KEYS,
  currentOpenKeys,
});

export const setSelectedKeys = (
  selectedKeys: Array<string>
): SetSelectedKeysAction => ({
  type: SET_SELECTED_KEYS,
  selectedKeys,
});

export const setLoadStatus = (isReload: boolean): SetLoadStatusAction => ({
  type: SET_LOAD_STATUS,
  isReload,
});
