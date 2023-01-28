db.articles.find(
  {},{ author: 1, visits: 1, _id: 0 }).sort({ visits: -1 });
