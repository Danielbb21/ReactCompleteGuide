import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../Context/authContext';
import Input from '../UI/Input/input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false }
};

const passwordReducer = (state, action) => {
  if (action.type === 'INPUT_PASSWORD') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value, isValid: state.value.trim().length > 6
    };
  }
  return {
    value: '',
    isValid: false
  }
}
const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispachEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });

  const [passwordState, dispachPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log('Check validation');
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);
    return () => {
      console.log('cleanup');
      clearTimeout(handler);
    };

  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispachEmail({ type: 'USER_INPUT', val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispachPassword({ type: 'INPUT_PASSWORD', val: event.target.value })


  };

  const validateEmailHandler = () => {

    dispachEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispachPassword({ type: 'INPUT_BLUR' });


  };
  const ctx = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    }
    else if(!emailIsValid){
      emailInputRef.current.focus();
    }
    else{
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>


        <Input ref = {emailInputRef}classes={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
          }`} id="email" type="email" value={emailState.value} onInputChange={emailChangeHandler} onInputBlur={validateEmailHandler}>E-mail</Input>



        <Input ref = {passwordInputRef}classes={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
          }`} id="password" type="password" value={passwordState.value} onInputChange={passwordChangeHandler} onInputBlur={validatePasswordHandler}>Password</Input>


        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
