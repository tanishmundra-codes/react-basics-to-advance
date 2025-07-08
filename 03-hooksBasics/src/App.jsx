import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
    
  }

  const subValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    
  }

  return (
    <>
       <h1>Click to add or sub !</h1>
       <p>{counter}</p>
       <button onClick={addValue}>Add Value</button>
       <button onClick={subValue}>Subtract Value</button>
    </>
  )
}

export default App
