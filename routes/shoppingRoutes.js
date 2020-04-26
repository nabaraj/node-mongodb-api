const express = require('express')
const shoppingList = express.Router();
let ShoppingListModel = require('../models/shopping.model');

shoppingList.route('/').get(function (req, res) {
    ShoppingListModel.find(function (err, listItem) {
        if (err) {
            console.log(err);
        } else {
            res.json(listItem);
        }
    });
});
shoppingList.route('/add').post(function (req, res) {
    let sl = new ShoppingListModel(req.body);
    sl.save()
        .then(sli => {
            res.status(200).json({ 'sli': 'product added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
});
shoppingList.route('/:id').get(function (req, res, next) {
    var id = req.params.id;
    ShoppingListModel.findById(id, function (err, results) {
        if (err) return console.error(err)
        try {
            console.log(results);
            res.json(results);
        } catch (error) {
            console.log("errror getting results")
            console.log(error)
        }
    })

});
shoppingList.route('/sort/:sortMethod').get(function (req, res, next) {

    let sortMethod = JSON.parse(req.params.sortMethod);
    let field = sortMethod.field, method = sortMethod.method;
    let mySort = {};
    mySort[field] = method;
    console.log(mySort)
    ShoppingListModel.find({}).sort(mySort).exec(function (err, docs) {
        // console.log("#### ", req.params);
        // let { field: 'asc', test: -1 }
        if (err) return console.error(err)
        try {
            // console.log(docs);
            res.json(docs);
        } catch (error) {
            console.log("errror getting results")
            console.log(error)
        }
        // res.json("found")
    });

});

module.exports = shoppingList;