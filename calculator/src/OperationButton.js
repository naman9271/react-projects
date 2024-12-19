import {ACTION} from "./App"

export default function DigitButton({operation , dispatch}){
    return(
        <button onClick={()=>{dispatch({type:ACTION.CHOOSE_OPERATIONS,payload:{operation}})}}>{operation}</button>
    )
}