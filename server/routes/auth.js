const express = require('express');

const router = new express.Router();

router.post('/signup', (req, res) => {
  return res.status(200).end();
});

router.post('/login', (req, res) => {
  return res.status(200).end();
});


module.exports = router;
