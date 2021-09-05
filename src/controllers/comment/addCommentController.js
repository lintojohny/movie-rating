const sanitize = require('mongo-sanitize');
const {Comment} = require('../../models/Comment');

async function addComment(req, res) {
  const comment = new Comment(sanitize(req.body));

  console.log('===================');
  console.log('===================');
  console.log('===================');
  console.log('===================', comment);
  comment.save((err, comment) => {
    console.log(err);
    if (err) return res.json({success: false, err});

    Comment.find({_id: comment._id})
      .populate('writer')
      .exec((err, result) => {
        if (err) return res.json({success: false, err});
        return res.status(200).json({success: true, result});
      });
  });
}
module.exports = {
  addComment,
};
