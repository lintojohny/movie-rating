const {Favorite} = require('../../models/Favorite');

async function isFavorite(req, res) {
  Favorite.find({movieId: req.body.movieId, userFrom: req.user._id}).exec(
    (err, subscribe) => {
      if (err) return res.status(400).send(err);
      let result = false;

      if (subscribe.length !== 0) {
        result = true;
      }
      res.status(200).json({success: true, subcribed: result});
    },
  );
}
module.exports = {
  isFavorite,
};
