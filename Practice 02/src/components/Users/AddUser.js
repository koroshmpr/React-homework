import React , {useState} from "react";
import styles from './AddUser.module.css';
import UsersList from "./UsersList";

const AddUser = props => {
    const [enteredEmail , setEnteredEmail] = useState('')
    const [enteredAge , setEnteredAge] = useState('')
    const emailChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    }
    const submitHandler = event => {
        event.preventDefault();
        props.addUser(enteredEmail, enteredAge);
        setEnteredEmail('');
        setEnteredAge('');
    }
    return (
        <>
        <form className={styles.formItem} onSubmit={submitHandler}>
            <label htmlFor="email">Email: </label>
            <input type='text' className={styles.inp} onChange={emailChangeHandler} placeholder="Enter Your Email ..." id="email" value={enteredEmail}/>
            <label htmlFor="age">Age: </label>
            <input type='number' className={styles.inp} onChange={ageChangeHandler} placeholder="Enter Your Age ..." id="age" value={enteredAge}/>
            <button className={styles.btSubmit} type="submit">Add User</button>
        </form>
        </>
    )
}
export default AddUser;