# node-mongodb-api 
## To Start Project
```
npm install
npm start
npm run test \\for single test run
npm run test:watch \\test with watch
```
api is live [here](http://nodeexpressapi-env.eba-t9xjnrsi.us-west-1.elasticbeanstalk.com/)

### Support Calls
| Name | Method | Path |
| ------ | ------ | ------ |
| Show Product lists | GET |/shoppingList|
| Post new product | POST |/shoppingList/add|
| Get by ID | GET |/shoppingList/:id|
| Delete product | DELETE |/delete/:id|
| Sort Productlist | GET |shoppingList/?sortBy=<code>field name</code>&orderBy=<code>asc or desc</code>|
| ------ | Todo Route | ------ |
| Show all todo list | GET |/todos|
| Show todo by id | GET |/todos/:id|
| update todo by id | POST |/update/:id|
