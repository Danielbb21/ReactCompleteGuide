import useForm from "../hooks/use-form";
import '../index.css';

const SimpleInput = (props) => {

  const { value: enteredName, isValid: nameIsValid, hasError: nameInputHasError, changeValueHandler: changeNameHandler, valueInputBlurHandler: nameInputBlurHandler, reset: resetName } = useForm(value => value.trim() !== '');
  const { value: emailEntered, isValid: emailIsValid, hasError: emailInputHasError, changeValueHandler: changeEmailHandler, valueInputBlurHandler: emailInputBlurHandler, reset: resetEmail } = useForm(value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubimitHandler = (event) => {

    event.preventDefault();
    if (formIsValid) {
      resetName();
      resetEmail();
    }

  }

  let errorMessage;
  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  if (nameInputHasError) {
    errorMessage = <p>Please insert a Name</p>
  }

  if (emailInputHasError) {
    errorMessage = <p>Please insert a valid E-mail</p>
  }

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubimitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={changeNameHandler} onBlur={nameInputBlurHandler} />
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='email' id='email' value={emailEntered} onChange={changeEmailHandler} onBlur={emailInputBlurHandler} />
      </div>
      {errorMessage}
      <div className="form-actions">
        <button disabled={!formIsValid} type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
