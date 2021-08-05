import { useState, useRef, useReducer } from 'react';

import classes from './AuthForm.module.css';

const initialState = {
  isLoading: false,
  error: false,
  message: ''
}
const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    console.log('aquiii');
    return {
      isLoading: true,
      error: false,
      message: ''
    };

  }
  if (action.type === 'SETERROR') {
    console.log('aquii222i');
    return {
      isLoading: state.isLoading,
      error: true,
      message: action.message
    };
  }
  if ('NOERROR') {
    console.log('aquiii1111');
    return {
      isLoading: false,
      error: false,
      messgae: ''
    };
  }

  if (action.type === 'NOLOADING') {
    return {
      isLoading: false,
      error: false,
      message: ''
    }
  }
  return initialState;
}
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLMiX4HKgxehV-5Em7AZ1r_IvJVbJIaKQ',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-type': 'application/json'
          }
        }
      ).then(res => {
        if (res.ok) {
          console.log('ok');

          dispatch({ type: 'OK' });
          return res.json();
        }
        else {
          return res.json().then(data => {
            return data.error.message
            // dispatch({ type: 'SETERROR', message: data.error.message });
          })
        }
      }).then(data => { console.log(data) }).catch(err => {
        dispatch({ type: 'SETERROR', message: err.message });
        console.log(err);
      });
    }
    else {
      dispatch({ type: 'LOADING' });
      console.log(state);
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLMiX4HKgxehV-5Em7AZ1r_IvJVbJIaKQ',
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-type': 'application/json'
          }
        }
      ).then(res => {
        dispatch({ type: 'NOLOADING' });

        if (res.ok) {
          dispatch({ type: 'NOERROR' });
          return res.json();
        }
        else {
          return res.json().then(data => {
            const position = data.error.message.indexOf(':');
            let errorMessage = data.error.message;
            if (position !== -1) {
              errorMessage = data.error.message.slice(position + 1);
            }
            // dispatch({ type: 'SETERROR', message: errorMessage });
            throw new Error(errorMessage);
          });
        }
      }).then(data => { console.log(data) }).catch(err => {
        dispatch({ type: 'SETERROR', message: err.message });
        console.log(err);
      });


    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailInputRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordInputRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
          {state.isLoading && !state.error && <p style={{ color: 'white' }}>Loading data</p>}
          {state.error && <p style={{ color: 'red' }}>{state.message}</p>}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
