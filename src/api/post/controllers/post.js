"use strict";

const {
  caching,
} = require("../../../plugins/strapi-redis-plugin/server/services");

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const cacheableResource = caching(
  "post",
  parseInt(process.env.DEFAULT_CACHE_DURATION)
);

const getPost = cacheableResource(async (id) => {
  return strapi.db.query("api::post.post").findOne({
    where: { id },
  });
});

module.exports = createCoreController("api::post.post", () => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    console.log("findOne", id);
    const data = await getPost(id);

    return data;
  },
}));
