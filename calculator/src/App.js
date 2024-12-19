import { useReducer } from 'react';
import './App.css';
import DigitButton from './DigitButton';
import OperationButton from "./OperationButton"

// only 1 bug that says when at starting no imput has given it still can take operand so it shouldn't
function reducer(state,{type,payload}){
  switch(type){
    case ACTION.ADD_DIGITS :
      if(state.currentOperand==="0" && payload.digit==="0"){
        return state
      }
      if(payload.digit==="." && state.currentOperand.includes(".")) {
        return state
      }
      return {
        ...state,
        currentOperand:`${state.currentOperand||""}${payload.digit}`,
      }
    case ACTION.CHOOSE_OPERATIONS:
      if(state.previousOperand == null){
        return {
        previousOperand : state.currentOperand,
        operand : payload.operation,
        currentOperand : null,
      }
      }else if(state.currentOperand == null){
      return {
        ...state,
        operand: payload.operation,
      }
      }else if(state.currentOperand == null && state.previousOperand == null){
        return {}
      }else{
      return{
        operand : payload.operation,
        previousOperand : evaluate(state),
        currentOperand : null,
      }
      }
    case ACTION.CLEAR :
      return  {}  
    case ACTION.EVALUATE:
      return{
        currentOperand:evaluate(state)
      }
    case ACTION.DELETE_DIGITS:
      return{
        ...state,
        currentOperand: state.currentOperand.slice(0,-1)        
      }
  }
}
function evaluate({currentOperand,previousOperand,operand}){
  // if(operand==="+"){
  //   return parseInt(previousOperand) + parseInt(currentOperand)
  // }else if(operand==="-"){
  //   return previousOperand - currentOperand
  // }else if(operand==="*"){
  //   return previousOperand * currentOperand
  // }else if(operand==="/"){
  //   return previousOperand / currentOperand
  // }
  let prev = parseFloat(previousOperand);
  let current = parseFloat(currentOperand);
  if(isNaN(prev)|| isNaN(current)) return ""
  let result="";
  switch(operand){
    case "+":
      result = prev + current;
      break
    case "-":
      result = prev - current;
      break
    case "*":
      result = prev * current;
      break
    case "/":
      result = prev / current ;
      break
  }
  return result.toString()
}
export const ACTION={
  ADD_DIGITS:"add-digits",
  CLEAR:"clear",
  DELETE_DIGITS:"delete-digits",
  CHOOSE_OPERATIONS:"choose-operantion",
  EVALUATE:"evaluate"
}

function App() {

  const [{currentOperand,previousOperand ,operand},dispatch]=useReducer(reducer,{})

  return (
    <div className="App">
      <div className="output">
        <div className='previous-operand'>{previousOperand} {operand}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='Span-two' onClick={()=>{dispatch({type:ACTION.CLEAR})}}>AC</button>
      <button onClick={()=>{dispatch({type:ACTION.DELETE_DIGITS})}}>DEL</button>
      <OperationButton dispatch={dispatch} operation="/"/>
      <DigitButton dispatch={dispatch} digit="1"/>
      <DigitButton dispatch={dispatch} digit="2"/>
      <DigitButton dispatch={dispatch} digit="3"/>
      <OperationButton dispatch={dispatch} operation="*"/>
      <DigitButton dispatch={dispatch} digit="4"/>
      <DigitButton dispatch={dispatch} digit="5"/>
      <DigitButton dispatch={dispatch} digit="6"/>
      <OperationButton dispatch={dispatch} operation="-"/>
      <DigitButton dispatch={dispatch} digit="7"/>
      <DigitButton dispatch={dispatch} digit="8"/>
      <DigitButton dispatch={dispatch} digit="9"/>
      <OperationButton dispatch={dispatch} operation="+"/>
      <DigitButton dispatch={dispatch} digit="."/>
      <DigitButton dispatch={dispatch} digit="0"/>
      <button className='Span-two' onClick={()=>{dispatch({type:ACTION.EVALUATE})}}>=</button>
            
    </div>
  );
}

export default App;
