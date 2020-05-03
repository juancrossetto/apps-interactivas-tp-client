import React, { useState } from 'react';

import useUserData from '../hooks/useUserData';
import useStep from '../hooks/useStep';

export default () => {

  const { nickname, avatar, setNickname, setAvatar } = useUserData(); // Our data and methods
  const { step, setStep } = useStep(); // Our data and methods
  const [error, updateError] = useState(false);

  let avatares = [
    "static/img/icon-users/icons8-futurama-bender.png",
    "static/img/icon-users/icons8-homer-simpson.png",
    "static/img/icon-users/icons8-iron-man.png",
    "static/img/icon-users/icons8-jake.png",
    "static/img/icon-users/icons8-super-mario.png",
  ]

  const nicknameInput = React.createRef();

  // Cuando el usuario quiere iniciar sesión
  const onSubmit = e => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (nicknameInput.current.value.trim() === '') {
      updateError(true);
      return;
    }
    updateError(false);
    setNickname(nicknameInput.current.value)
    setTimeout(() => {
     setStep(2);
    }, 5000);
    setAvatar(avatares[Math.floor(Math.random() * avatares.length)]);

  }

  const setForm = () => (
    <div>
      <div className="text">Antes de empezar, como te llamas?</div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={nicknameInput} placeholder="ingresa tu nombre o nickname"></input>
        {error && `Se detectaron errores, intente más tarde.`}
        <button type="submit" className="btn-next"><span>Comenzar</span> <img src="https://img.icons8.com/material-two-tone/24/000000/long-arrow-right.png" /> </button>
      </form>
    </div>
  );

  const setGreetings = () => (
    <div>
      <div className="text">Genial {nickname}! <br /> <small>Este sera tu avatar a partir de ahora.</small></div>
      <img className="avatar" src={avatar}></img>
    </div>
  );



  return (
    <section className="stepNickname">
      {!nickname && setForm()}
      {nickname && setGreetings()}
    </section>
  )
}
