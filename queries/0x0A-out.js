db.articles.aggregate([
  {
    $match: { author: 'Ronald Alexander' }
  },
  {
    $out: 'articlesRonald'
  }
]);
