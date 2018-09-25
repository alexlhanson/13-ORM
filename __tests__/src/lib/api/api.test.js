'use strict';

import superagent from 'superagent';
import app from '../../../../src/app';

describe('api CRUD responses', () => {

  const PORT = 3000;
  beforeAll(() => {
    app.listen(PORT);
  });
  afterAll(() =>{ 
    app.close();
  });

  test('post request responds with 200 status', () => {
    superagent.post('http://localhost:3000/api/v1/model')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('get request responds with 200 status', () => {
    superagent.get('http://localhost:3000/api/v1/model/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('delete request responds with 200 status', () => {
    superagent.delete('http://localhost:3000/api/v1/model/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  test('put request responds with 200 status', () => {
    superagent.put('http://localhost:3000/api/v1/model/:id')
      .then(res => {
        expect(res.statusCode).toEqual(200);
      })
      .catch(console.err);
  });
});