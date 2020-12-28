import React, { ChangeEvent } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";

const style = require("./AuthInput.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface AuthInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({ type, placeholder, value, onChange }: AuthInputProps): JSX.Element => {
  return (
    <input
      className={cx('AuthInput')}
      type ={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default AuthInput;
