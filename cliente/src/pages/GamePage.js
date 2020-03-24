import React, { useState } from 'react';


import Document from 'components/Document'
import useUserData from "../hooks/useUserData";

const GamePage = () => {


    const { nickname, updateNickname } = useUserData(); // Our data and methods

    const [error, updateError] = useState(false);

    // Guardo en el state usuario, los valores del form
    const onChange = e => {
        updateNickname(e.target.value)
    };

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if (nickname.trim() === '') {
            updateError(true);
            return;
        }
        updateError(false);

        //Pasarlo al action

    }

    return (
        <Document isAuth={true}>
            <div className="container">
                <div className="boxContainer">
                    Hola {nickname}
                </div>
            </div>

            <style jsx>{`
                .container {
                    width: 100%;
                    max-width: 750px;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .boxContainer{
                    margin: 5em 0 0;
                    background: #fff;
                    padding: 1em;
                    box-shadow: 0 0 1px #ddd;
                }
              
            `}</style>
        </Document>
    );
}

export default GamePage;