var express = require("express"),
	router = express.Router();

// Require controller modules
var tweets_controller = require("./tweetsController");

/// TWEETS ROUTES ///

// Get all the tweets of a hashtag
router.get("/hashtag/:hashtag", tweets_controller.getAllTweets);
router.get("/hashtag", tweets_controller.getMultiHashtagsTweets);

module.exports = router;
