import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { ITagType } from 'util/types/PostTypes';
import TagItem from 'components/Common/Post/TagItem';

const style = require('./TagList.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  tags: ITagType[];
}

const TagList = ({ tags }: PropTypes): JSX.Element => {
  return (
    <div className={cx('TagList')}>
      {
        tags.map(({ id, name }) => (
          <TagItem key={id} tag={name} />
        ))
      }
    </div>
  );
};

export default TagList;
