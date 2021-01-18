import React from 'react';
import PageTemplate from 'components/Template/PageTemplate';
import PostContainer from 'containers/Post';

const PostPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <PostContainer />
    </PageTemplate>
  );
};

export default PostPage;