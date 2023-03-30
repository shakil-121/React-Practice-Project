
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Counter></Counter>
    </div>
  );
}
 


function Counter(){ 
   
    const [count, setCount]=useState(50); 
  
    const increaseCount=()=>setCount(count+1)
 
    const decreaseCount=()=>setCount(count-1)
 
  return( 
    <div className='counter'>
      <h1>Count :{count}</h1> 
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App;
