import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
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

  const onRegister = useCallback(() => {
    setPageType(authPageType.REGISTER);
  }, [setPageType]);

  return (
    <SignIn
      emailObject={groupingState('email', email, setEmail)}
      passwordObject={groupingState('password', password, setPassword)}
      onRegister={onRegister}
    />
  );
});

export default SignInContainer;