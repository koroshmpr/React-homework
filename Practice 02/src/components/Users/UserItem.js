import React from 'react';

const UserItem = props => {
    return (
        <li>
            {props.email} ({props.age} years old)
        </li>
    )
}

export default UserItem;