const handleErrorMessage = obj => {
  let error;

  if (typeof obj === 'string') {
    error = obj;
  }

  if (typeof obj === 'object') {
    Object.values(obj).forEach(err => {
      Object.values(err).forEach(e => {
        error = e;
      });
    });
  }

  return error;
};

export default handleErrorMessage;
