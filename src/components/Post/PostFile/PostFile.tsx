import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { AiOutlinePaperClip } from "react-icons/ai";

const style = require("./PostFile.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  name: string;
  size: number;
};

const PostFile = ({ name, size }: PropTypes): JSX.Element => {
  return (
    <div className={cx('PostFile')}>
      <div className={cx('PostFile-File')}>
        <AiOutlinePaperClip className={cx('PostFile-File-Icon')} />
        <div className={cx('PostFile-File-Name')}>{name}</div>
      </div>
    </div>
  );
};

export default PostFile;
