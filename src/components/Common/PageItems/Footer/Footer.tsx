import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./Footer.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Footer = (): JSX.Element => {
  return (
    <div className={cx('Footer')}>
      <div className={cx('Footer-Contents')}>
        <div>© 2021 Project FileUp. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
