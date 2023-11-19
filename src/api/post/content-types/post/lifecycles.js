const {
  redisClient,
} = require("../../../../plugins/strapi-redis-plugin/server/services");

module.exports = {
  async afterUpdate(event) {
    const { result } = event;
    // Invalidate cache when a blog post is updated, you can also use the event data to update the cache
    const cacheKey = `post:${result.id}`;
    await redisClient.del(cacheKey);
  },
  async afterDelete(event) {
    const { result } = event;
    // Invalidate cache when a blog post is deleted
    const cacheKey = `post:${result.id}`;
    await redisClient.del(cacheKey);
  },
};
