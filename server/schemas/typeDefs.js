const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    watchlist: [Int!]
  }

  type Movie {
    _id: ID
    apiId: Int!
    title: String!
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
    checkMovieInWatchlist(userId: ID!, apiId: Int!): Boolean!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToWatchlist(userId: ID!, apiId: Int!): User
    removeFromWatchlist(userId: ID!, apiId: Int!): User
    addMovie(apiId: Int!, title: String!): Movie
  }
`;

module.exports = typeDefs;
