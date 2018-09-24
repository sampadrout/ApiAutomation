let request = require('supertest');
let payload = require('../testdata/payload.json');
let api = require('../src/api');

describe('API Testing', function () {

    // Creating the user using POST method
    test('Framework POST method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users';
        return api.post(endPoint, payload.createUser).then(function (res, err) {
            expect(res.statusCode).toBe(201);
        })
    });

    // On above test, we are creating the user "1". Now we are updating the info on it using PUT method
    test('Framework PUT method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users/1';
        return api.put(endPoint, payload.updateUser).then(function (res, err) {
            expect(res.statusCode).toBe(200);
        })
    });

    // Fetching the user "1" info using GET method
    test('Framework GET method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users/1';
        return api.get(endPoint).then(function (res, err) {
            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe('Leanne Graham');
        })
    });

    // Deleting the user "1" using DELETE method
    test('Framework DELETE method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users/1';
        return api.delete(endPoint).then(function (res, err) {
            expect(res.statusCode).toBe(200);
        })
    });

});