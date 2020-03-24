import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
        if(nickname.trim() === '')
        {
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
                
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label gtmlFor="nickname">nickname</label>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="Ingresa un nickname"
                            value={ nickname }
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit"
                               className="btn btn-primario btn-block"
                               value="Inicias sesión"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
                <Link to={'/ejercicios'} className="enlace-cuenta">
                    Entrar sin loguearme
                </Link>
            </div>
        </div>
      );
}
 
export default Login;