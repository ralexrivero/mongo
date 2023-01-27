db.articles.findAndModify(
  {
  query: { _id: ObjectId("63d30962a448957934db49dd") },
  update: { $inc: { visits: 1 } },
  new: true
  }
);
