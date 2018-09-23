let request = require('supertest');
let payload = require('../testdata/payload.json');
let API = 'http://jsonplaceholder.typicode.com';
let service = require('../src/api');

describe('API Testing', function () {

    test('GET method testing', function () {
        request('http://jsonplaceholder.typicode.com').get('/users/1')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.body.name).toBe('Leanne Graham');
            })
    });

    test('DELETE method testing', function () {
        request('http://jsonplaceholder.typicode.com').delete('/users/3')
            .set('Accept', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).toBe(200);
            })
    });

    test('POST method testing', function () {
        request(API).post('/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(payload.createUser)
            .end(function (err, res) {
                expect(res.statusCode).toBe(201);
            })
    });

    test('PUT method testing', function () {
        request(API).put('/users/2')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(payload.updateUser)
            .end(function (err, res) {
                expect(res.statusCode).toBe(200);
            })
    });

    // Below tests are in progress to be structured into framework
    // Creating the user using POST method
    test('Framework POST method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users';
        return service.post(endPoint, payload.createUser).then(function (err, res) {
            expect(res.statusCode).toBe(201);
        })
    });

    // On above test, we are creating the user "1". Now we are updating the info on it using PUT method
    test('Framework PUT method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users/1';
        return service.put(endPoint, payload.updateUser).then(function (err, res) {
            expect(res.statusCode).toBe(201);
        })
    });

    // Fetching the user "1" info using GET method
    test('Framework GET method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users/1';
        return service.get(endPoint).then(function (err, res) {
            expect(res.body.name).toBe('Srinu');
            expect(res.statusCode).toBe(200);
        })
    });

    // Deleting the user "1" using DELETE method
    test('Framework DELETE method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users/1';
        return service.delete(endPoint).then(function (err, res) {
            expect(res.statusCode).toBe(200);
        })
    });

});