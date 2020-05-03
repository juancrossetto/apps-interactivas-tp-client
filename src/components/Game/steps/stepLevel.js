import React from 'react'

import useUserData from '../hooks/useUserData';
import useStep from '../hooks/useStep';

export default () => {

  
  const { level, setLevel } = useUserData(); // Our data and methods
  const { step, setStep } = useStep(); // Our data and methods

  const handleAction = (e, action) => {
    e.preventDefault();
    setLevel(action);
  };

  const nextStep = (e) => {
    setStep(3);
  }

  return (
    <section>
      <div className="text">Con que dificultad te gustaria jugar?</div>
      <div className="options row align-items-center">
        <div className={`col item ${level == 1 ? "active" : null}`} onClick={e => handleAction(e, 1)}>
          <div className="top">
            <img src="/static/img/principiante.png"></img>
          </div>
          <div className="content">
            <h3>Principiante</h3>
          </div>
        </div>
        <div className={`col item ${level == 2 ? "active" : null}`} onClick={e => handleAction(e, 2)}>
          <div className="top">
            <img src="/static/img/intermedio.png"></img>
          </div>
          <div className="content">
            <h3>Intermedio</h3>
          </div>
        </div>
        <div className={`col item ${level == 3 ? "active" : null}`} onClick={e => handleAction(e, 3)}>
          <div className="top">
            <img src="/static/img/experto.png"></img>
          </div>
          <div className="content">
            <h3>Experto</h3>
          </div>
        </div>
      </div>
      <button onClick={e => nextStep(e)} disabled={!level} className="btn-next"><span>Siguiente paso</span> <img src="https://img.icons8.com/material-two-tone/24/000000/long-arrow-right.png" /> </button>
      <style jsx>{`
    
    `}</style>
    </section>
  );
}