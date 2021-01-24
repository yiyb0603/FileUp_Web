import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import Send from 'assets/icons/Post/Send.svg';

const style = require("./CommentInput.scss");
const cx: ClassNamesFn = classNames.bind(style);

const CommentInput = (): JSX.Element => {
  return (
    <div className={cx('CommentInput')}>
      <input type="text" className={cx('CommentInput-Input')} placeholder="댓글을 입력해주세요" />
      <img src={Send} alt="Send" className={cx('CommentInput-Send')} />
    </div>
  );
};

export default CommentInput;
