import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //npm i react-router-dom

import NickAccess from 'pages/NickAccessPage';
import GamePage from 'pages/GamePage';
import RankingPage from 'pages/RankingPage';

import { Provider } from "./Context";

function App() {
  return (
    <Provider>
        <Router>
          <Switch>
            <Route exact path="/" component={NickAccess} />
            <Route exact path="/jugar" component={GamePage} />
            <Route exact path="/puntajes" component={RankingPage} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
