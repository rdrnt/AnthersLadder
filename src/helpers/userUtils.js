import atob from 'atob';

const userUtils = {
  parseCredentials: credentials => {
    let string = atob(credentials);
    let split = string.split(':');
    return {
      access: split[1],
    };
  },
};

export default userUtils;
