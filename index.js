const express = require('express');
const app = express();
const port = 3000; // You can change the port to your desired value

app.get('/', (req, res) => {
  res.send('Hello, world1234!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

