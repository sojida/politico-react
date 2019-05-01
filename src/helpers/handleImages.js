import avatar from '../assets/images/avatar.png';

const handleImages = logoUrl => {
  const herokuUrl = ' https://shielded-headland-63958.herokuapp.com/api/v1';
  const url = `${herokuUrl}`;
  if (logoUrl === 'logo123') {
    return avatar;
  }

  if (logoUrl === 'null') {
    return avatar;
  }

  if (logoUrl === 'logourl') {
    return avatar;
  }

  return `${url}/images/${logoUrl}`;
};

export default handleImages;
