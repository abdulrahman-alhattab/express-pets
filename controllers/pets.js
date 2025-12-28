//express
const express = require('express')
//model
const Pet = require('../model/pet')

//express router
const router = express.Router()
//post + /pets/
router.post('/', async (req, res) => {
  try {
    const pet = await Pet.create(req.body)

    res.status(201).json({ pet })
  } catch (err) {
    res.status(500).json({ error: 'failed to create pet' })
    console.error(err)
  }
})
//export router
module.exports = router
