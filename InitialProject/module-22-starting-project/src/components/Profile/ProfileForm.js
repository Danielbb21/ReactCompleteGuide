import { useRef } from 'react';
import { useSelector } from 'react-redux';
import classes from './ProfileForm.module.css';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const userLoggedToken = useSelector(state => state.log.token);
  const history = useHistory();
  const submitPasswordHandler = async (event) => {
    event.preventDefault();
    const passwordEntered = passwordInputRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDLMiX4HKgxehV-5Em7AZ1r_IvJVbJIaKQ',
      {
        method: 'POST',
        body: JSON.stringify({ idToken: userLoggedToken, password: passwordEntered, returnSecureToken: false }),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(res=>{
      history.replace('/');
    });



  }

  return (
    <form onSubmit={submitPasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passwordInputRef} type='password' minLength = "7" id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
