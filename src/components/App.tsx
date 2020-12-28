import React from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <div>Hello World</div>} />
      </Switch>
    </div>
  );
};

export default App;
