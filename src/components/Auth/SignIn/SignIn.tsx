import React, { useCallback, ChangeEvent, Dispatch, SetStateAction } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import AuthInput from "components/Common/Auth/AuthInput";
import AuthButton from "components/Common/Auth/AuthButton";
import BlankButton from "components/Common/Auth/BlankButton";

const style = require("./SignIn.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface SignInProps {
  emailObject: {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
  };

  passwordObject: {
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
  };

  onRegister: () => void;
};

const SignIn = ({ emailObject, passwordObject, onRegister }: SignInProps) => {
  const { email, setEmail } = emailObject;
  const { password, setPassword } = passwordObject;

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  }, [setEmail]);

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  }, [setPassword]);

  return (
    <div className={cx('SignIn')}>
      <AuthInput type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
      <AuthInput type="password" placeholder="Password" value={password} onChange={onChangePassword} />
      <AuthButton onClick={() => {}}>로그인</AuthButton>

      <div className={cx('SignIn-Register')}>
        <div className={cx('SignIn-Register-Description')}>파일업이 처음이신가요?</div>
        <BlankButton onClick={onRegister}>회원가입</BlankButton>
      </div>
    </div>
  );
};

export default SignIn;
