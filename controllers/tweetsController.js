var twit = require("twit");

var config = require("../config.js");
var Twitter = new twit(config);

// This function handles the endpoint to get tweets of a hashtag
exports.getAllTweets = function(req, res) {
	const query = "#" + req.params.hashtag;
	var params = {
		q: query,
		result_type: "recent",
		lang: "en"
	};
	getTweets(res, params);
};

// This function handles the endpoint to filter tweets
// with multiple hashtag
exports.getMultiHashtagsTweets = function(req, res) {
	const hashtags = req.query.ht;
	if (hashtags) {
		if (hashtags.length != 0) {
			if (hashtags.constructor === Array) {
				const queryList = [];
				for (let ht of hashtags) {
					queryList.push("#" + ht);
				}
				query = queryList.join();
			} else {
				query = "#" + hashtags.toString();
			}
			var params = {
				q: query,
				result_type: "recent",
				lang: "en"
			};
			getTweets(res, params);
		} else {
			res.status(202).json({
				status: "Empty",
				message: "No tweets found on " + query
			});
		}
	} else {
		return res.status(202).json({
			status: "Empty",
			message: "Provide at least one hashtag to start browsing tweets"
		});
	}
};

// This helper allows to make a get request to twitter search
getTweets = function(res, params) {
	Twitter.get("search/tweets", params, function(err, data) {
		if (!err) {
			if (data.statuses.length == 0) {
				return res.status(202).json({
					status: "Empty",
					message: "No tweets were found on this hashtag!"
				});
			}
			return res.status(200).json(data.statuses);
		} else {
			return res.status(400).json({
				status: "Failed",
				message: "Something went wrong while trying to fetch tweets",
				resolution: "Check your internet connection"
			});
		}
	});
};
