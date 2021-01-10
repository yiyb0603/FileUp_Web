import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import FeedItem from './FeedItem';

const style = require('./MainFeed.scss');
const cx: ClassNamesFn = classNames.bind(style);

const MainFeed = (): JSX.Element => {
  return (
    <div className={cx('MainFeed')}>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
};

export default MainFeed;
