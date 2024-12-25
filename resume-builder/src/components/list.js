import React, { useState } from 'react'
import Input from './input'

function List() {

    
    const data=[
        "Virat Kohli (India)",
        "Steve Smith (Australia)",
        "Joe Root (England)",
        "Kane Williamson (New Zealand)",
        "Babar Azam (Pakistan)",
        "David Warner (Australia)",
        "Rohit Sharma (India)",
        "Ben Stokes (England)",
        "Jasprit Bumrah (India)",
        "Rashid Khan (Afghanistan)"
    ]

    const [array,setArray]=useState(data);

    function toSearch(name){
        if(name===""){
            setArray(data);
        }else{
            let newArray=data.filter((arr)=>arr.toLowerCase().includes(name.lowercase()));
            setArray(newArray);

        }
    }
  return (
    <div>
        <Input toSearch={toSearch}></Input>
        <ul>
            {array.map((datum,index)=>(
                <li key={index}>{datum}</li>
            ))}
        </ul>
    </div>
  )
}

export default List