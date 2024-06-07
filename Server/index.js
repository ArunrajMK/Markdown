const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const convert = require('./routes/convert.routes');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/", convert);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});