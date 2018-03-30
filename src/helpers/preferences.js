import keytar from 'keytar';

import userUtils from './userUtils';

const DEFAULT_SERVICE = 'AnthersLadder';

const preferences = {
  savePassWord: password => {
    console.log('Saved password', password);
  },
};
export default preferences;
