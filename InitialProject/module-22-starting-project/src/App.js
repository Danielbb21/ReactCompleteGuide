
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const isLoggedIn = useSelector(state => state.log.isLogged);
  const token = useSelector(state => state.log.token);
  console.log('token', token);
  console.log(isLoggedIn);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!isLoggedIn && <Route path='/auth'>
          <AuthPage />
        </Route>}
        <Route path='/profile'>
          {isLoggedIn &&
            <UserProfile />
          }
          {!isLoggedIn && <Redirect to='/auth' />}
        </Route>
        <Route path='*'>
          {!isLoggedIn && < Redirect to='/auth' />}
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
