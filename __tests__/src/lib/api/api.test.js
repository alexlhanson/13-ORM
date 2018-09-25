'use strict';

import superagent from 'superagent';
import app from '../../../../src/app';

describe('api CRUD responses', () => {

  const basePath = 'http://localhost:3000/api/v1/books';
  const PORT = 3000;
  let server;

  beforeAll(() => {
    server = app.listen(PORT);
  });
  afterAll(() =>{ 
    server.close();
  });

  test('post request responds with 200 status', () => {
    superagent.post('http://localhost:3000/api/v1/books')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('get request responds with 200 status', () => {
    superagent.get('http://localhost:3000/api/v1/books/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('delete request responds with 200 status', () => {
    superagent.delete('http://localhost:3000/api/v1/books/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('put request responds with 200 status', () => {
    superagent.put('http://localhost:3000/api/v1/books/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });
});