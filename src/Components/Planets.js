import React from "react";
import Planet from './Planet.css'
function Planets(){
    const plannames=['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
    return(
        <div> 
            {
                plannames.map(name => <table><tr><td>{name}</td></tr></table>)
            }
        </div>
    )
    
}
export default Planets;