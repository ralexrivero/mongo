db.articles.aggregate([
  {
    $project:
    {
      _id: 0,
      author: 1,
      article: 1,
      visits: 1
    }
  }
]);
