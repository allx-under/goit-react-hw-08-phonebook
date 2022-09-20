import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/authRedux/authSelectors';
import styled from 'styled-components';
import { logout } from 'redux/authRedux/authOperations';
import { Avatar, Button } from '@mui/material';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      {' '}
      <Avatar>{email.charAt(0)}</Avatar>
      <StyledSpan>{email}</StyledSpan>
      <Button variant="contained" onClick={onClickLogout}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;

const StyledSpan = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;
