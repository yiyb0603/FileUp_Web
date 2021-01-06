import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./Category.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Category = (): JSX.Element => {
  return (
    <div className={cx('Category')}>
      <div className={cx('Category-List')}>
        <div className={cx('Category-List-Item')}>
          <div>최신순</div>
          <div>카테고리1</div>
          <div>카테고리2</div>
          <div>좋아요</div>
          <div>팔로우</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
