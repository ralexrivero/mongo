db.articles.updateOne(
  { _id: ObjectId("63d30962a448957934db49dd") },
  { $set:
    {
      content: "Este es el contenido actualizado del articulo numero 2, un poco mas extenso que el primero"
    }
  }
);
