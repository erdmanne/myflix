/*const express = require("express");
const app = express();

const movies = [
  { movieID: 1, name: "Movie1" },
  { movieID: 2, name: "Movie2" },
  { movieID: 3, name: "Movie3" }
];

app.get("/", (req, res) => {
  res.send("Welcome to myFlix");
});

//Endpoint all Movies
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

//Endpoint Movies nach ID
app.get("/api/movies/:movieID", (req, res) => {
  const movies = movies.find(c => c.movieID === parseInt(req.params.movieID));
  if (!movies) res.status(404).send("The movie with your ID is not found."); //404 not found - errorhandling
  res.send(movies);
});

app.get("/movies", function(req, res) {
  res.json(movies);
});

/*app.get("/documentation", function(req, res) {
  res.sendFile("public/documentation.html", { root: __dirname });
});
//use express.static to serve  “documentation.html” file from the public folder
app.use(express.static("public")); */

//// PORT take the dynamic port or if not assigned than port 8080
//const port = process.env.PORT || 8080;
//app.listen(port, () => console.log(`Listening on port ${port}...`));

const express = require("express"),
  morgan = require("morgan");

const app = express();

app.use(morgan("common"));

app.get("/", function(req, res) {
  res.send("Welcome to my app!");
});
app.get("/api/movies", function(req, res) {
  res.send("Welcome to myFlix.");
});

//for serving the static files - in this case documentation.html
app.use(express.static("public"));

//error handling
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//listen to port 8080
app.listen(8080, function() {
  console.log("Listen to port 8080");
});
