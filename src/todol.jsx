import React from "react";
import "./index.css";

export default function Todol(props){
    return (
        <>
        <div className="divid">
           <button className="et" onClick={()=>props.handlef(props.id)}>Delete</button>
           <div className="et">
             {props.text}
           </div>
           
        </div>
        <br/>
        </>
        
    );

}

