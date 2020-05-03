import React from 'react'

import Link from "components/Link";

export default () => (
  <section>
    <div className="text">Llego el momento de decidir con que juego arrancar el desafio matematico.</div>


    <ul className="site-menu">
      <li>
        <Link route="/patron-numeros" className="text-light">
          <p>Patrón de Números</p>
        </Link>
      </li>
      <li>
        <Link route="/complete-equation" className="text-light">
          <p>Completar ecuación</p>
        </Link>
      </li>
      <li>
        <Link route="/count-fast" className="text-light">
          <p>Cuán rápido podes contar?</p>
        </Link>
      </li>
      <li>
        <Link route="/join-opposites" className="text-light">
          <p>Junta los opuestos</p>
        </Link>
      </li>
      <li>
        <Link route="/complete-words" className="text-light">
          <p>Completa la palabra</p>
        </Link>
      </li>
      <li>
        <Link route="/select-text" className="text-light">
          <p>Descubrí el texto correcto</p>
        </Link>
      </li>
    </ul>


  </section>
);
