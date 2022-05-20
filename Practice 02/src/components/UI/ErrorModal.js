import React from "react";
import classes from './ErrorModal.module.css';
const ErrorModal = props => {
    return (
        <>
            <div className={classes.overly} onClick={props.onConfirm}></div>
            <div className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
               <div className={classes.actions}>
                   <button type="button" onClick={props.onConfirm}>close</button>
               </div>
            </div>
        </>

    )
}
export default ErrorModal;