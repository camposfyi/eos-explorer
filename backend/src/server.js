const express = require('express');
const cors = require('cors');
const config = require('config');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', cors(), expressGraphQL({
  schema,
  graphiql: config.get('graphql.graphiql')
}));


const port = config.get('server.port');
app.listen(port, () => {
  console.log(`Express server listening on port ${port}.`);
});