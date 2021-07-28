import React, {useState} from 'react';
import Card from '../UI/Card';
import style from './UserList.module.css';

const UserList = (props) => {
    return (
        <Card>
        <ul className = {style.users}>
            {/* <li> Teste</li> */}
            {props.users.map(user => {
                return <li key={user.id} >{user.name} ({user.age} years old)</li>
            })}
        </ul>
        </Card>
    );
}

export default UserList;