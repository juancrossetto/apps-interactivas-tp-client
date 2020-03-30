import React, { useState } from 'react';

import useUserData from "../hooks/useUserData";

const Login = () => {


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
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Bienvenido</h1>

                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="Ingresa un nickname"
                            value={nickname}
                            onChange={onChange}
                        />
                    </div>

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

export default Login;