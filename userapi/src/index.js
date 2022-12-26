const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
const menu = require('./menu')
const app = express()
const port = process.env.PORT || 8080

const db = require('./dbClient')
db.on("error", (err) => {
  console.error(err)
})

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.use('/user', userRouter)

app.use('/', menu)

const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})


module.exports = server