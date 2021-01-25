import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { IUserTypes } from 'util/types/UserTypes';
import PostInfo from 'components/Common/Post/PostInfo';

const style = require('./FeedBottom.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  id: number;
  author: IUserTypes;
  comments: number;
  created: string | Date;
  updated: string | Date | null;
  like: number;
  view: number;
};

const FeedBottom = ({ id, author, comments, created, updated, like, view }: PropTypes): JSX.Element => {
  const { code, nickname } = author;

  return (
    <div className={cx('FeedBottom')}>
      <PostInfo
        id={author.id}
        nickname={nickname}
        code={code}
        created={created}
        like={like}
        comments={comments}
        view={view}
        isMenu={true}
      />
    </div>
  );
};

export default FeedBottom;
