const express = require("express");
const app = express();
const port = 8080;
const MongoClient = require("mongodb").MongoClient;

let db;
const url = "mongodb+srv://admin:dlwlsgml@first-mongo.ax4qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(url, (err, client) => {
	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});

	if(err) return console.log(err);
	db = client.db("todoapp");
	app.post("/add", (req, res) => {
		db.collection("post").insertOne({ title: req.body.title, date: req.body.date }, (err, res) => {
			console.log("insert complete");
		});
	});

});

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/write", (req, res) => {
	res.sendFile(__dirname + "/write.html");
});