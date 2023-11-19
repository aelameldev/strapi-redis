"use strict";

const { client } = require("./services/redis-client");

module.exports = async () => {
  try {
    await client.connect();
  } catch (e) {
    // handle errors
  }
};
