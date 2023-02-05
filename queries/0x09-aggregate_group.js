db.articles.aggregate([
  {
    $group: {
      _id: '$author',
      total_articles: {
        $sum: 1
      },
      total_visits: {
        $sum: '$visits'
      }
    }
  }
])
