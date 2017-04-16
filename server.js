// server.js
const express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var Pusher = require('pusher');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

var pusher = new Pusher({
  appId: '328228',
  key: '8ec8f5164e15f7cbc5a0',
  secret: 'b89adf8f37a75b4d0c3e',
  cluster: 'eu',
  encrypted: true
});


mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database){
	if (err) {
		console.log(err);
		process.exit(1);
	}

	// Save database object from callback for reuse
	db = database;

	// Initialize app
	var server = app.listen(process.env.PORT || 8080, function (){
		var port = server.address().port;
		console.log("App now running on port ", port);
	});
});

// GAME API BELOW

// Generix error handler used by all endpoints
function handleErrors(res, reason, message, code) {
	console.log("ERROR: " + reason);
	res.status(code || 500).json({"error" : message});
};

/* "/api/game-codes/vaidate"
 * 	POST: validates game code
 */

app.post("/api/game-codes/validate", function(req, res) {
	//
});

/* "/api/pusher/auth"
 * 	POST: auth endpoint for pusher authentication 
 */

app.post("/api/pusher/auth", function(req, res) {
	//
});

/* "/api/rounds"
 * 	POST: save game data for 1 round
 */

app.post("/api/rounds", function(req, res) {
	//
});

/* "/api/rounds/channel/:channel_id"
 * 	GET: find game data for all rounds, for all users by channel
 */

app.get("/api/rounds/channel/channel_id", function(req, res){
	res.status(200).json({hello: "it works!"});
});