import API from '../helpers/API';

const userActions = {
  recieveProfile: profile => {
    return {
      type: 'RECEIVE_PROFILE',
      profile: {
        ...profile,
      },
    };
  },

  fetchProfile: () => dispatch => {
    return fetch('https://www.smashladder.com/api/v1/player/me', {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${API.getAccessCode()}`,
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      return response.json().then(json => {
        dispatch(userActions.recieveProfile(json));
      });
    });
  },
};

export default userActions;
