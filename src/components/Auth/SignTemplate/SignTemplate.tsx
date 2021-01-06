import React, { useState } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import Logo from 'assets/icons/Logo/Logo.svg';
import SignInContainer from "containers/Auth/SignIn";
import { authPageType } from "enum/PageType";
import SignUpContainer from "containers/Auth/SignUp";

const style = require("./SignTemplate.scss");
const cx: ClassNamesFn = classNames.bind(style);

const SignTemplate = (): JSX.Element => {
  const { LOGIN } = authPageType;
  const [pageType, setPageType] = useState<authPageType>(LOGIN);

  return (
    <div className={cx('SignTemplate')}>
      <div className={cx('SignTemplate-Contents')}>
        <img className={cx('SignTemplate-Contents-Logo')} src={Logo} alt ="fileup logo" />
        {
          pageType === LOGIN ?
          <SignInContainer setPageType={setPageType} /> : <SignUpContainer setPageType={setPageType} />
        }
      </div>
    </div>
  );
};

export default SignTemplate;
