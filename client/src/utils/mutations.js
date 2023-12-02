import { gql } from '@apollo/client';

export const ADD_TO_WATCHLIST = gql`
  mutation AddToWatchlist($userId: ID!, $apiId: Int!) {
    addToWatchlist(userId: $userId, apiId: $apiId) {
      _id
    }
  }
`;

export const REMOVE_FROM_WATCHLIST = gql`
  mutation RemoveFromWatchlist($userId: ID!, $apiId: Int!) {
    removeFromWatchlist(userId: $userId, apiId: $apiId) {
      _id
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation AddMovie($apiId: Int!, $title: String!) {
    addMovie(apiId: $apiId, title: $title) {
      _id
      apiId
      title
    }
  }
`;