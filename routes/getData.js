const express = require('express')
const router = express.Router()
const getDataSchema = require('../models/getDataModel')

const getData = router.get('/get-data', async (req, res) => {
  try {
    const shop = req.query
    console.log(shop)
    const result = await getDataSchema.find()
    // console.log(result)
    res.status(201).send(result)
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = getData
