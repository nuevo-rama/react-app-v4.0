import React, {useState, Fragment} from 'react';

const If = () => {

  const items = 2


  return ( 

    <Fragment>
      <h3>
        { 
        items > 0 ? 'Not Empty' : 'Empty'
        }
      </h3>

    </Fragment>
    

  );
}
  
  export default If;