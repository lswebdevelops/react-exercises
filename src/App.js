
import Count from './Components/Count'
import './App.css';
import React from 'react';
function App() {
  const  [count, setcount] = React.useState(0);
  
  function handleCountUp(){
  
   setcount(prevCount => prevCount +1)
  }
  function handleCountDown(){
    setcount(prevCount => prevCount -1)

  }
  return (
    <div className="App">
      
      <div className='number-container'>
        <button onClick={handleCountDown} className='pminus'>-</button>
        <Count number={count}/>
        <button  onClick={handleCountUp} className='pplus'>+</button>
      </div>
      
    </div>
  );
}
export default App;
