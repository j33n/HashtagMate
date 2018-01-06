var twit = require("twit");
var config = require("../config.js");

var Twitter = new twit(config);

var retweet = function() {
	var params = {
		q: "#nodejs, #Nodejs",
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
setInterval(retweet, 3000000);
