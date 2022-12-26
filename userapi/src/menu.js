const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/menu.html'))
})

module.exports = router