const express = require('express');

// import controller 

const router = express.Router();

router.get('/add-medium');
router.get('/edit-medium/:id');
router.get('/all-medium');

router.get('/add-picture');
router.get('/edit-picture/:id');
router.get('/all-picture');

module.exports = router;