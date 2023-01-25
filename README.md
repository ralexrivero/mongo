# MONGO

```bson
███    ███  ██████  ███    ██  ██████   ██████ 
████  ████ ██    ██ ████   ██ ██       ██    ██ 
██ ████ ██ ██    ██ ██ ██  ██ ██   ███ ██    ██ 
██  ██  ██ ██    ██ ██  ██ ██ ██    ██ ██    ██ 
██      ██  ██████  ██   ████  ██████   ██████  
```

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. BSON is the binary representation of JSON that supports more data types than JSON.

## content

- [run container](#run-container)
- [environment](#environment)
- [author](#author)

## run container

- `docker run -d -it --rm --name mongo -v /home/ralex/code:/code mongo`
- `docker exec -it mongo bash`
- `mongod` start the mongo deamon
- `mongosh` start the mongo shell

## basic usage

- `show dbs` show all databases
- `use <db>` use database
- `show collections` show all collections
- `db.<collection>.find()` show all documents in collection
- `db.<collection>.find().pretty()` show all documents in collection with pretty print
- `db.<collection>.insertOne({<document>})` insert one document
- `db.<collection>.insertMany([{<document>}, {<document>}, ...])` insert many documents

- `db.help()` show all db commands

## conect to Atlas

- `add access in Atlas to the IP of the machine`
- `mongosh "mongodb+srv://cluster0.hr48nsg.mongodb.net/myFirstDatabase" --apiVersion 1 --username admin`
- `mongosh "mongodb+srv://cluster0.hr48nsg.mongodb.net/sample_airbnb" --apiVersion 1 --username admin`

## environment

## base concepts

- `document` is a set of key-value pairs, and is the basic unit of data in MongoDB
- `collection` is a container for documents, a group of documents
- `database` is a container for collections

The document model

```bson
{
  "key": value,
  "key": value,
  "key": value
}
```

```bson
{
  "_id": 1,
  "name": "Alex",
  "colors": ["red", "green", "blue"]
  "price": 200,
  "available": true
}
```

## insert documents

```bson
db.<collection>.insertOne({<document>})
```

```bson
db.<collection>.insertMany([{<document>}, {<document>}, ...])
```

```bson
db.users.insertOne({
   name: "John Smith",
   age: 30,
   email: "johnsmith@example.com"
});
```

```bson
db.users.insertMany([
   {
      name: "Jane Doe",
      age: 25,
      email: "janedoe@example.com"
   },
   {
      name: "Bob Johnson",
      age: 35,
      email: "bobjohnson@example.com"
   },
   {
      name: "Samantha Williams",
      age: 22,
      email: "samanthawilliams@example.com"
   }
]);
```

## find documents

```bson
db.<collection>.find()
```

```bson
db.<collection>.find().pretty()
```

```bson
use sample_airbnb
db.listingsAndReviews.find().pretty()
```

retrieve a matching key-value pair

```bson
db.<collection>.find({<key>: <value>})
```

```bson
db.listingsAndReviews.find({reviewer_name: "Alex"}).pretty()
```

retrieve an exact match

```bson
db.<collection>.find({<key>: <value>})
```

## $in operator

```bson
db.<collection>.find({<key>: {$in: [<value>, <value>, ...]}})
```

```bson
db.listingsAndReviews.find({beds: {$in: [1, 2, 3]}}).pretty()
```

## comparison operators

- `$gt` greater than
- `$gte` greater than or equal to
- `$lt` less than
- `$lte` less than or equal to
- `$ne` not equal to

```bson
db.<collection>.find({<key>: {$gt: <value>}})
```

```bson
db.listingsAndReviews.find({beds: {$gt: 3}}).pretty()
```

## $elemMatch operator

```bson
db.<collection>.find({<key>: {$elemMatch: {<key>: <value>}}})
```

```bson
db.listingsAndReviews.find({amenities: {$elemMatch: {name: "Wifi"}}}).pretty()
```

## author
