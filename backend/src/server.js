const express = require('express');
const app = express();

const service = require('./eos/eos.service');

app.use('/', (req, res) => {
  return service.getBlockList()
    .then(block => {
      res.status(200).send(block);
    });
});

app.listen(4000, () => {
  console.log('express server listening...');
});