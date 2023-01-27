db.articles.updateOne(
  { article: "Hello World" },
  { $set: { topics: ["JavaScript", "Databases", "MongoDB"] } },
  { upsert: true }
)

'small mammals', 'rabbits', 'shrews'