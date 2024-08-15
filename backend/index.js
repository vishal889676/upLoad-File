
const express = require('express');//this line imports the Express module, 
//a web framework for Node.js. Express simplifies the process of creating server-side applications and APIs.
const app = express();
const fileRouter = require('./fileHandler');

app.use('/', fileRouter);//this line tells the Express application to use the fileRouter for any routes starting with /.
const port = 8000;//port 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
