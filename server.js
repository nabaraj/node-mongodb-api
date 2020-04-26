const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require("./routes/todoRoute");
const shoppingList = require("./routes/shoppingRoutes");
// const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');

const PORT = 4000;




app.use(cors());
app.use(bodyParser.json());

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter dbUsername?', name => {
    if (name) {
        readline.question('Enter dbPassword', password => {
            if (password) {

                const connectionString = `mongodb+srv://${name}:${password}@cluster0-ouok3.mongodb.net/test?retryWrites=true&w=majority`
                mongoose.connect(connectionString, {
                    useUnifiedTopology: true,
                    useNewUrlParser: true
                });
                const connection = mongoose.connection;

                connection.once('open', function () {
                    console.log("MongoDB database connection established successfully");
                });
                readline.close();
                app.listen(PORT, function () {
                    console.log("Server is running on Port: " + PORT);
                });
            }
        })

    } else {
        process.exit(-1)
    }
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.use('/todos', todoRoutes);
app.use('/shoppingList', shoppingList);






