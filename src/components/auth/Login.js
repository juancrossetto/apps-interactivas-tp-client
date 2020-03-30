import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password:''
    });

    const [error, guardarError] = useState(false);

    // extraer de usuario
    const { email, password } = usuario;

    // Guardo en el state usuario, los valores del form
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value}
        )
    };

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' | password.trim() === '')
        {
            guardarError(true);
            return;
        }
        guardarError(false);

        //Pasarlo al action

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label gtmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={ email }
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label gtmlFor="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={ password }
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