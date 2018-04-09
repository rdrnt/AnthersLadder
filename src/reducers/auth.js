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
    case 'SET_ACCESS_CODE': {
      return {
        ...state,
        accessCode: action.accessCode,
      };
    }
    default: {
      return state;
    }
  }
}

export default auth;
