const express = require('express')
const router = express.Router()
const path = require('path')

const cdn = router.get('/api/cdn/js', async (req, res) => {
  try {
    res.sendFile('sales-pop.main.js', {
      root: path.join(__dirname, '../public')
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

module.exports = cdn
