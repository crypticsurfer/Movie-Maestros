const { User, Movie } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('');
    },
    movie: async (parent, { apiId }) => {
      return Movie.findOne({ apiId: apiId });
    },
    getUserWatchlist: async (parent, { username }) => {
      try {
        const user = await User.findById(username).populate('watchlist');
        return user.watchlist;
      } catch (error) {
        console.error('Error fetching user watchlist:', error);
        throw new Error('Internal Server Error');
      }
    },
    checkMovieInWatchlist: async (parent , { userId, apiId }) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error('User not found');
        }

        const isInWatchlist = user.watchlist.some((movie) => movie.apiId === apiId);
        return isInWatchlist;
      } catch (error) {
        console.error('Error checking movie in watchlist:', error);
        throw new Error('Internal Server Error');
      }
    },
  },
  
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addToWatchlist: async (parent, { userId, apiId }) => {
      try {
        const user = await User.findByIdAndUpdate(
          userId,
          { $addToSet: { watchlist: apiId }},
          { new: true }
        ).populate('watchlist');

        return user;
      } catch (error) {
        console.error('Error adding movie to watchlist:', error);
        throw new Error('Internal Server Error');
      }
    },
    removeFromWatchlist: async (parent, { userId, apiId }) => {
      try {
        const user = await User.findByIdAndUpdate(
          userId,
          { $pull: { watchlist: apiId } }, // Use $pull to remove the movieId from the watchlist
          { new: true }
        ).populate('watchlist');

        return user;
      } catch (error) {
        console.error('Error removing movie from watchlist:', error);
        throw new Error('Internal Server Error');
      }
    },
    addMovie: async (parent, { apiId, title, posterPath }) => {
      try {
        const newMovie = await Movie.create({
          apiId,
          title
        });
        return newMovie;
      } catch (error) {
        console.error('Error adding movie:', error);
        throw new Error('Internal Server Error');
      }
    },
  },
};
    
module.exports = resolvers;
