import React, { useRef, useImperativeHandle } from 'react';


const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    const activate = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    });
    return (
        <>
            <div className={props.classes}>
                <label htmlFor={props.id}>{props.children}</label>
                <input ref={inputRef} type={props.type} id={props.id} onChange={props.onInputChange} value={props.value} onBlur={props.onInputBlur} />
            </div>
        </>
    )
});

export default Input;