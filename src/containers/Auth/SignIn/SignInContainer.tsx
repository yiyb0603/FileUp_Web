import React, { useState, useCallback, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { observer } from 'mobx-react';
import SignIn from 'components/Auth/SignIn';
import groupingState from 'converter/GroupingState';
import { authPageType } from 'enum/PageType';

interface PropTypes {
  setPageType: Dispatch<SetStateAction<authPageType>>;
};

const SignInContainer = observer(({ setPageType }: PropTypes): JSX.Element => {
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

  return (
    <SignIn
      emailObject={groupingState('email', email, onChangeEmail)}
      passwordObject={groupingState('password', password, onChangePassword)}
      onRegister={onRegister}
    />
  );
});

export default SignInContainer;