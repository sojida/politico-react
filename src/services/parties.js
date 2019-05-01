const herokuUrl = ' https://shielded-headland-63958.herokuapp.com/api/v1';
const url = `${herokuUrl}`;

const getAllParties = () => {
  return window
    .fetch(`${url}/parties`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: localStorage.token,
      },
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

const getPartiesById = id => {
  return window
    .fetch(`${url}/parties/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: localStorage.token,
      },
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export default {
  getAllParties,
  getPartiesById,
};
