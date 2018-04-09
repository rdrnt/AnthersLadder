import store from '../store';

const API = {
  getAccessCode: () => {
    return store.getState().auth.accessCode;
  },
};

export default API;
