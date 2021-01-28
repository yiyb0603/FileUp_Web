import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./PostTitle.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  titleObject: {
    title: string;
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

const PostTitle = ({ titleObject }: PropTypes): JSX.Element => {
  const { title, onChangeTitle } = titleObject;

  return (
    <input
      type='text'
      value={title}
      onChange={onChangeTitle}
      className={cx('PostTitle')}
      placeholder='제목을 입력해주세요.'
    />
  );
};

export default PostTitle;
