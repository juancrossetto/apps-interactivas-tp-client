import React from 'react'
import useStep from './hooks/useStep';
import useUserData from './hooks/useUserData';
import StepNickname from './steps/stepNickname';
import StepLevel from './steps/stepLevel';
import StepGame from './steps/stepGame';


import WelcomeBar from "components/WelcomeBar";

export default () => {

  const { step, setStep } = useStep(); // Our data and methods
  const { nickname, avatar, setNickname, setAvatar } = useUserData(); // Our data and methods

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

  let renderUserbar = () => (
    <section>
    </section>
  )

  return (
    <section className="game-box">
      <div className="container">
        { nickname && step > 2 && <WelcomeBar nickname={nickname} avatar={avatar}></WelcomeBar>}
        { renderStep() }
        <img src="/static/img/dog.png" className="dog"></img>
      </div>
      <style jsx>{`
        
      `}</style>
    </section>
  );
};
