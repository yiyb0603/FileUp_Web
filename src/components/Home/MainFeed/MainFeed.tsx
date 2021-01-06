import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./MainFeed.scss');
const cx: ClassNamesFn = classNames.bind(style);

const MainFeed = (): JSX.Element => {
  return (
    <div className={cx('MainFeed')}>
      <div>글글글글</div>
    </div>
  );
};

export default MainFeed;
