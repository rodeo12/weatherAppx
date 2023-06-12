
const {Router } = require("express");
const { authenticator } = require("../middlewares/auth");
const { getCityData, mostSearchedCity } = require("../controllers/city.controller");
const redisLimiter = require("../middlewares/redisLimiter");

const cityRouter = Router();

cityRouter.get("/mostsearchedcity",mostSearchedCity);
cityRouter.get("/:city",authenticator,getCityData);

module.exports = cityRouter;