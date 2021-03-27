import React, { ChangeEvent, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import TagItem from 'components/Common/Post/TagItem';

const style = require('./TagInput.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface TagInputProps {
  tags: string[];
  handleFilterTag: (tag: string) => void;
  tagInputObject: {
    tagInput: string;
    onChangeTagInput: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  onKeydownTagInput: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const TagInput = ({
  tags,
  handleFilterTag,
  tagInputObject,
  onKeydownTagInput,
}: TagInputProps): JSX.Element => {
  const { tagInput, onChangeTagInput } = tagInputObject;

  return (
    <div className={cx('TagInput')}>
      <div className={cx('TagInput-Wrapper')}>
        {
          tags.map((tag: string, idx: number) => (
            <TagItem
              key={idx}
              tag={tag}
              isClose={true}
              filterFunction={() => handleFilterTag(tag)}
            />
          ))
        }

        <input
          type='text'
          className={cx('TagInput-Wrapper-Input')}
          value={tagInput}
          onChange={onChangeTagInput}
          onKeyDown={onKeydownTagInput}
          placeholder='태그를 입력하세요'
        />
      </div>
    </div>
  );
};

export default TagInput;
