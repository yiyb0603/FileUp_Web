import React, { ChangeEvent } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import AuthInput from "components/Common/Auth/AuthInput";
import BlankButton from "components/Common/Auth/BlankButton";
import AuthButton from "components/Common/Auth/AuthButton";

const style = require("./SignUp.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface SignUpProps {
  emailObject: {
    email: string;
    onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  codeObject: {
    code: string;
    onChangeCode: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  passwordObject: {
    password: string;
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  nicknameObject: {
    nickname: string;
    onChangeNickname: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  onBackPage: () => void;
}

const SignUp = ({ emailObject, codeObject, passwordObject, nicknameObject, onBackPage }: SignUpProps): JSX.Element => {
  const { email, onChangeEmail } = emailObject;
  const { code, onChangeCode } = codeObject;
  const { password, onChangePassword } = passwordObject;
  const { nickname, onChangeNickname } = nicknameObject;

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
        <AuthInput type="text" placeholder="인증번호를 입력해주세요" value={code} onChange={onChangeCode} />
      </div>

      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>비밀번호 (10자 ~ 25자 이내)</div>
        <AuthInput type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword} />
      </div>

      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>닉네임 (1자 ~ 16자 이내)</div>
        <AuthInput type="text" placeholder="닉네임을 입력해주세요" value={nickname} onChange={onChangeNickname} />
      </div>

      <AuthButton onClick={() => {}}>회원가입</AuthButton>

      <div className={cx('SignUp-Exist')} onClick={onBackPage}>
        이미 계정이 있으신가요?
      </div>
    </div>
  );
};

export default SignUp;
