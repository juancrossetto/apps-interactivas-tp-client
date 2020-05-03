import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //npm i react-router-dom
import HomePage from "pages/HomePage";
import NickAccessPage from "pages/NickAccessPage";
import GamePage from "pages/GamePage";
import RankingPage from "pages/RankingPage";

import { Provider } from "./Context";
import NumberPattern from "components/exercises/math/NumberPattern/NumberPattern";
import CompleteEquation from "components/exercises/math/CompleteEquation/CompleteEquation";
import CountFast from "components/exercises/math/CountFast/CountFast";
import JoinOpposites from "components/exercises/language/JoinOpposites/JoinOpposites";
import CompleteWords from "components/exercises/language/CompleteWords/CompleteWords";
import SelectText from "components/exercises/language/SelectText/SelectText";

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
          <Route exact path="/count-fast" component={CountFast} />  


          <Route exact path="/join-opposites" component={JoinOpposites} />
          <Route exact path="/complete-words" component={CompleteWords} />
          <Route exact path="/select-text" component={SelectText} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
