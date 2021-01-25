import React, { useCallback } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import FeedBottom from "../FeedBottom";
import { IPostView } from "util/types/PostTypes";
import { useHistory } from "react-router-dom";
import { History } from 'history';
import PostFile from "components/Common/Post/PostFile";

const style = require("./FeedItem.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  post: IPostView;
};

const FeedItem = ({ post }: PropTypes): JSX.Element => {
  const history: History<unknown> = useHistory();
  const { author, category, comments, content, created, files, id, like, title, updated, view } = post;

  const handleToPage = useCallback((): void => {
    history.push(`/post/${id}`);
  }, [history, id]);

  return (
    <div className={cx('FeedItem')}>
      <div className={cx('FeedItem-Top')}>
        <div className={cx('FeedItem-Top-Title')} onClick={handleToPage}>{title}</div>
        <div className={cx('FeedItem-Top-Category')}>{category.name}</div>
      </div>

      <div className={cx('FeedItem-Contents')}>{content}</div>

      <PostFile
        text={`${files}개의 파일`}
        onClick={handleToPage}
      />

      <FeedBottom
        id={id}
        author={author}
        comments={comments}
        created={created}
        updated={updated}
        like={like}
        view={view}
      />
    </div>
  );
};

export default FeedItem;
