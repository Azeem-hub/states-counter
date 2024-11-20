import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Button, Badge } from 'react-bootstrap';

function App() {
  // console.log(useState('ali'));
  let [value, setValue] = useState(5);
  console.log(value);
  function incrementValue(){
    setValue(value + 1);
  }

  function resetValue(){
    setValue(value * 0 );
    // setValue(0);
 }

 function decrementValue(){
  if(value < 1){
    setValue(0);
  }  
  else{
    setValue(value - 1);
  }
}
  return (
    <div className="text-center py-5">
      <h1 className="mb-4">Use State Data {value}</h1>
      <Button variant="primary" className="mx-1" onClick={decrementValue}>Decrement</Button>
      <Button variant="success" className="mx-1" onClick={resetValue}>Reset</Button>
      <Button variant="dark" className="mx-1" onClick={incrementValue}>Increment</Button>
    </div>
  );
}

export default App;
