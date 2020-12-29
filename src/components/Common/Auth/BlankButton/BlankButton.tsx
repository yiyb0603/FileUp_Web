import React, { ReactNode } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";

const style = require("./BlankButton.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface BlankButtonProps {
  children?: ReactNode;
  onClick: () => Promise<void> | void;
}

const BlankButton = ({ children, onClick }: BlankButtonProps): JSX.Element => {
  return (
    <button className={cx('BlankButton')} onClick={onClick}>
      <div>{children}</div>
    </button>
  );
};

export default BlankButton;
