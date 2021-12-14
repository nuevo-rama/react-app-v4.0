import React, {useState, Fragment} from 'react';

const AddElementArray = () => {

  const [arrayNumber, setArrayNumber] = useState([]); //setNumber para modificar el estado

  const [number, setNumber] = useState(0);

  const AddElement = () => {
      console.log('click'); 

      setNumber(number +1)

      setArrayNumber([
          ...arrayNumber, number
      ])
  }

  return ( 
    <Fragment>
      <h3>Component Arrays</h3>
      <button onClick={AddElement}>Add Element</button>
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
  
export default AddElementArray;