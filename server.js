const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require("./routes/todoRoute");
const shoppingList = require("./routes/shoppingRoutes");

const mongoose = require('mongoose');

const PORT = process.env.PORT || 8081;




app.use(cors());
app.use(bodyParser.json());

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


// const connectionString = `mongodb+srv://${process.env.DATABASE_ID}:${process.env.DATABASE_PASS}@cluster0-ouok3.mongodb.net/test?retryWrites=true&w=majority`
const connectionString = `mongodb://${process.env.DATABASE_ID}:${process.env.DATABASE_PASS}@cluster0-shard-00-00-ouok3.mongodb.net:27017,cluster0-shard-00-01-ouok3.mongodb.net:27017,cluster0-shard-00-02-ouok3.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const connection = mongoose.connection;

connection.on('error', err => {
    console.log(err);
});
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});
readline.close();
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use('/todos', todoRoutes);
app.use('/shoppingList', shoppingList);






