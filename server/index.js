'use strict';
const app = require('./app');
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log('PXTAN page listening on port 3000!');
});
