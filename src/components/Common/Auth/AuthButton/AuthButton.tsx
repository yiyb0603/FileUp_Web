import React, { ReactNode } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";

const style = require("./AuthButton.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface AuthButtonProps {
  children?: ReactNode;
  onClick: () => Promise<void> | void;
}

const AuthButton = ({ children, onClick }: AuthButtonProps): JSX.Element => {
  return (
    <button className={cx('AuthButton')} onClick={onClick}>
      <div>{children}</div>
    </button>
  );
};

export default AuthButton;
