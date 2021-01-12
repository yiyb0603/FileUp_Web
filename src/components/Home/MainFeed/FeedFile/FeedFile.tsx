import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { AiOutlinePaperClip } from 'react-icons/ai';

const style = require("./FeedFile.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  files: number;
};

const FeedFile = ({ files }: PropTypes): JSX.Element => {
  return (
    <div className={cx('FeedFile')}>
      <div className={cx('FeedFile-File')}>
        <AiOutlinePaperClip className={cx('FeedFile-File-Icon')} />
        <div className={cx('FeedFile-File-Name')}>{files}개의 파일</div>
      </div>
    </div>
  );
};

export default FeedFile;
