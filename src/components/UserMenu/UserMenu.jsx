import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/authRedux/authSelectors';
import styled from 'styled-components';
import { logout } from 'redux/authRedux/authOperations';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <StyledSpan>{email}</StyledSpan>
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </>
  );
};

export default UserMenu;

const StyledSpan = styled.span`
  margin-right: 10px;
`;
