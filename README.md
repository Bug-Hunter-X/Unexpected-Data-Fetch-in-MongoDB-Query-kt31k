# MongoDB Unexpected Data Fetch Bug
This repository demonstrates a common MongoDB query error where the query unintentionally fetches more data than needed.  The provided code uses an overly broad query, leading to potential performance issues. The solution demonstrates a more optimized query to address this issue.
## Bug
The `bug.js` file contains JavaScript code that fetches all documents from a MongoDB collection using `collection.find({}).toArray()`.  This approach can be highly inefficient, especially with large datasets.
## Solution
The `bugSolution.js` file presents a corrected approach. It demonstrates how to use more specific queries to retrieve only the necessary data and improve performance. Note that the efficiency will depend on the nature of the indexes in your database. The focus here is on providing better query practice. 