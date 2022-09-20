import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const UserAuth = () => {
  return (
    <>
      <Button to="/register" variant="contained" component={StyledLink}>
        Register
      </Button>
      <Button to="/login" variant="contained" component={StyledLink}>
        Login
      </Button>
    </>
  );
};

export default UserAuth;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &:hover {
    color: grey;
  }
  &:first-child {
    margin-right: 10px;
  }
`;
