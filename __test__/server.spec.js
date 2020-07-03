const app = require('../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)


describe("Test the root path", () => {

    test("It should response the GET method", function (done) {
        request
            .get('/')
            .expect(200)
            .end(done);
    });
    test("Test shoppinglist Get", function (done) {
        request
            .get('/shoppingList')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });
    test("Test todos Get", function (done) {
        request
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });
    test("Test todos Get with id", function (done) {
        request
            .get('/todos/5e931d20c074782134f1752d')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });
    test("Test todos Get with wrong id", function (done) {
        request
            .get('/todos/dummy')
            .expect(404)
            .end(done);
    });
});