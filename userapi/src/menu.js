const express = require('express')
const path = require('path')
const app = express()
const router = express.Router()
//const port = process.env.PORT || 8080

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/menu.html'))
})

//app.use('/', router)

/*const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})*/


module.exports = router