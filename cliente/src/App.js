import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //npm i react-router-dom
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Ejercicios from './components/ejercicios/Ejercicios';

import EjercicioState from './context/ejercicios/ejercicioState';

function App() {
  return (
    <EjercicioState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path="/ejercicios" component={Ejercicios}/>
        </Switch>
      </Router>
    </EjercicioState>
  );
}

export default App;
