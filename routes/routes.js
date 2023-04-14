const express = require('express')
const router = express.Router()
const getDataSchema = require('./getData')

router.route('/get-data').get(getDataSchema)
router.route('/').get((req, res) => {
  res.send('sales popup sever running')
})

module.exports = router
