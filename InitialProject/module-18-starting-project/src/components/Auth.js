import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import useAuth from '../hooks/use-auth';

const Auth = () => {
  const isLogin = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  console.log(isLogin);
  const { value: emailEntered, onChangeData: onEmailChange, isValid: isEmailValid } = useAuth((value) => value.trim() !== '');
  const { value: passwordEntered, onChangeData: onPasswordChange, isValid: isPasswordValid } = useAuth((value) => value.trim() !== '');

  console.log(emailEntered, isEmailValid);
  const formIsValid = isEmailValid && isPasswordValid;

  const loginHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      dispatch(authActions.login());
    }

  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input value={emailEntered} onChange={onEmailChange} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input value={passwordEntered} onChange={onPasswordChange} type='password' id='password' />
          </div>
          <button disabled={!formIsValid} type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
