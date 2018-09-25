'use strict';

import express from 'express';
const router = express.Router();
console.log('in api');

import modelFinder from '../middleware/models';
router.param('model', modelFinder);

router.post('/api/v1/:model', (req, res, next) => {
  let record = new req.model(req.body);
  record.save()
    .then(data => res.status(200).json(data))
    .catch(next);
});

router.get('/api/v1/:model/:id', (req, res, next) => {
  res.status(200).end();
});

router.delete('/api/v1/:model/:id', (req, res, next) => {
  res.status(200).end();
});

router.put('/api/v1/:model/:id', (req, res, next) => {
  res.status(200).end();
});

router.all('*', (req, res, next) => {
  res.status(404).send('Bad request').end();
});

export default router;