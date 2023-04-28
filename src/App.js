import './App.css';
// import Clicker from './Components/Clicker.jsx';
import React from 'react';

function App() {
  const  [isImportant, setIsImportant] = React.useState(0);
  

  function handleClickUp(){
    // setIsImportant is a function
    //const [isImportant, f]
    setIsImportant(isImportant + 1)
    
  }
  function handleClickDown(){
    // setIsImportant is a function
    //const [isImportant, f]
    setIsImportant(isImportant - 1)
    
  }
  return (
    <div className="App">
      
      <div className='number-container'>
        <p 
         onClick={handleClickDown}
        
        className='pminus'>-</p>
        <h1
         className='number-content'>{isImportant}</h1>
         <p 
         onClick={handleClickUp}
         className='pplus'>+</p>
      </div>
      
    </div>
  );
}

export default App;
