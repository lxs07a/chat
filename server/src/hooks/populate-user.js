// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) { 
  return async context => {
    // Get `app`, `method`, `params` and `result` from the hook context
    const { app, method, result, params } = context;

    // List of messages either from wrapping
    // a single message into an array or by getting the `data` from the `find` method's result
    const messages = method === 'find' ? result.data : [ result ];

    // Asynchronously get user object from each message's `userId`
    // add it to the message
    // ensure that all the calls run in parallel, instead of sequentially.
    await Promise.all(messages.map(async message => {
      // Pass the original `params` to the service call
      // so that it has the same information available (e.g. who is requesting it)
      message.user = await app.service('users').get(message.userId, params);
    }));

    // Best practice: hooks should always return the context
    return context;
  };
};
