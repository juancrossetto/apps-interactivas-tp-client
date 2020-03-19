import React, { useReducer } from 'react';
import ejercicioReducer from "./ejercicioReducer";
import ejercicioContext from "./ejercicioContext";
import { EJERCICIO_ACTUAL,
         OBTENER_EJERCICIOS }  from '../../types';


const ejercicios = [
    {id:1, nombre: 'MATEMATICA'},
    {id:2, nombre: 'LENGUA'}
    ]

const EjercicioState = props => {

    const initialState = {
        ejercicios: []
    }

    // Crear dispatch y state
    const [ state, dispatch] = useReducer(ejercicioReducer, initialState);

     // Obtener los ejercicios
     const obtenerEjercicios = () => {
        dispatch({
            type: OBTENER_EJERCICIOS,
            payload: ejercicios //el payload es siempre lo que mandemos como param.
        });
    };


    // Seleccionar Ejercicio 
    const ejercicioActual = ejercicioId  => {
        dispatch({
            type: EJERCICIO_ACTUAL,
            payload: ejercicioId 
        })
    };
    //Retornamos el context
    return (
        <ejercicioContext.Provider
        value={{
            ejercicios: state.ejercicios,
            obtenerEjercicios,
            ejercicioActual
        }}
        >
            {props.children}
        </ejercicioContext.Provider>
    )
}

export default EjercicioState;