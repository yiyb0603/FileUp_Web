import React, { useState, useCallback, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { observer } from 'mobx-react';
import { sha256 } from 'js-sha256';
import SignIn from 'components/Auth/SignIn';
import groupingState from 'converter/GroupingState';
import { authPageType } from 'enum/PageType';
import useStores from 'lib/hooks/useStores';
import { SignInDto } from 'util/types/dto/Auth.dto';
import { successToast } from 'lib/Toast';
import { signInValidation } from 'validation/Auth/AuthValidation';
import { IError, IResponse } from 'util/types/Response';
import AuthError from 'Error/Auth/AuthError';

interface PropTypes {
  setPageType: Dispatch<SetStateAction<authPageType>>;
};

const SignInContainer = observer(({ setPageType }: PropTypes): JSX.Element => {
  const { store } = useStores();
  const { handleSignIn, isLoading } = store.AuthStore;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // setState Anonymous function optimization
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setEmail(value);
  }, [setEmail]);

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setPassword(value);
  }, [setPassword]);

  const onRegister = useCallback((): void => {
    setPageType(authPageType.REGISTER);
  }, [setPageType]);

  const requestSignIn = useCallback(async (): Promise<void> => {
    const request: SignInDto = {
      email,
      password,
    };

    if (!signInValidation(request)) {
      return;
    }

    request.password = sha256(password);
    await handleSignIn(request)
    .then((response: IResponse) => {
      const { status } = response;

      if (status === 200) {
        successToast("로그인을 성공하였습니다.");
        console.log(response);
      }
    })

    .catch((error: IError) => {
      new AuthError(error).signInError();
    });
  }, [email, handleSignIn, password]);

  return (
    <SignIn
      emailObject={groupingState('email', email, onChangeEmail)}
      passwordObject={groupingState('password', password, onChangePassword)}
      onRegister={onRegister}
      requestSignIn={requestSignIn}
      authLoading={isLoading}
    />
  );
});

export default SignInContainer;