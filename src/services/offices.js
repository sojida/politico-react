const localUrl = 'http://127.0.0.1:3000/api/v1';
const url = `${localUrl}`;

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

export default {
  getAllOffices,
  getOfficeById,
};
