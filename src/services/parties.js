const localUrl = 'http://127.0.0.1:3000/api/v1';
const url = `${localUrl}`;

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

export default {
  getAllParties,
};
