import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Menu, MenuButton, MenuDirection } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { ClassNamesFn } from 'classnames/types';

const style = require('./Menus.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  children?: ReactNode;
  direction: MenuDirection;
  menuBar: JSX.Element;
}

const Menus = ({ children, direction, menuBar }: PropTypes): JSX.Element => {
  return (
    <Menu
      menuButton={
        <MenuButton className={cx('Menus-Disable')}>
          {menuBar}
        </MenuButton>
      }
      direction={direction}
      align='end'
    >
      {children}
    </Menu>
  );
};

export default Menus;
