import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //npm i react-router-dom
import HomePage from "pages/HomePage";
import NickAccessPage from "pages/NickAccessPage";
import GamePage from "pages/GamePage";
import RankingPage from "pages/RankingPage";

import { Provider } from "./Context";
import NumberPattern from "components/ejercicios/math/NumberPattern/NumberPattern";
import CompleteEquation from "components/ejercicios/math/CompleteEquation/CompleteEquation";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/inicio" component={GamePage} />
          <Route exact path="/puntajes" component={RankingPage} />

          <Route exact path="/patron-numeros" component={NumberPattern} />
          <Route exact path="/complete-equation" component={CompleteEquation} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
