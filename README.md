# MONGO

```javascript
███    ███  ██████  ███    ██  ██████   ██████ 
████  ████ ██    ██ ████   ██ ██       ██    ██ 
██ ████ ██ ██    ██ ██ ██  ██ ██   ███ ██    ██ 
██  ██  ██ ██    ██ ██  ██ ██ ██    ██ ██    ██ 
██      ██  ██████  ██   ████  ██████   ██████  
```

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. javascript is the binary representation of JSON that supports more data types than JSON.

## content

- [environment](#environment)
- [run container](#run-container)
- [basic usage](#basic-usage)
- [docs](#docs)
- [author](#author)

## environment

- `docker`
- `mongosh`
- `Atlas`
- `bash`
- `javascript`
- `vscode`

## run container

- `docker run -d -it --rm --name mongo -v /home/ralex/code:/code mongo`
- `docker exec -it mongo bash`
- `mongod` start the mongo deamon
- `mongosh` start the mongo shell

## basic usage

### conect to Atlas

- `add access in Atlas to the IP of the machine`
- `mongosh "mongodb+srv://cluster0.hr48nsg.mongodb.net/myFirstDatabase" --apiVersion 1 --username admin`
- `mongosh "mongodb+srv://cluster0.hr48nsg.mongodb.net/sample_airbnb" --apiVersion 1 --username admin`

### basic commands

Create a database and collection

```javascript
const database = 'blog';
const collection = 'posts';
use(database);
db.createCollection(collection);
```


- `show dbs` show all databases
- `use <db>` use database
- `show collections` show all collections
- `db.<collection>.find()` show all documents in collection
- `db.<collection>.find().pretty()` show all documents in collection with pretty print
- `db.<collection>.insertOne({<document>})` insert one document
- `db.<collection>.insertMany([{<document>}, {<document>}, ...])` insert many documents

- `db.help()` show all db commands



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

```javascript
db.<collection>.insertOne({<document>})
```

```javascript
db.<collection>.insertMany([{<document>}, {<document>}, ...])
```

```javascript
db.users.insertOne({
   name: "John Smith",
   age: 30,
   email: "johnsmith@example.com"
});
```

```javascript
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

```javascript
db.<collection>.find()
```

```javascript
db.<collection>.find().pretty()
```

```javascript
use sample_airbnb
db.listingsAndReviews.find().pretty()
```

retrieve a matching key-value pair

```javascript
db.<collection>.find({<key>: <value>})
```

```javascript
db.listingsAndReviews.find({reviewer_name: "Alex"}).pretty()
```

retrieve an exact match

```javascript
db.<collection>.find({<key>: <value>})
```

## $in operator

```javascript
db.<collection>.find({<key>: {$in: [<value>, <value>, ...]}})
```

```javascript
db.listingsAndReviews.find({beds: {$in: [1, 2, 3]}}).pretty()
```

## comparison operators

- `$gt` greater than
- `$gte` greater than or equal to
- `$lt` less than
- `$lte` less than or equal to
- `$ne` not equal to

```javascript
db.<collection>.find({<key>: {$gt: <value>}})
```

```javascript
db.listingsAndReviews.find({beds: {$gt: 3}}).pretty()
```

## $elemMatch operator

```javascript
db.<collection>.find({<key>: {$elemMatch: {<key>: <value>}}})
```

```javascript
db.listingsAndReviews.find({amenities: {$elemMatch: {name: "Wifi"}}}).pretty()
```

## Query arrays with $elemMatch

The $elemMatch operator allows you to query for documents where at least one element of an array field matches the specified query criteria

```javascript
db.<collection>.find({<key>: {$elemMatch: {<key>: <value>, <key>: <value>}}})
```

```javascript
db.listingsAndReviews.find({amenities: {$elemMatch: {name: "Wifi", description: "Free Wifi"}}}).pretty()
```

- Query a subdocument with a field that contains an array of subdocuments

```javascript
db.transactions.find({
    transactions: {
      $elemMatch: { amount: { $lte: 4500 }, transaction_code: "sell" },
    },
  })
```

```javascript
db.restaurants.find( {grades: { $elemMatch: {score: { $gt: 95} } } });
```

Dont return scalar values, only documents that have an array value

## logical operators

- `$and` logical AND
- `$or` logical OR
- `$not` logical NOT
- `$nor` logical NOR

```javascript
use sample_training;
db.routes.find({ $or: [{ dst_airport: 'SEA' }, { src_airport: 'SEA'} ] });
```

- combine `$and` and `$or` operators

```javascript
use sample_training;
Atlas atlas-11vw4c-shard-0 [primary] sample_training> db.routes.find({
... $and: [
...    { $or: [
...       { dst_airport: "SEA" },
...       { src_airport: "SEA" }
...    ]},
...    { $or: [
...       { airline: "American Airlines" },
...       { airplane: 320 }
...    ]},
... ]
... }
... )
```

```javascript
db.sales.find({
   $and:
      [
         { couponUsed: true},
         { purchaseMethod: "Online" },
         { "customer.age": { $lte: 25 }},
      ]
})
```

- or using implicint `$and` operator

```javascript
db.sales.find({ couponUsed: true,  purchaseMethod: "Online", "customer.age": { $lte: 25 } })
```

- using `$or` operator

```javascript
Atlas atlas-d3opcw-shard-0 [primary] sample_supplies> db.sales.find({ $or: [ { "items.name": "pens" }, { "items.tags": "writing" }] })
```

### ReplaceOne

Replaces a single document within the collection based on the filter.

```javascript
db.<collection>.replaceOne(
   <filter>,
   <replacement>,
   {
     upsert: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }
)
```

To replace documents in MongoDB, we use the replaceOne() method. The replaceOne() method takes the following parameters:

- filter: A query that matches the document to replace.
- replacement: The new document to replace the old one with.
- options: An object that specifies options for the update.

### updateOne()

Updates a single document within the collection based on the filter.

> options is not requiered

```javascript
db.collection.updateOne(
   <filter>,
   <update>,
   {options}
)
```

MongoDB provides update operators and options to update documents: `$set`, `upsert`, and `$push`.

- `$set` operator add or replaces the value of a field with the specified value.
- `upsert` option creates a new document if no document matches the query. The default value is false, then use `upsert: true` to enable it.
- `$push` operator appends a specified value to an array, or adds the array field with the value if absent.
- `$inc` operator increments a field by a specified value.

### findAndModify()

Finds a single document and updates it, returning the original or the updated document.

```javascript
db.collection.findAndModify(
   {
     query: <document>,
     update: <document>,
     new: <boolean>,
   }
)
```

### updateMany()

Updates all documents that match the filter.

accepts the following parameters:

- filter: A query that matches the documents to update.
- update: The update operations to apply to the documents.
- options: An object that specifies options for the update. Not requiered.

```javascript

### deleteOne()

Deletes a single document within the collection based on the filter.

```javascript
db.collection.deleteOne(<filter>)
```

### deleteMany()

```javascript
db.collection.deleteMany(<filter>)
```

### Modify Query Results

In MongoDB a cursor is a pointer to the result set of a query. Used to iterate through the documents returned from a query.

- `limit()` method limits the number of documents returned by the query.
- `skip()` method skips the specified number of documents in the query result.
- `sort()` method sorts the documents returned by the query.

- `cursor.sort()` method sorts the documents returned by the query. Within the parentheses, specify the field to sort by and the direction of the sort. Use 1 for ascending and -1 for descending.

```javascript
db.collection.find(<query>).sort({<field1>: <sort order>, <field2>: <sort order>})
```

- `cursor.limit()` returns query results in a specific order. Within the parentheses, specify the maximum number of documents to return.

```javascript
db.collection.find(<query>).limit(<number>)
```

### Projections

Projections are used to limit the amount of data that MongoDB sends to applications. Projections can include or exclude fields from the documents returned.

## docs

- [MongoDB Manual](https://www.mongodb.com/docs/manual/)

## author

[![Twitter](https://img.shields.io/twitter/follow/ralex_uy?style=social)](https://twitter.com/ralex_uy) <!-- twitter -->
[![Linkedin](https://img.shields.io/badge/LinkedIn-+28K-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/ronald-rivero/) <!-- linkedin -->
[![Medium](https://img.shields.io/static/v1?label=&message=Medium&color=000000&logo=Medium&logoColor=000000&labelColor=888888)](https://medium.com/@ralexrivero)<!-- medium -->
[![Github](https://img.shields.io/github/followers/ralexrivero?style=social)](https://github.com/ralexrivero/) <!-- github -->
[![Vagrant](https://img.shields.io/static/v1?label=&message=Vagrant%20Profile&color=1868F2&logo=vagrant&labelColor=2F333A)](https://app.vagrantup.com/ralexrivero) <!-- vagrant -->
[![Docker](https://img.shields.io/static/v1?label=&message=Docker%20Profile&color=2496ED&logo=Docker&labelColor=2F333A)](https://hub.docker.com/u/ralexrivero) <!-- docker -->

[![CodersRank](https://img.shields.io/static/v1?label=&message=Coders%20Rank&color=67A4AC&logo=CodersRank&logoColor=67A4AC&labelColor=2F333A)](https://profile.codersrank.io/user/ralexrivero) <!-- codersrank -->
[![HackersRank](https://img.shields.io/static/v1?label=&message=Hacker%20Rank&color=00EA64&logo=HackerRank&logoColor=00EA64&labelColor=2F333A)](https://www.hackerrank.com/ralexrivero) <!-- hackerrank -->
<!-- Behance -->
<!-- website -->
