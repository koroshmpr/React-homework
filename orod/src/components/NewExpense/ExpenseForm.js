import React , { useState }  from "react";
import './ExpenseForm.css'
const ExpenseForm = props => {
    const [ enteredTitle , setEnteredTitle] = useState('');
    const [ enteredAmount , setEnteredAmount] = useState('');
    const [ enteredDate , setEnteredDate] = useState('');
    
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
    };
    
            const submitHandler = event => {
                event.preventDefault();
                const expenseDate = {
                    title : enteredTitle,
                    amount : enteredAmount,
                    date : new Date(enteredDate)
                }
                props.onSaveExpense(expenseDate);
                setEnteredTitle('');
                setEnteredAmount('');
                setEnteredDate('');
            }              
        return (
            <form className="form-addExpense" onSubmit={submitHandler}>
                <div>
                    <div className="input-line">
                        <label>Title : </label>
                        <input className="input-box" value={enteredTitle} type="text" onChange={titleChangeHandler}/>

                        </div>
                    <div className="input-line">
                        <label>Amount : </label>
                        <input className="input-box" value={enteredAmount} type="number" onChange={amountChangeHandler}/>

                        </div>
                    <div className="input-line">
                        <label>Title : </label>
                        <input className="input-box" value={enteredDate} type="date" onChange={dateChangeHandler}/>

                        </div>
                        <hr/>
                    <div className="btn-parent">
                            <button className="btn-sub" type="submit"> Add Expense</button>

                    </div>
                </div>

            </form>
                ) 
}
export default ExpenseForm;