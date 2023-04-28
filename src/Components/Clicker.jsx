import React from "react";

import '../Styles/Clicker.css';

function Clicker(){

   function greeting(name){
      const date = new Date();
      const hours = date.getHours(); 
      let timeOfDay = "";
      if (hours >= 4 && hours < 12) {
        timeOfDay = "Morning";
      } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon";
      } else if (hours >= 17 && hours < 20) {
        timeOfDay = "Evening";
      } else {
        timeOfDay = "Night";
      }
      return `Good ${timeOfDay}, ${name}!`
   }
console.log(greeting("Davi"));
   
   
   
   return(
      <button
     className="btn-content"

     onClick={greeting}

     >Click</button>
 )
}

// export default Clicker;

