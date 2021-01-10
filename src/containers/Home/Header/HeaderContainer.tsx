import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import Header from 'components/Common/PageItems/Header';
import { removeCookie } from 'lib/Cookie';
import { TOKEN_NAME } from 'constants/Constants';

const HeaderContainer = (): JSX.Element => {
  const history: History<unknown> = useHistory();
  
  const moveLocation = useCallback((url: string): void => {
    history.push(url);
  }, [history]);

  const onLogout = useCallback((): void => {
    removeCookie(TOKEN_NAME);
    moveLocation('/sign');
  }, [moveLocation]);

  return (
    <Header moveLocation={moveLocation} onLogout={onLogout} />
  );
};

export default HeaderContainer;