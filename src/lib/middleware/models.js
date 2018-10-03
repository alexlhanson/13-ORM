'use strict';

import requireAll from 'require-dir';
const models = requireAll('../models/');

let modelFinder = (req, res, next) => {
  
  let model = req && req.params && req.params.model;
  if (model && models[model] && models[model].default) {
    req.model = models[model].default;
    next();
  } else {
    throw new Error('Model not found');
  }
};

export default modelFinder;