import {ACTION} from "./App"

export default function DigitButton({digit , dispatch}){
    return(
        <button onClick={()=>{dispatch({type:ACTION.ADD_DIGITS,payload:{digit}})}}>{digit}</button>
    )
}