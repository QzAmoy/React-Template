import React, { CSSProperties } from 'react';
import * as Icons from '@ant-design/icons';

interface IProps {
  iconType: string;
  className?: string;
  style?: CSSProperties;
  spin?: boolean;
  rotate?: number;
  twoToneColor?: string;
  onClick?: () => void;
}

export default (props: IProps) => {
  const { iconType, ...rest } = props;
  const dynamicIcon = React.createElement(Icons[iconType], rest);
  return <>{dynamicIcon} </>;
};
