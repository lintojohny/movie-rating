const {Favorite} = require('../../models/Favorite');

async function removeFromFavorite(req, res) {
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.user._id,
  }).exec((err, doc) => {
    if (err) return res.status(400).json({success: false, err});
    res.status(200).json({success: true, doc});
  });
}
module.exports = {
  removeFromFavorite,
};
