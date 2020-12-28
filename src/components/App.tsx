import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Pages from 'pages';

const App = (): JSX.Element => {
  const { Sign } = Pages;

  return (
    <Switch>
      <Route exact path="/" component={Sign} />
    </Switch>
  );
};

export default App;
