import React, { useState } from "react";
import Layout from "components/Layout";
import WelcomeBar from "components/WelcomeBar";
import Link from "components/Link";

const GamePage = ({}) => {
  return (
    <Layout isAuth={true}>
      <div className="container">
        <div className="boxContainer">
          <WelcomeBar nickname="amigo" />

          <div className="games-container">
            <div className="title">A que juego vas a jugar?</div>
            <div className="games-list">
              <div className="game-box">
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
                <button>Jugar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .games-container {
          padding: 3em 0;
        }
        .games-container .title {
          padding: 0.5em 0 1em;
          font-size: 1.5em;
        }
        .games-container .game-box {
          min-height: 300px;
          background: #50c5ed;
          border-radius: 0.5em;
          position: relative;
        }
        .games-container .game-box button {
          background: #fff;
          padding: 8px 15px;
          position: absolute;
          bottom: 15px;
          border: 0;
          color: #50c5ed;
          left: 15px;
          border-radius: 10px;
        }
        .container {
          width: 100%;
          max-width: 900px;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        .boxContainer {
          background: #fff;
          padding: 2em;
          border: 1px solid #6a5bff;
          box-shadow: 0 2px 1px 2px #5a4bf1;
          border-radius: 1em;
        }
      `}</style>
    </Layout>
  );
};

export default GamePage;
