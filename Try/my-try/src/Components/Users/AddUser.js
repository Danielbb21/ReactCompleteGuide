import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import Card from '../UI/Card';

const AddUser = (props) => {

    const Form = styled.form`
        margin: auto;
        width: 50%;
        margin-top: 100px;
        padding-bottom: 10px;

        & label{
           
            display: block;
            padding: 10px;
        }

        & input{
            font: inherit;
            display: block;
            width: 50%;
            border: 1px solid #ccc;
            padding: 0.15rem;
            margin-bottom:0.5rem;
        }
        & input:focus{
            outline: none;
            border-color: #4f005f;
        }
    `;
    const addUserHandler = (event) => {
        event.preventDefault();
        console.log('teste');
    }
    return (
        <Card>
            <Form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </Form>
        </Card>
    );
}

export default AddUser;