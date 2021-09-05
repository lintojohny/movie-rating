const {Favorite} = require('../../models/Favorite');

async function getFavoriteOrder(req, res) {
  Favorite.find({movieId: req.body.movieId}).exec((err, subscribe) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({success: true, subscribeNumber: subscribe.length});
  });
}
module.exports = {
  getFavoriteOrder,
};
