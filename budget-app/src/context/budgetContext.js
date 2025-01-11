import React, { useContext} from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
const BudgetContext =React.createContext()

export function useBudgets(){
    return useContext(BudgetContext)
}
// above is teh custom hook 

export const UNCATEGORIZED_BUDGET_ID='Uncategorized'

// budget array of objects {id:,name:,max:}
//expenses array of obejcts {id:,budgetId:,amount:,description:}


export const BudgetsProvider =({children})=>{
    const [budgets,setBudgets]=useLocalStorage('budgets',[])
    const [expenses,setExpenses]=useLocalStorage('expenses',[]);

    function getBudgetExpenses(budgetId){
        return expenses.filter(expense=>expense.budgetId===budgetId)
    }
    function addBudget({name,max}){
        setBudgets(prevBudgets=>{
            if(prevBudgets.find(budget=>budget.name===name)){
                return prevBudgets
            }
            return[...prevBudgets,{id:uuidV4(),name:name,max:max}]
        })
    }
    function addExpense({description,amount,budgetId}){
        setExpenses(prevExpenses=>{
            return[...prevExpenses,{id:uuidV4(),description,amount,budgetId}]
        })
    }
    function deleteBudget({id}){
        setExpenses(prevExpenses=>{
            return prevExpenses.map(expense =>{
                if(expense.id!=id)return expense
                return {...expense,budgetId:UNCATEGORIZED_BUDGET_ID}
            })
        })
        setBudgets(prevBudgets=>{
            return prevBudgets.filter(budget=>budget.id!==id)
        })
    }
    function deleteExpense({id}){
        // let updatedExpenses=expenses.filter(expense=>expense.id!==id)
        // setExpenses(updatedExpenses)
        setExpenses(prevExpenses=>{
            return prevExpenses.filter(expense=>expense.id!==id)
        })
    }
    const budgetValue={
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense
    }
    return (
        <BudgetContext.Provider value={budgetValue}>
            {children}
        </BudgetContext.Provider>
    )

}
