import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import style from './AddUSer.module.css';

const AddUser = (props) => {

    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const addUserHandler = (event) => {
        event.preventDefault();
        let emptyField = verifyFields(username, age);
        if (emptyField) {
            setHasError(true);
            setErrorMessage('you not insert  all the filds');
            
            return;
        }
        if (+age < 1) {
            setHasError(true);
            setErrorMessage('Invalid age format');
            return;
        }
        const user = {
            name: username,
            age: age
        }
        props.onSaveUser(user)
        setUsername('');
        setAge('');
    }
    const changeUsername = (event) => {
        setUsername(event.target.value);

    }
    const changeAge = (event) => {
        setAge(event.target.value);
    }
    const verifyFields = (...args) => {

        let result = args.some((element) => {
            return element.trim().length < 1;
        })
        return result;
    }
    const handleError =(error) =>{
        setHasError(error)
    }
    return (
        <div>
            {hasError ?  <ErrorModal title="sommeting went worng" message= {errorMessage} onError = {handleError}/> : ''}
           
            <Card>
                <form className={style.teste} onSubmit={addUserHandler}>

                    <label htmlFor="username">Username</label>
                    <input value={username} id="username" type="text" onChange={changeUsername} />
                    <label htmlFor="age">Age(Years)</label>
                    <input value={age} id="age" type="number" onChange={changeAge} />
                    <Button type="submit">Add User</Button>

                </form>

            </Card>
        </div>
    );
}

export default AddUser;