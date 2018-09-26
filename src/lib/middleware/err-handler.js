'use strict';

export default (err, req, res, next) => {
  console.log('wtf');
  res.status(500).json({error: err});

};