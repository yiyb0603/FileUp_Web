import React, { useCallback, CSSProperties } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { IPostView } from "util/types/PostTypes";
import { useHistory } from "react-router-dom";
import { History } from 'history';
import PostFile from "components/Common/Post/PostFile";
import PostInfo from "../PostInfo";
import getMyInfo from "util/getMyInfo";

const style = require("./FeedItem.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  post: IPostView;
  style?: CSSProperties;
};

const FeedItem = ({ post, style }: PropTypes): JSX.Element => {
  const history: History<unknown> = useHistory();
  const myInfo: any = getMyInfo();

  const { author, category, comments, content, created, files, id, like, title, updated, view } = post;
  const { code, nickname } = author;

  const handleToPage = useCallback((): void => {
    history.push(`/post/${id}`);
  }, [history, id]);

  return (
    <div className={cx('FeedItem')} style={style}>
      <div className={cx('FeedItem-Top')}>
        <div className={cx('FeedItem-Top-Title')} onClick={handleToPage}>{title}</div>
        <div className={cx('FeedItem-Top-Category')}>{category.name}</div>
      </div>

      <div className={cx('FeedItem-Contents')}>{content}</div>

      <PostFile
        text={`${files}개의 파일`}
        onClick={handleToPage}
      />

      <PostInfo
        id={id}
        nickname={nickname}
        userId={author.id}
        code={code}
        comments={comments}
        created={created}
        updated={updated}
        like={like}
        view={view}
        isMenu={author.id === myInfo.id}
      />
    </div>
  );
};

export default FeedItem;
