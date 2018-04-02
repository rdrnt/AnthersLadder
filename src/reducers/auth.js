function auth(
  state = {
    isAuthenticated: false,
  },
  action
) {
  switch (action.type) {
    case 'SET_AUTH': {
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };
    }
    default: {
      return state;
    }
  }
}

export default auth;
