const user = require('../../Model/User');
const jwt = require('jsonwebtoken');
exports.Signin = (req, res) => {
  const signtoken = (id) => {
    const token = jwt.sign({ id }, 'the net ninja', { expiresIn: '1y' });
    return token;
  };
  user
    .findOne({ email: req.body.email })
    .then((data) => {
      if (data) {
        console.log(data, data.verified);

        if (data.verified) {
          if (data.authenticate(req.body.password)) {
            const _token = signtoken(data._id);
            res.status(200).json({
              message: 'sucessfully sined',
              user: _token,
            });
          } else {
            res.status(400).json({
              error: 'wrong password',
            });
          }
        } else {
          user.findOneAndDelete({ email: req.body.email })
            .then((data) => {
              if (data) {
                res.status(400).json({
                  error: 'user email not verified sign up agin',
                });
              } else {
                res.status(400).json({
                  error: ' something went wrong',
                });
              }
            })
            .catch((err) => {
              res.status(400).json({
                error: err,
              });
            });
        }
      } else {
        res.status(400).json({
          error: 'user not found',
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        error: ' something went wrong',
      });
    });
};
