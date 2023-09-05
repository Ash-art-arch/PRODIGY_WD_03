import React from "react";
import "./button.css";
interface buttonProp{
    onClick?:()=>void;
}
const Reset:React.FC<buttonProp>=(props)=>{
    return(
        <button onClick ={props.onClick}>RESET</button>
    )
}
export default Reset;