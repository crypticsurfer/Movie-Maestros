const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Movie {
    _id: ID
    title: String
    apiId: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    movie(apiID: Int!): Movie
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
