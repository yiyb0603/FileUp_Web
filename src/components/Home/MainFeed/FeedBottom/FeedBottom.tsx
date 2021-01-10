import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { GoCommentDiscussion } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import Profile from 'assets/icons/Home/profile_default.jpg';

const style = require("./FeedBottom.scss");
const cx: ClassNamesFn = classNames.bind(style);

const FeedBottom = (): JSX.Element => {
  return (
    <div className={cx('FeedBottom')}>
      <div className={cx('FeedBottom-Info-Profile')}>
        <img src={Profile} alt ="profile" className={cx('FeedBottom-Info-Profile-Image')} />
        <div className={cx('FeedBottom-Info-Profile-Name')}>닉네임</div>
      </div>

      <div className={cx('FeedBottom-Info-Right')}>
        <div className={cx('FeedBottom-Info-Right-Time')}>2021-01-01 06:35</div>

        <div className={cx('FeedBottom-Info-Right-HeartWrap')}>
          <AiFillHeart className={cx('FeedBottom-Info-Right-HeartWrap-Heart')} />
          <div className={cx('FeedBottom-Info-Right-HeartWrap-Count')}>613</div>
        </div>

        <div className={cx('FeedBottom-Info-Right-CommentWrap')}>
          <GoCommentDiscussion className={cx('FeedBottom-Info-Right-CommentWrap-Comment')} />
          <div className={cx('FeedBottom-Info-Right-CommentWrap-Count')}>39</div>
        </div>
      </div>
    </div>
  );
};

export default FeedBottom;
