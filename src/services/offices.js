const localUrl = 'http://127.0.0.1:3000/api/v1';
const herokuUrl = ' https://shielded-headland-63958.herokuapp.com/api/v1';
const url = `${herokuUrl}`;

const getAllOffices = () => {
  return window
    .fetch(`${url}/offices`, {
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

const getOfficeById = id => {
  return window
    .fetch(`${url}/offices/${id}`, {
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

const getOfficeResultById = id => {
  return window
    .fetch(`${url}/office/${id}/vote_result`, {
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
  getAllOffices,
  getOfficeById,
  getOfficeResultById,
};
