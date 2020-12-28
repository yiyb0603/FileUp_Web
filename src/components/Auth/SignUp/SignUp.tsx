import React, { ChangeEvent, Dispatch, SetStateAction, useCallback } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import AuthInput from "components/Common/Auth/AuthInput";
import BlankButton from "components/Common/Auth/BlankButton";
import AuthButton from "components/Common/Auth/AuthButton";

const style = require("./SignUp.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface SignUpProps {
  emailObject: {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
  };

  codeObject: {
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
  };

  passwordObject: {
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
  };

  nicknameObject: {
    nickname: string;
    setNickname: Dispatch<SetStateAction<string>>;
  };

  onBackPage: () => void;
}

const SignUp = ({ emailObject, codeObject, passwordObject, nicknameObject, onBackPage }: SignUpProps): JSX.Element => {
  const { email, setEmail } = emailObject;
  const { code, setCode } = codeObject;
  const { password, setPassword } = passwordObject;
  const { nickname, setNickname } = nicknameObject;

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  }, [setEmail]);

  const onChangeCode = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCode(value);
  }, [setCode]);

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  }, [setPassword]);

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  }, [setNickname]);

  return (
    <div className={cx('SignUp')}>
      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>이메일</div>
        <AuthInput type="email" placeholder="이메일을 입력해주세요" value={email} onChange={onChangeEmail} />

        <div className={cx('SignUp-Section-Mail')}>
          <BlankButton onClick={() => {}}>인증메일 전송</BlankButton>
        </div>
      </div>
      
      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>이메일 인증</div>
        <AuthInput type="email" placeholder="인증번호를 입력해주세요" value={code} onChange={onChangeCode} />
      </div>

      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>비밀번호 (10자 ~ 25자 이내)</div>
        <AuthInput type="email" placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword} />
      </div>

      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>닉네임 (1자 ~ 16자 이내)</div>
        <AuthInput type="email" placeholder="닉네임을 입력해주세요" value={nickname} onChange={onChangeName} />
      </div>

      <AuthButton onClick={() => {}}>회원가입</AuthButton>

      <div className={cx('SignUp-Exist')} onClick={onBackPage}>
        이미 계정이 있으신가요?
      </div>
    </div>
  );
};

export default SignUp;
