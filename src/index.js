const express = require('express');

// This package automatically parses JSON requests.
const bodyParser = require('body-parser');

//This package deals with CORS
const cors = require('cors');

// This package will handle GraphQL server requests and responses
// for you, based on your schema.
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

//Your schame should be defined in this file
const schema = require('./schema');

// This package lets us make requests to SQL databases
const sql = require('mssql');

//TODO: set this up to work with your backend
const config = {
  user: 'someUserName',
  password: 'theCorrectPassword',
  server: 'yourDBServer',
  database: 'yourDB',
};

// Connects mssql to the database
sql.connect(config);

var app = express();
app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// Optional, configures the Graphiql IDE at localhost:[port]/graphiql
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT}.`);
});
