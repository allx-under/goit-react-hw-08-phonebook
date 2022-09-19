import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const UserAuth = () => {
  return (
    <>
      <StyledLink to="register">Register</StyledLink>
      <StyledLink to="login"> Login</StyledLink>
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
