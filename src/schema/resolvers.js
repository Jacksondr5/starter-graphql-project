//Gets the User resolver
const getUserFromDB = require('./User').resolvers.User;

module.exports = {
  Query: {
    user(root, args, context) {
      return getUserFromDB(root, args, context);
    },
  },
  Mutation: {
    //Define mutations here
  },
  User: {
    // If one of your types has complex data,
    // define the resolvers for those here.
  },
};
