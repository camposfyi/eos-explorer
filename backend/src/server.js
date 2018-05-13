const express = require('express');
const config = require('config');
const service = require('./eos/eos.service');

const app = express();

app.use('/api/blocks', (req, res) => {
  return service.getBlockList(req.query.limit)
    .then(blockList => {
      res.status(200).send({blocks: blockList});
    });
});

const port = config.get('server.port');
app.listen(port, () => {
  console.log(`Express server listening on port ${port}.`);
});