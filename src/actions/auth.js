const authActions = {
  authenticate: () => dispatch => {
    console.log('idk');
  },

  setAuthStatus: authStatus => ({
    type: 'SET_AUTH',
    isAuthenticated: authStatus,
  }),
};

export default authActions;
