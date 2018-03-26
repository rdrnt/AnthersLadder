import ClientOAuth2 from 'client-oauth2';

const oauthAuth = new ClientOAuth2({});

const API = {
  request: () => {
    fetch('https://www.smashladder.com/api/v1/player/me', {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        return response.json().then(json => {
          console.log(json);
          console.log(process.env);
          return json;
        });
      })
      .catch(error => console.log(error));
  },
};
export default API;
