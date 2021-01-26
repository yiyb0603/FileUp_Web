import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import PostCategory from './PostCategory';
import { ICategoryTypes } from 'util/types/CategoryTypes';
import PostFile from 'components/Common/Post/PostFile';
import { ISelectFile } from 'util/types/PostTypes';

const style = require('./PostForm.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  titleObject: {
    title: string;
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  contentObject: {
    content: string;
    onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  };

  categoryObject: {
    category: string;
    onChangeCategory: (categoryName: string) => void;
  };

  filesObject: {
    files: ISelectFile[];
    onChangeFiles: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  categoryList: ICategoryTypes[];
  handleFilterFile: (id: number) => void;
  requestWritePost: () => Promise<void>;
}

const PostForm = ({
  titleObject,
  contentObject,
  categoryObject,
  filesObject,
  categoryList,
  handleFilterFile,
  requestWritePost,
} : PropTypes): JSX.Element => {
  const { title, onChangeTitle } = titleObject;
  const { content, onChangeContent } = contentObject;
  const { files, onChangeFiles } = filesObject;

  return (
    <div className={cx('PostForm')}>
      <input
        type='text'
        value={title}
        onChange={onChangeTitle}
        className={cx('PostForm-Title')}
        placeholder='제목을 입력해주세요.'
      />

      <PostCategory
        categoryObject={categoryObject}
        categoryList={categoryList}
      />

      <textarea
        className={cx('PostForm-Contents')}
        value={content}
        onChange={onChangeContent}
        placeholder='내용을 입력해주세요'
      ></textarea>

      <input
        id='fileInput'
        type='file'
        onChange={onChangeFiles}
        multiple={true}
        style={{ display: 'none' }}
      />

      <label htmlFor='fileInput' className={cx('PostForm-SelectFile')}>
        <div>파일 첨부</div>
      </label>

      {
        files.map((file: ISelectFile) => {
          const { id, object: { name } } = file;

          return (
            <PostFile
              key={id}
              text={name}
              isFilter={true}
              filterFunction={() => handleFilterFile(id)}
            />
          )
        })
      }

      <div className={cx('PostForm-UploadWrap')}>
        <button
          className={cx('PostForm-UploadWrap-Button')}
          onClick={requestWritePost}>
          업로드
        </button>
      </div>
    </div>
  );
};

export default PostForm;
