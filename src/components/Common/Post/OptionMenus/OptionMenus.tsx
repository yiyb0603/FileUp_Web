import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Menus from 'components/Common/Menus';
import { MenuDirection, MenuItem } from '@szhsin/react-menu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiPencilAlt } from 'react-icons/hi';
import MenuBar from 'components/Common/Menus/MenuBar';

const style = require('./OptionMenus.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  direction: MenuDirection;
}

const OptionMenus = ({ direction }: PropTypes): JSX.Element => {
  return (
    <Menus direction={direction} menuBar={<MenuBar />}>
      <MenuItem className={cx('OptionMenus-Icon')}>
        <RiDeleteBin6Line className={cx('OptionMenus-Icon-DeleteIcon')} />
        <div className={cx('OptionMenus-Icon-Delete')}>삭제</div>
      </MenuItem>

      <MenuItem className={cx('OptionMenus-Icon')}>
        <HiPencilAlt className={cx('OptionMenus-Icon-ModifyIcon')} />
        <div className={cx('OptionMenus-Icon-Modify')}>수정</div>
      </MenuItem>
    </Menus>
  );
};

export default OptionMenus;
