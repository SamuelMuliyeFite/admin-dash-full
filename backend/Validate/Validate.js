const { request } = require('express');
const path = require('path');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


exports.validateRequest = [
  check('firstName').notEmpty().withMessage('first name is required'),
  check('lastName').notEmpty().withMessage('last name required'),
  check('email').isEmail().withMessage('in valid email'),
  check('email').notEmpty().withMessage('email required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('password must be graeter  than 6'),
];
exports.validatesigninRequest = [
  check('email').isEmail().withMessage('enter valid email'),
  check('email').notEmpty().withMessage('enter your email first'),
  check('password').notEmpty().withMessage('enter your password to signin'),
];
exports.isValidatedRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  next();
};
exports.required = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, 'the net ninja', (err, user) => {
    if (err) {
      res.status(401).json({
        message: err,
      });
    }
    req.user = user;
    next();
  });
};
exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(400).json({
      err: err,
    });
  }
  next();
};
