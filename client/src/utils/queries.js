import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query GetUserByUsername($username: String!) {
    user(username: $username) {
      _id
      username
    }
  }
`;

export const GET_MOVIE_BY_APIID = gql`
  query GetMovieByAPIId($apiId: ID!) {
    movie(apiId: $apiId) {
      _id
      title
    }
  }
`;

export const GET_USER_WATCHLIST = gql`
  query GetUserWatchlist($username: String!) {
    user(username: $username) {
      _id
      watchlist
    }
  }
`;

export const CHECK_MOVIE_IN_WATCHLIST = gql`
  query CheckMovieInWatchlist($userId: ID!, $apiId: Int!) {
    checkMovieInWatchlist(userId: $userId, apiId: $apiId)
  }
`;