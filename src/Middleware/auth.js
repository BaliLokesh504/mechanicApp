const jwt = require('jsonwebtoken');
const jwtToken = require('../Authentication/token');

const auth = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].replace('Bearer ', '');
    const verifyToken = jwt.verify(token, 'clearquoteABkey');
    if (!verifyToken) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).send({
      error: 'Please Authenticate',
    });
  }
};

module.exports = auth;
