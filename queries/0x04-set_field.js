db.articles.updateOne(
  { _id: ObjectId("63d30962a448957934db49dd") },
  { $set: { visits: 0 }
  }
);
