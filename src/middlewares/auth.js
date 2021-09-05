const {User} = require('../dataSource/models/User');

const auth = (req, res, next) => {
  const token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });

    req.token = token;
    req.user = user;
    res.locals.id = user._id;
    next();
  });
};

module.exports = {auth};
