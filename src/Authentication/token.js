const jwt = require('jsonwebtoken');

const ObdejwtToken = (tokenname) => {
  const token = jwt.sign({ id: tokenname }, 'clearquoteABkey', { expiresIn: '30 days' });
  const tokenVerify = jwt.verify(token, 'clearquoteABkey');

  return token;
};

module.exports = ObdejwtToken;
