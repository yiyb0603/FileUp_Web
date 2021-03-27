import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { IPostView } from 'util/types/PostTypes';
import HomeLoading from 'components/Common/Loading/HomeLoading';
import FeedItem from 'components/Common/Post/FeedItem';
import NoPosts from 'components/Common/NoPosts';

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
        isLoading ? <HomeLoading />
        :
        postList.length > 0 ? postList.map((post: IPostView, idx: number) => {
          return (
            <FeedItem
              key={post.id}
              post={post}
              style={idx === 0 ? { borderTop: 'none' } : {}}
            />
          );
        }) : <NoPosts />
      }
    </div>
  );
};

export default MainFeed;
