// test/app.test.js
const request = require('supertest');
const app = require('../index'); // Adjust based on your app structure

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World!');
  });
});