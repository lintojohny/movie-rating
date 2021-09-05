const {Dislike} = require('../../models/Dislike');
const {Like} = require('../../models/Like');

function upDislike(variable, err, result, res) {
  if (err) return res.status(400).send(err);
  if (result.length === 0) {
    const disLike = new Dislike(variable);

    disLike.save((err, dislikeResult) => {
      if (err) return res.json({success: false, err});
      Like.findOneAndDelete(variable).exec((err, likeResult) => {
        if (err) return res.status(400).json({success: false, err});
        res.status(200).json({success: true, up: true});
      });
    });
  } else {
    Dislike.findOneAndDelete(variable).exec((err, likeResult) => {
      if (err) return res.status(400).json({success: false, err});
      res.status(200).json({success: true, up: false});
    });
  }
}
async function disLikeMovie(req, res) {
  const variable = {movieId: req.body.movieId, userId: req.user._id};

  Dislike.find(
    {
      $and: [{movieId: req.body.movieId}, {userId: req.user._id}],
    },
    (err, result) => {
      upDislike(variable, err, result, res);
    },
  );
}
module.exports = {
  disLikeMovie,
};
