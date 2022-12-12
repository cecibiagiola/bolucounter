
import { useState } from "react";


const useLocalStorage = (total, initialValue) => {
  
  const localStorageNum = localStorage.getItem('total');
  let parsedNum ;
  
  
  if (!localStorageNum) {
    localStorage.setItem('total', JSON.stringify(initialValue));
    parsedNum = initialValue;
  } else {
    parsedNum = JSON.parse(localStorageNum);
  }; 
  
  const [numbers, setNumbers] = useState(parsedNum);

  const savedNumbers = (newNum) => {
    const stringified = JSON.stringify(newNum);
    localStorage.setItem(total, stringified);
    setNumbers(newNum)
  }
  
  return [
    numbers,
    savedNumbers
  ];

}
export {useLocalStorage} 
