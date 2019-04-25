const localUrl = 'http://127.0.0.1:3000/api/v1';
const url = `${localUrl}`;

const uploadPic = data => {
  return window
    .fetch(`${url}/profile_pic`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: localStorage.token,
      },
      body: data,
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export default {
  uploadPic,
};
