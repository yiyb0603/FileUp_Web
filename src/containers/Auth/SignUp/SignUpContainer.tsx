import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { sha256 } from 'js-sha256';
import SignUp from 'components/Auth/SignUp';
import groupingState from 'converter/GroupingState';
import { authPageType } from 'enum/PageType';
import useStores from 'lib/hooks/useStores';
import { SignUpDto } from 'util/types/dto/Auth.dto';
import { emailValidation, signUpValidation } from 'validation/Auth/AuthValidation';
import { IResponse } from 'util/types/Response';
import { successToast } from 'lib/Toast';
import { signUpError } from 'Error/Auth/AuthError';

interface PropTypes {
  setPageType: Dispatch<SetStateAction<authPageType>>;
}

const SignUpContainer = observer(({ setPageType }: PropTypes): JSX.Element => {
  const { store } = useStores();
  const { handleSignUp, handleSendEmail, authLoading, emailLoading } = store.AuthStore;

  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  // setState Anonymous functions optimization
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);
  }, [setEmail]);

  const onChangeCode = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setCode(value);
  }, [setCode]);

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPassword(value);
  }, [setPassword]);

  const onChangeRePassword = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setRePassword(value);
  }, [setRePassword]);

  const onChangeNickname = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setNickname(value);
  }, [setNickname]);

  const onBackPage = useCallback((): void => {
    setPageType(authPageType.LOGIN);
  }, [setPageType]);

  const requestSendEmail = useCallback(async (): Promise<void> => {
    try {
      if (!emailValidation(email)) {
        return;
      }

      const { status }: IResponse = await handleSendEmail(email);
      if (status === 200) {
        successToast('이메일 인증 코드를 발송하였습니다.');  
      }

    } catch (error) {
      console.log(error);
    }
  }, [email, handleSendEmail]);

  const requestSignUp = useCallback(async (): Promise<void> => {
    try {
      const request: SignUpDto = {
        email,
        certifyCode: code,
        password,
        nickname,
      };

      if (!signUpValidation(request, rePassword)) {
        return;
      }

      request.password = sha256(password);
      const { status }: IResponse = await handleSignUp(request);
      
      if (status === 200) {
        successToast('회원가입을 성공하였습니다.');
        onBackPage();
      }

    } catch (error) {
      signUpError(error);
    }
  }, [code, email, handleSignUp, nickname, onBackPage, password, rePassword]);

  return (
    <SignUp
      emailObject={groupingState('email', email, onChangeEmail)}
      codeObject={groupingState('code', code, onChangeCode)}
      passwordObject={groupingState('password', password, onChangePassword)}
      rePasswordObject={groupingState('rePassword', rePassword, onChangeRePassword)}
      nicknameObject={groupingState('nickname', nickname, onChangeNickname)}

      requestSendEmail={requestSendEmail}
      requestSignUp={requestSignUp}

      authLoading={authLoading}
      emailLoading={emailLoading}
      
      onBackPage={onBackPage}
    />
  );
});

export default SignUpContainer;