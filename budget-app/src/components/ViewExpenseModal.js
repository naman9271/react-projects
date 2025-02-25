import { Button, Modal,Stack } from "react-bootstrap"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/budgetContext";
import { currencyFormatter } from "../utilitis";

export default function ViewExpenseModal({ budgetId, handleClose }) {
    const { budgets, getBudgetExpenses,deleteBudget,deleteExpense } = useBudgets()
    const expenses =getBudgetExpenses(budgetId)
    const budget=
        UNCATEGORIZED_BUDGET_ID===budgetId
        ? {name:'Uncategorized',id:'budgetId'}
        : budgets.find(budget=>budget.id===budgetId)
    return (
        <Modal show={budgetId!=null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction='horizontal' gap='2'>
                        <div>Expenses - {budget?.name}</div>
                        {budgetId!== UNCATEGORIZED_BUDGET_ID && (
                            <Button onClick={()=>{
                                deleteBudget(budget)
                                handleClose();
                            }} variant='outline-danger'>Delete</Button>
                        )}
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap='3'>
                    {expenses.map(expense=>(
                        <Stack direction="horizontal" gap='2' key={expense.id}>
                            <div className="me-auto fs-4">{expense.description}</div>
                            <div className="me-auto fs-5">{currencyFormatter.format(expense.amount)}</div>
                            <Button variant="outline-danger" size="sm" onClick={()=>{deleteExpense(expense)}}>&times;</Button>
                        </Stack>
                    ))}
                </Stack>
            </Modal.Body>
        </Modal>
    )
}
