import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { GoCommentDiscussion } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { FaEye } from 'react-icons/fa';
import Profile from 'assets/icons/Home/profile_default.jpg';
import { IUserTypes } from "util/types/UserTypes";
import { handleMomentParse } from "lib/Moment";

const style = require("./FeedBottom.scss");
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
      <div className={cx('FeedBottom-Info-Profile')}>
        <img src={Profile} alt ="profile" className={cx('FeedBottom-Info-Profile-Image')} />
        <div className={cx('FeedBottom-Info-Profile-Name')}>{nickname}#{code}</div>
      </div>

      <div className={cx('FeedBottom-Info-Right')}>
        <div className={cx('FeedBottom-Info-Right-Time')}>
          {handleMomentParse(created, 'YYYY년 MM월 DD일 HH시 mm분')
        }</div>

        <div className={cx('FeedBottom-Info-Right-HeartWrap')}>
          <AiFillHeart className={cx('FeedBottom-Info-Right-HeartWrap-Heart')} />
          <div className={cx('FeedBottom-Info-Right-HeartWrap-Count')}>{like}</div>
        </div>

        <div className={cx('FeedBottom-Info-Right-CommentWrap')}>
          <GoCommentDiscussion className={cx('FeedBottom-Info-Right-CommentWrap-Comment')} />
          <div className={cx('FeedBottom-Info-Right-CommentWrap-Count')}>{comments}</div>
        </div>

        <div className={cx('FeedBottom-Info-Right-ViewWrap')}>
          <FaEye className={cx('FeedBottom-Info-Right-ViewWrap-View')} />
          <div className={cx('FeedBottom-Info-Right-ViewWrap-Count')}>{view}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedBottom;
