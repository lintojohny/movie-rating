const {Comment} = require('../../models/Comment');

async function getComments(req, res) {
  const {movieId} = req.params;
  Comment.find({movieId})
    .populate('writer')
    .exec((err, comments) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({success: true, comments});
    });
}
module.exports = {
  getComments,
};
