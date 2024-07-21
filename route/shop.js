const express = require('express');

// import controller 

const router = express.Router();

router.get('/');

router.get('/mediums');
router.get('/mediums/:id');

router.get('/pictures');
router.get('/pictures/:id');

router.get('/cart');

module.exports = router;