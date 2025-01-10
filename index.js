const express = require('express');
const app = express();
const port = process.env.PORT || 8080; // Change from 3000 to 8080

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;