import React from "react";
import logo from '../logo.svg';
import '../Styles/Clicker.css';

function Clicker(){
    const [things ,setThings] = React.useState(["Things 1", "Things 2"]);

   function addThings(){
    const newThingText = `Things ${things.length + 1}`;
    setThings(prevState => [...prevState, newThingText])
   }
   const thingsElements = things.map(thing => 
    <p key={thing}>{thing}</p>)
    return(
        <div className="container-content">

           <div className="nav-content">
           <img src={logo} className="Clicker-logo" alt="logo" />
            <p>Button Clicker</p>
           </div>

           <div className="content">
            <button 
            onClick={addThings}
            className="btn-content">Add Item</button>
            <div className="added-content">
            {thingsElements}
            </div>

           </div>
        </div>
    )
}

export default Clicker;

