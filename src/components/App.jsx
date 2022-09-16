import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import Navbar from './Navbar/Navbar';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: 20px 40px;
`;
