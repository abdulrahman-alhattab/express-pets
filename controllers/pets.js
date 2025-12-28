//express
const express = require('express');
//model
const Pet = require('../model/pet');

//express router
const router = express.Router();
//post + /pets/
router.post('/', async (req,res) => {
res.json(req.body)
})
//export router
module.exports = router
