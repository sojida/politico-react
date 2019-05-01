import avatar from '../assets/images/avatar.png';

const handleImages = logoUrl => {
  const localUrl = 'http://127.0.0.1:3000/api/v1';
  const herokuUrl = ' https://shielded-headland-63958.herokuapp.com/api/v1';
  const url = `${herokuUrl}`;
  if (logoUrl === 'logo123') {
    return avatar;
  }

  return `${url}/images/${logoUrl}`;
};

export default handleImages;
