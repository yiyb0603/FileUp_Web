import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import { useHistory, useParams } from 'react-router-dom';
import { History } from 'history';
import useStores from 'lib/hooks/useStores';
import User from 'components/User';
import { IError } from 'util/types/Response';
import { ParamTypes } from 'util/types/PostTypes';
import UserLoading from 'components/Common/Loading/UserLoading';
import { errorToast } from 'lib/Toast';

const UserContainer = observer((): JSX.Element => {
  const { store } = useStores();
  const { isLoading, userInfo, userPostList, handleClearInfo, handleGetUserInfo } = store.UserStore;

  const { id }: ParamTypes = useParams();
  const userIdx: number = Number(id);
  const history: History<unknown> = useHistory();

  const requestUserInfo = useCallback(async (): Promise<void> => {
    await handleGetUserInfo(userIdx)
    .catch((error: IError) => {
      const { status } = error.response.data;
      switch (status) {
        case 409:
          errorToast("존재하지 않는 유저입니다.");
          history.goBack();
          return;
      }
    })
  }, [handleGetUserInfo, history, userIdx]);

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
        userPostList={userPostList}
      />
    }
    </>
  );
});

export default UserContainer;