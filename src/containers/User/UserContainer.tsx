import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import useStores from 'lib/hooks/useStores';
import User from 'components/User';
import { IError } from 'util/types/Response';
import { ParamTypes } from 'util/types/PostTypes';
import UserLoading from 'components/Common/Loading/UserLoading';

const UserContainer = observer((): JSX.Element => {
  const { store } = useStores();
  const { isLoading, userInfo, handleClearInfo, handleGetUserInfo } = store.UserStore;

  const { id }: ParamTypes = useParams();
  const userIdx: number = Number(id);

  const requestUserInfo = useCallback(async (): Promise<void> => {
    await handleGetUserInfo(userIdx)
    .catch((error: IError) => {
      console.log(error);
    })
  }, [handleGetUserInfo, userIdx]);

  useEffect(() => {
    if (Number.isInteger(userIdx)) {
      requestUserInfo();
    }

    return () => {
      handleClearInfo();
    }
  }, [handleClearInfo, requestUserInfo, userIdx]);
  
  return (
    <>
    {
      userInfo === null || isLoading ?
      <UserLoading />
      :
      <User
        userInfo={userInfo}
      />
    }
    </>
  );
});

export default UserContainer;