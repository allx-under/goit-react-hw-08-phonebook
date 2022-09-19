import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register } from 'redux/authRedux/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
  });

  // if (isLogin) {
  //   return <Navigate to="/contacts" />;
  // }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledLabel>
        Provide your nickname
        <StyledInput
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </StyledLabel>
      <br />
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
      <button type="submit">Register</button>
    </StyledForm>
  );
};

export default RegisterPage;

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
