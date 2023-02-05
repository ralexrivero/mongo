  use blog;
db.articles.insertMany([
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d26"),
  author: 'Ronald Alexander',
  article: 'JavaScript Best Practices',
  content: 'Tips and tricks for writing clean and efficient JavaScript code',
  topics: [ 'JavaScript', 'Programming', 'Best Practices' ],
  visits: 5
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d27"),
  author: 'Ronald Alexander',
  article: 'Node.js Performance Optimization',
  content: 'How to optimize Node.js performance for maximum efficiency',
  topics: [ 'Node.js', 'Performance', 'Optimization' ],
  visits: 7
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d28"),
  author: 'John Doe',
  article: 'JavaScript Testing Techniques',
  content: 'Best practices for testing your JavaScript applications',
  topics: [ 'JavaScript', 'Testing', 'Best Practices' ],
  visits: 4
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d29"),
  author: 'John Doe',
  article: 'Node.js Debugging Techniques',
  content: 'How to effectively debug your Node.js applications',
  topics: [ 'Node.js', 'Debugging', 'Best Practices' ],
  visits: 6
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d30"),
  author: 'Jane Smith',
  article: 'Introduction to NoSQL Databases',
  content: 'A beginner-friendly overview of NoSQL databases and their use cases',
  topics: [ 'NoSQL', 'Databases', 'Beginner' ],
  visits: 3
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d31"),
  author: 'Jane Smith',
  article: 'NoSQL Database Comparison',
  content: 'A comparison of different NoSQL databases and their strengths and weaknesses',
  topics: [ 'NoSQL', 'Databases', 'Comparison' ],
  visits: 5
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d32"),
  author: 'Jack Johnson',
  article: 'Introduction to Performance Tuning',
  content: 'A beginner-friendly overview of performance tuning and its importance',
  topics: [ 'Performance', 'Tuning', 'Beginner' ],
  visits: 2
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d33"),
  author: 'Jack Johnson',
  article: 'Performance Tuning Techniques for Databases',
  content: 'Tips and tricks for optimizing database performance',
  topics: [ 'Performance', 'Tuning', 'Databases' ],
  visits: 3
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d34"),
  author: 'Julia Roberts',
  article: 'Introduction to Replication',
  content: 'The replica fundation',
  topicas: ['replica', 'replica set', 'load balancing'],
  visits: 8
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d26"),
  author: 'Ronald Alexander',
  article: 'JavaScript Best Practices',
  content: 'Learn the best practices for writing clean and efficient JavaScript code',
  topics: [ 'JavaScript', 'Coding', 'Best Practices' ],
  visits: 7
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d27"),
  author: 'Ronald Alexander',
  article: 'JavaScript Design Patterns',
  content: 'Discover the most common design patterns used in JavaScript development',
  topics: [ 'JavaScript', 'Design Patterns', 'Coding' ],
  visits: 5
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d28"),
  author: 'John Doe',
  article: 'CSS Best Practices',
  content: 'Learn the best practices for writing clean and efficient CSS code',
  topics: [ 'CSS', 'Coding', 'Best Practices' ],
  visits: 6
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d29"),
  author: 'John Doe',
  article: 'CSS Frameworks',
  content: 'Discover the most popular CSS frameworks and how to use them',
  topics: [ 'CSS', 'Frameworks', 'Coding' ],
  visits: 4
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d30"),
  author: 'Jane Smith',
  article: 'NoSQL Database Fundamentals',
  content: 'Learn the basics of NoSQL databases and why they are becoming so popular',
  topics: [ 'NoSQL', 'Databases', 'Fundamentals' ],
  visits: 8
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d31"),
  author: 'Jane Smith',
  article: 'NoSQL Database Comparisons',
  content: 'Compare the most popular NoSQL databases and find the right one for your needs',
  topics: [ 'NoSQL', 'Databases', 'Comparisons' ],
  visits: 6
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d32"),
  author: 'Jack Johnson',
  article: 'Node.js Best Practices',
  content: 'Learn the best practices for writing clean and efficient Node.js code',
  topics: [ 'Node.js', 'Coding', 'Best Practices' ],
  visits: 5
  },
  {
  _id: ObjectId("63d55f7d3347e31ea84f0d33"),
  author: 'Jack Johnson',
  article: 'Node.js Design Patterns',
  content: 'Discover the most common design patterns used in Node.js development',
  topics: [ 'Node.js', 'Design Patterns', 'Coding' ],
  visits: 4
  }
]);
