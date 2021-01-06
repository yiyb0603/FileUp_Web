import React from 'react';
import Home from 'components/Home';
import PageTemplate from 'components/Template/PageTemplate';

const HomePage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Home />
    </PageTemplate>
  );
};

export default HomePage;