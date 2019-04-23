const localUrl = 'http://127.0.0.1:3000/api/v1';
const url = `${localUrl}`;

const login = (email, password) => {
  return window
    .fetch(`${url}/auth/login`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export default {
  login,
};
