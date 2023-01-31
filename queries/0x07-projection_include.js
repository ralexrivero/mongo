db.articles.find({ visits: { $gte: 3 }}, { author: 1, visits: 1, _id: 0 })
