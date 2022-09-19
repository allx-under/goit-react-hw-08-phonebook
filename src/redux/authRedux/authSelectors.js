export const getAuth = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getError = ({ auth }) => auth.error;
