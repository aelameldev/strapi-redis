'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-redis-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
