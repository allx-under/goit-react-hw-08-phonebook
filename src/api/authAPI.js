import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signup = async data => {
  const { data: response } = await instance.post('users/signup', data);
  console.log(response);
  return response;
};

export const loginUser = async data => {
  const { data: response } = await instance.post('users/login', data);
  console.log(response);
  return response;
};
