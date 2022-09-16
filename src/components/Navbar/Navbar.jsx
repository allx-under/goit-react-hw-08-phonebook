import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <StyledLink to="register">Register</StyledLink>
        <StyledLink to="login"> Login</StyledLink>
      </Wrapper>
      <hr />
    </>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

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
