import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import style from './ErrorModal.module.css';

const ErrorModal = (props) => {

    const handleClickError = () => {
        props.onError(false)
    }

    const Backdrop = props => {
        return <div className={style.backdrop} onClick={handleClickError} />
    }
    const ModalOverlay = props => {
        return <Card>
            <div className={style.modal}>
                <header className={style.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={style.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={style.actions}>
                    <Button onClick={handleClickError}>Close</Button>
                </footer>
            </div>
        </Card>
    }
    return (
        <>
            { ReactDOM.createPortal(<Backdrop onClick={handleClickError}/>, document.getElementById('backdrop-root'))}
            { ReactDOM.createPortal(<ModalOverlay title = {props.title} message = {props.message} onClick={handleClickError}/>, document.getElementById('overlay-root'))}
        </>
    )
};

export default ErrorModal;