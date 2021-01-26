import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { TiArrowSortedDown } from 'react-icons/ti';
import Menus from 'components/Common/Menus';
import { MenuItem } from '@szhsin/react-menu';
import { ICategoryTypes } from 'util/types/CategoryTypes';

const style = require('./PostCategory.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  categoryObject: {
    category: string;
    onChangeCategory: (categoryName: string) => void;
  };

  categoryList: ICategoryTypes[];
}

const PostCategory = ({ categoryObject, categoryList }: PropTypes): JSX.Element => {
  const { category, onChangeCategory } = categoryObject;

  return (
    <div className={cx('PostCategory')}>
      <Menus direction='bottom' menuBar={
        <div className={cx('PostCategory-Menus')}>
          <div>
            {
              category === '' ? '카테고리 설정' : category
            }
          </div>
          <TiArrowSortedDown className={cx('PostCategory-Menus-Arrow')} />
        </div>
      }>
        {
          categoryList.map(({ id, name }: ICategoryTypes) => (
            <MenuItem key={id} onClick={() => onChangeCategory(name)}>{name}</MenuItem>
          ))
        }
      </Menus>
    </div>
  );
};

export default PostCategory;
