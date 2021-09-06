const sanitize = require('mongo-sanitize');
const {User} = require('../../models/User');

async function registerUser(req, res) {
  User.find(
    {
      $or: [{username: req.body.username}, {email: req.body.email}],
    },
    (err, user) => {
      if (err) {
        return res.status(400).send(err);
      }
      if (user.length === 0) {
        const user = new User(sanitize(req.body));

        user.save((err, doc) => {
          if (err) return res.json({success: false, err});
          return res.status(200).json({
            success: true,
          });
        });
      } else {
        return res.json({
          success: false,
          err: 'Email or username already used !',
        });
      }
    },
  );
}
module.exports = {
  registerUser,
};
