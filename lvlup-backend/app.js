const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
