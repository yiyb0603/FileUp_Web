import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { MdClose } from 'react-icons/md';

const style = require('./TagItem.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface TagItemProps {
  tag: string;
  isClose?: boolean;
  filterFunction?: (tag: string) => void;
}

const TagItem = ({
  tag,
  isClose = false,
  filterFunction,
}: TagItemProps): JSX.Element => {
  return (
    <div className={cx('TagItem')}>
      {
        isClose &&
        <MdClose
          className={cx('TagItem-Close')}
          onClick={() => filterFunction!(tag)}
        />
      }
      <div className={cx('TagItem-Text')}>{tag}</div>
    </div>
  );
};

export default TagItem;
