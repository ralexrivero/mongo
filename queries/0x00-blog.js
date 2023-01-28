use blog;
db.articles.insertMany([
    {author: 'John Doe',
    article: 'Hello World',
    content: 'This is the updated content for article number 1, a bit more extensive than the first',
    topics: ['JavaScript', 'Databases', 'MongoDB', 'Node.js'],
    visits: 3
  },
  {
    author: 'Jane Smith',
    article: 'MongoDB for Beginners',
    content: 'Learn the basics of MongoDB and how to use it effectively',
    topics: ['MongoDB', 'Databases', 'NoSQL'],
    visits: 1
  },
  {
    author: 'Jack Johnson',
    article: 'MongoDB Performance Tuning',
    content: 'Tips and tricks for optimizing MongoDB performance',
    topics: ['MongoDB', 'Performance', 'Databases'],
    visits: 4
  },
  {
    author: 'Julia Roberts',
    article: 'MongoDB Replication',
    content: 'An overview of MongoDB replication and how to set it up',
    topics: ['MongoDB', 'Replication', 'Databases'],
    visits: 2
  },
  {
    author: 'James Bond',
    article: 'MongoDB Security',
    content: 'Best practices for securing your MongoDB deployments',
    topics: ['MongoDB', 'Security', 'Databases'],
    visits: 5
  },
  {
    author: 'Justin Bieber',
    article: 'MongoDB Sharding',
    content: 'How to scale MongoDB using sharding',
    topics: ['MongoDB', 'Sharding', 'Databases'],
    visits: 3
  },
  {
    author: 'Jessica Alba',
    article: 'MongoDB Backup and Recovery',
    content: 'Learn how to backup and restore your MongoDB data',
    topics: ['MongoDB', 'Backup', 'Recovery', 'Databases'],
    visits: 2
  },
  {
    author: 'Jared Leto',
    article: 'MongoDB Aggregation Framework',
    content: 'An introduction to the MongoDB aggregation framework',
    topics: ['MongoDB', 'Aggregation', 'Databases'],
    visits: 1
  },
  {
    author: 'John Legend',
    article: 'MongoDB Text Search',
    content: 'How to set up and use MongoDB text search',
    topics: ['MongoDB', 'Text Search', 'Databases'],
    visits: 4
  },
  {
    author: 'Jasmine Lee',
    article: 'MongoDB Geospatial Indexing',
    content: 'An overview of MongoDB geospatial indexing and querying',
    topics: ['MongoDB', 'Geospatial', 'Indexing', 'Databases'],
    visits: 3
  }
]);
