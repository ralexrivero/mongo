# MONGO

```bson
███    ███  ██████  ███    ██  ██████   ██████ 
████  ████ ██    ██ ████   ██ ██       ██    ██ 
██ ████ ██ ██    ██ ██ ██  ██ ██   ███ ██    ██ 
██  ██  ██ ██    ██ ██  ██ ██ ██    ██ ██    ██ 
██      ██  ██████  ██   ████  ██████   ██████  
```

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

## environment

## author
