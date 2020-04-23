import React, { useContext, useEffect } from 'react';
import Ejercicio from './Ejercicio';
import ejercicioContext from '../../context/ejercicios/ejercicioContext';

const ListadoEjercicios = () => {

    // Extraer ejercicios del state inicial
    const ejerciciosContext = useContext(ejercicioContext);

    // revisar si ejercicios tiene contenido
    const { ejercicios, obtenerEjercicios } = ejerciciosContext;

    // Obtener ejercicios cuando carga el componente.
    useEffect(() => {
        obtenerEjercicios();
    },[]); 

    if(ejercicios.length === 0) return <p>Aún no hay ejercicios</p>;



    return ( 


        <ul className="listado-ejercicios">
            {ejercicios.map(ejercicio => (
                <Ejercicio
                    key={ejercicio.id}
                    ejercicio={ejercicio}
                />
            ))}
        </ul>
     );
}
 
export default ListadoEjercicios;