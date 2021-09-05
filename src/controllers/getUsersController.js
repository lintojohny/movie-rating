const {User} = require('../models/User');

async function getUsers(req, res) {
  User.find().exec((err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({success: true, users});
  });
}
module.exports = {
  getUsers,
};
