const {Movies} = require('../../models/Movies');

async function getMovies(req, res) {
  const {
    limit,
    offset,
    adult,
    genreIds,
    originalLanguage,
    originalTitle,
    releaseDate,
    video,
    voteAverage,
    voteCount,
    writer,
    status,
  } = req.query;

  const filter = {
    status: status || 1,
    ...(adult !== undefined && {adult}),
    ...(genreIds && {genreIds}),
    ...(originalLanguage && {originalLanguage}),
    ...(originalTitle && {originalTitle}),
    ...(releaseDate && {releaseDate}),
    ...(video && {video}),
    ...(voteAverage && {voteAverage}),
    ...(voteCount && {voteCount}),
    ...(writer && {writer}),
  };
  console.log('filter', filter);
  return Movies.find(filter)
    .limit(+limit || 10)
    .skip(+offset || 0)
    .sort({updatedAt: -1})
    .exec((err, movies) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({success: true, movies});
    });
}
module.exports = {
  getMovies,
};
