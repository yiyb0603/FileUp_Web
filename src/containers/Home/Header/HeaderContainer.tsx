import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import Header from 'components/Common/PageItems/Header';

const HeaderContainer = (): JSX.Element => {
  const history: History<unknown> = useHistory();
  
  const moveLocation = useCallback((url: string): void => {
    history.push(url);
  }, [history]);

  return (
    <Header moveLocation={moveLocation} />
  );
};

export default HeaderContainer;