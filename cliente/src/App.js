import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //npm i react-router-dom

import NickAccess from 'pages/NickAccess';

import { Provider } from "./Context";

function App() {
  return (
    <Provider>
        <Router>
          <Switch>
            <Route exact path="/" component={NickAccess} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
