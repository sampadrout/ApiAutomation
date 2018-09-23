let request = require('supertest');
let payload = require('../testdata/payload.json');
let API = 'http://jsonplaceholder.typicode.com';

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
    })
});