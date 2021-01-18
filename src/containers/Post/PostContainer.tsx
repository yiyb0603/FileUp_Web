import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/hooks/useStores';
import { useParams } from 'react-router-dom';
import Post from 'components/Post';
import { IError } from 'util/types/Response';

const PostContainer = observer((): JSX.Element => {
  const { store } = useStores();
  const { postInfo, handleGetPost } = store.PostStore;

  type paramTypes = {
    idx: string | undefined;
  };

  const { idx }: paramTypes = useParams();
  const postIdx: number = Number(idx);

  const requestGetPost = useCallback(async (): Promise<void> => {
    await handleGetPost(postIdx)

    .catch((error: IError) => {
      console.log(error);
    });
  }, [handleGetPost, postIdx]);

  useEffect(() => {
    if (Number.isInteger(postIdx)) {
      requestGetPost();
    }
  }, [postIdx, requestGetPost]);
  
  return (
    <>
    {
      postInfo !== null &&
      <Post
        postInfo={postInfo}
      />
    }
    </>
  );
});

export default PostContainer;