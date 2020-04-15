import React, { useState } from 'react';


import { Redirect } from 'react-router-dom';

import Layout from 'components/Layout'
import WelcomeBar from 'components/WelcomeBar'

import useUserData from "../hooks/useUserData";

const GamePage = () => {



    return (
        <Layout isAuth={true}>
            <div className="container">
                <div className="boxContainer">
                    <WelcomeBar nickname="amigo" />

                    <div className="games-container">
                        <div className="title">A que juego vas a jugar?</div>
                        <div className="games-list">
                            <div className="game-box">
                                <button>Jugar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .games-container{
                padding: 3em 0;
            }
            .games-container .title{
                padding: .5em 0 1em;
                font-size: 1.5em;
            }
            .games-container .game-box{
                min-height: 100px;
                background: #50c5ed;
                border-radius: .5em;
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
                .boxContainer{
                    background: #fff;
                    padding: 2em;
                    border: 1px solid #6a5bff;
                    box-shadow: 0 2px 1px 2px #5a4bf1;
                    border-radius: 1em;
                }
              
            `}</style>
        </Layout>
    );
}

export default GamePage;