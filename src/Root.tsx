import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from 'components/App';
import stores from 'stores';
import 'styles/AllStyles.scss';
import 'styles/Palette/Palette.scss';

const Root = (): JSX.Element => {
  return (
    <Provider store={stores}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
};

export default Root;