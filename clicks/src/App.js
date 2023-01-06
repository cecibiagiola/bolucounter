import './App.css';
import {Counter} from './Counter/index.js'
import {Button} from './Button/index.js'
import { useState } from 'react';
import Boludos from './img/boludos.jpg';
import Swal from 'sweetalert2'; 
/* import { Saved } from './Saved/Saved'; */
/* import { useLocalStorage } from './useLocalStorage';  */

 

function App() {
  
  const [numClicks, setNumClicks] = useState(0);


  /* const [num, savedNum] = useLocalStorage('NUMBERS_V1', []) */

  
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
    
    
    /* savedNum(numClicks); */
    setNumClicks(0);    
  };



  return (
    <div className='app'>
      
        <div className='title-img'>
          <img 
            src={Boludos}
            alt='Atendedor de boludos'
            className='img-boludos'/>
          <h1 className='main-title'>Contador de Boludos</h1>
          </div>
        <Counter
          numClicks= {numClicks} 
          />
        <Button
          text='Otro Boludo'
          clickButton={true}
          onHandleClick={ onHandleClick } /> 
        <Button
          text='Reset'
          clickButton={false}
          onHandleClick={ resetCounter } /> 
        {/* <Saved
        saved={num}/> */}
         
 </div>
    
  );
}

export default App;
