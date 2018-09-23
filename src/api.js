let req = require('supertest');
var r;

class api {
    get(endPoint) {
        return req(endPoint).get('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .then(function (err, res) {
                return res;
            });
    }

    post(endPoint, requestBody) {
        return req(endPoint).post('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(requestBody)
            .then(function (err, res) {
                return res;
            });
    }

    put(endPoint, requestBody) {
        return req(endPoint).put('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(requestBody)
            .then(function (err, res) {
                return res;
            });
    }

    delete(endPoint) {
        return req(endPoint).delete('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .then(function (err, res) {
                return res;
            });
    }
}

module.exports = new api();