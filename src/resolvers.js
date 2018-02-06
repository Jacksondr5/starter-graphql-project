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
    notARealMutation(root, args, context) {
      return null;
    },
  },
  User: {
    // If one of your types has complex data,
    // define the resolvers for those here.
    notARealComplexDataType(user, args, context) {
      return null;
    },
  },
};
