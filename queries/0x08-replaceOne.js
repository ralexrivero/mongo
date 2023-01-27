db.books.insertOne({
  title: "Deep Dive into React Hooks",
  ISBN: "0000000000",
  thumbnailUrl: "",
  publicationDate: IsoDate("2019-01-01T00:00:00.000Z"),
  authors: ["Ada Lovelace"],
});

db.books.replaceOne(
  {_id: ObjectId("63d2c100a448957934db49db")},
  {
    title: 'Deep Dive into React Hooks',
    ISBN: "0-3182-1299-4",
    thumbnailUrl: "http://via.placeholder.com/640x360",
    publicationDate: ISODate("2022-07-28T02:20:21.000Z"),
    authors: ["Ada Lovelace"],
  }
)

db.books.findOne({_id: ObjectId("63d2c100a448957934db49db")});
