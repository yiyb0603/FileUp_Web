import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import PopularUsers from './PopularUsers';
import FeedContainer from 'containers/Home/Feed';
import CategoryContainer from 'containers/Home/Category';

const style = require('./Home.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Home = (): JSX.Element => {
  return (
    <div className={cx('Home')}>
      <CategoryContainer />
      <FeedContainer />
      <PopularUsers />
    </div>
  );
};

export default Home;
