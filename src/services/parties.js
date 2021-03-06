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

const createParty = data => {
  return window
    .fetch(`${url}/parties/`, {
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

const deleteParty = partyId => {
  return window
    .fetch(`${url}/parties/${partyId}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: localStorage.token,
      },
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

const editPartyName = (partyid, data) => {
  return window
    .fetch(`${url}/parties/${partyid}/name`, {
      method: 'PATCH',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.token,
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};

export default {
  getAllParties,
  getPartiesById,
  createParty,
  deleteParty,
  editPartyName,
};
