const express = require('express')
const cdn = require('./cdn')
const router = express.Router()
const getDataSchema = require('./getData')

router.route('/get-data').get(getDataSchema)
router.route('/api/cdn/js').get(cdn)
router.route('/').get((req, res) => {
  res.send('sales popup sever running')
})

module.exports = router
