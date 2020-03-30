import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

import { postLoginNick } from 'utils/services';

import useUserData from "../hooks/useUserData";

const NickAccessPage = () => {


    const { nickname, updateNickname } = useUserData(); // Our data and methods
    const [error, updateError] = useState(false);

    const nicknameInput = React.createRef();

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if (nicknameInput.current.value.trim() === '') {
            updateError(true);
            return;
        }
        postLoginNick(nicknameInput.current.value).then(validationResponse => {
            console.log(validationResponse);
            if (validationResponse.error || parseInt(validationResponse.status) >= 400) {
                updateError(true);
                return;
            } else {
                console.log("accedo");
                updateNickname(nicknameInput.current.value)
                updateError(false);
            }
        }).catch(function (e) {
            updateError(true);
            return;
        });

    }

    if (nickname) {
        return <Redirect to='/jugar' />
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Bienvenido</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <input
                            type="text"
                            ref={nicknameInput}
                            placeholder="Ingresa un nickname"
                        />
                    </div>


                    {error && `Se detectaron errores, intente más tarde.`}

                    <div className="campo-form">
                        <input type="submit"
                            className="btn btn-primario btn-block"
                            value="Comenzar"
                        />
                    </div>
                </form>

                <style jsx>{`
                    .form-usuario{
                        animation: 14s ease 0s infinite alternate none running background-color;
                    }
                    @keyframes background-color {
                        0%   {background-color: #f79652;}
                        25%  {background-color: yellow;}
                        50%  {background-color: #6dc680;}
                        100% {background-color: green;}
                    }
                 `}</style>
            </div>
        </div>
    );
}

export default NickAccessPage;