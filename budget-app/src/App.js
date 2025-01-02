import {Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
function App() {
  //learn bootstrap first because it is using bootstrap it is just a 
  return (
    <Container className="my-4">
      <Stack direction='horizontal' className="mb4" gap="1">
        <h1 className="me-auto">Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
        <div style={{display:'grid',gridTemplateColumns:"repeat(autofill,minmax(300px,1fr))",gap:'2',alignItems:'flex-start'}}>
          <BudgetCard></BudgetCard>
        </div>
      </Stack>
    </Container>
  );
}

export default App;
