import {useState} from 'react'
import Employee from './Counter'
function App() {
  const [state,setstate]=useState(false)

  
  return (
    <div className='App'>
      <h1 onClick={()=>setstate(!state)}>show/hide</h1>
      {state ? <Employee/>:null}
    </div>
    
  );
}
export default App

