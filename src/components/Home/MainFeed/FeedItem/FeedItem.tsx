import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import FeedBottom from "../FeedBottom";
import FeedFile from "../FeedFile";
import { IPostView } from "util/types/PostTypes";

const style = require("./FeedItem.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  post: IPostView;
}

const FeedItem = ({ post }: PropTypes): JSX.Element => {
  console.log(post);
  const { author, category, comments, content, created, files, id, like, title, updated, view } = post;

  return (
    <div className={cx('FeedItem')}>
      <div className={cx('FeedItem-Title')}>{title}</div>

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
