import './App.css'; 
import Boton from './componentes/boton.js';
import Pantalla from './componentes/pantalla.js';
import { useState } from 'react';
import { evaluate } from 'mathjs'; //paquete externo.
import Logo from './componentes/logo.js'


function App() {
  const [input,setInput] = useState('');

  const agregarInput = val => {  //Se puede mejorar la logia, por ejemplo se permite colocar mas de un signo. Eso tiene que ser invalido.
      setInput(input + val);
  }

  const calcular = () =>{
    if(input){
      setInput(evaluate);
    }else{
      alert("Ingrese numeros para calcular.");
    }
    
  }

  return (
    <div className="App">

      <Logo/>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={()=>setInput('')}>CE</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcular}>=</Boton>
        </div>
      </div>

    </div>
  );
}

export default App;
