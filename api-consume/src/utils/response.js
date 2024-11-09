const response = (statusCode, data, message, res) => {
  res.status(statusCode).send({
    payload: data,
    message,
  });
};

export default response;
