let request = require('supertest');
let payload = require('../../testdata/payload.json');
let api = require('../../src/api');

describe('API Smoke Testing', function () {

    // Fetching the user "1" info using GET method
    test('Framework GET method testing', function () {
        let endPoint = 'http://jsonplaceholder.typicode.com/users/1';
        return api.get(endPoint).then(function (res, err) {
            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe('Leanne Graham');
        })
    });

});