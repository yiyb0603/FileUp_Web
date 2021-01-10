import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { BsDownload } from "react-icons/bs";

const style = require("./FeedFile.scss");
const cx: ClassNamesFn = classNames.bind(style);

const FeedFile = (): JSX.Element => {
  return (
    <div className={cx('FeedFile')}>
      <div className={cx('FeedFile-File')}>
        <BsDownload className={cx('FeedFile-File-Icon')} />
        <div className={cx('FeedFile-File-Name')}>파일이름.txt</div>
      </div>
    </div>
  );
};

export default FeedFile;
