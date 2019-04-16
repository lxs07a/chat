// eslint-disable-next-line no-unused-vars

// Needed for the MD5 hash
const crypto = require('crypto');

// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar';
// Setting size query for images to 60px
const query = 's=60';

module.exports = function (options = {}) {
  return async context => {
    // The user email
    const { email } = context.data;
    // Use MD5 hashes from an email address (all lowercase) to get the image from Gravatar
    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

    context.data.avatar = `${gravatarUrl}/${hash}?${query}`;

    // Best practice: hooks should always return the context
    return context;
  };
};
