import React from 'react';
import ListadoEjercicios from '../ejercicios/ListadoEjercicios';

const Sidebar = () => {
    return (
        <aside>
            <h1>TP<span> Apps Interactivas</span></h1>


            <div className="ejercicios">
                <h2>Ejercicios</h2>

                <ListadoEjercicios/>
            </div>
        </aside>
      );
}
 
export default Sidebar;