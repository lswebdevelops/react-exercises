import './App.css';
// import Clicker from './Components/Clicker.jsx';
import React from 'react';

function App() {
  const  [isImportant, setIsImportant] = React.useState("Yes");
  

  function handleClick(){
    // setIsImportant is a function
    //const [isImportant, f]
    setIsImportant("No")
    
  }
  return (
    <div className="App">
      <h1> Is state important to know? </h1>
      <div className='h1.content'>
        <h1
        onClick={handleClick}
         className='yesH1'>{isImportant}</h1>
      </div>
      
    </div>
  );
}

export default App;
