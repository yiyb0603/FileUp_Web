import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import AuthSpinner from 'components/Common/Auth/AuthSpinner';

const style = require('./PostSubmit.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  isLoading: boolean;
  requestWritePost: () => Promise<void>;
};

const PostSubmit = ({ isLoading, requestWritePost }: PropTypes): JSX.Element => {
  return (
    <button
      className={cx('PostSubmit')}
      onClick={requestWritePost}
    >
      {
        isLoading ? <AuthSpinner /> : <div>업로드</div>
      }
    </button>
  );
};

export default PostSubmit;
