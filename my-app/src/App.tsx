import React,{ useEffect, useState } from "react";
import './App.css';
import BLock from './components/BLock';
import Reset from "./components/Button";

function App() {
   
   const [state,setState]=useState(Array(9).fill(null));
   const [currentTurn,setCurrentTurn]=useState("X");
   const checkWinner=()=>{
      const win=[
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]

   ]
   for(let i=0;i<win.length;i++){
      const [a,b,c] = win[i];
      if(state[a]!==null&&state[a]===state[b]&&state[a]===state[c]) return true;
   }
   return false;
   }
   const handleClick = (index:number)=>{
      
      const StateCopy=state;
      if(StateCopy[index]!== null)return;
      StateCopy[index]=currentTurn;
      setState(StateCopy);
      const win  = checkWinner();
      if(win){
         alert(`${currentTurn} has won`);
       
      }
      setCurrentTurn(currentTurn==="X"?"O":"X");
      
   }
   const handleResetClick=()=>{

      setState(Array(9).fill(null));
      alert("The game has restarted"); 
   }
  return (
   <div className="main">
      <h1>TIC TAC TOE</h1> 
      <h3>Click On The Squares To Win</h3>
      <div className='board'>
     <div className='row'>
        <BLock onClick={()=>handleClick(0)} value={state[0]}/>
        <BLock onClick={()=>handleClick(1)} value={state[1]}/>
        <BLock onClick={()=>handleClick(2)} value={state[2]}/>
     </div>
     <div className='row'>
        <BLock onClick={()=>handleClick(3)} value={state[3]}/>
        <BLock onClick={()=>handleClick(4)} value={state[4]}/>
        <BLock  onClick={()=>handleClick(5)} value={state[5]}/>
     </div>
     <div className='row'>
        <BLock  onClick={()=>handleClick(6)} value={state[6]}/>
        <BLock  onClick={()=>handleClick(7)} value={state[7]}/>
        <BLock  onClick={()=>handleClick(8)} value={state[8]}/>
     </div>
    </div>
      <Reset onClick={()=>handleResetClick()}/>
   </div>
    
  );
}

export default App;
