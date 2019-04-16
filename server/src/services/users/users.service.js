// Initializes the `users` service on path `/users`
const createService = require('feathers-nedb');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initializes the service with any options it requires
  app.use('/users', createService(options));

  // Get initialized service so that hooks can be registered
  const service = app.service('users');

  service.hooks(hooks);
};
