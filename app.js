import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const API_URL = "https://api.chucknorris.io/jokes";
const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

app.get('/', function (req, res) {
    res.render('index.ejs', {joke: "Waiting for a joke...", categories: categories})
});


app.listen(PORT);