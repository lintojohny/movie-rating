const {Like} = require('../../models/Like');
const {Dislike} = require('../../models/Dislike');

function upLike(variable, err, result, res) {
  if (err) return res.status(400).send(err);
  if (result.length === 0) {
    const like = new Like(variable);

    like.save((err, likeResult) => {
      if (err) return res.json({success: false, err});
      Dislike.findOneAndDelete(variable).exec((err, disLikeResult) => {
        if (err) return res.status(400).json({success: false, err});
        res.status(200).json({success: true, up: true});
      });
    });
  } else {
    Like.findOneAndDelete(variable).exec((err, likeResult) => {
      if (err) return res.status(400).json({success: false, err});
      res.status(200).json({success: true, up: false});
    });
  }
}

async function likeMovie(req, res) {
  const variable = {movieId: req.body.movieId, userId: req.user._id};

  Like.find(
    {
      $and: [{movieId: req.body.movieId}, {userId: req.user._id}],
    },
    (err, result) => {
      upLike(variable, err, result, res);
    },
  );
}
module.exports = {
  likeMovie,
};
