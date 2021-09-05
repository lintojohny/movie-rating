const {Favorite} = require('../../models/Favorite');

async function addToFavorite(req, res) {
  const favData = {
    movieId: req.body.movieId,
    userFrom: req.user._id,
    movieTitle: req.body.movieTitle,
    moviePost: req.body.moviePost,
    movieRunTime: req.body.movieRunTime,
  };
  const favorite = new Favorite(favData);

  favorite.save((err, doc) => {
    if (err) return res.json({success: false, err});
    return res.status(200).json({success: true});
  });
}
module.exports = {
  addToFavorite,
};
