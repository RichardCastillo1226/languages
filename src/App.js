import './App.css';
import React,  { useState } from 'react';


function SizeButtons(props) {
  return (
    <div>
      <button onClick={() => props.icrement(props.sizing + 2)}> + </button> 
      <button onClick={() => props.icrement(props.sizing - 2)}> - </button> 
    </div>
) 
}

function Text(props) {
  return (
   <h1 style={{fontSize:`${props.sizing}px`}}> {props.greeting} </h1>
  )
}

function Translation(props) {
  return (
    <div>
      <button onClick={() => props.lang("Good Morning")}>English</button>
      <button onClick={() => props.lang("Buenos Dias")}>Spanish</button>
      <button onClick={() => props.lang("早上好")}>Chinese</button>
      <button onClick={() => props.lang("Bun Dia")}>Portuguese</button>
      <button onClick={() => props.lang("Bonjou")}>Haitian Creole</button>
    </div> 
  )
}



function App() {
  const [num, setSize] = useState(32) 
  const [msm, setText] = useState("Good Morning")
  return (
    <div id="morning-box">
    <SizeButtons icrement={setSize} sizing={num}/> 
    <Text sizing={num} greeting={msm}/> 
    <Translation lang={setText}/> 
    </div>
  )
}

export default App;
