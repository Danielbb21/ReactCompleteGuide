import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginActions } from '../../store/loginSlice';
// import { useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const isLogIn = useSelector(state => state.log.isLogged);
  const dispatch = useDispatch();
  // const history = useHistory();

  const logoutUserHandler = () => {
    dispatch(loginActions.logOut());
    // history.replace('/auth');
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>

          {!isLogIn &&
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {isLogIn && <li><Link to='/profile'>Profile</Link></li>}

          {isLogIn && <li><button onClick={logoutUserHandler}>Logout</button></li>}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
