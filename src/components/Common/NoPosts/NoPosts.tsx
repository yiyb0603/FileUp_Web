import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import NoPost from 'assets/images/no-post.svg';

const style = require('./NoPosts.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface NoPostsProps {
  imageWidth?: string;
}

const NoPosts = ({ imageWidth = '45%', }: NoPostsProps): JSX.Element => {
  return (
    <div className={cx('NoPosts')}>
      <img
        src={NoPost}
        className={cx('NoPosts-Image')}
        style={{ width: imageWidth }}
        alt='no-post'
      />
      <div className={cx('NoPosts-Text')}>
        현재 작성된 글이 없습니다.
      </div>
    </div>
  );
};

export default NoPosts;
