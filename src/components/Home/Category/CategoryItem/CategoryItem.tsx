import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";

const style = require("./CategoryItem.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface PropTypes {
  id: number;
  name: string;
}

const CategoryItem = ({ id, name }: PropTypes) => {
  return (
    <div className={cx('CategoryItem')}>{name}</div>
  );
};

export default CategoryItem;
