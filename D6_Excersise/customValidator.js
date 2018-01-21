var validator = require('express-validator');
class Validator {
  validate(req) {
    req
      .assert('name', 'Invalid name input!')
      .notEmpty()
      .isAlpha();
    req
      .assert('id', 'Invalid id input!')
      .notEmpty()
      .isNumeric();
    req
      .assert('course', 'Invalid course input!')
      .notEmpty()
      .isAlphanumeric();
    req
      .assert('grade', 'Invalid grade input!')
      .notEmpty()
      .isNumeric();

    return req.validationErrors();
  }
}
module.exports = Validator;
