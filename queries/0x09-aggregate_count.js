db.articles.aggregate([
  {
    $count: 'total'
  }
]);
