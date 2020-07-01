const express = require('express')
const shoppingList = express.Router();
let ShoppingListModel = require('../models/shopping.model');

shoppingList.route('/').get(function (req, res) {
    let sort = {};
    if (req.query.sortBy && req.query.orderBy) {
        sort[req.query.sortBy] = req.query.orderBy === 'desc' ? -1 : 1
    }
    ShoppingListModel.find({}, null, { sort }, function (err, listItem) {
        if (err) {
            res.status(404).send("Data not found");
        } else {
            res.json(listItem);
        }
    });
});
shoppingList.route('/add').post(function (req, res) {
    let sl = new ShoppingListModel(req.body);
    sl.save()
        .then(sli => {
            res.status(200).json({ 'success': 'product added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
});
shoppingList.route('/:id').get(function (req, res, next) {
    var id = req.params.id;
    ShoppingListModel.findById(id, function (err, results) {
        if (err) res.status(404).send("Data not found");
        try {
            console.log(results);
            res.json(results);
        } catch (error) {
            console.log("errror getting results")
            console.log(error)
        }
    })

});
shoppingList.route('/delete/:id').delete(function (req, res, next) {

    var idVal = req.params.id;
    if (!idVal) res.status(404).send("data not found");

    var query = { _id: idVal }
    ShoppingListModel.deleteOne(query, function (err, results) {
        if (err) res.status(404).send("data not found");
        try {
            console.log(results);
            res.json(results);
        } catch (error) {
            console.log("errror getting results")
            res.status(404).send("data not found");
        }
    })

});

module.exports = shoppingList;