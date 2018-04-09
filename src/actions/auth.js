const authActions = {
  authenticate: () => dispatch => {
    console.log('idk');
  },

  setAuthStatus: authStatus => ({
    type: 'SET_AUTH',
    isAuthenticated: authStatus,
  }),

  setAccessCode: accessCode => ({
    type: 'SET_ACCESS_CODE',
    accessCode: accessCode,
  }),
};

export default authActions;
