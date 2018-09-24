let req = require('supertest');

class api {
    get(endPoint) {
        return req(endPoint).get('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .then(function (res, err) {
                return res;
            });
    }

    post(endPoint, requestBody) {
        return req(endPoint).post('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(requestBody)
            .then(function (res, err) {
                return res;
            });
    }

    put(endPoint, requestBody) {
        return req(endPoint).put('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(requestBody)
            .then(function (res, err) {
                return res;
            });
    }

    delete(endPoint) {
        return req(endPoint).delete('')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .then(function (res, err) {
                return res;
            });
    }
}

module.exports = new api();