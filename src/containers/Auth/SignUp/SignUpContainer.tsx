import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
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

  const onChangeNickname = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setNickname(value);
  }, [setNickname]);

  const onBackPage = useCallback((): void => {
    setPageType(authPageType.LOGIN);
  }, [setPageType]);

  return (
    <SignUp
      emailObject={groupingState('email', email, onChangeEmail)}
      codeObject={groupingState('code', code, onChangeCode)}
      passwordObject={groupingState('password', password, onChangePassword)}
      nicknameObject={groupingState('nickname', nickname, onChangeNickname)}
      onBackPage={onBackPage}
    />
  );
});

export default SignUpContainer;