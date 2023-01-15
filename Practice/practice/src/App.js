import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increase=()=>{
    setCount(count+1)
  };
  const decrease=()=>{
    setCount(count-1)
  }
  const multiply=()=>{
    setCount(count*2)
  }
  const divide=()=>{
    setCount(count/2)
  }
    const reset=()=>{
    setCount(0)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <input type="button" value="+1" onClick={increase} />
      <input type="button" value="-1" onClick={decrease} />
      <input type="button" value="x2" onClick={multiply} />
      <input type="button" value="÷2" onClick={divide} />
      <p> <input type="button" value="reset" onClick={reset} /></p>
    </div>
  );
}

export default App;
