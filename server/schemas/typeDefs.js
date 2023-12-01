const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    watchlist: [Movie]
  }

  type Movie {
    _id: ID
    apiId: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    movie(apiId: Int!): Movie
    user(username: String!): User
    getUserWatchlist(userId: ID!): [Movie]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToWatchlist(userId: ID!, apiId: ID!): User
    removeFromWatchlist(userId: ID!, apiId: ID!): User
  }
`;

module.exports = typeDefs;
