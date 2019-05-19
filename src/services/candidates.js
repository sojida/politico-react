const herokuUrl = ' https://shielded-headland-63958.herokuapp.com/api/v1';
const url = `${herokuUrl}`;

const getCandidates = officeId => {
  return window
    .fetch(`${url}/candidates/${officeId}`, {
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

const declareInterest = (data, id) => {
  return window
    .fetch(`${url}/interest/${id}/register`, {
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

const getInterestedCandidates = officeId => {
  return window
    .fetch(`${url}/interest/${officeId}`, {
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
  getCandidates,
  declareInterest,
  getInterestedCandidates,
};
