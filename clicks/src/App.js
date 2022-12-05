import './App.css';
import {Counter} from './Counter/index.js'
import {Button} from './Button/index.js'
import { useState } from 'react';
import Boludos from './img/boludos.jpg';
import Swal from 'sweetalert2'
 

function App() {
  const [ numClicks, setNumClicks] = useState(0);
  
  const onHandleClick = () => {
    setNumClicks(numClicks + 1);

    if(numClicks === 10){
      Swal.fire({
        title: 'Advertencia',
        text: 'La cantidad de boludos atendidos es crítica',
        icon: 'warning',
        confirmButtonText: 'Ok, no'
      });
    }
  
    
  };
  
  const resetCounter = () => {
    Swal.fire({
      title: 'Felicidades 🎉',
      text: `Hoy atendiste ${numClicks} boludos 💩!`,
      icon: 'success',
      confirmButtonText: 'Merezco vacaciones'
    });
    setNumClicks(0);  
  };
  return (
   <div className='app'>
      <div className='title-img'>
        <h1 className='main-title'>Contador de Boludos</h1>
        <img 
          src={Boludos}
          alt='Atendedor de boludos'
          className='img-boludos'/>
        </div>
      <Counter
        numClicks= {numClicks} />
      <Button
        text='Otro Boludo'
        clickButton={true}
        onHandleClick={ onHandleClick } /> 
      <Button
        text='Reset'
        clickButton={false}
        onHandleClick={ resetCounter } /> 
   </div>
    
  );
}

export default App;
