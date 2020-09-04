import {
  SysConfigState,
  Langs,
  SET_LANG,
  SET_COLLAPSED,
  SET_SELECTED_KEYS,
  SET_OPEN_KEYS,
  SET_CURRENT_OPEN_KEYS,
  SysConfigActionTypes,
  SET_LOAD_STATUS,
} from './types';

const initialState = {
  lang: Langs.ZH,
  collapsed: false,
  selectedKeys: [],
  openKeys: [],
  currentOpenKeys: [],
  isReload: true,
};
const sysConfigs = (
  state = initialState,
  action: SysConfigActionTypes
): SysConfigState => {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        lang: action.lang,
      };
    case SET_COLLAPSED:
      return {
        ...state,
        collapsed: action.collapsed,
      };
    case SET_OPEN_KEYS:
      return {
        ...state,
        openKeys: action.openKeys,
      };
    case SET_CURRENT_OPEN_KEYS:
      return {
        ...state,
        currentOpenKeys: action.currentOpenKeys,
      };
    case SET_SELECTED_KEYS:
      return {
        ...state,
        selectedKeys: action.selectedKeys,
      };
    case SET_LOAD_STATUS:
      return {
        ...state,
        isReload: action.isReload,
      };
    default:
      return state;
  }
};
export default sysConfigs;
