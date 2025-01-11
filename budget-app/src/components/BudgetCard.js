import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../utilitis'

function BudgetComponent({ name, amount, max ,gray,onAddExpenseClick,hideButtons,onViewExpensesClick}) {
  let classNames=['m-2']
  if(amount>max){
    classNames.push('bg-danger','bg-opacity-10')
  }else if(gray){
    classNames.push('bg-light')
  }
  return (
    <Card className={classNames.join(' ')}>
      <Card.Body >
        <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
          <div className='me-2'>{name}</div>
          <div className='d-flex align-items-baseline'>
            {currencyFormatter.format(amount)}
            {max && (<span className='text-muted fs-6 ms-1'> 
              {/* ms-->margin at start ... me-->margin at end */}
              /{currencyFormatter.format(max)}
            </span>)}
          </div>
        </Card.Title>
        {max && (<ProgressBar 
          className='rounded-pill' 
          variant={getProgressBarVariant(amount,max)}
          min={0}
          max={max}
          now={amount}
        />)}
        {!hideButtons && (<Stack direction='horizontal' className='mt-4' gap={2}>
          <Button variant='outline-primary' className='ms-auto' onClick={onAddExpenseClick}>Add Expenses</Button>
          <Button variant='outline-secondary' className='me-4' onClick={onViewExpensesClick}>View Expenses</Button>
        </Stack>)}
      </Card.Body>
    </Card>
  )
  function getProgressBarVariant(amount,max){
    let ratio = amount/max;
    if(ratio<.5)return 'primary'
    if(ratio <.75) return 'warning'
    else return 'danger'
  }
}

export default BudgetComponent