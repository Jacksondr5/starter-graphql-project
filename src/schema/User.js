const mssql = require('mssql');

//Define the user type
const User = `
  #Define the user object
  type User {
    #Unique ID only used for GQL caching purposes
    id: String!
    #The user's user ID in AccountAccess
    userId: String
    #A TIN that is safe to display
    maskedTaxId: String!
    #Self-explanatory
    name: String!
    #Used for demo purposes
    notARealComplexDataType: String
  }
`;

//Define the resolver
function getUserFromDB(obj, args, context) {
  // console.log('GETTING USER');
  const request = new mssql.Request();
  request.input('SomeInput', mssql.Char(1341), args.someInput);
  return request
    .execute('someStoredProc')
    .then(res => {
      return res.recordset[0];
    })
    .catch(err => {
      console.log('ERROR GETTING USER: ' + err);
      return null;
    });
}

//Exports the schema and resolvers
module.exports = {
  schema: () => [User],
  resolvers: {
    User: getUserFromDB,
  },
};
