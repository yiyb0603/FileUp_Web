import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { ICategoryTypes } from 'util/types/CategoryTypes';
import CategoryItem from './CategoryItem';

const style = require('./Category.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  categoryList: ICategoryTypes[];
}

const Category = ({ categoryList }: PropTypes): JSX.Element => {
  return (
    <div className={cx('Category')}>
      <div className={cx('Category-List')}>
      {
        categoryList.map(({ id, name }: ICategoryTypes) => {
          return (
            <CategoryItem key={id} id={id} name={name} />
          );
        })
      }
      </div>
    </div>
  );
};

export default Category;
