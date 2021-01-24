import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import CommentInput from "../CommentInput";

const style = require("./CommentTemplate.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  commentLength: number;
};

const CommentTemplate = ({ commentLength }: PropTypes): JSX.Element => {
  return (
    <div className={cx('CommentTemplate')}>
      <div className={cx('CommentTemplate-Length')}>댓글 {commentLength}</div>
      <CommentInput />
    </div>
  );
};

export default CommentTemplate;
