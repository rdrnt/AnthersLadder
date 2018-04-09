const userActions = {
  fetchProfile: () => dispatch => {
    return fetch('https://www.smashladder.com/api/v1/player/me', {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${values.accessCode}`,
        'Content-Type': 'application/json',
      }),
    }).then(response => {
      return response.json().then(json => {
        console.log('json');
      });
    });
  },
};

export default userActions;
