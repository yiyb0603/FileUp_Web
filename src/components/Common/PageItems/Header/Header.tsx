import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Logo from 'assets/icons/Logo/Logo.svg';
import Write from 'assets/icons/Home/Write.svg';
import Profile from 'assets/icons/Home/profile_default.jpg';
import Logout from 'assets/icons/Home/Logout.svg';
import getMyInfo from 'util/getMyInfo';

const style = require('./Header.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  moveLocation: (url: string) => void;
  onLogout: () => void;
};

const Header = ({ moveLocation, onLogout }: PropTypes): JSX.Element => {
  const myInfo: any = getMyInfo();

  return (
    <div className={cx('Header')}>
      <div className={cx('Header-Contents')}>
        <img className={cx('Header-Contents-Logo')} src={Logo} alt='Logo' onClick={() => moveLocation('/')} />

        <div className={cx('Header-Contents-Right')}>
          <img src={Write} alt ='Write' onClick={() => moveLocation('/postform')} />
          <img src={Profile} alt ='Profile' onClick={() => moveLocation(`/user/${myInfo.id}`)} />
          <img src={Logout} alt ='Logout' onClick={onLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
