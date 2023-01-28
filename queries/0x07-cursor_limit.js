db.articles.find({ visits: { $gte: 2 } }, { author: 1, visits: 1, _id: 0 }).sort({ visits: -1 }).limit(3);
