const otpModel = require('../Model/Otp');
const user = require('../Model/User');
exports.verifyOtp = (req, res) => {
  otpModel
    .findOne({ userEmail: req.body.email })
    .then((data) => {
      if (data) {
        if (data.expiresAt < Date.now()) {
          otpModel
            .findOneAndDelete({ userEmail: req.body.email })
            .then((data) => {
              if (data) {
                user
                  .findOneAndDelete({ email: req.body.email })
                  .then((data) => {
                    res.status(400).json({
                      error: 'otp expired signup again',
                    });
                  })
                  .catch((err) => {
                    res.status(400).json({
                      error: 'something wrong',
                    });
                  });
              }
            });
        } else {
          if (data.authenticate(req.body.otp)) {
            otpModel
              .findOneAndDelete({ userEmail: req.body.email })
              .then((data) => {
                if (data) {
                  user
                    .findOneAndUpdate(
                      { email: req.body.email },
                      { verified: true },
                      { new: true }
                    )
                    .then((data) => {
                      if (data) {
                        res.status(200).json({
                          message: 'you have succesfully verified',
                        });
                      }

                      user.findByIdAndUpdate({});
                    })
                    .catch((err) => {
                      res.status(400).json({
                        error: err,
                      });
                    });
                }
              });
          } else {
            res.status(400).json({
              error: 'incorrect code ',
            });
          }
        }
      } else {
        res.status(400).json({
          error: 'user not exist',
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
