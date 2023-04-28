import './App.css';
// import Clicker from './Components/Clicker.jsx';
import React from 'react';

function App() {
  const  [count, setcount] = React.useState(0);
  

  function add(){
   
    setcount(prevCount => prevCount + 1)
    // setcount(function(oldValue){
    //   return oldValue +1;
    // })
    
  }
  function subtract(){
    
    setcount(prevCount => prevCount - 1)
    // setcount(function(oldValue){
    //   return oldValue - 1;
    // })
    
    
  }
  return (
    <div className="App">
      
      <div className='number-container'>
        <button 
         onClick={subtract}
        
        className='pminus'>-</button>
        <button
         className='number-content'>{count}</button>
         <button 
         onClick={add}
         className='pplus'>+</button>
      </div>
      
    </div>
  );
}

export default App;
