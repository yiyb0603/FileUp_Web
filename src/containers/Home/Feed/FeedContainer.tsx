import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import MainFeed from 'components/Home/MainFeed';
import useStores from 'lib/hooks/useStores';
import { IError } from 'util/types/Response';
import PostError from 'error/Post/PostError';

const FeedContainer = observer((): JSX.Element => {
  const { store } = useStores();
  const { isLoading, postList, handleGetPosts, count, maxCount, handleIncreaseCount } = store.PostStore;

  const requestPostList = useCallback(async (): Promise<void> => {
    await handleGetPosts()
    .catch((error: IError) => {
      new PostError(error).getPostsError();
    });
  }, [handleGetPosts]);

  const infiniteScroll = useCallback((): void => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) === scrollHeight) {
      handleIncreaseCount(null);

      if (count < maxCount - 1) {
        alert('aaa');
        requestPostList();
      }
    }
	}, [count, handleIncreaseCount, maxCount, requestPostList]);

  useEffect(() => {
    requestPostList();

    return () => {
      handleIncreaseCount(0);
    }
  }, [handleIncreaseCount, requestPostList]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true);

    return () => {
      window.removeEventListener('scroll', infiniteScroll, true);
    }
  }, [infiniteScroll]);

  return (
    <MainFeed
      isLoading={isLoading}
      postList={postList}
    />
  );
});

export default FeedContainer;