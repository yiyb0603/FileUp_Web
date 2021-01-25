import React from 'react';
import PageTemplate from 'components/Template/PageTemplate';
import UserContainer from 'containers/User';

const UserPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <UserContainer />
    </PageTemplate>
  );
};

export default UserPage;