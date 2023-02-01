db.articles.countDocuments({ visits: { $lte: 4 } });
