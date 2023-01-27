db.articles.updateMany(
  { author: "Ronald" },
  { $set: { author: "Ronald Alexander" } },
);
