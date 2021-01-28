import React, { ChangeEvent, MutableRefObject } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import PostCategory from './PostCategory';
import { ICategoryTypes } from 'util/types/CategoryTypes';
import PostFile from 'components/Common/Post/PostFile';
import { ISelectFile } from 'util/types/PostTypes';
import PostTitle from './PostTitle';
import PostContents from './PostContents';
import FileSelect from './FileSelect';
import PostSubmit from './PostSubmit';

const style = require('./PostForm.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  isLoading: boolean;
  isDragging: boolean;
  dragRef: MutableRefObject<HTMLLabelElement | null>;

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
  isLoading,
  isDragging,
  dragRef,
  titleObject,
  contentObject,
  categoryObject,
  filesObject,
  categoryList,
  handleFilterFile,
  requestWritePost,
} : PropTypes): JSX.Element => {
  const { files, onChangeFiles } = filesObject;

  return (
    <div className={cx('PostForm')}>
      <PostTitle
        titleObject={titleObject}
      />

      <PostCategory
        categoryObject={categoryObject}
        categoryList={categoryList}
      />

      <PostContents
        contentObject={contentObject}
      />

      <input
        id='fileInput'
        type='file'
        onChange={onChangeFiles}
        multiple={true}
        style={{ display: 'none' }}
      />

      <FileSelect
        isDragging={isDragging}
        dragRef={dragRef}
      />

      <div className={cx('PostForm-Files')}>
      {
        files.length > 0 && files.map((file: ISelectFile) => {
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
      </div>

      <div className={cx('PostForm-UploadWrap')}>
        <PostSubmit
          isLoading={isLoading}
          requestWritePost={requestWritePost}
        />
      </div>
    </div>
  );
};

export default PostForm;
