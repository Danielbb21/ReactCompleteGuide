import useForm from "../hooks/use-form";

const BasicForm = (props) => {

  const { value: enteredName, isValid: nameIsValid, hasError: nameHasError, changeValueHandler: changeNameValue, valueInputBlurHandler: nameBlurHandler, reset: resetName } = useForm(value => value.trim() !== '');
  const { value: enteredLastName, isValid: lastNameIsValid, hasError: lastNameHasError, changeValueHandler: changeLastNameValue, valueInputBlurHandler: lastNameBlurHandler, reset: resetLatsName } = useForm(value => value.trim() !== '');
  const { value: enteredEmail, isValid: emailIsValid, hasError: emaileHasError, changeValueHandler: changeEmailValue, valueInputBlurHandler: emailBlurHandler, reset: resetEmail } = useForm(value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));

  
  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    if (formIsValid) {
      resetName();
      resetLatsName();
      resetEmail();
    }
  }

  let NameClass = nameHasError ? 'form-control invalid' : 'form-control';
  let LastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control';
  let EmailClass = emaileHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='control-group'>
        <div className={NameClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredName} onChange={changeNameValue} onBlur={nameBlurHandler} />
          {nameHasError && <p>Insert a correct name</p>}
        </div>
        <div className={LastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={changeLastNameValue} onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p>Insert a correct last name</p>}
        </div>
      </div>
      <div className={EmailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={changeEmailValue} onBlur={emailBlurHandler} />
        {emaileHasError && <p>Insert a correct email</p>}
      </div>
      <div className='form-actions'>
        <button type='submit' disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
