'use strict';
const app = require('./app');
const PORT = process.env.port || 80;

app.listen(PORT, () => {
  console.log(`PXTAN page listening on port ${PORT}!`);
});
