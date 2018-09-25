'use strict';

import express from 'express';
const router = express.Router();

router.post('/api/v1/model', (res, req, next) => {
  res.status(200).end();
});

router.get('/api/v1/model/:id', (res, req, next) => {
  res.status(200).end();
});

router.delete('/api/v1/model/:id', (res, req, next) => {
  res.status(200).end();
});

router.put('/api/v1/model/:id', (res, req, next) => {
  res.status(200).end();
});

export default express;