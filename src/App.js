import './App.css';
// import Clicker from './Components/Clicker.jsx';
import React from 'react';

function App() {
  const  [count, setcount] = React.useState(0);
  

  function handleClickUp(){
   
    // setcount(function(){
    //   return count +1;
    // })
    setcount(function(oldValue){
      return oldValue +1;
    })
    
  }
  function handleClickDown(){
    
    // setcount(function(){
    //   return count - 1;
    // })
    setcount(function(oldValue){
      return oldValue - 1;
    })
    
    
  }
  return (
    <div className="App">
      
      <div className='number-container'>
        <button 
         onClick={handleClickDown}
        
        className='pminus'>-</button>
        <button
         className='number-content'>{count}</button>
         <button 
         onClick={handleClickUp}
         className='pplus'>+</button>
      </div>
      
    </div>
  );
}

export default App;
