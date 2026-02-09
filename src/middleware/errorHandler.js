const errorHandler = (err, req, res, next) => {const { errorHandler: handler, notFoundHandler } = require('../middleware/errorHandler');

























};  notFoundHandler  errorHandler,module.exports = {};  });    message: `Route ${req.path} not found`    statusCode: 404,    success: false,  res.status(404).json({const notFoundHandler = (req, res) => {};  });    timestamp: new Date().toISOString()    message,    statusCode,    success: false,  res.status(statusCode).json({  const message = err.message || 'Internal Server Error';  const statusCode = err.statusCode || 500;  console.error('Error:', err);
module.exports = {
  errorHandler: handler,
  notFoundHandler
};
