import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendCartData, fetchCartData } from './store/cart-actions';
import Notification from './components/UI/Notifications';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.showCart);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {

      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch])


  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <>
      {notifications && <Notification status={notifications.status} message={notifications.message} title={notifications.title} />}
      <Layout>

        {showCart && <Cart />}

        <Products />
      </Layout>

    </>
  );
}

export default App;
