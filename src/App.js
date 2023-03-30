
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App"> 
    {/* this component use for state concept */}
        <Counter></Counter>
        <ExternalUser></ExternalUser>


    </div>
  );
}
 
// Daynamic data load with API in react {section start}
function ExternalUser(){ 

  const [users,setUsers]=useState([]); 
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json()) 
      .then(data=>setUsers(data))
  } ,[]);

  return(
    <div>
      <h1>API Data Load With React</h1> 
      <p>Total User: {users.length}</p> 
      {
        users.map(user=> <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
} 

function User(pops){
  return(
    <div>
      <h3>Name: {pops.name}</h3> 
      <p>Email: {pops.email}</p> 
    </div>
  )
}

// Daynamic data load with API in react {section end}




// This is state concept 
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
