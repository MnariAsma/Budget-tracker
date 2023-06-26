import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChat';

export default function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2023')
  const yearChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  } 
  const filteredExpenses=props.item.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear

  })
 
  return (
    <Card className='expenses'>
      
      <ExpensesFilter selected={filteredYear} onChangeYear={yearChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/> 
    </Card>
  );
}
