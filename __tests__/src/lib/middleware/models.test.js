'use strict';

jest.mock('require-dir');

import modelFinder from '../../../../src/lib/middleware/models';

describe('modelFinder middleware', () => {

  test('should show model object/function with valid model', () => {
    let req = {
      params: {
        model: 'books',
      },
    };
    let res = {};
    let next = () => { };
    modelFinder(req, res, next);
    expect(req.model).toBeDefined();
  });
  
  test('should throw an error with bad model', () => {
    let req = {
      params: {
        model: 'animals',
      },
    };
    let res = {};
    let next = () => { };
    expect(() => {
      modelFinder(req, res, next => { }).toThrow();
    });
  });

});
