var express = require("express"),
	app = express();

app.use(require("./controllers/routes"));

app.listen(8081, function() {
	console.log("Listening on port 8081...");
});
