import React from "react";
interface blockProp{
    value?:String|null;
    onClick?:()=>void;
}
const Block:React.FC<blockProp>=(props)=>{
        return (
            <div onClick={props.onClick} className="block">{props.value}</div>
        );
}

export default Block;