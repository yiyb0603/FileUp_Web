import React from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";

const style = require("./MenuBar.scss");
const cx: ClassNamesFn = classNames.bind(style);

const MenuBar = (): JSX.Element => {
  return (
    <div className={cx('MenuBar')}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuBar;
