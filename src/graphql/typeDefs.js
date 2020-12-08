const typeDefs = gql`
  type Query {
    greet: String
    users: [User]
    musers: [User]
  }

  type User {
    id: String
    email: String
    password: String
    companyId: String
  }
`;

module.exports = {
  typeDefs,
};
