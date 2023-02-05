db.articles.aggregate([
  {
    $sort: { visits: -1 }
  },
  {
    $limit: 5
  }
])
