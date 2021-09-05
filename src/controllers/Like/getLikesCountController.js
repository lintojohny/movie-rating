const {Like} = require('../../models/Like');

async function getLikesCount(req, res) {
  let variable = {};

  if (req.body.movieId) {
    variable = {movieId: req.body.movieId};
  }

  Like.count(variable).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({success: true, likes});
  });
}
module.exports = {
  getLikesCount,
};
