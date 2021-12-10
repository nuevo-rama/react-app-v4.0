import React, {useState, Fragment} from 'react';

const Counter = () => {

  

  const [number, setNumber] = useState(0); //inicia en 0

  const increase = () => {
    console.log("click +");
    setNumber (number + 1);
  }


  return ( 

    <Fragment>
      <h3>Component Counter {number}</h3>
      <button onClick= {increase}>Aumentar</button>

    </Fragment>
    

  );
}
  
  export default Counter;