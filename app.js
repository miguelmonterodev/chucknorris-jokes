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

app.get('/', async function (req, res) {
    try {
        const result = await axios.get(`${API_URL}/random`);
        console.log(result.data);
        res.render('index.ejs', {joke: result.data.value, categories: categories});
    } catch (error) {
        res.render('index.ejs', {joke: error.message, categories: categories});
    }
    
});

app.post('/category/joke', async function (req, res) {
    try {
        const cat = (req.body.category);
        const result = await axios.get(`${API_URL}/random?category=${cat}`);
        res.render('index.ejs', {joke: result.data.value, categories: categories});
    
    } catch (error) {
        res.render('index.ejs', {joke: error.message, categories: categories});
    }
    
});

app.listen(PORT);