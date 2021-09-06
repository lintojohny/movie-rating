const sanitize = require('mongo-sanitize');
const {Movies} = require('../../models/Movies');

async function addMovie(req, res) {
  const movies = new Movies(sanitize(req.body));

  movies.save((err, movies) => {
    console.log(err);
    if (err) return res.json({success: false, err});

    Movies.find({_id: movies._id})
      .populate('writer')
      .exec((err, result) => {
        if (err) return res.json({success: false, err});
        return res.status(200).json({success: true, result});
      });
  });
}
module.exports = {
  addMovie,
};
