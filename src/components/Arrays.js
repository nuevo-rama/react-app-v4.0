import React, {useState, Fragment} from 'react';

const Arrays = () => {
  const [arrayNumber, setNumber] = useState([1,2,3,4,5]); //puede iniciar vacío

  return ( 
    <Fragment>
      <h3>Component Arrays</h3>
      <ul>
      {
        arrayNumber.map((item, index) => //key
           <li key={index}>Item: {item} - Index Item: {index}</li>
        )
      }
      </ul>
    </Fragment>
  );
}
  
export default Arrays;