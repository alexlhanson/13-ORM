'use strict';

const requireAll = require('require-dir');
const models = requireAll('../models/');

let modelFinder = (req, res, next) => {
  
  try {
    let model = req && req.params && req.params.model;

    if (model && models[model] && models[model].default){
      req.model = models[model].default;
      next();
    } else {
      throw new Error ('Model not found');
    }
  } catch (error) {
    throw error;
  }
};

export default modelFinder;