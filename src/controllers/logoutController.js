const {User} = require('../models/User');

async function userLogout(req, res) {
  const {userId} = req.body;
  User.findOneAndUpdate(
    {_id: userId},
    {token: '', tokenExp: ''},
    (err, doc) => {
      if (err) return res.json({success: false, err});
      return res.status(200).send({
        success: true,
      });
    },
  );
}
module.exports = {
  userLogout,
};
