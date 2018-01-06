var twit = require("twit");

var config = require("../config.js");
var Twitter = new twit(config);

exports.getAllTweets = function(req, res) {
	const query = "#" + req.params.hashtag;
	var params = {
		q: query,
		result_type: "recent",
		lang: "en"
	};
	Twitter.get("search/tweets", params, function(err, data) {
		if (!err) {
			res.json(data.statuses);
		} else {
			console.log("Something went wrong");
		}
	});
};
