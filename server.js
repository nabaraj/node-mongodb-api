
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app.js');
const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});