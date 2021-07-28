import React from 'react';
import Card from './Card';
import Button from './Button';
import style from './ErrorModal.module.css';

const ErrorModal = (props) => {

    const handleClickError = ()=>{
        props.onError(false)
    }
    return (
        <div>
            <div className={style.backdrop} onClick = {handleClickError}/>
        <Card>
            <div className={style.modal}>
            <header className={style.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={style.content}>
                <p>{props.message}</p>
            </div>
            <footer className={style.actions}>
                <Button onClick = {handleClickError}>Close</Button>
            </footer>
            </div>
        </Card>
        </div>
    )
};

export default ErrorModal;