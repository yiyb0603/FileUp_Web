import React, { ChangeEvent, KeyboardEvent, MutableRefObject } from 'react';
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
import TagInput from './TagInput';

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
  
  tags: string[];
  tagInputObject: {
    tagInput: string;
    onChangeTagInput: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  onKeydownTagInput: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleFilterTag: (tag: string) => void;
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
  tags,
  tagInputObject,
  onKeydownTagInput,
  handleFilterTag,
  requestWritePost,
} : PropTypes): JSX.Element => {
  const { files, onChangeFiles } = filesObject;

  return (
    <div className={cx('PostForm')}>
      <PostTitle
        titleObject={titleObject}
      />

      <div className={cx('PostForm-TagCategory')}>
        <TagInput
          tags={tags}
          tagInputObject={tagInputObject}
          onKeydownTagInput={onKeydownTagInput}
          handleFilterTag={handleFilterTag}
        />

        <PostCategory
          categoryObject={categoryObject}
          categoryList={categoryList}
        />
      </div>

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
          const { id, file: { name } } = file;

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
