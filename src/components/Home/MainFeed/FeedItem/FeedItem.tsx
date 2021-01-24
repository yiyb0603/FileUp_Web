import React, { useCallback } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import FeedBottom from "../FeedBottom";
import FeedFile from "../FeedFile";
import { IPostView } from "util/types/PostTypes";
import { useHistory } from "react-router-dom";
import { History } from 'history';

const style = require("./FeedItem.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  post: IPostView;
};

const FeedItem = ({ post }: PropTypes): JSX.Element => {
  const history: History<unknown> = useHistory();

  const handleToPage = useCallback((id: number): void => {
    history.push(`/post/${id}`);
  }, [history]);

  const { author, category, comments, content, created, files, id, like, title, updated, view } = post;

  return (
    <div className={cx('FeedItem')}>
      <div className={cx('FeedItem-Top')}>
        <div className={cx('FeedItem-Top-Title')} onClick={() => handleToPage(id)}>{title}</div>
        <div className={cx('FeedItem-Top-Category')}>{category.name}</div>
      </div>

      <div className={cx('FeedItem-Contents')}>{content}</div>

      <FeedFile files={files} />

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
