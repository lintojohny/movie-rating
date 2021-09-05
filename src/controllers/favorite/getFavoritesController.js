const {Favorite} = require('../../models/Favorite');

async function getAllFavorite(req, res) {
  Favorite.find({userFrom: req.user._id}).exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({success: true, favorites});
  });
}
module.exports = {
  getAllFavorite,
};
