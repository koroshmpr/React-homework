import React, {useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = props => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [date, setDate] = useState(props.date);
        return(
            <Card className="expense-item">
                <ExpenseDate date={ date } />
                <div className="expense-item__description">
                    <h2 className="expense-item__title"> { title }</h2>
                </div>
                    <div className="expense-item__amount"> $ { amount }</div>
            </Card>

        )
}
export default ExpenseItem;