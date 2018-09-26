'use strict';

import superagent from 'superagent';
import app from '../../../../src/app';

describe('api CRUD responses', () => {

  const basePath = 'http://localhost:3000/api/v1/books';
  const PORT = 4000;
  let server;

  beforeAll(() => {
    server = app.listen(PORT);
  });
  afterAll(() =>{ 
    server.close();
  });

  test('post request responds with 200 status', () => {
    return superagent.post('http://localhost:4000/api/v1/books')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('get request responds with 200 status', () => {
    return superagent.get('http://localhost:4000/api/v1/books/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('delete request responds with 200 status', () => {
    return superagent.delete('http://localhost:4000/api/v1/books/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('put request responds with 200 status', () => {
    return superagent.put('http://localhost:4000/api/v1/books/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });
});