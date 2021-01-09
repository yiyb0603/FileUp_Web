import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Pages from 'pages';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  const { Sign, Home } = Pages;

  return (
    <>
      <Switch>
        <Route exact path="/sign" component={Sign} />
        <Route exact path="/" component={Home} />
      </Switch>

      <ToastContainer
        style={{ width: 400 }}
        autoClose={5000}
        draggable={true}
        closeOnClick={true}
        pauseOnHover={false}
      />
    </>
  );
};

export default App;
