import React, { useContext } from 'react';
import ejercicioContext from '../../context/ejercicios/ejercicioContext';

const Ejercicio = ({ejercicio}) => {

    // Obtener el state del formulario
    const ejerciciosContext = useContext(ejercicioContext);
    const { ejercicioActual } = ejerciciosContext;
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => ejercicioActual(ejercicio.id)}
            >{ejercicio.nombre} </button>
        </li>
    );
}
 
export default Ejercicio;