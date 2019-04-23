const localUrl = 'http://127.0.0.1:3000/api/v1';
const url = `${localUrl}`;

const auth = (type = 'login', data) => {
  return window
    .fetch(`${url}/auth/${type}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export default {
  auth,
};
