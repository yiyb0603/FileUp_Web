import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import Category from './Category';
import MainFeed from './MainFeed';
import PopularUsers from './PopularUsers';

const style = require('./Home.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Home = (): JSX.Element => {
  return (
    <div className={cx('Home')}>
      <Category />
      <MainFeed />
      <PopularUsers />
    </div>
  );
};

export default Home;
