import React, {useState} from 'react';

const Counter = () => {

  

  const [number, setNumber] = useState(0); //inicia en 0


  return (
    <h3>Component Counter {number}</h3>

  );
}
  
  export default Counter;