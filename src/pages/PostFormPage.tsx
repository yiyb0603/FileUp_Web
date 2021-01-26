import React from 'react';
import PageTemplate from 'components/Template/PageTemplate';
import PostFormContainer from 'containers/Post/PostForm';

const PostFormPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <PostFormContainer />
    </PageTemplate>
  );
};

export default PostFormPage;