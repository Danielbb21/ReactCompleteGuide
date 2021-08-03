import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const MainHeader = (props) => {

  const dispacth = useDispatch();

  const cartIsShowHandler = () => {
    dispacth(uiActions.isShow());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton showCart={cartIsShowHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
