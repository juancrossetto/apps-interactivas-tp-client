import { OBTENER_EJERCICIOS,
         EJERCICIO_ACTUAL }  from '../../types'; 


//Este reducer lo que hace es cambiar el state de ejercicioState



export default (state, action) => {
    switch(action.type) {
        case OBTENER_EJERCICIOS:
            return {
                ...state, // siempre esta esta linea
                ejercicios: action.payload
            }
        case EJERCICIO_ACTUAL:
            return {
                ...state,
                ejercicio: state.ejercicios.filter(ejercicio => ejercicio.id === action.payload )
            }
        default:
            return state;
    }
}