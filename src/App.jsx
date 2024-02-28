import React from 'react';
import './App.scss';
// import Todo from "./Components/Todo/Todo";
import Nima from './Components/Todo/salom';

function App(){
  
  const xref = React.useRef()
  const [modal,setmodal] = React.useState(false)
  return (

  <>
    {/* <ul className='salom' ref={xref}>
      <h1>Salomlar</h1>
      <h1>Salomlar</h1>
      <h1>Salomlar</h1>
      <button onClick={()=>{
        xref.current.classList.remove("nima")

      }}>exit</button>
    </ul>

    {/* xref.current.removeChild(xref.current.className = "salom") */}
    {/* <button  onClick={() => {
      xref.current.classList.add("nima");
      
    }}>Xayr</button> */} 
    <button onClick={()=>setmodal(true)}>open</button>
  <Nima modal={modal} setmodal={setmodal} />
   
</>
);
}

export default App;