import './App.css';
import { useState, useEffect } from 'react';
import Timer from './components/timer'

function App() {
  const [seconds, setSecounds] = useState(0)
  const [count, setCount] = useState(0)
  const [pause, setPause] = useState(false);

  useEffect(()=>{

  },[])

  return (
    <div>
     <Timer/>
    </div>
  );
}

export default App;
