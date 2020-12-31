import React, { ChangeEvent } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import AuthInput from "components/Common/Auth/AuthInput";
import BlankButton from "components/Common/Auth/BlankButton";
import AuthButton from "components/Common/Auth/AuthButton";
import AuthSpinner from "components/Common/Auth/AuthSpinner";

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

  rePasswordObject: {
    rePassword: string;
    onChangeRePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  nicknameObject: {
    nickname: string;
    onChangeNickname: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  requestSendEmail: () => Promise<void>;
  requestSignUp: () => Promise<void>;

  authLoading: boolean;
  emailLoading: boolean;

  onBackPage: () => void;
}

const SignUp = ({
  emailObject,
  codeObject,
  passwordObject,
  rePasswordObject,
  nicknameObject,
  requestSendEmail,
  requestSignUp,
  authLoading,
  emailLoading,
  onBackPage }: SignUpProps): JSX.Element => {
  const { email, onChangeEmail } = emailObject;
  const { code, onChangeCode } = codeObject;
  const { password, onChangePassword } = passwordObject;
  const { rePassword, onChangeRePassword } = rePasswordObject;
  const { nickname, onChangeNickname } = nicknameObject;

  return (
    <div className={cx('SignUp')}>
      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>이메일</div>
        <AuthInput type="email" placeholder="이메일을 입력해주세요" value={email} onChange={onChangeEmail} />

        <div className={cx('SignUp-Section-Mail')}>
          <BlankButton onClick={requestSendEmail}>
            {
              emailLoading ? <AuthSpinner /> : '인증메일 전송'
            }
          </BlankButton>
        </div>
      </div>
      
      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>이메일 인증</div>
        <AuthInput type="text" placeholder="인증번호를 입력해주세요" value={code} onChange={onChangeCode} />
      </div>

      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>비밀번호 (10자 ~ 25자 이내 특수문자, 숫자, 문자 포함)</div>
        <AuthInput type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword} />
      </div>

      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>비밀번호 재입력</div>
        <AuthInput type="password" placeholder="비밀번호를 재입력 입력해주세요" value={rePassword} onChange={onChangeRePassword} />
      </div>

      <div className={cx('SignUp-Section')}>
        <div className={cx('SignUp-Section-Title')}>닉네임 (1자 ~ 16자 이내)</div>
        <AuthInput type="text" placeholder="닉네임을 입력해주세요" value={nickname} onChange={onChangeNickname} />
      </div>

      <AuthButton onClick={requestSignUp}>
        {
          authLoading ? <AuthSpinner /> : '회원가입'
        }
      </AuthButton>

      <div className={cx('SignUp-Exist')} onClick={onBackPage}>
        이미 계정이 있으신가요?
      </div>
    </div>
  );
};

export default SignUp;
