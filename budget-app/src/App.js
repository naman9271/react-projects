import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/addBudgetModal";
import { useState } from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./context/budgetContext";
import AddExpenseModal from "./components/addExpenseModal";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import ViewExpenseModal from "./components/ViewExpenseModal";

//local storage 
//aur ek reset button bhi bnana padega jo sb kuch del krde


function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] = useState()
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setShowAddExpenseModalBudgetId(budgetId)
  }

  return (
    <>
      <Container className="my-4">
        <Stack direction='horizontal' className="mb4" gap="1">
          <h1 className="me-auto">BudgetEase</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
          <Button variant='outline-primary' onClick={openAddExpenseModal}>Add Expense</Button>
        </Stack>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: "repeat(autofill,minmax(300px,1fr))",
            gap: '1 rem',
            alignItems: 'flex-start'
          }}>

          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce((total, expense) => { return total + expense.amount }, 0)
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() => setViewExpenseModalBudgetId(budget.id)}
              />
            )
          })}
          <UncategorizedBudgetCard 
          onAddExpenseClick={openAddExpenseModal} 
          onViewExpensesClick={() => setViewExpenseModalBudgetId(UNCATEGORIZED_BUDGET_ID)}/>
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => { setShowAddBudgetModal(false) }}
      ></AddBudgetModal>
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => { setShowAddExpenseModal(false) }}
        deafultBudgetId={showAddExpenseModalBudgetId}>

      </AddExpenseModal>

      <ViewExpenseModal
        show={viewExpenseModalBudgetId}
        budgetId={viewExpenseModalBudgetId}
        handleClose={() => { setViewExpenseModalBudgetId() }}>
      </ViewExpenseModal>
    </>
  );
}

export default App;
