import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Category from './Category';
import PopularUsers from './PopularUsers';
import FeedContainer from 'containers/Home/Feed';

const style = require('./Home.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Home = (): JSX.Element => {
  return (
    <div className={cx('Home')}>
      <Category />
      <FeedContainer />
      <PopularUsers />
    </div>
  );
};

export default Home;
