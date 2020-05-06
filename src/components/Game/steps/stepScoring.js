import React from 'react'

import useStep from '../hooks/useStep';
import useUserData from '../hooks/useUserData';
import Link from "components/Link";

export default () => {


  const { step, setStep } = useStep(); // Our data and methods
  const { scoring } = useUserData(); // Our data and methods

  const nextStep = (e, step) => {
    e.preventDefault();
    setStep(step);
  };

  return (
    <section>
      <div className="text">Finalizaste el juego!</div>

      <div>Tu scoring fue de {scoring} puntos</div>

    </section>
  )
}
