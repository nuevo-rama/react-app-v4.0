import React, {useState, Fragment} from 'react';

const If = () => {

  const items = 2


  return ( 

    <Fragment>
      <h3>Component If {items} </h3>
      <h3>
        { 
        items > 0 ? 'Not Empty' : 'Empty' //operador ternario
        }
      </h3>

    </Fragment>
    

  );
}
  
  export default If;