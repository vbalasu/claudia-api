var ApiBuilder = require('claudia-api-builder');
api = new ApiBuilder();

module.exports = api;

api.get('/', async function () {
    return 'hello';
});