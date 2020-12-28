import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import SignUp from 'components/Auth/SignUp';
import groupingState from 'converter/GroupingState';
import { authPageType } from 'enum/PageType';

interface PropTypes {
  setPageType: Dispatch<SetStateAction<authPageType>>;
}

const SignUpContainer = observer(({ setPageType }: PropTypes): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const onBackPage = useCallback(() => {
    setPageType(authPageType.LOGIN);
  }, [setPageType]);

  return (
    <SignUp
      emailObject={groupingState('email', email, setEmail)}
      codeObject={groupingState('code', code, setCode)}
      passwordObject={groupingState('password', password, setPassword)}
      nicknameObject={groupingState('nickname', nickname, setNickname)}
      onBackPage={onBackPage}
    />
  );
});

export default SignUpContainer;