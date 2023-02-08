# MONGO

```javascript
███    ███  ██████  ███    ██  ██████   ██████ 
████  ████ ██    ██ ████   ██ ██       ██    ██ 
██ ████ ██ ██    ██ ██ ██  ██ ██   ███ ██    ██ 
██  ██  ██ ██    ██ ██  ██ ██ ██    ██ ██    ██ 
██      ██  ██████  ██   ████  ██████   ██████  
```

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. javascript is the binary representation of JSON that supports more data types than JSON.

## Table of contents

- [environment](#environment)
- [run container](#run-container)
- [basic usage](#basic-usage)
- [base concepts](#base-concepts)
- [insert documents](#insert-documents)
- [find documents](#find-documents)
- [$in operator](#in-operator)
- [comparison operators](#comparison-operators)
- [$elemMatch operator](#elemmatch-operator)
- [Query arrays with $elemMatch](#query-arrays-with-elemmatch)
- [logical operators](#logical-operators)

## environment

[![MongoDB](https://img.shields.io/static/v1?label=&message=MongoDB&color=47A248&logo=MongoDB&logoColor=47A248&labelColor=2F333A)](https://www.mongodb.com/)<!-- MongoDB -->

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
- `mongosh "mongodb+srv://myatlasclusteredu.6fwnqc5.mongodb.net/sample_airbnb" --apiVersion 1 --username myAtlasDBUser`

### data persistence with volumes

- create `docker-compose.yaml` file
- `docker-compose up`
- `docker run -it --rm --volumes-from mongo-mongodb-1 -v $(pwd):/backup mongo bash`

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

## Modify Query Results

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

- include field: `db.collection.find(<query>, {<field1>: 1, <field2>: 1})`
- exclude: `db.collection.find(<query>, {<field1>: 0, <field2>: 0})`
- exclude with _id: `db.collection.find(<query>, {_id: 0, <field1>: 1, <field2>: 1})`

> inclusion and exclusion can't be combined in the same query, exception with _id field.

### Count documents

- `db.collections.countDocuments(<query>, <options>)` returns the number of documents that match the query.

```javascript
db.collection.countDocuments({<field1>: <value1>, <field2>: <value2>})
```

### Aggregation

Aggregation is an analysis and summary of data. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.

Stage is a single aggretation operation that processes data.

Aggregation pipeline is a series of stages completed one a time, in order.

```javascript
db.collection.aggregate([
    {
        $stage1: {
            { expression1 },
            { expression2 }...
        },
        $stage2: {
            { expression1 }...
        }
    }
])
```

### $match and $group Stages

```javascript
db.zips.aggregate([
  {
    $match: {
      state: "NY"
    }
  },
  {
    $group: {
      _id: "$city",
      totalPop: {
        $sum: "$pop"
      }
    }
  }
])
```

### $sort and $limit stages

```javascript
db.zips.aggregate([
{
  $sort: {
    totalPop: -1
  }
},
  {
  $limit: 5
}
])
```

### $project, $set and $count

`$project` stage is used to include or exclude fields from the documents returned.

```javascript
db.collection.aggregate([
  {
    $project: {
      _id: 0,
      city: 1,
      state: 1,
      pop: 1
    }
  }
])
```

`$set` stage is used to add new fields to the documents.

```javascript
db.collection.aggregate([
  {
    $set: {
      class: "A"
    }
  }
])
```

`$count` stage is used to count the number of documents in the aggregation pipeline.

```javascript
db.collection.aggregate([
  {
    $count: "total"
  }
])
```

### $out

`$out` stage is used to write the aggregation pipeline results to a collection. Must be the last stage in the pipeline. If the collection already exists, it will be overwritten.

- creates a new db if the db doesn't exist

```javascript
$out: {
  db: "<db>",
  coll: "<collection>"
}
```

- use the same db

```javascript
{
  $out: "newCollection"
}
```

```javascript
db.collection.aggregate([
  {
    $out: "newCollection"
  }
])
```

### indexes

Indexes are data structures that store a small portion of the collection’s data set in an easy to traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field. The ordering of the index entries supports efficient equality matches and range-based query operations.

- Single-field (one field)
- Compound (2 to 32 fields)

- `db.collection.createIndex(<key and index type specification>, <options>)`

```javascript
db.collection.createIndex({<field1>: <type1>, <field2>: <type2>}, {<option1>: <value1>, <option2>: <value2>})
```

**Single field index**: A single field index is an index on a single field of a document. MongoDB creates a single field index on the _id field by default, but additional indexes may be needed for other fields as well. A single field index can also be a multikey index if it operates on an array field.

**Compound index**: MongoDB supports compound indexes, where a single index structure holds references to multiple fields within a collection's documents. A compound index is created by specifying the fields that the index should reference, followed by the order in which the fields should be sorted. The order of the fields in the index is important because it determines the order in which the documents are returned when querying the collection. A compound index can also be a multikey index if one of the fields is an array.

**Multikey index**: A multikey index is an index on an array field. Each element in the array gets an index key, which supports efficient querying against array fields. Both single field and compound indexes can have an array field, so there are both multikey single field indexes and multikey compound indexes.

**Unique index**: A unique index enforces a unique constraint on the indexed field so that all indexed field values must be unique. If you try to insert a document that contains a value that already exists in the index, the insert operation fails.

Use `createIndex()` to create a new index in a collection. Within the parentheses of createIndex(), include an object that contains the field and sort order.

```javascript
db.customers.createIndex({
  birthdate: 1
})
```

```javascript
db.customers.createIndex({
  email: 1
},
{
  unique:true
})
```

Use `getIndexes()` to see all the indexes created in a collection.

```javascript
db.customers.getIndexes()
```

Use `explain()` in a collection when running a query to see the Execution plan. This plan provides the details of the execution stages (IXSCAN , COLLSCAN, FETCH, SORT, etc.).

- The **IXSCAN** stage indicates the query is using an index and what index is being selected.
- The **COLLSCAN** stage indicates a collection scan is perform, not using any indexes.
- The **FETCH** stage indicates documents are being read from the collection.
- The **SORT** stage indicates documents are being sorted in memory.

**Compound indexes** are used when need to sort by multiple fields. For example, if you need to sort by the city and state fields, you can create a compound index on the city and state fields.

```javascript
db.customers.createIndex({
  city: 1,
  state: 1
})
```

#### Order of Fields in a Compound Index

The order of the fields matters when creating the index and the sort order. It is recommended to list the fields in the following order: *Equality*, *Sort*, and *Range*.

- ***Equality***: field/s that matches on a single field value in a query
- ***Sort***: field/s that orders the results by in a query
- ***Range***: field/s that the query filter in a range of valid values

#### Delete indexes

Before deleting an index is a good practice for production to hide the index. To hide the index use `db.collection.hideIndex("<index name>")`. To delete the index use `db.collection.dropIndex("<index name>")`.

Specified by name

```javascript
db.customers.hideIndex("email_1")
db.customers.dropIndex("email_1")
```

Specified by key

```javascript
db.customers.hideIndex({email: 1})
db.customers.dropIndex({email: 1})
```

Delete all the indexes

```javascript
db.customers.dropIndexes()
```

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
