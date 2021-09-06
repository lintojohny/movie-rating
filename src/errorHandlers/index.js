/* File is copied from wesbos - learn node git hub repo and modified */
const HttpStatus = require('http-status-codes');
const {failure} = require('../helpers/response');

/**
 * Custom Error Handler class to throw errors with custom status code
 */
class ErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

/*
  Catch Errors Handler

  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/

const catchErrors = fn =>
  function(req, res, next) {
    return fn(req, res, next).catch(next);
  };

/*
  Not Found Error Handler
  If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
*/
const notFound = (req, res, next) => {
  const err = new Error('Not found');
  err.status = HttpStatus.NOT_FOUND;

  next(err, req, res);
};

const ValidationErrors = (err, req, res, next) => {
  if (!err.errors) return next(err, req, res);
  // validation of the validation errors are array returned by JOI
  const error = err.errors[0];
  error.status = HttpStatus.BAD_REQUEST;
  next(error, req, res);
  // add more custom logic if needed
};

module.exports = {
  ValidationErrors,
  catchErrors,
  notFound,
  ErrorHandler,
};
