import React from 'react'
import useStep from './hooks/useStep';
import StepNickname from './steps/stepNickname';
import StepLevel from './steps/stepLevel';
import StepGame from './steps/stepGame';

export default () => {

  const { step, setStep } = useStep(); // Our data and methods

  let renderStep = () => {
    switch (step) {
      case 1:
        return <StepNickname/>
      case 2:
        return <StepLevel/>
      case 3:
        return <StepGame/>
      default:
        return <StepNickname/>
    }
  }
  return (
    <section className="game-box">
      <div className="container">
        { renderStep() }
        <img src="/static/img/dog.png" className="dog"></img>
      </div>
      <style jsx>{`
        
      `}</style>
    </section>
  );
};
