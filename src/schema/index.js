//Import GraphQL stuff
const { makeExecutableSchema } = require('graphql-tools');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

//Import the resolvers and User type
const User = require('./User').schema;
const resolvers = require('./resolvers');

const topLevelTypeDefs = `
  type Query {
    #Define your queries here
    user(someInput: String!): User!
  }

  type Mutation {
    #Define your mutations here
    notARealMutation: String
  }
`;

//Logs stuff to the console for you
const logger = {
  log: e => console.log(e),
};

// Generate the schema object from your types definition.
// typeDefs accepts an array of schame definitions
module.exports = makeExecutableSchema({
  typeDefs: [topLevelTypeDefs, User],
  resolvers,
  logger,
});
