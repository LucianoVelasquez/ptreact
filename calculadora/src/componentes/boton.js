import React from 'react';
import '../styles/boton.css';


function Boton(props){

    const esOperador = valor => {
      return isNaN(valor) && (valor != '.')  && (valor != '='); 
    };

    return(
      <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''} ${(props.children === '=' ? 'fila-2' : ' ' )}`.trimEnd() 
      }onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
}

export default Boton;