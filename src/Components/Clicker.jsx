import React from "react";
import logo from '../logo.svg';
import '../Styles/Clicker.css';
function Clicker(){
  
  const [thingsArray, setThingsArray] = React.useState(["Things1"])

  function addItem(){
    setThingsArray(previousItem =>{
      return[...previousItem, `Things${previousItem.length + 1}`]
    })
  }

  const elementsArray = thingsArray.map(thing =>
    <p key={thing}>{thing}</p>
    )
    
    return(
        <div className="container-content">
           <div className="nav-content">
           <img src={logo} className="Clicker-logo" alt="logo" />

            <p>Button Clicker</p>
           </div>
    <hr></hr>
           <div className="content">
            <button             
            onClick={addItem}
            className="btn-content">Add Item</button>
            <div className="added-content">
          {elementsArray}
             </div>
           </div>
        </div>
    )
    }
export default Clicker;