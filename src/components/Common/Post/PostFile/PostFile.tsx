import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { AiOutlinePaperClip } from 'react-icons/ai';

const style = require('./PostFile.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  text: string;
  onClick: () => void;
}

const PostFile = ({ text, onClick }: PropTypes) => {
  return (
    <div className={cx('PostFile')} onClick={onClick}>
      <div className={cx('PostFile-File')}>
        <AiOutlinePaperClip className={cx('PostFile-File-Icon')} />
        <div className={cx('PostFile-File-Name')}>{text}</div>
      </div>
    </div>
  );
};

export default PostFile;
