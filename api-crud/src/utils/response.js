const response = (statusCode, data, message, res) => {
  res.status(statusCode).send({
    data: data,
    message,
  });
};

export default response;
