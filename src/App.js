import React, { useState } from "react";
import "./index.css";
import Todol from "./todol";
import PropTypes from 'prop-types'

export default function App() {
  const [inputlist, setinputlist] = useState("");
  const [item, setitem] = useState([]);
  const changei = (event) => {
    setinputlist(event.target.value);
  }
  const fin = () => {
    // console.log("rg");
    if(inputlist===""){
      alert("put somethin there idiot");
      return;
    }
    setitem((oldpr) => {
      return [...oldpr, inputlist];
    })
    setinputlist("");
  
  }
  // const []
  const handlef = (id)=>{
    console.log(id);
    setitem((olditem)=>{
         return olditem.filter((a,i)=>{
             return id!==i;
         })
    }) 

  }
  // wtf
  return (
    <>
    <div className="App">
      <div className="textbox">
        <h1 className="text">TO_DO_LIST</h1>
        <label>
          <div className="ter">
          <input className="ctc" type="text" placeholder="Enter Task" onChange={changei} value={inputlist}></input>
          <button className="btn" onClick={fin}>Click Me</button>
          </div>
        </label>
        <ol className="rtr">
          {
          item.map((itemval, i) => {
            return (<ol key={i}>
              <Todol 
                 text={itemval} 
                 handlef={handlef}
                 id={i}
              />
            </ol>)
          })}
        </ol>
      </div>
    </div>
    </>
  );
}


// Todol.propTypes = {
//   text: PropTypes.string
// };
// Todol.defaultProps = {
//   text:" "
// };

