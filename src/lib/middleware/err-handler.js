'use strict';

export default (err, req, res, next) => {
  res.status(500).json({error: err});

};