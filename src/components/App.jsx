import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import Navbar from './Navbar/Navbar';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import UserAuth from './UserMenu/UserAuth';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'redux/authRedux/authSelectors';
import UserMenu from './UserMenu/UserMenu';
import { useEffect } from 'react';
import { refresh } from 'redux/authRedux/authOperations';
import PrivateRoute from 'service/PrivateRoute';
import PublicRoute from 'service/PublicRoute';

const App = () => {
  const isLogin = useSelector(getAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Container>
      <Navbar>{isLogin ? <UserMenu /> : <UserAuth />}</Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 20px 40px;
`;
