import styled from 'styled-components';

const Navbar = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
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
