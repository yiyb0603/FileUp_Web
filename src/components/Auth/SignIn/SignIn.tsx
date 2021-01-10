import React, { ChangeEvent, KeyboardEvent } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import AuthInput from "components/Common/Auth/AuthInput";
import AuthButton from "components/Common/Auth/AuthButton";
import BlankButton from "components/Common/Auth/BlankButton";
import AuthSpinner from "components/Common/Auth/AuthSpinner";

const style = require("./SignIn.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface SignInProps {
  emailObject: {
    email: string;
    onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  passwordObject: {
    password: string;
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  onRegister: () => void;
  requestSignIn: () => Promise<void>;
  authLoading: boolean;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const SignIn = ({ emailObject, passwordObject, onRegister, requestSignIn, authLoading, onKeyDown }: SignInProps): JSX.Element => {
  const { email, onChangeEmail } = emailObject;
  const { password, onChangePassword } = passwordObject;

  return (
    <div className={cx('SignIn')}>
      <AuthInput type="email" placeholder="Email" value={email} onChange={onChangeEmail} onKeyDown={onKeyDown} />
      <AuthInput type="password" placeholder="Password" value={password} onChange={onChangePassword} onKeyDown={onKeyDown} />
      <AuthButton onClick={requestSignIn}>
        {
          authLoading ? <AuthSpinner /> : "로그인"
        }
      </AuthButton>

      <div className={cx('SignIn-Register')}>
        <div className={cx('SignIn-Register-Description')}>파일업이 처음이신가요?</div>
        <BlankButton onClick={onRegister}>회원가입</BlankButton>
      </div>
    </div>
  );
};

export default SignIn;
