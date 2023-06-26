import React,{useState} from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
export default function NewExpense(props){
  const saveExpenseDataHandler=(EnteredExpenseData)=>{
    const ExpenseData={
      ...EnteredExpenseData,
      id:Math.random().toString()

    };
    props.onAddExpenses(ExpenseData);
      setStartAddingNewExpenses(false)
  
  };

  
  const [StartAddingNewExpenses, setStartAddingNewExpenses] = useState(false);
  const addExpensesHandler = () => {
    setStartAddingNewExpenses(true);
  };

  const stopAddingExpense=()=>{
    setStartAddingNewExpenses(false)
  }

    return(
        <div className='new-expense'>
          {!StartAddingNewExpenses&& <button onClick={addExpensesHandler}> Add new expense</button>}
          {StartAddingNewExpenses && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStop={stopAddingExpense}/>}
        </div>

    );
};