import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import FeedItem from './FeedItem';
import { IPostView } from 'util/types/PostTypes';
import HomeLoading from 'components/Common/Loading/HomeLoading';

const style = require('./MainFeed.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  isLoading: boolean;
  postList: IPostView[];
}

const MainFeed = ({ isLoading, postList }: PropTypes): JSX.Element => {
  return (
    <div className={cx('MainFeed')}>
      {
        isLoading ? 
        <>
          <HomeLoading />
        </>
        :
        postList.map((post: IPostView) => {
          return (
            <FeedItem
              key={post.id}
              post={post}
            />
          );
        })
      }
    </div>
  );
};

export default MainFeed;
