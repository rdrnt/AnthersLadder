import keytar from 'keytar';

const preferences = {
  savePassWord: password => {
    console.log('Saved password', password);
  },
};
export default preferences;
