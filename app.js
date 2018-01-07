var express = require("express"),
	app = express();

var twit = require("twit");

var config = require("./config.js");
var Twitter = new twit(config);

app.use(require("./controllers/routes"));

var retweet = function() {
	var params = {
		q: "#Rwot",
		result_type: "recent",
		lang: "en"
	};

	Twitter.get("search/tweets", params, function(err, data) {
		// If there are no errors
		if (!err) {
			// Get a tweet ID to retweet
			var retweetId = data.statuses[0].id_str;

			// Tell twitter to retweet
			Twitter.post(
				"statuses/retweet/:id",
				{
					id: retweetId
				},
				function(err, response) {
					if (response) {
						console.log("Retweeted !!!!!!");
					}
					// If the retweet had an error
					if (err) {
						console.log("Something went wrong while retweeting");
					}
				}
			);
		} else {
			// If we are unable to search for the tweet
			console.log("Something went wrong with the search");
		}
	});
};
// Once our program runs we should retweet
retweet();
// Repeat it after a certain period of time
setInterval(retweet, 1200000);

// FAVORITE Tweets=================

// find a random tweet and 'favorite' it
var favoriteTweet = function() {
	var params = {
		q: "#Rwot", // REQUIRED
		result_type: "recent",
		lang: "en"
	};
	// find the tweet
	Twitter.get("search/tweets", params, function(err, data) {
		// find tweets
		var tweet = data.statuses;
		var randomTweet = ranDom(tweet); // pick a random tweet

		// if random tweet exists
		if (typeof randomTweet != "undefined") {
			// Tell TWITTER to 'favorite'
			Twitter.post(
				"favorites/create",
				{ id: randomTweet.id_str },
				function(err, response) {
					// if there was an error while 'favorite'
					if (err) {
						console.log("CANNOT BE FAVORITE... Error");
					} else {
						console.log("FAVORITED... Success!!!");
					}
				}
			);
		}
	});
};
// grab & 'favorite' as soon as program is running...
favoriteTweet();
// 'favorite' a tweet in every  minutes
setInterval(favoriteTweet, 600000);

// function to generate a random tweet tweet
function ranDom(arr) {
	var index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

app.listen(8081, function() {
	console.log("Listening on port 8081...");
});