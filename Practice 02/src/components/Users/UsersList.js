import React from "react";
import UserItem from "./UserItem";
import styles from './UserList.module.css'


const UsersList = props => {
    if(!props.users.length) {
        return <h1 className={styles.listShow}>No User Found.</h1>;
    }
    return (<ul className={styles.listShow}>
        {props.users.map(user => (
            <UserItem 
            key={user.id}
            email={user.email}
            age={user.age}
            />
        ))}
    </ul>)
}
export default UsersList;