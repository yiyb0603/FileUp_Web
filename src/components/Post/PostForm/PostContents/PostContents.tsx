import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./PostContents.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  contentObject: {
    content: string;
    onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  };
}

const PostContents = ({ contentObject }: PropTypes): JSX.Element => {
  const { content, onChangeContent } = contentObject;
  
  return (
    <textarea
      className={cx('PostContents')}
      value={content}
      onChange={onChangeContent}
      placeholder='내용을 입력해주세요'
    ></textarea>
  );
};

export default PostContents;
