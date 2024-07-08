import './App.css'
import { useState } from 'react';
function App(){
  const [count, setCount] = useState(0);
  function addValue(){
    if(count+1>20){
      alert("No more Addition !")
    }
    else {
      setCount(count+1);
      setCount((prev) => prev+1);
    }
  }
  function subValue(){
    if(count-1 <0){
      alert("No more Subtraction !")
    }
    else{
      setCount(count-1);
    }
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter value : {count}</h2>
    <button onClick={addValue}>+</button>
    <button onClick={subValue}>-</button>
    </>
  )
}

export default App;