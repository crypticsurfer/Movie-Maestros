const { GraphQLError } = require("graphql");
const jwt = require('jsonwebtoken');
const secret = '66AD543E9100CEAB750970DD3C1446456F6F864C4AA063080E1B40817BED5FB6';

module.exports = {
    AuthenticationError: new GraphQLError('could not authenticate', {
        extensions: {
            code: 'UNAUTHENTICATED',
        }
    }),
    signToken: function ({email, username, _id}) {
        const payload = {email, username, _id};
        jwt.sign({data: payload}, secret, {expiresIn: '6h'});
    }
}