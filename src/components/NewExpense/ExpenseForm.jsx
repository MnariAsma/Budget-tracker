import React,{useState} from 'react';
import './ExpenseForm.css'
export default function ExpenseForm(props){
    
    const[enteredTitle,setenteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    //group together states
    /*
    const[userinput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    })
    */

    const titleChangeHandler=(event)=>{
       setenteredTitle(event.target.value);
       
        //we should ensure that the other pieces of data don't get lost
        //if the title is updating ,we also should to copy the existing values
        
        //si on définit simplement le nouvel état d'entrée sur cette objet les autres clés vont être dechaeger
        
        //cette methode  elle ne garantit pas que l'état est mis à jour à partir de la valeur précédente.
        /*setUserInput({
            ...userinput,
            enteredTitle:event.target.value
        })*/
        
        //cette methode est le moyen le plus sûr d'assurer q'on utilise toujours le dernier instantané d'etat
        /*setUserInput((pervstate)=>{
             return{
                ...pervstate,enteredTitle:event.terget.value
             };
        });*/
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    //    setUserInput({
    //     ...userinput,
    //     enteredAmount:event.target.value,
    //    });

    /*
      setUserInput((pervstate)=>{
        return{...pervstate,enteredAmount:event.target.value};

      });*/

    };

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userinput,
        //     enteredDate:event.target.value,
        // });
/*
        setUserInput((prevstate)=>{
            return{...prevstate,enteredDate:event.target.value};
        });*/
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        //create object who combine all entered data 
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,//stocker dans l'etat amount
            date:new Date(enteredDate)//passer la chaîne de date et la convertira en un objet

        }
        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setenteredTitle('');
     }

    
    

    return <form onSubmit={submitHandler} >
        <div className="new-expense__controls">

        

            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2023-03-23" value={enteredDate} onChange={dateChangeHandler}/>
            </div>

        </div>
        
        
        <div className="new-expense__actions">
            <button type="Button" onClick={props.onStop}>Cancel</button>
            <button type="submit">Add expense</button>
        </div>
    </form>
}