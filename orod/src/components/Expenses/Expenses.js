import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseFilter from './ExpenseFIlter';

import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('all');
    let filteredExpenses = [...props.item];
    if(filteredYear !== 'all') {
        filteredExpenses = props.item.filter(expense => {
            return expense.date.getFullYear() == filteredYear;
        });
    }

    const yearChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeHandler = {yearChangeHandler}/>
            {filteredExpenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
}

export default Expenses;