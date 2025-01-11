import { useEffect, useState } from "react";

export default function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{
        const jsonValue=localStorage.getItem(key);
        if(jsonValue!=null)return JSON.parse(jsonValue);
        if(typeof defaultValue==='function'){
            return defaultValue()
        }else{
            return defaultValue
        }
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return [value,setValue];
}

// will learna bout the local stprgae and the thing whatever writen above