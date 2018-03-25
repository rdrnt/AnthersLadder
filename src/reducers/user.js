function user(
  state = {
    isFetching: false,
  },
  action
) {
  switch (action.type) {
    case 'FETCH_PROFILE': {
      return {
        ...state,
        isFetching: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default user;
