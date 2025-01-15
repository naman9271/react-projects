import {useBudgets } from '../context/budgetContext'
import BudgetCard from './BudgetCard'
export default function TotalBudgetCard() {
    const {budgets,expenses} = useBudgets();

    const amount = expenses.reduce((total, expense) => { return total + expense.amount },0)
    const max = budgets.reduce((total, budget) => { return total + budget.max },0)
    if(max===0) return null;
  return (
    <BudgetCard name='Total' gray amount={amount} max={max} hideButtons/>
  )
}
//uncategorized wala max mai include nhi hua
