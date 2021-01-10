import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./PopularUsers.scss');
const cx: ClassNamesFn = classNames.bind(style);

const PopularUsers = (): JSX.Element => {
  return (
    <div className={cx('PopularUsers')}>
      <div className={cx('PopularUsers-Wrapper')}>
        <div className={cx('PopularUsers-Title')}>인기유저</div>

        <div className={cx('PopularUsers-Users')}>
          <div>1위 닉네임</div>
          <div>2위 닉네임</div>
          <div>3위 닉네임</div>
          <div>4위 닉네임</div>
          <div>5위 닉네임</div>
        </div>
      </div>
    </div>
  );
};

export default PopularUsers;
