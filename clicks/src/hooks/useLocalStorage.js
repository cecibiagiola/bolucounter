import { useState } from "react";

const useLocalStorage = (total, initialValue) => {
  // Se crea un estado para guardar el valor del localStorage
  // Como valor inicial puede ser el que ya esta en el localStorage, o el valor inicial que se le pasa
  // por que no se encontro nada en el storage
  const [storageValue, setStoredValue] = useState(
    //Esta funcion va a definir el valor inicial
    () => {
      // Se obtiene el valor del localStorage
      const localStorageValue = localStorage.getItem(total);
      // Cuidado! Por que puede ser que no haya nada en el storage :/
      // Si hay, se parsea y se retorna
      if (localStorageValue) {
        return JSON.parse(localStorageValue);
      } else {
        //Y si no hay, se retorna el valor inicial (para el boluCoutner se le va a pasar 0)
        return initialValue;
      }
    }
  );

  // Se crea un estado (funcion) para guardar el valor en el storage y en el estado =)
  const setValue = (value) => {
    // Se guarda el valor en el localStorage
    localStorage.setItem(total, JSON.stringify(value));
    // Se guarda el valor en el estado
    setStoredValue(value);
  };

  return [storageValue, setValue];
};
export { useLocalStorage };
