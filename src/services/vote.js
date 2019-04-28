const localUrl = 'http://127.0.0.1:3000/api/v1';
const herokuUrl = ' https://shielded-headland-63958.herokuapp.com/api/v1';
const url = `${herokuUrl}`;

const voteCandidate = data => {
  return window
    .fetch(`${url}/votes`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

const getMyVotes = data => {
  return window
    .fetch(`${url}/user_votes`, {
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
  voteCandidate,
  getMyVotes,
};
