import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from 'redux/authRedux/authOperations';

import 'react-toastify/dist/ReactToastify.min.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledLabel>
        Your email
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </StyledLabel>
      <br />
      <StyledLabel>
        Your password
        <StyledInput
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </StyledLabel>
      <button type="submit" width="200px">
        Login
      </button>
    </StyledForm>
  );
};

export default LoginPage;

const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 200px;
`;
