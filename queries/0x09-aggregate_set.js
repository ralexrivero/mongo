db.articles.aggregate([
  {
    $set:
    {
      web: 'www.tify.one'
    }
  }
]);
