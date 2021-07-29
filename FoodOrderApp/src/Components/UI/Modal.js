import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';


const Backdrop = props => {
    return (
        <div className={style.backdrop} onClick= {props.onClose}/>


    );
}

const ModalOverlay = props => {
    return (
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose = {props.onClose}/>, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
            {/* <Backdrop /> */}
            {/* <ModalOverlay /> */}

        </>
    );
}

export default Modal;