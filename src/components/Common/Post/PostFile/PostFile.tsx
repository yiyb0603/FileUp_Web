import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { AiOutlinePaperClip, AiOutlineClose } from 'react-icons/ai';

const style = require('./PostFile.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  text: string;
  onClick?: () => void;
  isFilter?: boolean;
  filterFunction?: () => void;
}

const PostFile = ({ text, onClick, isFilter = false, filterFunction }: PropTypes) => {
  return (
    <div className={cx('PostFile')} style={{ cursor: !isFilter ? 'pointer': 'default' }} onClick={onClick}>
      <div className={cx('PostFile-File')}>
        <div className={cx('PostFile-File-Left')}>
          <AiOutlinePaperClip className={cx('PostFile-File-Left-Icon')} />
          <div className={cx('PostFile-File-Left-Name')}>{text}</div>
        </div>

        {
          isFilter &&
          <AiOutlineClose
            className={cx('PostFile-File-Filter')}
            onClick={isFilter && filterFunction}
          />
        }
      </div>
    </div>
  );
};

export default PostFile;
