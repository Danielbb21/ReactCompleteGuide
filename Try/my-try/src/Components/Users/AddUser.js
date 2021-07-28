import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import style from './AddUSer.module.css';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        let emptyField = verifyFields(enteredName, enteredAge);
        if (emptyField) {
            setHasError(true);
            setErrorMessage('you not insert  all the filds');

            return;
        }
        if (+enteredAge < 1) {
            setHasError(true);
            setErrorMessage('Invalid age format');
            return;
        }
        const user = {
            name: enteredName,
            age: enteredAge
        }
        props.onSaveUser(user)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const verifyFields = (...args) => {

        let result = args.some((element) => {
            return element.trim().length < 1;
        })
        return result;
    }
    const handleError = (error) => {
        setHasError(error)
    }
    return (
        <div>
            {hasError ? <ErrorModal title="sommeting went worng" message={errorMessage} onError={handleError} /> : ''}

            <Card>
                <form className={style.teste} onSubmit={addUserHandler}>

                    <label htmlFor="username">Username</label>
                    <input

                        id="username"
                        type="text"

                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>

                </form>

            </Card>
        </div>
    );
}

export default AddUser;