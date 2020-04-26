const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ShoppingList = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    images: {
        type: Array
    },
    rank: {
        type: Number
    },
    color: {
        type: Array
    },
    description: {
        type: Array
    }
});
module.exports = mongoose.model('ShoppingList', ShoppingList);